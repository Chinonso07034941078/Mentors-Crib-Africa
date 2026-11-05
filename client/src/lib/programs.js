// Program copy supplied by MCA in "MCA Programs" (Nov 2026). Keep wording in sync with that document.
import { cloudPhoto } from "./brandAssets";
export const PROGRAMS = [
  {
    slug: "mentorshift",
    name: "MentorShift Events",
    tagline: "A mentorship experience that challenges perspectives and inspires transformation.",
    summary: "Our mentorship experiences designed to challenge conventional thinking, promote meaningful mentorship and inspire intentional personal growth.",
    body: [
      "MentorShift is MCA's flagship mentorship initiative, designed to reshape how people understand and experience mentorship. It promotes intentional growth, meaningful mentorship relationships, accountability and personal transformation.",
    ],
    listTitle: "It operates through two experiences",
    list: [
      ["MentorShift Campus Events", "Takes mentorship conversations to tertiary institutions, equipping students and young people with insights on personal development, career growth, leadership, purpose and life beyond the classroom."],
      ["MentorShift Conference", "Brings mentors, mentees, professionals and growth-minded individuals together for meaningful conversations, practical learning and deeper engagement around the principles and practice of mentorship."],
    ],
    image: cloudPhoto("/assets/ai-mentorship.jpg", 1600),
  },
  {
    slug: "accountability-forge",
    name: "The Accountability Forge",
    tagline: "Turning intentions into consistent action.",
    summary: "An intentional growth and accountability experience that helps participants remain committed to their goals and personal development.",
    body: [
      "The Accountability Forge is a personal growth initiative designed to help individuals become more disciplined, consistent and intentional about achieving their goals.",
      "It provides a structure for setting goals, developing action plans, tracking progress and remaining accountable for personal commitments.",
      "The ultimate goal is to help participants move beyond planning and motivation towards consistent execution and measurable progress.",
    ],
    listTitle: "The structure",
    list: [["Set goals", ""], ["Develop action plans", ""], ["Track progress", ""], ["Stay accountable", ""]],
    image: cloudPhoto("/assets/ai-learning.jpg", 1600),
  },
  {
    slug: "mens-forge",
    name: "The Men's Forge",
    tagline: "Forging better men.",
    summary: "A brotherhood and men's formation initiative focused on helping men grow in character, faith, responsibility, leadership and purpose.",
    body: [
      "The Men's Forge is a men's development initiative that provides an environment for men to grow in character, faith, leadership, responsibility and purpose.",
      "Through meaningful conversations, shared experiences, spiritual development and brotherhood, it encourages men to become more intentional about their personal lives, relationships, families and responsibilities.",
    ],
    listTitle: "Focus areas",
    list: [["Character development", ""], ["Spirituality", ""], ["Leadership", ""], ["Relationships", ""], ["Financial responsibility", ""], ["Accountability", ""]],
    image: cloudPhoto("/assets/hub-community.jpg", 1600),
  },
  {
    slug: "cribtalks",
    name: "Monthly CribTalks",
    tagline: "Conversations that inspire growth.",
    summary: "Regular conversations that create room for learning, shared experiences, practical insights and meaningful discussions around life and growth.",
    body: [
      "CribTalks is MCA's monthly conversation platform, providing opportunities for learning, reflection and meaningful discussions around issues that shape our lives.",
      "Each edition explores relevant topics across personal development, leadership, relationships, career, business, spirituality and productivity.",
      "Through interactive conversations and shared experiences, participants gain practical insights, encounter new perspectives and learn from one another.",
    ],
    listTitle: "Topics we explore",
    list: [["Personal development", ""], ["Leadership", ""], ["Relationships", ""], ["Career & business", ""], ["Spirituality", ""], ["Productivity", ""]],
    image: cloudPhoto("/assets/ai-community.jpg", 1600),
  },
  {
    slug: "book-club",
    name: "MCA Book Club / Reading Challenge",
    tagline: "Read more. Learn more. Become more.",
    summary: "A reading community that encourages consistent learning, intellectual development and the practical application of knowledge.",
    body: [
      "The MCA Book Club and Reading Challenge promotes a culture of intentional reading and continuous learning within the community.",
      "Through selected reading materials, structured reading challenges and group discussions, participants develop consistent reading habits, expand their knowledge and exchange ideas.",
      "The focus goes beyond completing books to understanding, reflecting on and applying the knowledge gained.",
    ],
    listTitle: "How it works",
    list: [["Selected reading materials", ""], ["Structured reading challenges", ""], ["Group discussions", ""]],
    image: cloudPhoto("/assets/mentors-landscape.jpg", 1600),
  },
  {
    slug: "productivity-reset",
    name: "Productivity Reset",
    tagline: "Pause. Reflect. Refocus. Execute.",
    summary: "A structured opportunity to reflect, reorganise priorities, build better habits and become more intentional about execution.",
    body: [
      "Productivity Reset is an initiative designed to help individuals review their routines, reorganise their priorities and become more intentional about managing their time and responsibilities.",
      "It encourages participants to evaluate their productivity patterns, establish better habits, create practical plans and develop systems that support effective execution.",
      "The goal is to help people move from simply being busy to making meaningful progress on what matters.",
    ],
    listTitle: "What you will do",
    list: [["Evaluate your productivity patterns", ""], ["Establish better habits", ""], ["Create practical plans", ""], ["Build systems for execution", ""]],
    image: cloudPhoto("/assets/ai-impact.jpg", 1600),
  },
];

export const findProgram = (slug) => PROGRAMS.find((p) => p.slug === slug);
