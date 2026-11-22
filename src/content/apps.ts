import type { FaqItem } from "./site";

// App landing pages. Each app is also the hub of a content cluster: articles point at it via `cluster`.
export interface AppType {
  slug: string;
  level: "use-case" | "example";
  name: string;
  /** Short label used in navigation and cards. */
  label: string;
  /** Noun used inside sentences, e.g. "your CRM". */
  noun: string;
  /** The question the definition answers. */
  question: string;
  /** One sentence that answers "what is this app?" on its own. */
  definition: string;
  /** One sentence on why building it on Talva matters. */
  pitch: string;
  examples: string[];
  humans: string[];
  agents: string[];
  consistency: string[];
  questions: string[];
  faq: FaqItem[];
}

export const apps: AppType[] = [
  {
    slug: "crm",
    level: "example",
    name: "CRM on Talva",
    label: "CRM",
    noun: "CRM",
    question: "What is a CRM?",
    definition:
      "A CRM (customer relationship management system) is the shared record of a company's customers, contacts, deals and conversations.",
    pitch:
      "When sales people and AI agents both read and update customer records, the CRM has to give every one of them the same data, the same permissions and the same history. Talva is built to be that shared foundation.",
    examples: [
      "An account and contact database owned by your company",
      "A deal pipeline that sales staff and agents both move forward",
      "Meeting notes and follow-ups an agent drafts and a person approves",
      "Customer health views that combine data from several internal apps",
    ],
    humans: [
      "Review and correct customer records",
      "Approve changes an agent proposes, such as a deal stage or a price",
      "See who changed what, and when",
    ],
    agents: [
      "Look up an account before drafting an email",
      "Log a call summary against the right contact",
      "Suggest next steps based on the deal's history",
    ],
    consistency: [
      "One definition of a customer, a contact and a deal across every app",
      "The same access rules whether a person or an agent is asking",
      "A full record of every change, including changes made by agents",
      "Customer data that stays in your company's ownership",
    ],
    questions: [
      "Which customer fields can an agent change on its own, and which need a person's approval?",
      "Where does customer data live, and who owns it?",
      "If a coding agent builds a new sales tool next month, will it use the same customer records?",
      "Can you see every change an agent made to a deal?",
    ],
    faq: [
      {
        q: "Can I build a CRM on Talva?",
        a: "Yes. A CRM is one of the internal apps Talva is designed for: a shared system of record that both people and AI agents use. Talva is currently in private beta.",
      },
      {
        q: "Is Talva a CRM product?",
        a: "No. Talva is the platform underneath. Your team, or the agents you choose, build the CRM your company needs on top of it.",
      },
      {
        q: "Which AI agents can use a CRM built on Talva?",
        a: "Talva is client-agnostic. Teams can work through the agentic client they prefer, such as Codex, Claude Code, OpenCode or OpenClaw.",
      },
    ],
  },
  {
    slug: "knowledge-graph",
    level: "use-case",
    name: "Company knowledge graph on Talva",
    label: "Knowledge graph",
    noun: "company knowledge graph",
    question: "What is a company knowledge graph?",
    definition:
      "A company knowledge graph connects the people, projects, documents, customers and decisions in an organisation, so both people and software can follow how they relate.",
    pitch:
      "A knowledge graph is only useful if every app and agent reads the same connections. Talva gives teams one platform to build it on, so the graph does not split into a different version per tool.",
    examples: [
      "Who owns which system, customer or project",
      "Which decisions were made, by whom, and based on what",
      "How internal documents, tickets and customers link together",
      "Context an agent can look up before it acts",
    ],
    humans: [
      "Find who knows what inside the company",
      "Follow the history behind a decision",
      "Correct relationships that are wrong",
    ],
    agents: [
      "Look up context before answering a question or taking an action",
      "Add new relationships as work happens",
      "Hand the same context to other agents and apps",
    ],
    consistency: [
      "One shared model of people, projects and customers",
      "The same visibility rules for people and agents",
      "A traceable history of who added or changed a connection",
      "Data that stays in your company's ownership",
    ],
    questions: [
      "Which entities matter most: people, customers, projects, systems?",
      "Who is allowed to see which parts of the graph?",
      "How will new apps read and write to the same graph?",
      "How will you know where a relationship came from?",
    ],
    faq: [
      {
        q: "Is Talva a graph database?",
        a: "No. Talva is a platform for AI-native software. A company knowledge graph is one of the things you can build on top of it.",
      },
      {
        q: "Why build a knowledge graph on Talva instead of inside each tool?",
        a: "If every tool keeps its own copy of company context, agents get different answers depending on where they look. Building on one platform keeps the context consistent.",
      },
    ],
  },
  {
    slug: "internal-tools",
    level: "use-case",
    name: "Internal company apps on Talva",
    label: "Internal company apps",
    noun: "internal company apps",
    question: "What are internal company apps?",
    definition:
      "Internal company apps are the small tools and larger systems a business runs on, from a request form or dashboard to a CRM or digital asset management (DAM), used by people and AI agents.",
    pitch:
      "Build a small tool for one team or a larger system for the whole company. Talva provides a consistent foundation for both, so teams and agents do not create a different data model and access approach for every app.",
    examples: [
      "A company CRM for customers, contacts and deals",
      "Digital asset management (DAM) for company media and assets",
      "Small request forms, approval tools and team dashboards",
      "Operational systems spanning several teams and workflows",
      "Connected company apps that share data and access rules",
    ],
    humans: [
      "Submit and approve requests",
      "Fix data that looks wrong",
      "Know who owns each tool",
    ],
    agents: [
      "Fill in requests on someone's behalf",
      "Check status across several tools",
      "Prepare a decision for a person to approve",
    ],
    consistency: [
      "Shared data instead of a separate copy inside every tool",
      "The same permission rules across every tool",
      "A record of every change, whoever or whatever made it",
      "Tools that keep working when the AI tools that built them change",
    ],
    questions: [
      "Who owns a tool after the person who built it moves on?",
      "Does each new tool create another copy of company data?",
      "Can agents use the tool with the same permissions as people?",
      "What happens when the AI coding tool your team uses changes?",
    ],
    faq: [
      {
        q: "Does internal apps mean only small tools and dashboards?",
        a: "No. Internal apps can be small or large, from a request form or team dashboard to a company CRM or digital asset management (DAM). Talva is a foundation for both.",
      },
      {
        q: "Does Talva replace low-code tools?",
        a: "Talva is the platform the apps run on, not a visual builder. Teams can build with the agentic client they prefer.",
      },
    ],
  },
  {
    slug: "legacy-modernization",
    level: "use-case",
    name: "Legacy app modernization on Talva",
    label: "Legacy app modernization",
    noun: "modernized company apps",
    question: "What is legacy app modernization?",
    definition: "Legacy app modernization means refactoring an existing company application, including an entire legacy system, rather than limiting new development to small tools around it.",
    pitch: "Talva can be the foundation for refactoring entire legacy apps for people and AI agents. Your team still decides what to preserve, how to move data and workflows, and how to validate the replacement.",
    examples: [
      "Refactoring an entire legacy company application",
      "Rebuilding an existing CRM or asset management system",
      "Bringing previously separate company apps onto a consistent foundation",
      "Adapting established workflows for use by people and agents",
    ],
    humans: ["Decide which workflows and business rules must remain", "Review migrated data and validate the refactored app", "Plan rollout, ownership and ongoing maintenance"],
    agents: ["Help refactor application code under team review", "Use the modernized app as a first-class user", "Work with shared company context rather than a separate copy per tool"],
    consistency: ["Shared definitions for business data", "Explicit access rules for people and agents", "Business rules preserved and tested during the transition", "Company ownership of its data"],
    questions: ["Which parts of the existing app must remain unchanged?", "How will you validate migrated data and business rules?", "Will you replace the whole app or transition in stages?", "Who owns rollout and recovery if the transition fails?"],
    faq: [
      { q: "Can Talva be used to refactor an entire legacy app?", a: "Yes. Entire legacy-app refactoring is a Talva use case, not just building new tools beside an old system. Your team remains responsible for migration planning, review and validation." },
      { q: "Does modernization mean every database must be replaced?", a: "Not necessarily. Talva can also serve as a semantic access layer over existing databases. Refactoring an app and exposing controlled access to existing data are distinct approaches." },
    ],
  },
  {
    slug: "semantic-access-layer",
    level: "use-case",
    name: "Semantic access layer on Talva",
    label: "Semantic access layer",
    noun: "semantic access layer",
    question: "What is a semantic access layer?",
    definition: "A semantic access layer gives agents a meaningful, controlled way to work with data in existing databases. Talva provides this layer with controlled MCP (Model Context Protocol) access and granular control.",
    pitch: "You do not have to start with a new app or replace your databases. Use Talva above existing databases to give agents controlled access to company data, while your team defines what that access should allow.",
    examples: [
      "A semantic access layer over existing company databases",
      "Controlled MCP access for company agents",
      "Granular control over the access agents receive",
      "Shared business meaning for data consumed by different agents",
    ],
    humans: ["Define the business meaning of the data exposed", "Decide what each agent should be allowed to access", "Review access requirements as workflows change"],
    agents: ["Access existing company data through controlled MCP access", "Work with the business meaning provided by the semantic layer", "Use the access granted to them rather than unrestricted database access"],
    consistency: ["Shared business definitions above existing databases", "Explicit, granular control of agent access", "A consistent access approach across different agents", "Company ownership of the underlying data"],
    questions: ["Which existing databases and business concepts should be exposed?", "What should each agent be allowed to access?", "Which actions should still require human review?", "Who maintains the semantic definitions and access rules?"],
    faq: [
      { q: "Can Talva work above existing databases?", a: "Yes. Talva can act as a semantic access layer on top of existing databases, providing controlled MCP access to agents with granular control." },
      { q: "Is a semantic access layer the same as building a new app?", a: "No. It is a way to give agents controlled access to existing data. Building or refactoring company apps is another Talva use case." },
      { q: "Does MCP alone determine what an agent may access?", a: "No. MCP is the access protocol; your company still needs to define the semantic model and the access rules. Talva's semantic-layer use case includes granular control." },
    ],
  },
];

export const appUseCases = apps.filter((app) => app.level === "use-case");

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);
