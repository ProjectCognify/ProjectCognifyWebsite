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
    id: "finding-a-home",
    date: "July 2026",
    dateISO: "2026-07-08",
    title: "Finding a Home for Project Cognify",
    excerpt:
      "By the end of Phase I, we had research findings, survey results, interview notes, meeting notes and ideas scattered across notebooks, Google Docs, and different folders.",
    body: [
      "By the end of Phase I, we had research findings, survey results, interview notes, meeting notes and ideas scattered across notebooks, Google Docs, and different folders.",
      "We realized we needed more than a place to store files. We needed a place that told the story of the project.",
      "This website isn't meant to be a portfolio or a showcase. It's a record of how our thinking evolves as we move from questions to research, and eventually to building and testing.",
      "As we begin Phase II, we'll continue documenting the questions we ask, the decisions we make, and the evidence behind them.",
      "Our hope is that, by the time Project Cognify is complete, someone can read these pages from beginning to end and understand not only what we built, but why we built it.",
    ],
  },
  {
    id: "hypothesis-change",
    date: "July 2026",
    dateISO: "2026-07-05",
    title: "How the Research Changed Our Hypothesis",
    excerpt:
      "By this point, we had completed our literature review and collected responses from our student survey. As we looked at everything together, one pattern kept appearing.",
    body: [
      "By this point, we had completed our literature review and collected responses from our student survey. As we looked at everything together, one pattern kept appearing.",
      "Our original hypothesis focused heavily on FOMO. But the research pointed us toward something broader.",
      "Words like motivation, social presence, and accountability showed up repeatedly, both in the academic literature and in what students shared with us. The more evidence we gathered, the more we realized our original question might have been too narrow.",
      "Instead of asking,",
      { quote: "Can FOMO help students stay focused?" },
      "we found ourselves asking a different question:",
      {
        quote:
          "Can simply knowing that other students are working alongside you make it easier to stay engaged?",
      },
      "That became the focus of our next phase of research.",
      "One thing we've learned so far is that research isn't about proving your original idea. It's about following the evidence, even when it leads you somewhere unexpected.",
      "This became our second hypothesis.",
    ],
  },
  {
    id: "survey-findings",
    date: "June 2026",
    dateISO: "2026-06-15",
    title: "What We Found in the Survey Findings",
    excerpt:
      "After weeks of preparation, our survey finally went live. This was the first time we were hearing perspectives beyond our own.",
    body: [
      "After weeks of preparation, our survey finally went live.",
      "This was the first time we were hearing perspectives beyond our own.",
      "Some responses confirmed what we expected. Others challenged our assumptions completely.",
      "Many students described procrastination in ways we hadn't considered. Some said they lost focus because they felt overwhelmed or didn't know where to start. Others told us they actually focused better when they knew their friends were studying at the same time, even if they weren't studying together.",
      "The more responses we read, the less interested we became in proving our original hypothesis.",
      "Instead, we found ourselves asking better questions and trying to understand what was really happening.",
    ],
  },
  {
    id: "sharing-everything",
    date: "May 2026",
    dateISO: "2026-05-20",
    title: "Why We Started Sharing Everything",
    excerpt:
      "One question we kept asking ourselves was whether we should wait until we had results before talking about the project. In the end, we decided not to.",
    body: [
      "One question we kept asking ourselves was whether we should wait until we had results before talking about the project.",
      "In the end, we decided not to.",
      "We started our Instagram because we wanted to document the whole process, not just the finished product. That means sharing the questions we're asking, the ideas that don't work out, the things that surprise us, and the moments that change how we think.",
      "Research doesn't always go the way you expect. Sometimes you end up with a completely different question than the one you started with, and that's part of the process.",
      "Project Cognify is about learning. We think sharing that learning is just as important as whatever we end up building.",
      "Hopefully, by sharing our journey, other students can follow along, learn something new, or maybe even get inspired to start a project of their own.",
    ],
  },
  {
    id: "designing-survey",
    date: "May 2026",
    dateISO: "2026-05-05",
    title: "Designing the Survey",
    excerpt:
      "Designing a survey turned out to be much harder than we expected. Writing questions isn't difficult. Writing questions that don't push people toward an answer is.",
    body: [
      "Designing a survey turned out to be much harder than we expected.",
      "Writing questions isn't difficult. Writing questions that don't accidentally push people toward a particular answer is.",
      "Every time we thought we had a good question, we'd realize it assumed something we hadn't actually proven yet.",
      "Around the same time, we started meeting regularly as a team. I drafted the survey questions, and Jeremy and Ryan gave input that sharpened them. Weekly discussions became less about assigning work and more about challenging each other's assumptions before moving forward.",
      "The project started feeling less like an idea and more like a real research study.",
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
      "So we made a decision that has influenced every step since: we wouldn't build anything until we had spent time understanding the problem first.",
      "That meant reading existing research, designing surveys, conducting interviews, and letting the evidence shape whatever came next, even when the research wasn't fun.",
      "Looking back, this was probably the most important decision we made.",
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
      "After brainstorming a long list of possibilities, Jeremy brought up the idea and we landed on Project Cognify. We liked that it reflected what we were trying to understand. Not just productivity, but how people think, focus, and stay engaged.",
      "Around the same time, Jeremy also designed our first logo.",
      "For the first time, the project felt real.",
      "It no longer felt like an interesting idea we talked about after school. It felt like something we were genuinely committed to building, researching, and sharing with others.",
      "That was the moment we realized Project Cognify had become more than a conversation. It had become something worth investing our time in.",
    ],
  },
  {
    id: "team-together",
    date: "March 2026",
    dateISO: "2026-03-20",
    title: "Getting the Team Together",
    excerpt:
      "I knew I wanted to work with a team. When I shared the idea, neither of them asked what app we were going to build. They asked what we actually knew.",
    body: [
      "I knew I wanted to work with a team.",
      "Jeremy and Ryan had worked with me during a game jam the previous year. We approached problems differently, but we worked well together. More importantly, everyone was willing to challenge ideas instead of simply agreeing with them.",
      "When I shared the idea behind Project Cognify, neither of them asked what app we were going to build.",
      "They asked what we actually knew.",
      'It turned out the honest answer was "not much."',
      "In that moment, I knew they understood.",
      "That conversation ended up shaping the project more than any feature discussion we had afterward.",
    ],
  },
  {
    id: "worth-investigating",
    date: "March 2026",
    dateISO: "2026-03-05",
    title: "Was It Worth Investigating?",
    excerpt:
      "It was just an idea at first. Over time I started to consider it more and more until it eventually became something I wanted to act on.",
    body: [
      "It was just an idea at first.",
      "Over time I started to consider it more and more until it eventually became something I wanted to do something about.",
      "Because of this new desire for action I started reading about attention, motivation, and the fear of missing out. My first hypothesis slowly took shape.",
      {
        quote:
          "What if the same psychological forces that keep people engaged in games could also be used to help students stay focused while learning?",
      },
      "The hypothesis felt right at the time, but I had to make sure it was correct.",
    ],
  },
  {
    id: "how-it-started",
    date: "February 2026",
    dateISO: "2026-02-15",
    title: "How It All Started",
    excerpt:
      "Project Cognify started with a game night. One night, Jeremy and I stayed up until 2 AM playing a newly released game.",
    body: [
      "Project Cognify started with a game night.",
      "One night, Jeremy and I stayed up until 2 AM playing a newly released game. Afterward, I kept thinking about how those hours had just disappeared. Hours of studying never felt like that.",
      {
        quote:
          "Why do some things hold our attention effortlessly, while others take everything we have?",
      },
      "That question was probably the moment Project Cognify started.",
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  quote: string;
}

export const team: TeamMember[] = [
  {
    name: "Jonathan",
    role: "Founder",
    bio: [
      "Jonathan started Project Cognify after asking a simple question: Why is it so easy to spend hours on a game, but so difficult to focus on homework?",
      "That question sparked the project and continues to guide its direction. He enjoys researching ideas, asking questions, and understanding how technology and human behavior influence the way we learn.",
    ],
    quote: "The best ideas usually start with a simple question.",
  },
  {
    name: "Jeremy",
    role: "Co-Founder",
    bio: [
      "Jeremy enjoys solving problems and turning ideas into something people can actually use. As the project moves from research into design and development, he's excited to help bring the team's ideas to life.",
    ],
    quote: "Every solution starts with understanding the problem.",
  },
  {
    name: "Ryan",
    role: "Co-Founder",
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
