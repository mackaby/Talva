import type { FaqItem, Source } from "./site";

// Every article belongs to exactly one cluster: an app slug (apps.ts) or a topic slug (topics.ts).
export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  sources?: Source[];
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
  {
    "slug": "vibe-coding-vs-vibe-engineering",
    "talvaFit": {
      "paragraphs": [
        "Talva is the platform for building, running, evolving and using AI-native software. Its role in vibe engineering is the shared foundation beneath the apps: companies can build for people and agents without making each app a separate island of company data.",
        "Consider Talva when an AI-built prototype needs to become part of a wider set of internal tools or a company CRM. Talva's positioning is consistency, control and company-owned data across those apps, with a choice of agentic client. Talva is currently in private beta; assess the platform against your needs rather than treating that positioning as evidence that an app is production-ready."
      ],
      "responsibility": "Talva is not a substitute for engineering review. Your company still needs a named owner, code and security checks, testing, and a decision about whether an app is ready for real users and data.",
      "appSlugs": [
        "internal-tools",
        "crm"
      ]
    },
    "title": "Vibe coding vs. vibe engineering: what's the difference?",
    "description": "Vibe coding means building software by prompting an AI without reviewing the code. Vibe engineering keeps the speed but adds review, ownership and rules. Here is how they differ.",
    "readingTime": "7 min read",
    "answer": "Vibe coding means directing AI to build software, often judging the result without deeply reviewing its code. Vibe engineering, as we use the term here, adds accountable ownership, risk-appropriate review and shared data rules. The important boundary is not whether AI wrote the code: it is what the app can access, what it can change and who depends on it.",
    "keyTakeaways": [
      "AI-assisted development is a spectrum, not a choice between trusting everything and banning AI.",
      "Sensitive data, credentials and important business decisions require more oversight than a disposable demo.",
      "A useful prototype needs an owner, verified access rules and a support plan before becoming a company system."
    ],
    "sections": [
      {
        "heading": "What is vibe coding, and is vibe engineering a standard?",
        "paragraphs": [
          "The Canadian Centre for Cyber Security describes vibe coding as generating software from plain-language instructions. The builder directs the work and validates the result; producing secure, reliable, production-ready code still requires technical expertise. AI assistance does not transfer responsibility for the software to the tool.",
          "The UK National Cyber Security Centre (NCSC) describes a spectrum: from human-written code with AI suggestions, through AI-written functions that people review, to substantial AI autonomy with little deep code review. Not every AI-assisted developer is therefore doing the same kind of work.",
          "We use “vibe engineering” as an editorial label for AI-assisted development with engineering accountability. It is not a certification or an official standard. The useful distinction is the evidence you have that an app works safely, not the name you give your workflow."
        ],
        "sources": [
          {
            "label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding",
            "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"
          },
          {
            "label": "NCSC — The vibe coding spectrum (June 2026)",
            "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
          }
        ]
      },
      {
        "heading": "When does a prototype need more oversight?",
        "paragraphs": [
          "The NCSC recommends calibrating oversight to consequences. A mock-up using invented data can tolerate more experimentation than authentication code, sensitive personal-data processing or software handling credentials. “Internal” describes the audience; it does not establish that the consequences are small.",
          "Our practical decision test is to ask what would happen if the app leaked, stopped or produced a plausible but wrong result. A tool that only rearranges fictitious demo records differs from one that writes customer records or sends purchase approvals. Revisit that assessment whenever users, integrations or data change."
        ],
        "bullets": [
          "Low-consequence experiment: invented or public data, no privileged connections, no operational dependency. Keep it isolated and disposable.",
          "Team tool: colleagues rely on it. Name an owner and deputy, document its data and review the important behaviour.",
          "Sensitive or consequential system: personal data, credentials, core-system writes or important decisions. Get appropriately skilled review before introducing that access."
        ],
        "sources": [
          {
            "label": "NCSC — The vibe coding spectrum (June 2026)",
            "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
          }
        ]
      },
      {
        "heading": "Worked example: a purchase-request prototype becomes a team tool",
        "paragraphs": [
          "This is a hypothetical example, not a Talva customer case. An operations employee builds a form that turns invented purchase requests into a dashboard. Initially, the dashboard is a demonstration: nobody receives money and no production system is connected.",
          "Colleagues then ask to use it with real supplier names and amounts. The app now needs defined visibility and ownership. The company decides that requesters can see their own requests, managers can approve only requests in their remit, and an administrator can correct mistakes. Those are example policy choices, not universal rules.",
          "A reviewer tests with separate requester and manager accounts, including attempts to open another person’s request directly. They check that changing an amount after approval cannot silently reuse that approval. The team records how to undo a mistaken update and who handles failures.",
          "If the next version initiates payments, the risk assessment changes again. Do not treat a successful dashboard demonstration as evidence that a payment workflow is safe. Review the new financial authority and failure cases before enabling that connection."
        ]
      },
      {
        "heading": "What should someone actually review?",
        "paragraphs": [
          "Webflow’s security team distinguishes organisation-level safeguards from app-level review. Its baseline pairs infrastructure defaults with automated checks and a security-informed human reviewer. Automation can surface common problems; a reviewer must still understand the code and the system around it.",
          "For our example, a useful review produces observable evidence rather than “the AI says it is secure”. Record which accounts were tested, which actions were denied, what data leaves the app and how a failed update is handled. Have someone other than the builder follow the operating instructions."
        ],
        "bullets": [
          "Behaviour: does it do the intended job, including invalid, duplicate and missing input?",
          "Access: are permissions enforced when someone calls the service directly, not only by hiding a screen?",
          "Data and credentials: what is sent to external services, and could a user retrieve a privileged key?",
          "Continuity: can another person deploy, restore and disable the app if the builder is unavailable?"
        ],
        "sources": [
          {
            "label": "Webflow security team — Vibe coded apps are the new shadow IT",
            "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
          }
        ]
      },
      {
        "heading": "Keep it, rebuild it or replace it?",
        "paragraphs": [
          "Talk Think Do identifies three routes for a useful staff-built tool: review and support it, rebuild it on more suitable foundations, or replace it with an existing product. The choice depends on what the tool has become, rather than whether AI generated its code.",
          "Keep it when its foundations fit the task and the important gaps can be fixed. Rebuild when the data model, access boundaries or operating environment cannot support the intended use. Replace it when an existing product meets the need and the company does not want the continuing maintenance responsibility.",
          "The trade-off is not simply fast versus slow. A narrowly scoped review may preserve a useful tool without a full rewrite; an unnecessary rewrite can lose working behaviour. But preserving a prototype solely because it was quick to build can create a larger support burden later."
        ],
        "sources": [
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          }
        ]
      },
      {
        "heading": "A practical next step",
        "paragraphs": [
          "Choose one useful prototype and write down its purpose, users, data, permitted actions and owner. Ask a technically qualified reviewer to assess the consequences of failure and the checks needed before expanding its use. That is a more actionable starting point than declaring all AI-written code either safe or unsafe."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is vibe coding bad?",
        "a": "Not inherently. The NCSC recommends matching oversight to risk. A disposable mock-up and an app processing sensitive data need different levels of care."
      },
      {
        "q": "Can a non-developer own an internal app?",
        "a": "They can own its business purpose and arrange support. That does not mean they can independently verify security-critical code; appropriately skilled review may still be needed."
      },
      {
        "q": "Can another AI agent perform the review?",
        "a": "An AI agent can help identify issues, but a clean result is not proof of safety. Someone accountable must evaluate the behaviour, access boundaries and consequences."
      },
      {
        "q": "Does vibe engineering mean reviewing every generated line manually?",
        "a": "We use the term for risk-appropriate engineering accountability, not a prescribed review method. Review depth should follow the data, authority and consequences involved."
      }
    ],
    "sources": [
      {
        "label": "NCSC — The vibe coding spectrum (June 2026)",
        "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
      },
      {
        "label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding",
        "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"
      },
      {
        "label": "Webflow security team — Vibe coded apps are the new shadow IT",
        "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
      },
      {
        "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
        "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
      }
    ],
    "date": "2026-11-21",
    "updated": "2026-11-22",
    "cluster": "vibe-engineering"
  },
  {
    "slug": "governing-employee-built-ai-apps",
    "talvaFit": {
      "paragraphs": [
        "Talva addresses one part of the governance problem: the foundation on which internal apps are built and used. It is designed for companies where many people and agents build apps that need consistent company data and controls, rather than a different setup for every tool.",
        "Consider Talva when your governance checklist calls for a shared platform for internal tools. People and agents are first-class users, company data remains company-owned, and the agentic client is a choice rather than the foundation. Talva is currently in private beta; evaluate its capabilities against each requirement on your checklist."
      ],
      "responsibility": "A platform does not supply your governance programme. Your company still needs approved-tool policies, an app register, named owners, training, security reviews and a process for supporting important apps. This guide does not claim Talva automates those tasks.",
      "appSlugs": [
        "internal-tools"
      ]
    },
    "title": "A checklist before letting employees ship AI-built apps",
    "description": "A practical, sourced checklist for companies whose staff build internal apps with AI tools: approved tools, data rules, a register, ownership and security checks.",
    "readingTime": "8 min read",
    "answer": "Give employee-built apps an approved path rather than assuming they are safe because they are internal. Register the purpose, owner, data and connections; classify the consequences; then require proportionate access checks, review and recovery arrangements. Keep experiments lightweight, but reassess an app before it gains sensitive data, wider adoption or authority over business systems.",
    "keyTakeaways": [
      "A register makes apps visible; it is not evidence that they are secure.",
      "Use a risk-based review path so experiments do not queue behind sensitive business systems.",
      "Company sign-in is only one check: test who can read, change, export and approve individual records."
    ],
    "sections": [
      {
        "heading": "Which problem is this checklist solving?",
        "paragraphs": [
          "A DevOps practitioner asks how to secure AI-generated internal apps built by marketing, product and sales without killing the productivity gains. The thread highlights authentication, company-controlled hosting and discovering deployments outside approved accounts. It is evidence of a real question, not a survey establishing how common the problem is.",
          "This checklist is our practical synthesis of the guidance below, not a compliance standard. The NCSC recommends oversight proportional to risk. Talk Think Do recommends approved tools, clear data rules, a register and a route for useful tools to move into ownership and support. Organisations with sector-specific obligations should involve their security and compliance specialists."
        ],
        "sources": [
          {
            "label": "Audience question — r/devops",
            "url": "https://www.reddit.com/r/devops/comments/1td7mxp/how_are_you_securing_aigenerated_vibecoded/"
          },
          {
            "label": "NCSC — The vibe coding spectrum (June 2026)",
            "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
          },
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          }
        ]
      },
      {
        "heading": "1. Define the experiment boundary",
        "paragraphs": [
          "Name the tools and business accounts employees may use, where their apps can run and which data those tools may receive. Check provider terms and settings rather than assuming a paid account means every use is approved. Prefer invented data for early experiments.",
          "An experiment should not gain a production connection simply because the builder found a working key. Require a fresh decision before connecting customer, employee, finance or other sensitive records. The Canadian Cyber Centre identifies information leaks and supply-chain integrity among the risks organisations should assess."
        ],
        "sources": [
          {
            "label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding",
            "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"
          }
        ]
      },
      {
        "heading": "2. Start an app register with these fields",
        "paragraphs": [
          "A shared sheet can be a starting point if someone maintains it. Talk Think Do recommends recording purpose, owner, deputy, platform, data, users and review dates. Add the connections and fallback below so reviewers can see what the app can affect.",
          "This is a copyable field list, not a claim that a register discovers apps automatically. Ask builders to update it when an app gains new users, data or integrations."
        ],
        "bullets": [
          "Name and purpose: what job does it do, and which team needs it?",
          "Owner and deputy: who decides changes, and who helps when the builder is unavailable?",
          "Location: company-controlled account, deployment address and source-code location.",
          "Users and data: audience, data categories and where records are stored or sent.",
          "Connections and authority: systems it reads, systems it writes and credentials it uses.",
          "Review and fallback: risk decision, reviewer, last review, next trigger and how work continues if it fails."
        ],
        "sources": [
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          }
        ]
      },
      {
        "heading": "3. Route reviews by consequences, not by the builder’s job title",
        "paragraphs": [
          "Our suggested triage has three paths. An isolated demo with invented data can stay experimental. A team tool needs a named owner and a review of the data and access it uses. A sensitive or consequential system needs appropriately skilled review and an agreed operating plan before that use begins.",
          "Do not let “small app” or “built by an engineer” substitute for the assessment. Webflow describes engineers deploying infrastructure faster than traditional review processes can catch. A short app with broad credentials can have more impact than a much larger read-only tool.",
          "The trade-off is review capacity versus exposure. A single approval queue can discourage disclosure; automatic approval of every internal app can miss serious failures. Define clear escalation triggers and give lower-risk tools a short, predictable path."
        ],
        "sources": [
          {
            "label": "NCSC — The vibe coding spectrum (June 2026)",
            "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
          },
          {
            "label": "Webflow security team — Vibe coded apps are the new shadow IT",
            "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
          }
        ]
      },
      {
        "heading": "4. Verify access with real user roles",
        "paragraphs": [
          "Signing in establishes identity, not permission to every record. In a hypothetical purchase-request app, a requester should not be able to approve their own request or retrieve another team’s confidential request simply by changing an address. The precise rules must come from the company.",
          "Ask a reviewer to test with separate accounts and direct requests to the underlying service. Record both allowed and denied actions. These checks should cover viewing, editing, exporting and approving, not just whether a button disappears.",
          "If an agent will use the app, define its allowed actions explicitly. In our example it might draft a request but not approve it. Do not give it a shared administrator credential merely to make the demonstration work. This is recommended review practice, not a statement that Talva supplies any particular control."
        ]
      },
      {
        "heading": "5. Review credentials, dependencies and deployment",
        "paragraphs": [
          "Webflow’s baseline separates platform defaults, automated checks and security-informed review. The Canadian Cyber Centre also highlights supply-chain and information-leak risks. A successful screen demonstration does not verify these boundaries."
        ],
        "bullets": [
          "Credentials: no privileged secrets in browser code or shared prompts; identify how they are stored, scoped and revoked.",
          "Dependencies: identify the libraries and services the app relies on and who handles updates.",
          "Deployment: confirm the organisation controls the account and deliberately approves any public exposure.",
          "Data flow: identify external destinations, unnecessary copies and deletion requirements.",
          "Failure: test invalid input, duplicate submissions and a lost connection to an important system."
        ],
        "sources": [
          {
            "label": "Webflow security team — Vibe coded apps are the new shadow IT",
            "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
          },
          {
            "label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding",
            "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"
          }
        ]
      },
      {
        "heading": "6. Agree support and prove recovery",
        "paragraphs": [
          "Before the tool becomes something the team relies on, have the deputy follow the instructions to operate it. For persisted data, test the chosen recovery method rather than merely confirming that a backup setting exists. Record who can disable a malfunctioning integration.",
          "Talk Think Do distinguishes experiments, team tools and supported business systems, with controls increasing as dependence grows. Match the support arrangement to the actual consequence of downtime. A manual fallback may be enough for a small reporting tool; an approval system affecting spending needs a more deliberate plan."
        ],
        "sources": [
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          }
        ]
      },
      {
        "heading": "Worked handover: purchase requests",
        "paragraphs": [
          "This illustrative handover records the business purpose first: collecting requests, not executing payments. It names an operations owner and deputy, uses a company-controlled deployment and identifies the requester and approver roles. The reviewer checks cross-team visibility and records what happens when approval or a connection fails.",
          "The owner keeps a manual request process available while the team adopts the app. A later proposal to initiate payments is a new review trigger, not a minor screen change. The next step is to fill in the register for one existing tool and test its most consequential action before expanding it."
        ]
      }
    ],
    "faq": [
      {
        "q": "Should we ban employees from building apps with AI?",
        "a": "A prohibition alone may not meet the underlying need. Offer an approved experimental path and escalation process. Some tools or data uses may still need to be prohibited under company policy."
      },
      {
        "q": "Does every prototype need the same security review?",
        "a": "No. The NCSC recommends calibrating oversight to risk. Keep isolated experiments lightweight and escalate sensitive data, credentials, important decisions and production connections."
      },
      {
        "q": "Is single sign-on enough for an internal app?",
        "a": "No. Sign-in identifies the user. You also need to verify which records and actions that user can access, including direct requests to the underlying service."
      },
      {
        "q": "What can a small company do first?",
        "a": "Inventory one useful tool, assign an owner and deputy, document its data and connections, and verify its highest-impact action. A simple maintained register is better than an elaborate unused process."
      }
    ],
    "sources": [
      {
        "label": "NCSC — The vibe coding spectrum (June 2026)",
        "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
      },
      {
        "label": "Canadian Centre for Cyber Security — Managing security risks in vibe coding",
        "url": "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043"
      },
      {
        "label": "Webflow security team — Vibe coded apps are the new shadow IT",
        "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
      },
      {
        "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
        "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
      },
      {
        "label": "Audience question — r/devops",
        "url": "https://www.reddit.com/r/devops/comments/1td7mxp/how_are_you_securing_aigenerated_vibecoded/"
      }
    ],
    "date": "2026-11-21",
    "updated": "2026-11-22",
    "cluster": "vibe-engineering"
  },
  {
    "slug": "shadow-it-vibe-coding-era",
    "talvaFit": {
      "paragraphs": [
        "Talva is a shared platform for AI-native software, not a tool for discovering unknown apps. Its relevance to shadow IT is giving teams a common foundation for the internal apps they choose to build, instead of letting every app create its own isolated data and access conventions.",
        "Consider Talva when the company wants an approved foundation for internal tools that people and agents both use. A company knowledge graph is another example of shared context that can be built on the platform instead of recreated inside each tool. Talva is currently in private beta."
      ],
      "responsibility": "Your company still needs to find and register existing apps, assess their risks and data flows, assign owners and decide which should be retired or moved. Using a shared platform does not automatically eliminate shadow IT or make every app compliant.",
      "appSlugs": [
        "internal-tools",
        "knowledge-graph"
      ]
    },
    "title": "The new shadow IT: what happens when everyone can build apps",
    "description": "AI tools let any employee build working apps in an afternoon. Here is how that changes shadow IT, what the real risks are, and what companies are doing about it.",
    "readingTime": "7 min read",
    "answer": "AI-assisted app building adds another form of shadow IT: software employees create and run outside the organisation’s known ownership and review processes. It can live in personal hosting accounts or inside company infrastructure. Start with discovery and consequence-based triage, then give useful tools an approved path into ownership; an inventory or shared platform alone cannot eliminate the risk.",
    "keyTakeaways": [
      "Unknown staff-built apps can live inside company cloud accounts as well as external services.",
      "Use several discovery signals: no one log or inventory gives complete visibility.",
      "Prioritise sensitive data and powerful connections before harmless experiments, and address the unmet need behind each tool."
    ],
    "sections": [
      {
        "heading": "What has changed, and what has not?",
        "paragraphs": [
          "Shadow IT is not new, and AI-built apps have not replaced unapproved SaaS. What has changed is that employees can also generate custom software and infrastructure to solve a local problem. A practitioner thread asks how to handle secure deployment around hundreds of vibe-coded internal tools; that question signals a concern about scale, not proof that every company has hundreds of apps.",
          "Webflow’s security team describes an additional detection challenge: an engineer’s agent-built tool may run in the company’s own cloud account with legitimate-looking permissions and no normal review record. The authors distinguish these deployments from the familiar pattern of unauthorised SaaS sign-ups."
        ],
        "sources": [
          {
            "label": "Webflow security team — Vibe coded apps are the new shadow IT",
            "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
          },
          {
            "label": "Audience question — r/AI_Governance",
            "url": "https://www.reddit.com/r/AI_Governance/comments/1xf4xgv/how_are_people_handling_secure_deployment_around/"
          }
        ]
      },
      {
        "heading": "Why useful apps become unmanaged",
        "paragraphs": [
          "A tool may start as a personal workaround and quietly become a team dependency. A register is never created, the builder remains the only maintainer and nobody reassesses the data as its purpose expands. The issue is not whether its interface looks professional; it is whether the organisation knows what it does and who is accountable.",
          "Talk Think Do recommends a positive route into governance: approved tools and data rules, a register, and escalation when the business begins to depend on a tool. Its guidance argues that bans can push the work out of sight. This is practitioner advice, not a controlled study proving a ban always fails."
        ],
        "sources": [
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          }
        ]
      },
      {
        "heading": "How do you find apps that are not registered?",
        "paragraphs": [
          "Start by asking teams what they use, including local scripts, small web apps and automations. Explain that the initial goal is to understand their work and risks, not to punish helpful experimentation. Then compare those answers with the systems the organisation already controls.",
          "Talk Think Do identifies platform inventories, connected applications in identity systems, code repositories and expenses as useful traces. Webflow adds cloud signals such as new roles or public resources outside normal deployment activity. Treat signals as leads to investigate, not automatic evidence of wrongdoing."
        ],
        "bullets": [
          "Identity connections can reveal an app that requested work-account access, but miss tools that never use company sign-in.",
          "Hosting and cloud inventories can reveal resources in controlled accounts, but miss personal accounts and local scripts.",
          "Repositories can reveal code, but a repository alone does not tell you whether it is deployed.",
          "Expenses can reveal paid builders or hosting, but free plans and unpaid tools may leave no charge.",
          "Team conversations reveal workflow dependencies that technical inventories may not explain."
        ],
        "sources": [
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          },
          {
            "label": "Webflow security team — Vibe coded apps are the new shadow IT",
            "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
          }
        ]
      },
      {
        "heading": "Worked example: three different customer records",
        "paragraphs": [
          "This is hypothetical, not a measured company outcome. Sales builds a follow-up tool using a customer export. Operations builds a delivery dashboard with another export. Finance adds a payment-status view. Each is useful, but each now keeps a different copy of the customer name and account status.",
          "When a customer changes its details, one tool is updated and the others are not. An agent drafting a follow-up reads the older record. The problem is more than insecure hosting: the organisation cannot say which copy is authoritative or how corrections reach the other tools.",
          "A practical response is to name the authoritative customer system, identify what each tool needs to read or write and minimise unnecessary copies. A shared platform can be one architectural option. Existing systems with governed interfaces may be another. Assess the migration effort and continuity of working processes before consolidating everything."
        ]
      },
      {
        "heading": "Which unknown app should you review first?",
        "paragraphs": [
          "Use consequences to order the work. The NCSC distinguishes low-exposure prototypes from code handling authentication, sensitive personal data or credentials. That provides a better starting point than reviewing tools by age, size or the department that built them.",
          "Our recommended first pass asks whether an app is publicly reachable, has sensitive data, can change a core system or supports a process the business cannot readily do without. Restrict a clearly dangerous connection while arranging review; do not assume completing an inventory makes continued exposure acceptable.",
          "Avoid treating every unknown app as equally urgent. That can swamp reviewers and make harmless experiments look as dangerous as a tool with broad production credentials. Conversely, popularity is not evidence that a heavily used tool is safe."
        ],
        "sources": [
          {
            "label": "NCSC — The vibe coding spectrum (June 2026)",
            "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
          }
        ]
      },
      {
        "heading": "Retire, support or consolidate?",
        "paragraphs": [
          "Talk Think Do suggests reviewing and supporting a suitable tool, rebuilding it on better foundations, or replacing it. Apply that choice to the business need revealed by the app, not just to the generated code.",
          "Retire unused tools only after checking who depends on them and arranging appropriate data retention or deletion. Support useful tools that can meet the company’s requirements. Consolidate duplicated workflows when the benefit of shared data and ownership outweighs the migration cost.",
          "A common platform can reduce variation for apps that actually use it. It does not discover every existing deployment, select the correct customer record, or guarantee appropriate permissions in each app. Those remain explicit governance and engineering tasks."
        ],
        "sources": [
          {
            "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
            "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
          }
        ]
      },
      {
        "heading": "How do you know the response is working?",
        "paragraphs": [
          "Measure what the process can demonstrate. Track discovered apps with an owner and documented data flow, unresolved high-impact connections, tools with a tested fallback and repeated unmet needs that create new workarounds. These are suggested operating measures, not external benchmarks.",
          "An increasing app count can mean better discovery rather than deteriorating security. A decreasing count can mean retirement, but can also mean people stopped reporting. Pair counts with risk decisions and conversations with teams. Start with one department, map its useful tools and resolve the most consequential unknown connection."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is every employee-built AI app shadow IT?",
        "a": "No. A known app with appropriate ownership and review is not unknown software merely because AI helped build it. Registration alone still does not establish security."
      },
      {
        "q": "Can we find all apps from company sign-in logs?",
        "a": "No. Those logs help find connected apps but can miss local tools, personal hosting accounts and software deployed without company sign-in. Combine several discovery methods."
      },
      {
        "q": "Are AI-built apps always less secure?",
        "a": "No blanket comparison is established here. Assess the actual code, permissions and exposure. The NCSC recommends risk-appropriate oversight rather than rejecting AI assistance as a category."
      },
      {
        "q": "Does moving tools to one platform solve shadow IT?",
        "a": "It can provide a common foundation for tools moved there. Discovery, ownership, data decisions and app-specific review still need to happen."
      }
    ],
    "sources": [
      {
        "label": "NCSC — The vibe coding spectrum (June 2026)",
        "url": "https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development"
      },
      {
        "label": "Webflow security team — Vibe coded apps are the new shadow IT",
        "url": "https://webflow.com/blog/vibe-coded-apps-security-baseline"
      },
      {
        "label": "Talk Think Do — Governing software your staff build with AI (Nov 2026)",
        "url": "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/"
      },
      {
        "label": "Audience question — r/AI_Governance",
        "url": "https://www.reddit.com/r/AI_Governance/comments/1xf4xgv/how_are_people_handling_secure_deployment_around/"
      }
    ],
    "date": "2026-11-21",
    "updated": "2026-11-22",
    "cluster": "vibe-engineering"
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesInCluster = (cluster: string) =>
  articles.filter((a) => a.cluster === cluster);
export const relatedArticles = (article: Article, limit = 2) =>
  articlesInCluster(article.cluster).filter((a) => a.slug !== article.slug).slice(0, limit);
