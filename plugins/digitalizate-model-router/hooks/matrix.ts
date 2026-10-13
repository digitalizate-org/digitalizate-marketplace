import type { Effort, ModelTier, Tier } from '../types'

export type Signal = readonly [pattern: RegExp, weight: number, name: string]

export type AgentName = 'sonnet-implementer' | 'opus-reviewer' | 'opus-debugger' | 'fable-researcher'

export type Category = {
  id: string
  label: string
  tier: Tier
  effort: Effort
  effortLabel: string
  why: string
  agent?: AgentName
  isRisk?: true
  isMechanical?: true
  isDesign?: true
  signals: readonly Signal[]
}

export type ModelInfo = {
  name: string
  id: string
  alias: string
  input: number
  output: number
  cacheRead: number
}

export const MODELS: Record<ModelTier, ModelInfo> = {
  haiku: { name: 'Haiku 5.5', id: 'claude-haiku-5-5', alias: 'haiku', input: 0.1, output: 0.5, cacheRead: 0.01 },
  sonnet: { name: 'Sonnet 5.5', id: 'claude-sonnet-5-5', alias: 'sonnet', input: 2, output: 10, cacheRead: 0.2 },
  opus: { name: 'Opus 5.5', id: 'claude-opus-5-5', alias: 'opus', input: 4, output: 20, cacheRead: 0.2 },
  fable: { name: 'Fable 5.1', id: 'claude-fable-5-1', alias: 'fable', input: 10, output: 50, cacheRead: 0.25 },
}

export const CACHE_WRITE_MULTIPLIER = 2

export const TIER_RANK: Record<ModelTier, number> = { haiku: 0, sonnet: 1, opus: 2, fable: 3 }

export const AGENTS: Record<AgentName, { tier: Tier; role: string }> = {
  'sonnet-implementer': { tier: 'sonnet', role: 'subtareas acotadas y verificables' },
  'opus-reviewer': { tier: 'opus', role: 'review y verificación con contexto fresco, solo lectura' },
  'opus-debugger': { tier: 'opus', role: 'bugs difíciles, causa raíz' },
  'fable-researcher': { tier: 'fable', role: 'research y planes grandes, no implementa' },
}

export const DEFAULT_AGENT_MODELS: Readonly<Record<string, string>> = {
  'sonnet-implementer': MODELS.sonnet.id,
  'opus-reviewer': MODELS.opus.id,
  'opus-debugger': MODELS.opus.id,
  'fable-researcher': MODELS.fable.id,
}

export const INHERITING_AGENTS: ReadonlySet<string> = new Set(['general-purpose', 'claude', 'Plan'])

export const CATEGORIES: readonly Category[] = [
  {
    id: 'bug-repro',
    label: 'Bug con reproducción clara',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'medium',
    why: 'Camino conocido y verificación fácil.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(stack ?trace|stacktrace|traceback)\b/, 3, 'stack trace'],
      [/\b(typeerror|referenceerror|syntaxerror|valueerror|keyerror|attributeerror|nullpointerexception|segmentation fault|undefined is not|cannot read propert(y|ies)|is not a function|module not found|cannot find module)\b/, 3, 'error explícito'],
      [/\b(reproduc\w*|repro|pasos para|steps to|siempre que|cada vez que|every time|consistently)\b/, 2, 'reproducible'],
      [/\b(bug|error|falla|fallo|crash\w*|se rompe|se rompio|no funciona|no anda|broken|fails?|failing|exception)\b/, 1, 'falla'],
      [/\b(arregla\w*|corrige|corregir|repara\w*|fix(es|ed)?|soluciona\w*)\b/, 1, 'arreglar'],
    ],
  },
  {
    id: 'feature-pattern',
    label: 'Feature con patrón existente en el repo',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'medium',
    why: 'Copia y adapta un patrón conocido.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(igual (que|al|a la)|como (el|la|los|las) (de|que)|similar (a|al)|siguiendo el patron|mismo patron|patron existente|siguiendo (la arquitectura|el patron|la estructura|la convencion) (existente|actual)|same (as|way)|like the existing|following the (existing |current )?(pattern|architecture|structure|conventions?)|existing pattern)\b/, 3, 'patrón existente'],
      [/\b(agrega\w*|anade|anadir|add(ing)?|crea otr[oa]|otr[oa] (vista|pantalla|ruta|campo|columna|endpoint|tabla|filtro|boton)|nuevo (campo|endpoint|filtro|boton|metodo)|new (field|endpoint|route|column|filter|button))\b/, 1, 'agregar'],
    ],
  },
  {
    id: 'tests',
    label: 'Tests, fixtures, mocks',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'medium',
    why: 'Mecánico y verificable al instante.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(tests?|testing|pruebas?|unit ?tests?|fixtures?|mocks?|stubs?|cobertura|coverage|specs?|e2e|jest|vitest|pytest|mocha|playwright|cypress|rspec|phpunit)\b/, 2, 'tests'],
      [/\b(escrib\w*|agreg\w*|anad\w*|crea\w*|genera\w*|write|add|cubr\w*|cover)\b.{0,40}\b(tests?|pruebas?|specs?|cobertura|coverage)\b/, 2, 'escribir tests'],
    ],
  },
  {
    id: 'mechanical-refactor',
    label: 'Refactor mecánico: renombrar, mover, reemplazar API',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'medium',
    why: 'Muchos archivos, poca decisión.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(renombr\w*|rename\w*|codemod|buscar y reemplazar|find and replace|search and replace)\b/, 3, 'renombrar'],
      [/\b(mueve|mover|move|reemplaz\w*|replace\w*|sustitu\w*)\b/, 1, 'mover o reemplazar'],
      [/\b(deprecad\w*|deprecated|api (vieja|antigua|deprecada)|old api|imports?|bump\w*|actualiza(r)? (la )?version|upgrade (the )?dependenc\w*)\b/, 1, 'API o imports'],
      [/\b(en todos los archivos|en todo el (repo|proyecto|codigo)|across the (codebase|repo|project)|masiv\w*|bulk|en lote)\b/, 1, 'masivo'],
    ],
  },
  {
    id: 'ui-iteration',
    label: 'Iterar UI con diseño ya definido',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'medium',
    why: 'Ejecución sobre una spec clara.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(segun (el|la) (diseno|figma|mockup|maqueta)|como (en|esta en) (el|la) (diseno|figma|mockup|maqueta)|match(es|ing)? the (design|figma|mockup)|pixel ?perfect)\b/, 3, 'diseño dado'],
      [/\b(padding|margin|margen\w*|espaciado|spacing|alinea\w*|align\w*|colou?r(es)?|fuentes?|font|tipografia|css|tailwind|estilos?|styles?|styling|responsive|hover|sombras?|shadows?|bordes?|borders?|layout)\b/, 1, 'estilos'],
      [/\b(ajust\w*|tweak\w*|retoca\w*|pulir|pule)\b/, 1, 'ajuste'],
    ],
  },
  {
    id: 'docs',
    label: 'Docs, README, commits, changelog',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'low · medium',
    why: 'Fuerte en documentos pulidos.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(readme|changelog|release notes|documentacion|documenta (el|la|los|las|este|esta|estos)|jsdoc|docstrings?|tsdoc|comentarios en el codigo|code comments|mensaje de commit|commit messages?|commits?)\b/, 2, 'docs'],
      [/\b(escrib\w*|actualiza\w*|redacta\w*|documenta\w*|write|update|add)\b.{0,30}\b(readme|changelog|documentacion|jsdoc|docstrings?|comentarios|release notes|mensaje de commit|commit message)\b/, 2, 'escribir docs'],
    ],
  },
  {
    id: 'scripts-ci',
    label: 'Scripts, CI, configs, tooling',
    tier: 'sonnet',
    effort: 'medium',
    effortLabel: 'medium',
    why: 'Acotado y fácil de probar.',
    agent: 'sonnet-implementer',
    isMechanical: true,
    signals: [
      [/\b(github actions|gitlab ci|ci ?\/ ?cd|pipelines?|dockerfile|docker[- ]compose|makefile|cron(tab)?|husky|pre-commit|devcontainer|terraform|helm|k8s|kubernetes)\b/, 2, 'CI o infra'],
      [/\b(scripts?|bash|shell|configs?|configuracion|eslint|prettier|tsconfig|package\.json|vite\.config|webpack|tooling|lint\w*|yaml|yml)\b/, 1, 'scripts o config'],
      [/\b(configura\w*|configure|set ?up|agrega\w*|add)\b.{0,30}\b(ci|pipelines?|github actions|workflows?|dockerfile|docker|eslint|prettier|husky|cron|scripts?|hooks?)\b/, 2, 'configurar tooling'],
    ],
  },
  {
    id: 'intermittent-bug',
    label: 'Bug intermitente, race condition, estado corrupto',
    tier: 'opus',
    effort: 'high',
    effortLabel: 'high',
    why: 'Requiere hipótesis y juicio, no solo lectura.',
    agent: 'opus-debugger',
    isRisk: true,
    signals: [
      [/\b(intermitent\w*|intermittent\w*|flaky|esporadic\w*|sporadic\w*|heisenbug|no (lo |la )?(puedo|podemos) reproducir|no se reproduce|can'?t reproduce|cannot reproduce|hard to reproduce)\b/, 3, 'intermitente'],
      [/\b(falla\w*|se rompe|crashea\w*|se cae|se cuelga|da error|fails?|failing|breaks?|crash\w*)\b.{0,30}\b(a veces|de vez en cuando|aleatoriamente|randomly|sometimes|at random|solo en produccion|only in prod\w*)\b|\b(a veces|de vez en cuando|sometimes)\b.{0,20}\b(falla\w*|se rompe|crashea\w*|da error|se cae|se cuelga|fails?|breaks?|crash\w*)\b/, 3, 'falla a veces'],
      [/\b(race conditions?|condicion(es)? de carrera|deadlocks?|interbloqueo|thread[- ]?safe\w*|data races?)\b/, 3, 'concurrencia'],
      [/\b(concurrenc\w*|concurrent\w*|mutex\w*|orden de ejecucion)\b/, 1, 'concurrencia (mención)'],
      [/\b(estado corrupto|corrupt\w*|corrupcion|datos duplicados|duplicate (rows|records|entries)|inconsistencia de datos|data inconsistenc\w*)\b/, 2, 'estado corrupto'],
      [/\b(memory leaks?|fugas? de memoria|se pone lent\w*|lentitud|high cpu|cpu al 100)\b/, 2, 'rendimiento'],
      [/\b(performance|rendimiento|latenc\w*|slow(ness|down)?)\b/, 1, 'rendimiento (mención)'],
      [/\b(ya (lo )?intente|sigue fallando|still (failing|broken)|keeps (failing|breaking)|no (se|sabemos|entiendo) por que|misterio\w*|sin causa|causa raiz|root cause|investiga por que|averigua por que|find out why|figure out why)\b/, 2, 'causa desconocida'],
    ],
  },
  {
    id: 'cross-module-feature',
    label: 'Feature que cruza varios módulos',
    tier: 'opus',
    effort: 'high',
    effortLabel: 'high',
    why: 'Efectos no obvios entre capas.',
    isDesign: true,
    signals: [
      [/\b(varios modulos|multiples modulos|cross[- ]module|entre capas|frontend y (el )?backend|backend y (el )?frontend|front y back|end[- ]to[- ]end|full[- ]?stack|toda la (app|aplicacion)|en toda la (app|aplicacion)|across (the )?(app|services|modules|layers)|varios servicios)\b/, 3, 'cruza módulos'],
      [/\b(multi[- ]?tenan\w*|sistema de (permisos|roles|notificaciones|pagos|facturacion|suscripciones|billing)|i18n|internacionaliz\w*|modo offline|offline[- ]first|tiempo real|real[- ]?time|websockets?)\b/, 2, 'feature transversal'],
      [/\b(integra\w*|integrat\w*)\b/, 1, 'integración'],
    ],
  },
  {
    id: 'architecture-refactor',
    label: 'Refactor de arquitectura',
    tier: 'opus',
    effort: 'xhigh',
    effortLabel: 'xhigh',
    why: 'Cambia contratos entre capas.',
    isRisk: true,
    isDesign: true,
    signals: [
      [/\b((redisen|reestructur|replante|rehac|cambi|defin|disen|propon)\w* (la |una )?arquitectura|nueva arquitectura|arquitectura nueva|(redesign|restructur|rethink|chang|defin|design)\w* (the |a )?(new )?architecture|redisen\w*|redesign\w*|reestructur\w*|restructur\w*|desacopl\w*|decoupl\w*|microservici\w*|microservices?|monolit\w*|monolith\w*|hexagonal|clean architecture|ddd|bounded contexts?|event[- ]driven)\b/, 3, 'cambio de arquitectura'],
      [/\b(arquitectura|architecture)\b/, 1, 'arquitectura (mención)'],
      [/\b(capas|layers|contratos?|contracts?|interfaces? (entre|between)|boundar\w*|modelo de dominio|domain model|abstraccion\w*|abstractions?|patron(es)? de disen\w*)\b/, 2, 'contratos o dominio'],
      [/\b(refactor\w*)\b/, 1, 'refactor'],
    ],
  },
  {
    id: 'pr-review',
    label: 'Code review de PR grande',
    tier: 'opus',
    effort: 'high',
    effortLabel: 'high',
    why: 'Contexto fresco y distinto del modelo que escribió el código.',
    agent: 'opus-reviewer',
    signals: [
      [/\b(code review|revisa(r)? (el|este|mi|los|las) (pr|diff|codigo|cambios?|commits?)|review (this|the|my) (pr|diff|code|changes?)|pull requests?|merge requests?)\b/, 3, 'review'],
      [/\b(revisa\w*|revision|review\w*|audita\w*|audit\w*|diff)\b/, 1, 'revisar'],
      [/\bpr\b/, 1, 'PR'],
    ],
  },
  {
    id: 'frontend-from-scratch',
    label: 'Frontend desde cero',
    tier: 'opus',
    effort: 'high',
    effortLabel: 'high',
    why: 'Decisiones de diseño. Nombra los patrones a evitar.',
    isDesign: true,
    signals: [
      [/\b(desde cero|from scratch|nuev[oa]|new)\b.{0,40}\b(ui|interfaz|frontend|landing|pagina|dashboard|pantalla|web)\b|\b(ui|interfaz|frontend|landing|pagina|dashboard|pantalla|web)\b.{0,40}\b(desde cero|from scratch)\b/, 3, 'UI desde cero'],
      [/\b(landing( page)?|pagina de inicio|dashboard|disen\w* (la|una) (ui|interfaz|pantalla|web))\b/, 2, 'UI nueva'],
      [/\b(frontend|front[- ]end|ui|interfaz|pantallas?|componentes?|react|next\.?js|vue|svelte|astro|web ?app)\b/, 1, 'frontend'],
    ],
  },
  {
    id: 'vision',
    label: 'Leer capturas, diagramas, gráficas',
    tier: 'opus',
    effort: 'high',
    effortLabel: 'high',
    why: 'Lectura visual muy superior a Sonnet.',
    signals: [
      [/\[(image|imagen) ?#?\d*\]/, 4, 'imagen adjunta'],
      [/\b(mira\w*|revisa\w*|lee|leer|analiza\w*|interpreta\w*|look at|read|analy[sz]e|check)\b.{0,25}\b(captura\w*|screenshots?|pantallazo\w*|imagen(es)?|images?|diagramas?|diagrams?|graficas?|graficos?|charts?|plots?|fotos?|mockups?|wireframes?)\b/, 3, 'leer algo visual'],
      [/\b(captura\w*|screenshots?|pantallazo\w*|diagramas?|diagrams?|graficas?|graficos?|charts?|plots?|mockups?|wireframes?)\b/, 1, 'visual (mención)'],
    ],
  },
  {
    id: 'security',
    label: 'Revisión de seguridad: auth, permisos, secretos',
    tier: 'opus',
    effort: 'xhigh',
    effortLabel: 'xhigh',
    why: 'El costo de un error es alto.',
    agent: 'opus-reviewer',
    isRisk: true,
    signals: [
      [/\b(seguridad|security|vulnerab\w*|cves?|exploit\w*|pentest\w*|owasp|xss|csrf|sqli|sql injection|inyeccion (sql|de sql|de comandos|de codigo)|(command|code|prompt|sql) injection|ssrf|rce|escalada de privilegios|privilege escalation)\b/, 3, 'seguridad'],
      [/\b(implementa\w*|agrega\w*|crea\w*|configura\w*|integra\w*|cambia\w*|modifica\w*|add|implement\w*|set ?up|change|modify)\b.{0,30}\b(autenticacion|authentication|autorizacion|authorization|oauth\w*|oidc|sso|saml|jwt|rbac|permisos|permissions|roles|rls|row level security)\b/, 2, 'cambiar auth o permisos'],
      [/\b(autenticacion|authentication|autorizacion|authorization|auth|login|jwt|oauth\w*|oidc|sso|saml|rbac|permisos?|permissions?|rls|row level security)\b/, 1, 'auth o permisos (mención)'],
      [/\b(secretos?|secrets?|api ?keys?|credencial\w*|credentials?|contrasen\w*|passwords?|cifrad\w*|encrypt\w*|hashing)\b/, 1, 'secretos'],
    ],
  },
  {
    id: 'risky-migration',
    label: 'Migración riesgosa de datos o de framework',
    tier: 'opus',
    effort: 'xhigh',
    effortLabel: 'xhigh',
    why: 'Difícil de revertir.',
    isRisk: true,
    isDesign: true,
    signals: [
      [/\b(migracion de datos|data migration|migra\w* (la |las )?(base|datos|tablas)|migrate the (database|data)|cambiar de orm|switch(ing)? orms?|zero[- ]downtime|sin downtime|backfill\w*|datos (vivos|en produccion|de produccion|reales)|production data)\b/, 3, 'migración de datos'],
      [/\b(migra(r|cion|ciones)?|migrations?|migrate|migrating)\b/, 2, 'migración'],
      [/\b(esquemas?|schemas?|base de datos|databases?|db|postgres\w*|mysql|mongo\w*|sqlite|orm|prisma|drizzle|typeorm|sequelize|alembic|knex)\b/, 1, 'datos'],
      [/\b(upgrade|major version|version mayor|actualiza\w* (de )?(next|react|angular|vue|django|rails|laravel|node|python|java|spring)|framework)\b/, 1, 'framework'],
    ],
  },
  {
    id: 'greenfield',
    label: 'Greenfield con decisiones estructurales',
    tier: 'opus',
    effort: 'high',
    effortLabel: 'high',
    why: 'Lo que se decide hoy cuesta cambiarlo después.',
    isDesign: true,
    signals: [
      [/\b(greenfield|proyecto nuevo|nuevo proyecto|from scratch|desde cero|scaffold\w*|bootstrap\w*|arranca\w* (el|un) proyecto|inicia\w* (el|un) proyecto)\b/, 3, 'greenfield'],
      [/\b(crea\w*|construye|construir|build|implementa\w*|implement|haz|hazme|make)\b.{0,25}\b(app|aplicacion|proyecto|servicio|api|sistema|plataforma|mod|plugin|cli|sdk|libreria|library|bot|agente|agent|herramienta|tool)\b/, 2, 'crear sistema'],
      [/\b(estructura del proyecto|eleg\w* (el )?(stack|framework|base de datos)|stack tecnologico|tech stack|disen\w* (el|la) (sistema|api|esquema|arquitectura)|diseno del sistema|system design|decisiones estructurales)\b/, 2, 'decisiones estructurales'],
    ],
  },
  {
    id: 'large-plan',
    label: 'Plan de proyecto grande',
    tier: 'fable',
    effort: 'high',
    effortLabel: 'high',
    why: 'Acota, pregunta y entrega un plan que Sonnet ejecuta.',
    agent: 'fable-researcher',
    signals: [
      [/\b(roadmap|plan maestro|plan de proyecto|plan de migracion|planifica\w*|planea\w*|fases|milestones?|hitos|epica|epics?|plan (a|de) (largo|mediano) plazo)\b/, 2, 'plan'],
      [/\b(meses|semanas|trimestre|quarter|todo el sistema|sistema completo|migracion completa|reescritura|full rewrite|rewrite|plataforma completa|varios equipos|multi[- ]team)\b/, 2, 'escala grande'],
      [/\bplan\b/, 1, 'plan'],
    ],
  },
  {
    id: 'long-autonomous-run',
    label: 'Corrida autónoma de horas',
    tier: 'fable',
    effort: 'high',
    effortLabel: 'high',
    why: 'Sub-agentes asíncronos y verificación propia.',
    signals: [
      [/\b(durante horas|por horas|varias horas|toda la noche|overnight|sin supervision|unattended|hasta que (termine|pasen|todo pase|este listo)|until (done|all pass)|long[- ]running|corrida (larga|autonoma)|(corre|correr|trabaja|ejecuta|deja\w*)\w* (de forma )?autonom\w*|runs? autonomously|autonomous(ly)? (run|for hours|overnight))\b/, 3, 'autónomo'],
      [/\b(horas|hours)\b/, 1, 'horas'],
      [/\b(sub-?agentes?|subagents?|en paralelo|in parallel|asincron\w*)\b/, 1, 'paralelo'],
      [/\b(cientos de|miles de|hundreds of|thousands of|todos los (archivos|modulos|repos))\b/, 1, 'volumen'],
    ],
  },
  {
    id: 'legacy-codebase',
    label: 'Codebase heredado sin documentación',
    tier: 'fable',
    effort: 'high',
    effortLabel: 'high',
    why: 'Investigación multipaso larga.',
    agent: 'fable-researcher',
    signals: [
      [/\b(heredad\w*|legacy|sin documentacion|sin docs|undocumented|nadie (lo )?entiende|nadie sabe|codigo viejo|old codebase|ingenieria inversa|reverse[- ]engineer\w*|cobol|mainframe|arqueologia)\b/, 3, 'heredado'],
      [/\b(entende\w*|entiende|understand\w*|mapea\w*|map out)\b.{0,30}\b(codebase|codigo|repo\w*|sistema|proyecto)\b/, 2, 'entender codebase'],
    ],
  },
  {
    id: 'open-problem',
    label: 'Problema sin solución conocida',
    tier: 'fable',
    effort: 'xhigh',
    effortLabel: 'xhigh',
    why: 'Anthropic recomienda darle primero lo más difícil.',
    signals: [
      [/\b(nadie (lo )?ha resuelto|no hay solucion|sin solucion( conocida)?|nunca se ha hecho|never been done|no known solution)\b/, 3, 'sin solución conocida'],
      [/\b(no se (como|por donde) (abordar|resolver|empezar)|no sabemos como|problema abierto|open problem|novel|investigacion abierta)\b/, 2, 'problema abierto'],
      [/\b(no existe (una )?(libreria|herramienta|solucion)|state of the art|estado del arte)\b/, 1, 'sin precedente'],
    ],
  },
  {
    id: 'algorithm-math',
    label: 'Algoritmo o matemática dura',
    tier: 'fable',
    effort: 'xhigh',
    effortLabel: 'xhigh',
    why: 'Razonamiento puro.',
    signals: [
      [/\b(algoritm\w*|algorithm\w*|programacion dinamica|dynamic programming|teoria de grafos|graph theory|optimizacion combinatoria|combinatorial|np[- ]?(hard|completo|complete))\b/, 2, 'algoritmo'],
      [/\b(matematic\w*|math\w*|ecuacion\w*|equations?|teorema\w*|theorem\w*|proofs?|demostracion matematica|prueba matematica|probabilid\w*|probabilit\w*|estadistic\w*|statistic\w*|criptografi\w*|cryptograph\w*|simulacion\w*|simulations?)\b/, 2, 'matemática'],
      [/\b(complejidad (computacional|algoritmica|temporal)|time complexity|big ?o|optim[oa]l?)\b|o\(n( log n|\^?2)?\)/, 2, 'complejidad u optimalidad'],
    ],
  },
  {
    id: 'research',
    label: 'Evaluar librerías, research técnico profundo',
    tier: 'fable',
    effort: 'high',
    effortLabel: 'high',
    why: 'Investigación con fuentes y comparación.',
    agent: 'fable-researcher',
    signals: [
      [/\b(investiga\w*|research\w*)\b(?! (por que|porque|la causa|el error|el fallo|el bug|why))/, 2, 'investigar'],
      [/\b((evalua\w*|compara\w*) (librerias|opciones|alternativas|herramientas|frameworks|proveedores|modelos)|comparativa|comparison|benchmarks?|alternativas|que libreria|which (library|framework|tool))\b/, 2, 'comparar opciones'],
      [/\b(pros y contras|trade-?offs?|ventajas y desventajas)\b/, 1, 'trade-offs'],
      [/\b(vs\.?|versus)\b/, 1, 'comparación'],
    ],
  },
  {
    id: 'document-deliverable',
    label: 'Entregable en documento, hoja de cálculo o slides',
    tier: 'fable',
    effort: 'high',
    effortLabel: 'high',
    why: 'Punto fuerte documentado por Anthropic.',
    agent: 'fable-researcher',
    signals: [
      [/\b(informes?|reportes?|documento (word|de google|formal|de diseno|de recomendacion)|propuesta\w*|hoja de calculo|spreadsheets?|excel|xlsx|slides?|presentacion\w*|deck|pptx|docx|one[- ]pager|memo|white ?paper|(recommendation|design|decision) doc|write-?up)\b/, 2, 'entregable'],
      [/\b(prepara\w*|redacta\w*|arma\w*|elabora\w*|haz|hazme|crea\w*|genera\w*|write|draft|prepare)\b.{0,30}\b(informe|reporte|propuesta|presentacion|slides|deck|hoja de calculo|spreadsheet|documento|memo)\b/, 2, 'producir entregable'],
    ],
  },
]

export const CATEGORY_BY_ID: ReadonlyMap<string, Category> = new Map(CATEGORIES.map(category => [category.id, category]))

export const NEUTRAL_LABEL = 'Pregunta, conversación o tarea sin código'

export const RESEARCH_CATEGORIES: ReadonlySet<string> = new Set(['large-plan', 'legacy-codebase', 'open-problem', 'algorithm-math', 'research', 'document-deliverable', 'long-autonomous-run'])

export function categoryOf(id: string): Category {
  const category = CATEGORY_BY_ID.get(id)

  if (category === undefined) {
    throw new Error(`model-router: unknown category ${id}`)
  }

  return category
}
