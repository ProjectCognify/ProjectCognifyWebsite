// Shared content for Project Cognify.
// Devlog posts, team, and sources live here so pages stay in sync.

/** A body block is either a paragraph (string) or a pull-quote. */
export type DevlogBlock = string | { quote: string };

export interface DevlogPost {
  id: string;
  date: string;
  dateISO: string;
  title: string;
  author: string;
  excerpt: string;
  body: DevlogBlock[];
}

// Newest first — the Devlog and home page both read this order.
export const devlogPosts: DevlogPost[] = [
  {
    id: "week-22",
    date: "July 8, 2026",
    dateISO: "2026-07-08",
    title: "Week 22: Building a Home for the Project",
    author: "Jeremy",
    excerpt:
      "By the end of Phase I we had notebooks, research papers, interview notes, survey results, meeting documents, and ideas spread across different places.",
    body: [
      "By the end of Phase I we had notebooks, research papers, interview notes, survey results, meeting documents, and ideas spread across different places.",
      "We realized we needed more than a folder.",
      "We needed a place that told the story of the project.",
      "This website isn't meant to be a portfolio or a showcase.",
      "It's a record of how our thinking evolves.",
      "As we move into Phase II, we'll continue documenting the questions we ask, the decisions we make, and the evidence that shapes them.",
      "Hopefully, by the time this project is finished, someone will be able to read these pages from beginning to end and understand not just what we built, but why we built it.",
    ],
  },
  {
    id: "week-21",
    date: "July 5, 2026",
    dateISO: "2026-07-05",
    title: "Week 21: When the Evidence Changed Our Thinking",
    author: "Jonathan",
    excerpt:
      "By this point we had completed our literature review, collected survey responses, and finished our first round of interviews. One pattern kept appearing.",
    body: [
      "By this point we had completed our literature review, collected survey responses, and finished our first round of interviews.",
      "One pattern kept appearing.",
      "Our original hypothesis focused heavily on FOMO.",
      "The research pointed toward something broader.",
      "Motivation, social presence, and accountability appeared repeatedly across the literature and our own findings. Rather than asking whether FOMO improves focus, we found ourselves asking a different question:",
      {
        quote:
          "Can simply knowing that other students are working alongside you make it easier to stay engaged?",
      },
      "That isn't the same question we started with.",
      "It's probably a better one.",
      "Research is supposed to change your thinking.",
      "This was the first time we felt it happening.",
    ],
  },
  {
    id: "week-19",
    date: "June 24, 2026",
    dateISO: "2026-06-24",
    title: "Week 19: Listening Before Solving",
    author: "Jonathan",
    excerpt:
      "After weeks of preparation, our survey went live and interviews began. This was the first time we were hearing perspectives beyond our own.",
    body: [
      "After weeks of preparation, our survey went live and interviews began.",
      "This was the first time we were hearing perspectives beyond our own.",
      "Some responses confirmed things we expected.",
      "Others challenged them completely.",
      "Students talked about procrastination differently than we imagined. Some described losing focus because they felt overwhelmed. Others said they actually focused better when they knew friends were studying at the same time.",
      "The more conversations we had, the less interested we became in proving our original hypothesis.",
      "We became more interested in understanding what was actually happening.",
    ],
  },
  {
    id: "week-15",
    date: "May 28, 2026",
    dateISO: "2026-05-28",
    title: "Week 15: Why We Started Sharing Everything",
    author: "Ryan",
    excerpt:
      "One question we kept asking ourselves was whether we should wait until we had results before talking about the project. Eventually we decided not to.",
    body: [
      "One question we kept asking ourselves was whether we should wait until we had results before talking about the project.",
      "Eventually we decided not to.",
      "We launched our Instagram account because we wanted to document the process, not just the outcome.",
      "Research rarely moves in a straight line. Ideas change. Assumptions get challenged. Sometimes the most interesting part isn't the conclusion. It's how you got there.",
      "If Project Cognify was going to be about learning, then documenting that learning felt just as important as building the final product.",
    ],
  },
  {
    id: "week-12",
    date: "May 6, 2026",
    dateISO: "2026-05-06",
    title: "Week 12: Designing the Study",
    author: "Jonathan",
    excerpt:
      "Designing a survey turned out to be much harder than we expected. Writing questions isn't difficult. Writing questions that don't push people toward an answer is.",
    body: [
      "Designing a survey turned out to be much harder than we expected.",
      "Writing questions isn't difficult.",
      "Writing questions that don't accidentally push people toward a particular answer is.",
      "The same was true for interviews.",
      "Every time we thought we had a good question, we'd realize it assumed something we hadn't actually proven yet.",
      "Around the same time, we started meeting regularly as a team. Weekly discussions became less about assigning work and more about challenging each other's assumptions before moving forward.",
      "The project started feeling less like an idea and more like a real research study.",
    ],
  },
  {
    id: "week-8",
    date: "April 8, 2026",
    dateISO: "2026-04-08",
    title: "Week 8: Choosing Research Before Building",
    author: "Jonathan",
    excerpt:
      "Like most student projects, our first instinct was to start designing features. We filled pages with ideas before realizing we didn't fully understand the problem.",
    body: [
      "Like most student projects, our first instinct was to start designing features.",
      "Shared study rooms.",
      "Focus timers.",
      "Accountability systems.",
      "We filled pages with ideas before realizing we were trying to solve a problem we didn't fully understand.",
      "So we made a decision that has influenced every step since.",
      "We wouldn't build anything until we had spent time understanding the problem first.",
      "That meant reading existing research, designing surveys, conducting interviews, and letting the evidence shape whatever came next.",
      "Looking back, this was probably the most important decision we made.",
    ],
  },
  {
    id: "week-5",
    date: "March 18, 2026",
    dateISO: "2026-03-18",
    title: "Week 5: Finding the Right Team",
    author: "Jonathan",
    excerpt:
      "I knew I didn't want to work on this alone. When I shared the idea, neither of them asked what app we were going to build. They asked what we actually knew.",
    body: [
      "I knew I didn't want to work on this alone.",
      "Jeremy and Ryan had worked with me during a Game Jam the previous year. We approached problems differently, but we worked well together. More importantly, everyone was willing to challenge ideas instead of simply agreeing with them.",
      "When I shared the idea behind Project Cognify, neither of them asked what app we were going to build.",
      "They asked what we actually knew.",
      'It turned out the honest answer was "not much."',
      "That conversation ended up shaping the project more than any feature discussion we had afterward.",
    ],
  },
  {
    id: "week-3",
    date: "March 3, 2026",
    dateISO: "2026-03-03",
    title: "Week 3: Deciding It Was Worth Investigating",
    author: "Jonathan",
    excerpt:
      "For a while this was just a note in a notebook. The more I thought about it, the more it seemed like the question wasn't really about productivity.",
    body: [
      "For a while this was just a note in a notebook.",
      "The more I thought about it, the more it seemed like the question wasn't really about productivity. It sat somewhere between psychology, education, and technology, and I couldn't find a simple explanation that felt satisfying.",
      "Around the same time I started reading about attention, motivation, and the fear of missing out. The first hypothesis slowly took shape.",
      {
        quote:
          "What if the same psychological forces that keep people engaged in games could also be used, ethically, to help students stay focused while learning?",
      },
      "I still had no idea whether the hypothesis was right.",
      "The important realization was that it was testable.",
      "That felt like enough reason to keep going.",
    ],
  },
  {
    id: "week-1",
    date: "February 18, 2026",
    dateISO: "2026-02-18",
    title: "Week 1: The Question That Wouldn't Go Away",
    author: "Jonathan",
    excerpt:
      "Project Cognify started with something that didn't seem particularly important. One night, Jeremy and I stayed up until about two in the morning playing a game.",
    body: [
      "Project Cognify started with something that didn't seem particularly important.",
      "One night, Jeremy and I stayed up until about two in the morning playing a newly released Roblox update. The next day I kept thinking about how naturally those few hours had disappeared. That wasn't unusual. What felt unusual was how different that experience was from sitting down to do homework.",
      "The obvious explanation is that games are fun and homework isn't. But that answer felt incomplete. Plenty of things we enjoy still require effort, and plenty of important things never seem urgent enough to hold our attention.",
      "The question became less about games and more about attention itself.",
      {
        quote:
          "Why can some experiences keep us completely engaged while others require constant self-control?",
      },
      "I wrote the question down because I didn't have a good answer. Looking back, that was probably the moment Project Cognify started.",
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  /** Unsplash photo id (placeholder until real photos are supplied) */
  photo: string;
  bio: string[];
  quote: string;
}

export const team: TeamMember[] = [
  {
    name: "Jonathan",
    role: "Founder",
    photo: "photo-1507003211169-0a1dd7228f2d",
    bio: [
      "Jonathan started Project Cognify after asking a simple question: Why is it so easy to spend hours on a game, but so difficult to focus on homework?",
      "That question sparked the project and continues to guide its direction. He enjoys researching ideas, asking questions, and understanding how technology and human behavior influence the way we learn.",
    ],
    quote: "The best ideas usually start with a simple question.",
  },
  {
    name: "Jeremy",
    role: "Co-Founder",
    photo: "photo-1506794778202-cad84cf45f1d",
    bio: [
      "Jeremy enjoys solving problems and turning ideas into something people can actually use. As the project moves from research into design and development, he's excited to help bring the team's ideas to life.",
    ],
    quote: "Every solution starts with understanding the problem.",
  },
  {
    name: "Ryan",
    role: "Co-Founder",
    photo: "photo-1500648767791-00dcc994a43e",
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
