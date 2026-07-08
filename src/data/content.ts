// Shared content for Project Cognify.
// Devlog posts, team, and sources live here so pages stay in sync.

export interface DevlogPost {
  id: string;
  date: string;
  dateISO: string;
  title: string;
  author: string;
  excerpt: string;
  body: string[];
}

export const devlogPosts: DevlogPost[] = [
  {
    id: "week-14",
    date: "July 1, 2026",
    dateISO: "2026-07-01",
    title: "Week 14: First look at the survey data",
    author: "Jonathan",
    excerpt:
      "We finished collecting responses from 30 students across three grade levels last week. The numbers are more complicated than we expected — and honestly, more interesting.",
    body: [
      "We finished collecting responses from 30 students across three grade levels last week. The numbers are more complicated than we expected — and honestly, more interesting.",
      "The survey asked students to rate how often they experienced specific types of distraction during study sessions: social media notifications, background noise, nearby conversations, and internal mind-wandering. We also asked about their subjective sense of productivity and how long they could maintain focus before checking their phone.",
      "The data surprised us in two ways. First, students consistently underestimate how often they check their phones. When asked to estimate checks per hour, the median response was 4. But in the follow-up question — where we asked them to reconstruct their last study session in detail — the implied frequency was closer to 8–10. We're not sure how to interpret this gap yet. It could be inaccurate recall, or it could be that many phone checks don't register as deliberate decisions.",
      "Second, the relationship between reported anxiety and focus difficulty is stronger than we expected, but not in a clean linear way. Students who rated finals-season anxiety as 'high' or 'very high' also reported significantly shorter focus spans — but with notable exceptions. Some high-anxiety students reported surprisingly long focus spans and attributed this to what they called 'pressure-induced focus': a state where the stakes were high enough to override the pull of distraction. We want to understand this better.",
      "Jeremy is building a simple visualization of the results. Ryan is coordinating the next round of interviews. I'm going back through Twenge (2017) and a few other sources to see if the anxiety-focus pattern appears in prior literature.",
      "One thing we haven't figured out yet: how to control for the fact that our 30 respondents are all from the same school and were recruited through personal networks. The sample is almost certainly biased toward students who are already somewhat reflective about their study habits. We'll acknowledge this limitation in the paper, but I'm also wondering if there's anything we can do to partially correct for it before we're done.",
    ],
  },
  {
    id: "week-12",
    date: "June 17, 2026",
    dateISO: "2026-06-17",
    title: "Week 12: Cohort prototype, first internal test",
    author: "Jeremy",
    excerpt:
      "I got a working version of Cohort running this week. It's rough — the UI is barely styled and the real-time sync breaks if two people join too fast — but it works well enough to test the core idea.",
    body: [
      "I got a working version of Cohort running this week. It's rough — the UI is barely styled and the real-time sync breaks if two people join too fast — but it works well enough to test the core idea.",
      "The hard part, as expected, was the real-time presence layer. When someone marks themselves as focusing, everyone else in the session needs to see it within a second or so, and it has to survive people closing laptops and reopening them. I've rewritten this part twice. The first version kept state on the client and fell apart the moment two people disagreed about who was present. The current version keeps a single source of truth on the server and treats each client as a subscriber.",
      "The three of us ran a session for an hour on Sunday. It's a strange feeling — you can see two dots that say your friends are working, and that's it, and somehow that's enough to make you not want to be the one who stops. That's exactly the effect we're trying to measure, so it was encouraging to feel it ourselves. But three friends who built the thing are the worst possible test subjects, so I'm not reading much into it yet.",
    ],
  },
  {
    id: "week-10",
    date: "June 3, 2026",
    dateISO: "2026-06-03",
    title: "Week 10: Reading Twenge, rethinking our hypothesis",
    author: "Jonathan",
    excerpt:
      "We've been reading more seriously into the academic literature this month. Jean Twenge's work on generational attention changes is directly relevant, but it also raises some uncomfortable questions about our initial framing.",
    body: [
      "We've been reading more seriously into the academic literature this month. Jean Twenge's work on generational attention changes is directly relevant, but it also raises some uncomfortable questions about our initial framing.",
      "Our original hypothesis leaned hard on the idea that smartphones are the primary cause of declining adolescent focus. The more we read, the less confident we are that the evidence supports a claim that strong. Odgers and others make a careful case that a lot of the smartphones-ruin-teenagers literature overstates causation from correlational data. We don't want to make the same mistake in the other direction.",
      "So we're softening the framing. Instead of 'phones are the cause,' we're asking a narrower and more answerable question: does shared social presence improve focus, independent of whatever is causing focus to be hard in the first place? That question doesn't require us to settle the phones debate, which is good, because we're not going to settle it.",
    ],
  },
  {
    id: "week-8",
    date: "May 20, 2026",
    dateISO: "2026-05-20",
    title: "Week 8: Outreach update and what actually got people to respond",
    author: "Ryan",
    excerpt:
      "Getting 30 students to complete a 12-question survey turned out to be harder than expected. Here's what worked and what didn't, in case it's useful to anyone.",
    body: [
      "Getting 30 students to complete a 12-question survey turned out to be harder than expected. Here's what worked and what didn't, in case it's useful to anyone.",
      "What didn't work: posting a link in group chats. People say they'll do it and then don't. A link with no face attached to it is the easiest thing in the world to ignore. Our completion rate from cold links was somewhere under 10 percent.",
      "What worked: asking people directly, in person, and waiting while they did it. Almost everyone who started the survey with me standing there finished it. That's not scalable and it's not glamorous, but it's the honest answer. The other thing that helped was being clear that we're students doing this ourselves, not a company harvesting data. People relaxed once they understood that.",
    ],
  },
  {
    id: "week-6",
    date: "May 6, 2026",
    dateISO: "2026-05-06",
    title: "Week 6: Defining what we mean by 'focus'",
    author: "Jonathan",
    excerpt:
      "Before we could write a survey, we had to agree on what we were actually measuring. It took us about three weeks to realize we were using the word 'focus' to mean three different things.",
    body: [
      "Before we could write a survey, we had to agree on what we were actually measuring. It took us about three weeks to realize we were using the word 'focus' to mean three different things.",
      "One of us meant duration: how long you can stay on a task. One meant depth: how absorbed you are while you're on it. One meant resistance: how well you shrug off an interruption and get back. These are related but they are not the same thing, and a survey question that blurs them gives you data you can't interpret.",
      "We ended up writing separate questions for each, and being explicit in the paper about which one we mean where. It felt slow at the time. It's the single most useful thing we did in the first two months.",
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  /** Unsplash photo id (placeholder until real photos are supplied) */
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Jonathan",
    role: "Research Lead",
    photo: "photo-1507003211169-0a1dd7228f2d",
    bio: "I'm a junior who started thinking about this after noticing how differently I could focus depending on whether I was studying alone or with other people nearby. That observation felt worth investigating seriously. My responsibilities include designing the survey instrument, coordinating the literature review, and writing the final paper. I've never done formal research before this. I'm learning as I go, and I try to be honest in the devlog about what I don't know yet.",
  },
  {
    name: "Jeremy",
    role: "Engineering Lead",
    photo: "photo-1506794778202-cad84cf45f1d",
    bio: "I've been coding since eighth grade, mostly self-taught through projects. Building Cohort is the most technically demanding thing I've done — real-time state synchronization is harder than it sounds, and I've rewritten the sync layer twice already. I'm keeping a log of technical decisions in the devlog, because I think that's part of the research record even if it isn't the main focus. When the project is done, the code will be open source.",
  },
  {
    name: "Ryan",
    role: "Outreach Lead",
    photo: "photo-1500648767791-00dcc994a43e",
    bio: "I handle participant recruitment, communications, and keeping us connected to the students we're studying. Getting 30 people to fill out a survey sounds straightforward and is not. A lot of my work is explaining the project honestly — we're students doing this ourselves, not affiliated with any university. I also manage our Instagram, which I update when there's something worth reporting rather than on a fixed schedule.",
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
