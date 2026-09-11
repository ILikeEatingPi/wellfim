export interface Pillar {
  letter: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  points: { title: string; text: string }[];
  image: string;
  alt: string;
  checklistDesc: string;
}

export const CHOICE_PILLARS: Pillar[] = [
  {
    letter: "C",
    title: "Calm",
    subtitle: "Reset & Restore",
    tagline: "Restlessness is a signal.",
    description:
      "When a computer freezes, restarting often solves the problem. The same is true of us: sleep and vacation are the body's reset. When the signal is lost, we find the root cause and restore the communication. When the power goes out, we reset the breaker. Chill out — calm down with relaxing music, meditation, and trust in God. Vacation. Recreation. Restoration.",
    points: [
      {
        title: "Rest as reset",
        text: "Sleep and vacation restore the body the way a restart clears a frozen machine.",
      },
      {
        title: "Find the root cause",
        text: "Don't silence the signal — investigate it, then restore communication.",
      },
      {
        title: "Calm the mind",
        text: "Relaxing music, meditation, and trust in God quiet the noise.",
      },
    ],
    image:
      "https://vibe.filesafe.space/1786729719531050823/assets/70d11ad4-c740-4edc-9f39-08ea9461c8a5.png",
    alt: "Boy resting with praying hands looking out window to a calm lake",
    checklistDesc: "Rest, Meditate & Restart",
  },
  {
    letter: "H",
    title: "Hydrate",
    subtitle: "Pure Water Within",
    tagline: "Water is life's first medicine.",
    description:
      "Hydrate with pure water — not coffee or soft drinks, which defeat the purpose. Add hydrotherapy with hot and cold shower contrast to stimulate circulation and awaken the body's own healing rhythm. Clean water flushes toxins, carries nutrients, and keeps every cell doing its work.",
    points: [
      {
        title: "Pure water first",
        text: "Coffee and soft drinks defeat the purpose — choose clean water.",
      },
      {
        title: "Hydrotherapy",
        text: "Hot and cold shower contrast boosts circulation and vitality.",
      },
      {
        title: "Cellular transport",
        text: "Water carries nutrients in and flushes toxins out.",
      },
    ],
    image:
      "https://vibe.filesafe.space/1788226803858169228/assets/2ba9899b-7484-4b88-aae4-03352ead6696.png",
    alt: "Grandfather and grandson actively drinking water from clear sports glass bottles with the wellFIM logo (golden neuron arching over the wellFIM wordmark) on them, caps off, the boy mirroring the grandfather's gesture",
    checklistDesc: "Water is life's first medicine.",
  },
  {
    letter: "O",
    title: "Optimize",
    subtitle: "Your Lifestyle & Nutrition",
    tagline: "Overload on nutrients, not on empty calories.",
    description:
      "Optimize the lifestyle — starting with nutrition. Overload on real nutrients and watch out for naked sugars, allergens, and toxins. As Dr. Fuhrman teaches, a nutrient-dense diet crowds out disease. Fill the plate with greens, berries, beans, nuts, and seeds so the body has everything it needs to repair itself.",
    points: [
      {
        title: "Nutrient density",
        text: "Overload on nutrients — greens, berries, beans, nuts, and seeds.",
      },
      {
        title: "Beware naked sugars",
        text: "Stripped sugars spike and crash; whole foods sustain.",
      },
      {
        title: "Avoid allergens & toxins",
        text: "Read the body's signals and remove what harms it.",
      },
    ],
    image:
      "https://vibe.filesafe.space/1786729719531050823/assets/1a0c7f58-6537-42e8-8935-4cfdd4f92954.png",
    alt: "Abundant spread of fresh colorful vegetables and fruits",
    checklistDesc: "Overload on nutrients, not on empty calories.",
  },
  {
    letter: "I",
    title: "Invest",
    subtitle: "Smart in What Builds You Up",
    tagline: "Quality ingredients that build, not tear down.",
    description:
      "Invest smart in quality ingredients that build you up rather than tear you down. Choose foods, habits, and pleasures that nourish and strengthen — like nice cream instead of ice cream. Avoid what steals what it promises: alcohol, recreational drugs, and naked indulgences. Set a conscious bar: enjoy the gift, but never let the gift become the master. Discipline and delight are partners, not enemies.",
    points: [
      {
        title: "Build up, don't tear down",
        text: "Choose quality ingredients — in food, sleep, and exercise — that strengthen you.",
      },
      {
        title: "Avoid what steals",
        text: "Alcohol and recreational drugs promise much and take more.",
      },
      {
        title: "A conscious bar",
        text: "Nice cream over ice cream — enjoy the gift without becoming its servant.",
      },
    ],
    image:
      "https://vibe.filesafe.space/1786729719531050823/assets/15dd4f25-c3c7-40fa-bca0-68bce63b90a4.png",
    alt: "Girl enjoying healthy fruit nice cream with mom",
    checklistDesc: "Quality ingredients that build, not tear down.",
  },
  {
    letter: "C",
    title: "Connect",
    subtitle: "Create Community",
    tagline: "We heal in relationship.",
    description:
      "Communicate, create community, foster trust, and laugh. Isolation starves the spirit; connection feeds it. Speak honestly, listen deeply, and let laughter be medicine. Trust is built one kept promise at a time — and a trusted circle is one of the strongest predictors of a long, healthy life.",
    points: [
      {
        title: "Create community",
        text: "Belonging is a biological need, not a luxury.",
      },
      {
        title: "Foster trust",
        text: "Trust is built one kept promise at a time.",
      },
      {
        title: "Laugh",
        text: "Laughter is medicine — it lowers stress and lifts the heart.",
      },
    ],
    image:
      "https://vibe.filesafe.space/1786729719531050823/assets/ab144ec1-f2fb-49d7-a1b2-5a96a5a20be9.png",
    alt: "Group of friends laughing at a sunlit garden table",
    checklistDesc: "We heal in relationship.",
  },
  {
    letter: "E",
    title: "Exercise",
    subtitle: "Move in Fresh Air",
    tagline: "Circulation is the goal.",
    description:
      "Exercise in fresh air and sunshine — gardening counts. But watch your posture, your shoes, and tight socks or belt that restrict flow. The goal is to improve circulation of the blood, to bring nutrition and oxygen to the cells, to drain the lymph, and to expel toxins. Movement is how the body cleans itself.",
    points: [
      {
        title: "Fresh air & sunshine",
        text: "Move outdoors — gardening is medicine in motion.",
      },
      {
        title: "Mind the restrictions",
        text: "Posture, shoes, tight socks or belt can choke circulation.",
      },
      {
        title: "Circulate & cleanse",
        text: "Blood delivers nutrients and oxygen; lymph drains toxins.",
      },
    ],
    image:
      "https://vibe.filesafe.space/1786729719531050823/assets/72c69913-b2f2-49a5-8d61-f046668e4596.png",
    alt: "Person gardening in fresh air and sunshine",
    checklistDesc: "Circulation is the goal.",
  },
];
