---
title: "The Company World Model"
subtitle: "Your company already has a world model. It's called middle management. And it's running on hardware from 200 BC."
date: "2026-04-03"
order: 3
---

Every company above a few dozen people has the same invisible infrastructure. Not the org chart. Not the tech stack. Not the operating model printed on a slide once a year and promptly ignored. The infrastructure that actually runs the company is a distributed, human-powered representation of what is happening, where, and why.

It lives in the heads of managers. Each one holds a partial picture — what their team is building, what's blocked, who's struggling, what the priorities are, how those priorities connect to the priorities of the team next door. Their job, the actual job beneath the title, is to maintain that picture and route it. Up to leadership. Down to the team. Sideways to the adjacent function that needs context to do its own work.

This is a world model. It's just a terrible one.

---

It's terrible because it's lossy. Every time context passes through a human relay, it gets compressed. Details drop out. Nuance flattens. A fifteen-minute conversation with an engineer about a subtle infrastructure risk becomes a one-line bullet on a status report: "minor technical debt flagged." By the time it reaches the VP, the risk is invisible. By the time someone notices, it's a production incident.

It's terrible because it's slow. Information travels at the speed of calendar availability. A question asked on Monday gets discussed in a Tuesday standup, escalated in a Wednesday leadership sync, and answered in a Thursday email. Four days to route a signal that existed in full fidelity at the source the entire time.

It's terrible because it's political. Every relay is also an editor. Managers don't just compress information — they frame it. Good news travels up fast. Bad news travels up slow, repackaged, or not at all. The world model that leadership operates on is not a picture of reality. It's a picture of reality filtered through the career incentives of every person it passed through.

And it's terrible because it's ephemeral. When a manager leaves, their piece of the world model walks out with them. There is no export function. The new manager spends three to six months rebuilding the picture from scratch — asking the same questions, sitting in the same meetings, slowly assembling the same partial understanding. The company's memory has a single point of failure at every node.

This is the system that runs most of the world's companies. It is running right now, at this moment, in every organization above a hundred people on earth.

---

The phrase "world model" comes from AI, where it means a system's internal representation of its environment — the compressed understanding that allows it to predict, plan, and act. A self-driving car has a world model of the road. A language model has a world model of text. The concept is simple: you cannot act intelligently in an environment you do not understand.

Companies have always needed this. The Roman Army's nested hierarchy — eight soldiers to a tent, eighty to a century, five thousand to a legion — was a world model. Each layer's commander held a compressed representation of what was happening below and relayed it upward. The Prussian General Staff formalized it further: dedicated officers whose job was not to fight but to "support incompetent Generals, providing the talents that might otherwise be wanting among leaders and commanders." Professional world model maintainers, two centuries before the term existed.

The insight is that hierarchy was never really about authority. It was about information. Authority was the mechanism. Information routing was the function. The org chart is a diagram of how context flows, drawn as a diagram of who reports to whom.

---

So what would it look like to build this properly?

A company world model, built as a system rather than a human chain, would do four things.

It would ingest the artifacts that work produces. Not surveys. Not self-reported status updates. The actual residue of work: messages in Slack and Teams, tasks in project management tools, documents in shared drives, code commits, calendar patterns, email threads, meeting transcripts. Every company above a certain size already generates these artifacts continuously. They sit in silos, unconnected, unread by anyone with the full picture. A world model connects them.

It would map how information actually flows. Not the org chart — that's how information is supposed to flow. The real map. Which teams talk to each other. Which decisions wait in queues. Where context exists in one part of the organization but is needed in another. Where the same question gets asked repeatedly because the answer lives in someone's head and nowhere else. This is the topology of coordination overhead, made visible.

It would surface what matters without being asked. The traditional model requires a human to notice a problem, escalate it, and hope it survives the relay chain intact. A world model monitors continuously. Decision bottleneck forming in procurement — four approvals adding eleven days of latency, two of which add no decision value. Engineering and product misaligned on Q3 priorities — the roadmap says X, the sprint boards say Y. Customer complaints rising in a pattern that maps to an internal process change no one connected to the external signal. These are the findings that a consulting team delivers after six weeks. A world model delivers them in real time.

It would learn. This is the part that separates a world model from a dashboard. Dashboards display metrics. They don't understand context. A world model builds causal understanding over time. It learns that when this team's cycle time increases, it's usually because of a dependency on that team's approval queue. It learns that this executive's direct reports systematically underreport risk. It learns the difference between a healthy spike in activity and a crisis. The longer it runs, the more accurately it represents the company to itself.

---

Block is the clearest example of a company building this deliberately.

Everything at Block is remote-first, which means everything produces artifacts. Decisions, discussions, code, designs, plans, problems, progress — all recorded. That's the raw material. Their internal AI agent, Goose, now handles approximately 90% of code submissions. Dorsey has set a target of $2 million in gross profit per employee by end of 2026. He cut roughly 40% of the company's workforce and replaced the coordination those people performed with AI-mediated intelligence.

The result is a company organized around three roles instead of a management hierarchy. Individual contributors who build. Directly Responsible Individuals who own cross-cutting problems. Player-coaches who combine building with developing people. No permanent middle management layer. The world model carries the context that managers used to carry.

Block is one company with a specific structure and a specific thesis. But the underlying architecture is generalizable. Any company that produces digital artifacts — which, in 2026, is every company — generates the raw material for a world model. The question is not whether the data exists. It's whether anyone is building the system to use it.

---

There's a second world model that matters: the customer world model.

Dorsey describes this through Block's specific advantage. They see both sides of millions of transactions every day — the buyer through Cash App, the seller through Square. Every transaction is a fact about someone's financial reality. That signal compounds. Richer data, better model. Better model, more transactions. More transactions, richer data.

But the principle extends beyond fintech. Any company with deep, recurring customer interaction generates the signal for a customer world model. A logistics company sees every shipment, delay, route, and exception. A healthcare platform sees every appointment, prescription, outcome, and referral pattern. A professional services firm sees every engagement scope, delivery timeline, outcome, and client satisfaction signal.

The companies that build customer world models from this signal will understand their customers better than their customers understand themselves. The ones that don't will compete on price, brand, and hope.

---

The two world models together — company and customer — form the foundation for what Dorsey calls an intelligence layer. This is the part that replaces the coordination function of hierarchy.

In a traditional company, a product manager notices a customer trend, writes a brief, gets approval from their director, aligns with engineering leadership in a planning meeting, negotiates scope with design, and ships something three months later. The intelligence layer does this differently. It detects the customer signal in the customer world model. It matches the signal to available capabilities. It composes a response. It surfaces the recommendation to the humans at the edge who can validate, refine, and execute.

The humans don't disappear. They move to the edge — where intelligence meets reality. They handle intuition, ethics, cultural context, and high-stakes judgment. The system handles information routing, pattern detection, capability composition, and coordination. Each does what it's actually good at.

This is not automation. Automation replaces human tasks with machine tasks. This replaces a human coordination architecture with a machine coordination architecture and frees the humans to do the work that actually requires being human.

---

The objection is always the same: this sounds good for Block, or Google, or companies born digital with clean data and engineering cultures. What about a 10,000-person manufacturing company with thirty years of legacy systems and a workforce that uses email for everything?

Fair. But consider what that manufacturing company already pays for the current world model.

It pays for managers whose primary function is information relay. It pays for weekly status meetings at every level of the organization. It pays for consultants who enter the building and spend six weeks reconstructing the picture that should exist natively. It pays for misalignment between teams that don't share context. It pays for decisions that take weeks instead of days because information has to travel through five layers of human judgment.

That is the cost of not having a company world model. And it is not a line item anyone tracks, which is exactly why it persists.

The starting point is not a massive transformation. The starting point is connecting the data sources that already exist — communications, project tools, documents, calendars — and building the first layer of intelligence on top: what is actually happening in this organization, right now, that leadership cannot currently see?

That first layer alone replaces the six-week consulting engagement. Everything after that compounds.

---

The management hierarchy was the greatest organizational technology ever invented. It coordinated millions of people across continents, won wars, built railroads, created the modern corporation. It did this for two thousand years with no serious competition because no alternative information routing mechanism was powerful enough to replace it.

That constraint has lifted. Not partially. Not theoretically. Practically. The same AI systems that can read every message, every document, every project update in an organization can also build the picture that hierarchy was invented to maintain — and build it faster, with less loss, without the political filtering, and without the single points of failure.

The company world model is not a product category. It is a structural shift in how organizations understand themselves. The companies that build it will operate with a clarity that their competitors — still routing information through human chains — simply cannot match.

The hierarchy served us well. It's time to build what comes next.
