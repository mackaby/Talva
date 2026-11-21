// Drafts content-cluster briefs via Lovable AI Gateway from researched user questions + sources.
// Run: bun scripts/draft-briefs.ts  → writes src/content/briefs.json (review before publishing).
import { generateResponse } from "@lovable.dev/ai-gateway";
import { writeFileSync } from "node:fs";

const research = {
  crm: { sources: [
    ["r/revops: Looking to build our own CRM", "https://www.reddit.com/r/revops/comments/1wxoo2g/looking_to_build_our_own_crm/", "Startup on Salesforce 7 years considers replacing it with an AI-built CRM; fears future mess. Reply: the hard part is workflows, integrations, permissions, reporting."],
    ["r/CRMSoftware: Has anyone actually built their own CRM using AI?", "https://www.reddit.com/r/CRMSoftware/comments/1vbs4ze/has_anyone_here_actually_built_their_own_crm/", "Curative replaced $600K/yr Salesforce with AI-built CRM in 2 months. Asks: does AI make custom CRM practical or just shift responsibility for security, integrations, migration, maintenance? Cost, time?"],
    ["r/hubspot: Keep Salesforce/HubSpot and build AI layer on top, or build from scratch?", "https://www.reddit.com/r/hubspot/comments/1xhmbt1/keep_salesforcehubspot_as_the_crm_and_build_a/", "50-person firm, non-coder prototyping with Claude; unsure whether to build own database, accounts, permissions or keep established CRM as the data layer."],
    ["r/CRM: Custom CRM - why and when to build it", "https://www.reddit.com/r/CRM/comments/1w5djnl/custom_crm_why_and_when_to_build_it/", "CRM = database, workflows, UI, integrations; faster coding doesn't make reliable software."],
    ["r/PE_and_consulting: custom crm vs configuring salesforce", "https://www.reddit.com/r/PE_and_consulting/comments/1ties88/custom_crm_vs_configuring_salesforce_how_do_you/", "Build when data model is wrong for you or per-seat cost exceeds amortized build; common mistake is building before workflows are stable."],
  ]},
  "knowledge-graph": { sources: [
    ["Sekin: Build an Enterprise Knowledge Graph for AI Agents", "https://sekin.in/how-to-build-a-knowledge-graph-for-ai-agents-from-enterprise-data/", "Define entities, relationships, identifiers, access rules; governed pipeline linked to source records; graph is not a complete retrieval system."],
    ["Pensieve: A knowledge graph as a company brain", "https://pensieve.uk/articles/knowledge-graph-company-brain", "Most ambitious approach; biggest gap between demo and dependable system; temporal facts (when true); GraphRAG and Graphiti variants."],
    ["TigerGraph: How to Build a Knowledge Graph with LLMs", "https://www.tigergraph.com/blog/how-to-build-knowledge-graph-with-llms-for-enterprise-ai/", "Schema design before ingestion; entity resolution; vector search can't follow relationships or enforce access control."],
    ["Microsoft Learn: Create and query an entity graph", "https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-how-to-entity-graph", "Entity graph answers questions depending on connections between entities, based on an ontology."],
  ]},
  "internal-tools": { sources: [
    ["Canadian Centre for Cyber Security: Managing security risks in vibe coding", "https://www.cyber.gc.ca/en/guidance/managing-security-risks-vibe-coding-itsm60043", "Guidance for those overseeing vibe coding: code review, supply chain, information leaks, considerations before introducing it."],
    ["Tenable: Mitigate risk from AI-generated apps by citizen coders", "https://www.tenable.com/blog/how-to-secure-mitigate-ai-risk-vibe-coding-ai-apps-citizen-coders", "Unsanctioned apps bypass QA; volume overwhelms IT; governance beats bans."],
    ["Cloud Security Alliance: The Vibe Coding Governance Gap", "https://labs.cloudsecurityalliance.org/wp-content/uploads/2026/06/CSA_research_note_vibe_coding_ai_governance_gap_20260602-csa-styled.pdf", "Frameworks lack guidance for citizen-built apps; scans show pervasive missing access policies."],
    ["Talk Think Do: Governing Software Your Staff Build with AI", "https://talkthinkdo.com/guides/ai-and-code/governing-software-staff-build-with-ai/", "Approve tools, set data rules, keep a register, move depended-on tools into review and ownership; risks: data placement, security gaps, one-person-deep."],
  ]},
};

const talva = "Talva is the platform for AI-native software: a unified data layer (like Hasura DDN) where companies build internal apps with consistency, control and security. Client-agnostic: any agentic client (Codex, Claude Code, OpenCode) can build apps, and agents and humans are first-class users. Data owned by the company. Do NOT claim specific features, integrations, pricing or customers.";

const out: unknown[] = [];
for (const [slug, { sources }] of Object.entries(research)) {
  const res = await generateResponse({
    model: "openai/gpt-6-astra",
    instructions: `You are a content strategist drafting a brief for an app-type content cluster on talva.dev. ${talva} Base user questions ONLY on the sources given; never invent statistics. Return JSON only: {"slug","workingTitle","audience","searchIntent","userQuestions":[{"question","sourceUrl"}],"hubAngle","plannedGuides":[{"title","answers"}],"claimsNeedingConfirmation":[string],"sources":[{"title","url"}]}. 5-7 userQuestions, 3-4 plannedGuides.`,
    input: `Cluster slug: ${slug}\nSources:\n${sources.map(([t, u, n]) => `- ${t} (${u}): ${n}`).join("\n")}`,
  });
  let text = res.output.flatMap((o: any) => o.type === "message" ? o.content : []).filter((c: any) => c.type === "output_text").map((c: any) => c.text).join("");
  text = text.replace(/^```(json)?|```$/g, "").trim(); out.push(JSON.parse(text));
  console.log("drafted", slug);
}
writeFileSync("src/content/briefs.json", JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), model: "openai/gpt-6-astra", briefs: out }, null, 2));
