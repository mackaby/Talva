import type { FaqItem, Source } from "./site";

// Every article belongs to exactly one cluster: an app slug (apps.ts) or a topic slug (topics.ts).
export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  /** ISO date first published. */
  date: string;
  /** ISO date of the last meaningful content update. */
  updated: string;
  readingTime: string;
  cluster: string;
  /** Two or three sentences that answer the title question on their own. */
  answer: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  faq: FaqItem[];
  sources: Source[];
  /** Product connection uses confirmed positioning, not claims of delivered outcomes. */
  talvaFit: {
    paragraphs: string[];
    responsibility: string;
    appSlugs: string[];
  };
}

export const articles: Article[] = [
  {
    slug: "enterprise-agent-consistency",
    talvaFit: {
      paragraphs: [
        "Talva is the platform for building, running, evolving and using AI-native software. It is designed for companies where many teams and agents build internal apps, but those apps need a consistent foundation rather than separate copies of data and different access rules.",
        "Consider Talva when a new sales tool, an operations app and an AI agent need to work with the same company records. People and agents are first-class users, the company owns its data, and teams can choose their agentic client. Talva is currently in private beta, so evaluate it against your requirements before relying on it for production work.",
      ],
      responsibility: "A shared platform does not decide your company's policies. Your team still needs to define access rules, assign app owners, review changes and validate the behaviour of each app.",
      appSlugs: ["crm", "internal-tools"],
    },
    title: "AI-native software needs a platform built for it",
    description:
      "Why teams that assemble a new stack for every AI-native app end up with inconsistent, hard-to-run products, and what a shared platform changes.",
    date: "2026-07-06",
    updated: "2026-11-22",
    readingTime: "5 min read",
    cluster: "ai-native-software",
    answer:
      "AI-native software is used by people and agents, changes clients often, and has to behave the same while the tools around it shift. Assembling a fresh stack for each app makes that consistency very hard. A shared platform gives every app the same foundation, so data, access rules and history stay the same across the company.",
    keyTakeaways: [
      "AI-native apps have traits ordinary apps do not: non-human users and fast-changing clients.",
      "A new stack per app leads to duplicated data, different access rules and missing history.",
      "The fix is a shared platform as the fixed point, not a particular model or framework.",
    ],
    sections: [
      {
        heading: "What makes AI-native software different",
        paragraphs: [
          "Most teams building AI-native software today assemble a stack from scratch each time: some storage, some access control, and a way to connect whichever agentic client is popular that quarter. It works long enough for a demo.",
          "The trouble starts because AI-native software has traits ordinary software does not:",
        ],
        bullets: [
          "Agents are users, not just builders. They read and change data like people do.",
          "The client changes often. Teams switch agentic clients far more often than they switch databases.",
          "Behaviour has to stay the same while the models and tools around it keep shifting.",
        ],
      },
      {
        heading: "What goes wrong without a shared platform",
        paragraphs: [
          "When every app is built on its own stack, each one ends up with its own copy of company data, its own idea of who can do what, and its own way of recording changes, if it records them at all.",
          "Multiply that by every team and every agent building apps, and the company loses the ability to answer simple questions: which customer record is correct, who changed it, and was that allowed?",
        ],
      },
      {
        heading: "What a shared platform changes",
        paragraphs: [
          "The way out is not choosing the right model or framework. It is having one platform as the fixed point: the layer that stays the same while everything above it moves.",
          "That is what Talva is: the platform for building, running, evolving and using AI-native software. Apps built on it share the same data, the same controls and the same history, whichever person or agent built them.",
        ],
      },
    ],
    faq: [
      {
        q: "What is AI-native software?",
        a: "Software designed to be built with AI agents and used by both people and agents, rather than software where AI was added later.",
      },
      {
        q: "Why not just standardise on one AI model?",
        a: "Models and clients change too often to be the foundation. Consistency has to come from the platform the apps share.",
      },
    ],
    sources: [],
  },
  {
    slug: "agent-agnostic-vs-vendor-locked",
    talvaFit: {
      paragraphs: [
        "Talva is client-agnostic: teams can work through the agentic client they prefer, such as Codex, Claude Code, OpenCode or OpenClaw. The platform, rather than a particular client, is the foundation for apps used by people and AI agents.",
        "Consider Talva when different teams want different clients but need to build and use apps around the same company data and controls. A CRM or company knowledge graph is an example of a system that should not belong to whichever client built it. Talva is currently in private beta.",
      ],
      responsibility: "Client independence does not mean every workflow transfers without work. Your team still needs to evaluate its chosen clients, test integrations and check that changes preserve the app's expected behaviour.",
      appSlugs: ["crm", "knowledge-graph"],
    },
    title: "Any client, one platform: why the client is not the product",
    description:
      "The agentic client your team uses today is unlikely to be the one it uses next year. Here is why your apps should not depend on it.",
    date: "2026-07-03",
    updated: "2026-11-22",
    readingTime: "4 min read",
    cluster: "agentic-clients",
    answer:
      "An agentic client is the tool someone uses to direct an AI agent, such as Codex, Claude Code, OpenCode or OpenClaw. Teams change clients often, so apps tied to one client have to be rebuilt when the team moves on. Treating the platform as the fixed point, and the client as swappable, keeps apps working whichever client is used.",
    keyTakeaways: [
      "Different teams prefer different agentic clients, and those preferences change.",
      "Being client-agnostic is broader than being model-agnostic.",
      "Apps should meet every client, human or AI, through the same platform and the same controls.",
    ],
    sections: [
      {
        heading: "The client keeps changing",
        paragraphs: [
          "A year ago, most teams did not have a preferred agentic client. Now most do, and it is often a different one per team. Next year it will likely be different again.",
          "If your AI-native software is tied to one client, through one vendor's SDK or one framework's conventions, you are shipping something you will have to rebuild the next time your team switches.",
        ],
      },
      {
        heading: "Client-agnostic versus model-agnostic",
        paragraphs: [
          "Model-agnostic means an app can work with more than one AI model. Client-agnostic goes further: the app works the same no matter which tool is directing the agent.",
          "An app can support many models and still be locked to a single client. For companies with many teams, client independence is the one that matters day to day.",
        ],
      },
      {
        heading: "The platform is the fixed point",
        paragraphs: [
          "The alternative is to treat the platform as the product surface and the client as swappable. Any client, human or AI, meets the app through the same platform, with the same behaviour and the same controls.",
          "That is the design Talva is built around: the platform for AI-native software, whatever is on the other end of it.",
        ],
      },
    ],
    faq: [
      {
        q: "Which agentic clients work with Talva?",
        a: "Talva is client-agnostic. Teams can work through the client they prefer, such as Codex, Claude Code, OpenCode or OpenClaw.",
      },
      {
        q: "What is the difference between client-agnostic and model-agnostic?",
        a: "Model-agnostic means supporting several AI models. Client-agnostic means working the same whichever tool directs the agent, which is a broader kind of independence.",
      },
    ],
    sources: [],
  },
  {"slug": "vibe-coding-vs-vibe-engineering", "talvaFit": {"paragraphs": ["Talva is the platform for building, running, evolving and using AI-native software. Its role in vibe engineering is the shared foundation beneath the apps: companies can build for people and agents without making each app a separate island of company data.", "Consider Talva when an AI-built prototype needs to become part of a wider set of internal tools or a company CRM. Talva's positioning is consistency, control and company-owned data across those apps, with a choice of agentic client. Talva is currently in private beta; assess the platform against your needs rather than treating that positioning as evidence that an app is production-ready."], "responsibility": "Talva is not a substitute for engineering review. Your company still needs a named owner, code and security checks, testing, and a decision about whether an app is ready for real users and data.", "appSlugs": ["internal-tools", "crm"]}, "title": "Vibe coding vs. vibe engineering: what's the difference?", "description": "Vibe coding means building software by prompting an AI without reviewing the code. Vibe engineering keeps the speed but adds review, ownership and rules. Here is how they differ.", "readingTime": "5 min read", "answer": "Vibe coding is building software by directing an AI in plain language, often without reading the code it writes. Vibe engineering uses the same tools but treats the result as real software: someone reviews it, owns it and follows shared rules for data and access. The difference matters most once an app holds company data or other people depend on it.", "keyTakeaways": ["Vibe coding optimises for speed; vibe engineering keeps the speed and adds accountability.", "Security agencies say AI-generated code still needs expert review before production use.", "The switch point is when an app touches real data or becomes something others rely on."], "sections": [{"heading": "What vibe coding is", "paragraphs": ["The Cloud Security Alliance describes vibe coding as building functional software by directing AI models in natural language without reading or understanding the generated code. It notes the practice spread to broad enterprise adoption within roughly 16 months of the term being coined.", "The Canadian Centre for Cyber Security describes the same loop: you instruct an AI tool, work with its output and approve its suggestions. The tool writes the code, but you remain responsible for directing the work and validating the results."]}, {"heading": "What vibe engineering adds", "paragraphs": ["Vibe engineering is not an official standard; we use it for the practice of keeping AI-assisted speed while adding the habits of professional software work."], "bullets": ["Someone reviews what the AI produced, or a platform enforces checks automatically.", "Each app has a named owner, not just a builder.", "Data and access follow company-wide rules instead of per-app choices.", "Changes are tracked so you can see what changed and why."]}, {"heading": "Why the difference matters", "paragraphs": ["The Canadian Centre for Cyber Security warns that producing secure, reliable, production-ready code still requires technical expertise, and lists risks such as weak code review, supply-chain issues and information leaks.", "The Cloud Security Alliance cites a study in which none of 5,600 surveyed vibe-coded apps had CSRF protection, security headers or properly scoped access policies. A prototype can live with that. An app holding customer data cannot."]}, {"heading": "When to switch from one to the other", "paragraphs": ["Vibe coding is fine for throwaway experiments. Move to vibe engineering when any of these become true: the app stores company or customer data, more than one person uses it, or the business would notice if it broke."]}], "faq": [{"q": "Is vibe coding bad?", "a": "No. It is a fast way to explore ideas. The risk comes from running vibe-coded apps in production without review, ownership or shared rules."}, {"q": "Who coined the term vibe coding?", "a": "The Cloud Security Alliance attributes the term to Andrej Karpathy."}], "sources": [{"label": "Cloud Security Alliance — The Vibe Coding Governance Gap (research note, June 2026)", "url": "https://labs.cloudsecurityalliance.org/wp-content/uploads/2026/06/CSA_research_note_vibe_coding_ai_governance_gap_20260602-csa-styled.pdf"}, {"label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding (ITSM.60.043)", "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"}], "date": "2026-11-21", "updated": "2026-11-22", "cluster": "vibe-engineering"},
  {"slug": "governing-employee-built-ai-apps", "talvaFit": {"paragraphs": ["Talva addresses one part of the governance problem: the foundation on which internal apps are built and used. It is designed for companies where many people and agents build apps that need consistent company data and controls, rather than a different setup for every tool.", "Consider Talva when your governance checklist calls for a shared platform for internal tools. People and agents are first-class users, company data remains company-owned, and the agentic client is a choice rather than the foundation. Talva is currently in private beta; evaluate its capabilities against each requirement on your checklist."], "responsibility": "A platform does not supply your governance programme. Your company still needs approved-tool policies, an app register, named owners, training, security reviews and a process for supporting important apps. This guide does not claim Talva automates those tasks.", "appSlugs": ["internal-tools"]}, "title": "A checklist before letting employees ship AI-built apps", "description": "A practical, sourced checklist for companies whose staff build internal apps with AI tools: approved tools, data rules, a register, ownership and security checks.", "readingTime": "6 min read", "answer": "Don't ban staff-built AI apps; govern them. Approve a small set of tools, set clear rules for which data may go where, keep a register of what exists, and move any app the business starts depending on into review and named ownership. Security guidance from Tenable, the Canadian Centre for Cyber Security and others points the same way.", "keyTakeaways": ["Bans tend to push app building out of sight; governance keeps it visible.", "Keep a register of every staff-built app and who owns it.", "Apps that become business-critical need review, ownership and support."], "sections": [{"heading": "Why bans don't work", "paragraphs": ["Tenable reports that prohibiting AI-aided development usually causes employees to keep building in secret, and that a structured, tiered governance framework works better. Talk Think Do reaches the same conclusion: banning these tools tends to push the work out of sight."]}, {"heading": "The checklist", "paragraphs": ["Drawn from the sources below. Adapt it to your size and risk."], "bullets": ["Approved tools: pick a small set of AI building tools staff may use.", "Data rules: state which data may be used in AI-built apps and where it may be stored.", "Register: list every app, its owner, its users and the data it touches.", "Access control: confirm each app limits who can see and change data.", "Secrets: no keys or passwords in the browser or in prompts.", "Review gate: anything customer-facing or business-critical gets a security review.", "Ownership: every app has a second person who understands it.", "Training: builders get basic security and compliance awareness training."]}, {"heading": "The risks the checklist addresses", "paragraphs": ["Talk Think Do lists the patterns that are easy to miss when a tool works on screen: data copied to places nobody assessed, predictable security gaps such as missing access rules and keys in the browser, and tools only one person understands.", "Tenable adds that even when staff follow policy, the sheer number of apps can overwhelm IT and security teams. That is why a register and a clear review gate matter more than case-by-case approval."]}, {"heading": "It isn't only non-developers", "paragraphs": ["Webflow's security team points out that engineers using AI agents can now stand up cloud infrastructure faster than review processes were designed to catch, usually with good intentions. The checklist applies to engineers' side projects too."]}], "faq": [{"q": "Should every staff-built app go through IT review?", "a": "Not necessarily. A proportionate approach reviews apps once they hold sensitive data or the business depends on them, and keeps lighter rules for experiments."}, {"q": "What is the single most useful first step?", "a": "Start a register. You cannot govern apps you don't know exist."}], "sources": [{"label": "Tenable — How to mitigate the risk from AI-generated apps built by citizen coders (Oct 2026)", "url": "https://www.tenable.com/blog/how-to-secure-mitigate-ai-risk-vibe-coding-ai-apps-citizen-coders"}, {"label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)", "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"}, {"label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding (ITSM.60.043)", "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"}, {"label": "Webflow — Vibe coded apps are the new shadow IT", "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"}], "date": "2026-11-21", "updated": "2026-11-22", "cluster": "vibe-engineering"},
  {"slug": "shadow-it-vibe-coding-era", "talvaFit": {"paragraphs": ["Talva is a shared platform for AI-native software, not a tool for discovering unknown apps. Its relevance to shadow IT is giving teams a common foundation for the internal apps they choose to build, instead of letting every app create its own isolated data and access conventions.", "Consider Talva when the company wants an approved foundation for internal tools that people and agents both use. A company knowledge graph is another example of shared context that can be built on the platform instead of recreated inside each tool. Talva is currently in private beta."], "responsibility": "Your company still needs to find and register existing apps, assess their risks and data flows, assign owners and decide which should be retired or moved. Using a shared platform does not automatically eliminate shadow IT or make every app compliant.", "appSlugs": ["internal-tools", "knowledge-graph"]}, "title": "The new shadow IT: what happens when everyone can build apps", "description": "AI tools let any employee build working apps in an afternoon. Here is how that changes shadow IT, what the real risks are, and what companies are doing about it.", "readingTime": "5 min read", "answer": "Shadow IT used to mean unapproved SaaS sign-ups. Now employees can build and run their own apps with AI in an afternoon, often on company data and infrastructure. The result is a growing number of useful but unowned apps with inconsistent security and data handling. Companies respond best with visibility and shared rules rather than bans.", "keyTakeaways": ["Shadow IT has shifted from buying tools to building them.", "The UK NCSC defines shadow IT as unknown assets used for business purposes, an unmanaged risk.", "The volume of apps, not just any single one, is the new problem."], "sections": [{"heading": "From buying to building", "paragraphs": ["Webflow's security team describes the shift: shadow IT used to show up as an unauthorised OAuth grant to a SaaS tool. Now it shows up as infrastructure running in your own cloud account, built by a well-meaning engineer with an AI agent, with no ticket and no review.", "Talk Think Do quotes the UK National Cyber Security Centre's definition of shadow IT as 'the unknown assets that are used within an organisation for business purposes', and its conclusion that shadow IT is an unmanaged risk."]}, {"heading": "Why it's happening", "paragraphs": ["The NCSC, as quoted by Talk Think Do, says shadow IT normally arises when employees struggle to use sanctioned tools to complete a task. AI tools have made the workaround much easier: operations, finance and product teams can describe a problem and have something running the same afternoon."]}, {"heading": "The real risks", "paragraphs": ["The Cloud Security Alliance argues shadow AI has moved beyond tool adoption into 'shadow operations': employees building and deploying data-processing apps without IT or security involvement. It also notes that major frameworks such as NIST AI RMF and OWASP LLM Top 10 offer little dedicated guidance for these citizen-built apps."], "bullets": ["Data stored in places nobody assessed.", "Missing access rules and exposed keys.", "Apps only one person understands.", "Too many apps for IT to track case by case."]}, {"heading": "Inconsistency is the hidden cost", "paragraphs": ["When every app is built differently, each one invents its own data model, access rules and integrations. Practitioners discussing custom CRMs make a similar point: the database and UI are the easy part; workflows, integrations and permissions are what take the work. Multiply that across dozens of apps and the maintenance burden grows quickly."]}, {"heading": "What companies are doing", "paragraphs": ["The common advice across the sources is visibility first: a register of apps, approved tools, clear data rules and a path for important apps to get proper ownership. See our checklist guide for the specifics."]}], "faq": [{"q": "Is staff-built software always shadow IT?", "a": "Only when the organisation doesn't know about it. A registered, owned app built with AI is just software."}, {"q": "Are vibe-coded apps less secure?", "a": "They often share predictable gaps. The Cloud Security Alliance cites a study finding missing security controls across thousands of production vibe-coded apps."}], "sources": [{"label": "Webflow — Vibe coded apps are the new shadow IT", "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"}, {"label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)", "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"}, {"label": "Cloud Security Alliance — The Vibe Coding Governance Gap (research note, June 2026)", "url": "https://labs.cloudsecurityalliance.org/wp-content/uploads/2026/06/CSA_research_note_vibe_coding_ai_governance_gap_20260602-csa-styled.pdf"}, {"label": "r/CRM — Custom CRM: why and when to build it", "url": "https://www.reddit.com/r/CRM/comments/1w5djnl/custom_crm_why_and_when_to_build_it/"}], "date": "2026-11-21", "updated": "2026-11-22", "cluster": "vibe-engineering"},
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesInCluster = (cluster: string) =>
  articles.filter((a) => a.cluster === cluster);
