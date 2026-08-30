// Shared content for Project Cognify.
// Devlog posts, team, and sources live here so pages stay in sync.

/** A body block is either a paragraph (string) or a pull-quote. */
export type DevlogBlock = string | { quote: string };

export interface DevlogPost {
  id: string;
  date: string;
  dateISO: string;
  title: string;
  author?: string;
  excerpt: string;
  body: DevlogBlock[];
}

// Newest first — the Devlog and home page both read this order.
export const devlogPosts: DevlogPost[] = [
    {
    id: "working-on-cohort",
    date: "August 2026",
    dateISO: "2026-08-30",
    title: "What We've Been Doing This Summer",
    excerpt:
      "Concerning Cohort, its release, and what we'll do afterwards.",
    body: [
      "Here at Project Cognify, we've been hard at work working on Cohort; A video call service dedicated to helping students study as best they can utilizing FOMO.",
      "We haven't had much time this summer, but it's getting closer to the point where we can release an Alpha version of the product confidently everyday. Already, we've gone over multiple versions of prototypes to build and ideas to test out. (All backed by research of course.)",
      "After the Alpha version releases sometime in September to October, we plan to start testing it to see if using it has any actual results. Due to testing reasons, we plan to make this invite-only when it releases.",
      "To elaborate on the previously stated testing, this would be the start of Phase III, where multiple people would be tested using cohort for research concerning if Cohort could have any real world usage.",
      "We cannot provide a specific date of release at this time, so thank you for your continued patience.",
    ],
  },
  {
    id: "finding-a-home",
    date: "July 2026",
    dateISO: "2026-07-08",
    title: "Finding a Home for Project Cognify",
    excerpt:
      "By the end of Phase I, our research findings, survey results, interview notes, and half-finished ideas were scattered across three different Google Docs folders and a stack of notebooks.",
    body: [
      "By the end of Phase I, our research findings, survey results, interview notes, and half-finished ideas were scattered across three different Google Docs folders and a stack of notebooks. None of us could find anything anymore.",
      "What we actually needed wasn't better file organization. It was somewhere that could hold the story of the project, not just the files.",
      "So this site isn't really a portfolio. It's closer to a running record of how our thinking has changed as we've gone from asking questions to running a survey to (eventually) building something.",
      "Phase II starts now, and we're planning to keep writing this stuff down as we go, even the parts that don't make us look like we knew what we were doing.",
      "If it works, someone should be able to read this front to back later and understand not just what Cohort ended up being, but why it ended up that way.",
    ],
  },
  {
    id: "hypothesis-change",
    date: "July 2026",
    dateISO: "2026-07-05",
    title: "How the Research Changed Our Hypothesis",
    excerpt:
      "By this point we'd finished the literature review and had responses back from the survey. Once we actually sat down and looked at it all together, one pattern kept showing up.",
    body: [
      "By this point we'd finished the literature review and had responses back from the survey. Once we actually sat down and looked at it all together, one pattern kept showing up, and it wasn't the one we went in looking for.",
      "We'd built our original hypothesis around FOMO, but the data didn't really back that up. Motivation and something closer to social presence kept coming up instead, in the papers and in what students told us.",
      "So the question shifted. We started out asking",
      { quote: "Can FOMO help students stay focused?" },
      "and ended up asking something closer to",
      {
        quote:
          "Can simply knowing that other students are working alongside you make it easier to stay engaged?",
      },
      "which became the focus for the next phase.",
      "Neither of us loved dropping the original idea, honestly — we'd been talking about it for months. But the whole point of doing the research first was to let it change our minds if it needed to, and apparently it needed to.",
    ],
  },
  {
    id: "survey-findings",
    date: "June 2026",
    dateISO: "2026-06-15",
    title: "What We Found in the Survey Findings",
    excerpt:
      "After weeks of drafting and redrafting questions, our survey finally went live, and for the first time we were hearing opinions that weren't our own.",
    body: [
      "After weeks of drafting and redrafting questions, our survey finally went live, and for the first time we were hearing opinions that weren't our own.",
      "Some of it confirmed what we expected. A lot of it didn't. Students described losing focus in ways we hadn't really thought about — feeling overwhelmed, not knowing where to start, or (the one that surprised us) actually focusing better just knowing their friends were studying at the same time, even without talking to them.",
      "By the time we'd read through most of the responses, we'd basically stopped caring whether our original hypothesis was right. We were more interested in the questions the answers were raising.",
    ],
  },
  {
    id: "sharing-everything",
    date: "May 2026",
    dateISO: "2026-05-20",
    title: "Why We Started Sharing Everything",
    excerpt:
      "We went back and forth on whether to wait until we had actual results before posting anything about the project. We decided waiting didn't make much sense.",
    body: [
      "We went back and forth on whether to wait until we had actual results before posting anything about the project. We decided waiting didn't make much sense.",
      "The Instagram exists because we wanted people to see the process, not just whatever we end up shipping — the dead-end ideas, the surveys we had to redo, the stuff that surprised us along the way.",
      "Research doesn't move in a straight line. Sometimes you end up with a totally different question than the one you started with, and we'd rather show that messiness than hide it.",
      "If someone reading this ends up learning something from watching us mess around with a research project, or wants to go start their own, that's honestly as good an outcome as Cohort actually working.",
    ],
  },
  {
    id: "designing-survey",
    date: "May 2026",
    dateISO: "2026-05-05",
    title: "Designing the Survey",
    excerpt:
      "I figured writing a survey would take an afternoon. It took closer to three weeks, mostly because every question I wrote turned out to be leading people toward an answer without my noticing.",
    body: [
      "I figured writing a survey would take an afternoon. It took closer to three weeks, mostly because every question I wrote turned out to be leading people toward an answer without my noticing — I'd reread something and realize it only made sense if you already assumed FOMO was the answer.",
      "This is also around when we started actually meeting on a regular schedule instead of just texting whenever. I'd bring a draft, and Jeremy and Ryan would pick it apart, less \"good job\" and more \"wait, why are you assuming that.\"",
      "It stopped feeling like a group project and started feeling like we were actually trying to find something out.",
    ],
  },
  {
    id: "research-before-building",
    date: "April 2026",
    dateISO: "2026-04-20",
    title: "Choosing Research Before Building",
    excerpt:
      "Like most student projects, our first instinct was to start making a product. But without a confirmed problem, none of those ideas would go anywhere.",
    body: [
      "Like most student projects, our first instinct was to start making a product.",
      "Idle, action, puzzle, strategy, plenty of fun game ideas came to mind.",
      "But we realized that without a confirmed problem, none of those ideas would go anywhere.",
      "So we made a call that ended up shaping everything after it: no building until we actually understood the problem. That meant reading research, writing survey questions, and doing interviews before touching any code, which was a lot less fun than it sounds.",
      "It's slowed us down more than once since then, and it's still the one call from this whole project I wouldn't take back.",
    ],
  },
  {
    id: "naming-the-project",
    date: "April 2026",
    dateISO: "2026-04-05",
    title: "Giving the Project a Name",
    excerpt:
      "For the first few weeks, we called it Project Focus. As the idea became more defined, we realized it deserved its own identity.",
    body: [
      'For the first few weeks, we called it Project Focus. Whenever we talked about it, we just called it "the focus project."',
      "As the idea became more defined, we realized it deserved its own identity.",
      "We went through a long, mostly bad list of name ideas before Jeremy suggested Cognify, and it stuck. It fit what we were actually trying to understand — less about productivity hacks, more about how people think and stay engaged.",
      "Jeremy also put together our first logo around then, which is when this stopped feeling like something we talked about after school and started feeling like a real commitment.",
    ],
  },
  {
    id: "team-together",
    date: "March 2026",
    dateISO: "2026-03-20",
    title: "Getting the Team Together",
    excerpt:
      "I didn't want to do this alone, so the first person I called was Jeremy, and the two of us called Ryan before we'd even really decided what we were building.",
    body: [
      "I didn't want to do this alone, so the first person I called was Jeremy, and the two of us called Ryan before we'd even really decided what we were building. We'd worked together on a game jam the year before, and even though we don't think about problems the same way at all, none of us were the type to just nod along with whatever someone else said.",
      "When I actually explained the idea, neither of them asked what app we were going to build. Ryan just asked what we actually knew about the problem so far. The honest answer was \"not much,\" and somehow that was the answer that made me want to keep going with them specifically.",
      "That one conversation probably shaped the project more than any single feature discussion we've had since.",
    ],
  },
  {
    id: "worth-investigating",
    date: "March 2026",
    dateISO: "2026-03-05",
    title: "Was It Worth Investigating?",
    excerpt:
      "For a couple of weeks it was just something I brought up occasionally, not really a project. Then I started actually reading about it, and it turned into one.",
    body: [
      "For a couple of weeks it was just something I brought up occasionally, not really a project. Then I started actually reading about it, and it turned into one.",
      "I went down a rabbit hole on attention, motivation, and FOMO specifically, since that's the angle that made the most intuitive sense to me at the time.",
      {
        quote:
          "What if the same psychological forces that keep people engaged in games could also be used to help students stay focused while learning?",
      },
      "That was the hypothesis I started with. It felt obviously right at the time, which in hindsight probably should have made me more suspicious of it, not less.",
    ],
  },
  {
    id: "how-it-started",
    date: "February 2026",
    dateISO: "2026-02-15",
    title: "How It All Started",
    excerpt:
      "Jeremy and I stayed up until 2 AM playing a newly released game one night, and the next morning I couldn't stop thinking about how those hours had just disappeared.",
    body: [
      "Jeremy and I stayed up until 2 AM playing a newly released game one night, and the next morning I couldn't stop thinking about how those hours had just disappeared. I've never once lost track of time studying like that.",
      {
        quote:
          "Why do some things hold our attention effortlessly, while others take everything we have?",
      },
      "That's the question I couldn't shake, and it's basically where this whole thing started.",
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string[];
  quote: string;
}

export const team: TeamMember[] = [
  {
    name: "Jonathan",
    role: "Founder",
    focus: "Research • Ideas • Writing",
    bio: [
      "Jonathan started Project Cognify after asking a simple question: Why is it so easy to spend hours on a game, but so difficult to focus on homework?",
      "That question sparked the project and continues to guide its direction. He enjoys researching ideas, asking questions, and understanding how technology and human behavior influence the way we learn.",
    ],
    quote: "The best ideas usually start with a simple question.",
  },
  {
    name: "Jeremy",
    role: "Co-Founder",
    focus: "Engineering • Design • Building",
    bio: [
      "Despite challenges he faces during building and design, Jeremy attempts to reach a result molded around his team's ideas. He attempts to take the miniscule aspects of the design into consideration, as well as pouring hours into the development of the project. Overall, Jeremy is a hardworking yet capable individual who strives to put his all into the project.",
    ],
    quote: "Keep reaching toward your goals, they're (most likely) never too far out of reach.",
  },
  {
    name: "Ryan",
    role: "Co-Founder",
    focus: "Outreach • Interviews • Communication",
    bio: [
      "Ryan enjoys working with people and sharing ideas. He helps document the team's progress, gather feedback, and communicate what Project Cognify is learning along the way.",
    ],
    quote: "Learning is better when you share the journey.",
  },
];

export interface Source {
  citation: string;
  note: string;
}

export const sources: Source[] = [
  {
    citation:
      "Twenge, J. M. (2017). iGen: Why today's super-connected kids are growing up less rebellious, more tolerant, less happy — and completely unprepared for adulthood. Atria Books.",
    note: "Relevant for generational attention data. Twenge's methods are disputed — Odgers (2018) offers a direct critique we're taking seriously. We're using this as background context, not as primary evidence.",
  },
  {
    citation:
      "Zajonc, R. B. (1965). Social facilitation. Science, 149(3681), 269–274.",
    note: "The foundational paper on social facilitation. Zajonc shows that the presence of others improves performance on simple tasks and impairs it on novel/complex ones. We're thinking about where exam studying falls on that spectrum and how it affects our hypothesis.",
  },
  {
    citation:
      "Kirschner, P. A., & De Bruyckere, P. (2017). The myths of the digital native and the multitasker. Teaching and Teacher Education, 67, 135–142.",
    note: "Argues that digital natives don't multitask more effectively than older generations — they just do it more. Directly relevant to our framing around phone use and study performance.",
  },
  {
    citation:
      "Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. Theory Into Practice, 41(2), 64–70.",
    note: "Useful background on self-regulated learning theory. Drawing on this for the interview instrument, specifically questions about how students monitor their own focus states.",
  },
  {
    citation:
      "Odgers, C. L., & Jensen, M. R. (2020). Annual research review: Adolescent mental health in the digital age. Journal of Child Psychology and Psychiatry, 61(3), 336–348.",
    note: "A measured counterweight to some of the stronger causal claims in the smartphones-and-adolescents literature. Useful for keeping our own claims appropriately hedged.",
  },
];
