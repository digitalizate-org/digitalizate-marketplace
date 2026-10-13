// Thin GraphQL client for Linear's API. No dependencies.
// Auth: LINEAR_API_KEY (personal API key, sent as-is) or LINEAR_ACCESS_TOKEN (OAuth, sent as Bearer).

const ENDPOINT = process.env.LINEAR_GRAPHQL_URL ?? "https://api.linear.app/graphql";

export class LinearClient {
  private readonly auth: string;

  constructor(auth?: string) {
    const key = auth ?? process.env.LINEAR_API_KEY;
    const token = process.env.LINEAR_ACCESS_TOKEN;
    if (key) this.auth = key;
    else if (token) this.auth = `Bearer ${token}`;
    else throw new Error("Set LINEAR_API_KEY (or LINEAR_ACCESS_TOKEN) in the environment");
  }

  async query<T>(query: string, variables: Record<string, unknown> = {}, attempt = 0): Promise<T> {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: this.auth },
      body: JSON.stringify({ query, variables }),
    });
    if (res.status === 429 && attempt < 5) {
      const wait = Number(res.headers.get("retry-after") ?? 2) * 1000;
      await new Promise((r) => setTimeout(r, wait * (attempt + 1)));
      return this.query<T>(query, variables, attempt + 1);
    }
    const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
    if (!res.ok || json.errors?.length) {
      throw new Error(`Linear API error (${res.status}): ${json.errors?.map((e) => e.message).join("; ") ?? res.statusText}`);
    }
    return json.data as T;
  }

  // Walks a Relay connection until hasNextPage is false. `path` points at the connection inside the response.
  async paginate<N>(query: string, variables: Record<string, unknown>, path: string[], pageSize = 100): Promise<N[]> {
    const nodes: N[] = [];
    let after: string | null = null;
    for (;;) {
      const data = await this.query<Record<string, unknown>>(query, { ...variables, first: pageSize, after });
      let conn: unknown = data;
      for (const p of path) conn = (conn as Record<string, unknown>)[p];
      const c = conn as { nodes: N[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
      nodes.push(...c.nodes);
      if (!c.pageInfo.hasNextPage) break;
      after = c.pageInfo.endCursor;
    }
    return nodes;
  }
}
