import type { FaqItem } from "./site";

// App landing pages. Each app is also the hub of a content cluster: articles point at it via `cluster`.
export interface AppType {
  slug: string;
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
    name: "Internal tools on Talva",
    label: "Internal tools",
    noun: "internal tools",
    question: "What are internal tools?",
    definition:
      "Internal tools are the apps employees use to run the company: request forms, approval flows, inventories, dashboards and admin panels.",
    pitch:
      "AI makes it possible for almost anyone to build an internal tool in an afternoon. Talva is the shared platform that keeps those tools consistent, controlled and secure as their number grows.",
    examples: [
      "Purchase and access request flows",
      "Equipment and licence inventories",
      "Team dashboards that pull from several systems",
      "Small admin apps built by one team for another",
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
        q: "Who can build internal tools on Talva?",
        a: "Engineering teams, and the AI agents they work with. Talva is designed for companies where many internal apps are being built at once, often with AI.",
      },
      {
        q: "Does Talva replace low-code tools?",
        a: "Talva is the platform the apps run on, not a visual builder. Teams can build with the agentic client they prefer.",
      },
    ],
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);
