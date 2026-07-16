/**
 * The three Akan sub-groups featured on the Home page's "Community" section.
 * Content is drawn from the project brief. Each community renders as an
 * expandable "drop-box" card (History, Cultural Practices, Traditional Games,
 * Notable Landmarks, Location).
 */

export interface Community {
  /** URL/anchor id, e.g. "akyem" → /#akyem */
  id: string;
  /** Full state/kingdom name. */
  name: string;
  /** The community town used as the drop-box label, e.g. "Kade". */
  town: string;
  region: string;
  capital: string;
  /** Accent colour that themes the card. */
  accent: string;
  /** One-line summary shown under the name. */
  intro: string;
  history: string;
  culturalPractices: string[];
  traditionalGames: string[];
  notableLandmarks: string[];
  /** Human-readable location line. */
  location: string;
}

export const communities: Community[] = [
  {
    id: "akyem",
    name: "Akyem Abuakwa State",
    town: "Kade",
    region: "Eastern Region",
    capital: "Kyebi",
    accent: "#1E824C",
    intro:
      "One of the most powerful and historical regions in Ghana, known for its rich culture and strong heritage.",
    history:
      "The Akyem people are part of the Akan ethnic group and have played a significant role in Ghana's history, especially during the European trade network. They were known for their fierce warriors and rich traditions that have been preserved for centuries.",
    culturalPractices: [
      "Traditional Adinkra symbols in art and clothing",
      "Sacred forest preservation",
      "Annual Ohum Festival celebrations",
      "Traditional drumming and dancing ceremonies",
    ],
    traditionalGames: [
      "Kuropɛ (Hopscotch)",
      "Ampe (Jumping Game)",
      "Kurodom (Capture Community)",
      "Kwasiada Frankaa (Sunday Flag)",
      "Antoakyire (Circle Game)",
      "Asɔ (Catch and Throw)",
      "Dua ooo Dua (Tail ooo Tail)",
      "Karikokoo (Weigh Cocoa Beans)",
      "Twe-ma-Mentwe (Tug-of-Peace / Tug-of-War)",
    ],
    notableLandmarks: [
      "Kyebi Palace — Seat of the Okyenhene",
      "Akyem Sacred Grove and mineral deposits",
      "Traditional Craft Centres",
      "Historical Battle Sites",
      "Surrounded by the River Birim",
    ],
    location:
      "Kade is the capital of the Kwaebibirem Municipality. Akyem Abuakwa State is located in the Eastern Region of Ghana, with its capital at Kyebi.",
  },
  {
    id: "asante",
    name: "Asante State",
    town: "Asotwe",
    region: "Ashanti Region",
    capital: "Kumasi",
    accent: "#B23A2E",
    intro:
      "A powerful empire in West Africa, famous for its military strength, rich traditions, and the Golden Stool.",
    history:
      "Founded in the 17th century, the Asante played a major role in the region's history, dominating trade routes and resisting British colonial forces. It is renowned for its sophisticated political system, military organisation, and rich cultural heritage centred around the Golden Stool.",
    culturalPractices: [
      "Kente cloth weaving traditions",
      "Golden Stool ceremonies",
      "Traditional Akan festivals",
      "Royal court protocols and customs",
    ],
    traditionalGames: [
      "Merepɛ Kwan M'asen / M'akɔ (I Want a Way Out)",
      "Asɔ (Catch and Throw)",
      "Dua ooo Dua (Tail ooo Tail)",
      "Kyem-pɛ (Strategy Board Game)",
      "Kwasiada Frankaa (Sunday Flag)",
      "Antoakyire (Circle Game)",
    ],
    notableLandmarks: [
      "Manhyia Palace — Royal Residence",
      "Kumasi Central Market",
      "National Cultural Centre",
      "Asante Traditional Buildings (UNESCO Site)",
    ],
    location:
      "Asotwe is the featured community. Asante State is located in the Ashanti Region of Ghana, with its capital at Kumasi.",
  },
  {
    id: "bono",
    name: "Bono Kingdom",
    town: "Drobo",
    region: "Bono Region",
    capital: "Sunyani",
    accent: "#D4A017",
    intro:
      "One of the earliest Akan states, known for its deep cultural roots and contributions to Ghanaian traditions.",
    history:
      "The Bono people are among the first Akan groups to establish a state. Their influence is seen in the early trade networks and architectural designs of their settlements. They were pioneers in gold mining and trade, establishing routes that connected the forest regions to the northern territories.",
    culturalPractices: [
      "Traditional pottery and craft making",
      "Ancient gold mining techniques",
      "Storytelling traditions",
      "Seasonal harvest festivals",
    ],
    traditionalGames: [
      "Dua ooo Dua (Tail ooo Tail)",
      "Ampe (Jumping Game)",
      "Bankye-ma-Akrakuro (Stone Passing Game)",
      "Kwasiada Frankaa (Sunday Flag)",
      "Asɔ (Catch and Throw)",
      "Antoakyire (Circle Game)",
      "Twe-ma-Mentwe (Tug-of-Peace / Tug-of-War)",
    ],
    notableLandmarks: [
      "Bono Manso Archaeological Site",
      "Traditional Market Centres",
      "Ancient Trade Route Markers",
      "Sacred Groves and Shrines",
    ],
    location:
      "Drobo is the featured community. Bono Kingdom is located in the Bono Region of Ghana, with Sunyani as the regional capital.",
  },
];
