/**
 * Central data layer for the Ghana African Games showcase.
 *
 * HOW TO ADD A VIDEO LATER:
 *   Find the game below and set its `youtubeUrl` to any standard YouTube link, e.g.
 *     youtubeUrl: "https://youtu.be/X-4dAlSBw3Q"
 *   Full watch URLs, share URLs, /embed URLs or a bare 11-character ID all work —
 *   the player extracts the ID automatically (see lib/youtube.ts).
 *   Save the file and rebuild; the video appears automatically.
 */

/** One line of a call-and-response chant. Use `text` for free-verse songs. */
export interface SongLine {
  call?: string;
  response?: string;
  text?: string;
}

export interface Song {
  /** e.g. "Robert Mensah" or a regional label like "Akyem version". */
  title?: string;
  /** Optional language / sub-group note, e.g. "Asante & Bono". */
  variant?: string;
  lines: SongLine[];
  /** Optional translation / explanation shown beneath the lyric card. */
  meaning?: string;
}

export type Energy = "Low" | "Moderate" | "High";

export interface GameItem {
  id: string;
  title: string;
  altNames?: string[];
  /** Short, evocative one-liner for cards and tabs. */
  tagline: string;
  /** People / region of origin. */
  origin: string;
  energy: Energy;
  /** Human-readable player count, e.g. "2+", "Two teams". */
  players: string;
  /** Accent colour (hex) that themes the game's section. */
  accent: string;
  /** Path under /public, or undefined to fall back to a woven-pattern card. */
  image?: string;
  /** "The Story" — historical & social context, as paragraphs. */
  context: string[];
  /** How the game is played, as paragraphs. */
  description: string[];
  /** Cultural meaning, lessons and beauty, as paragraphs. */
  aesthetics: string[];
  /** Structured chants / lyrics. Empty array is fine. */
  songs: Song[];
  /** Shown when a game has no transcribed lyrics. */
  songNote?: string;
  /** Standard YouTube URL or ID. Empty string = "coming soon". */
  youtubeUrl: string;
}

export const gamesData: GameItem[] = [
  {
    id: "antoakyire",
    title: "Antoakyire",
    tagline: "The sanitary inspector's circle — a game of vigilance and clean living.",
    origin: "Akan · Asante, Bono & Akyem",
    energy: "High",
    players: "5+ in a circle",
    accent: "#E8B923",
    image: undefined,
    context: [
      "Antoakyire is commonly played by the Akan people of Ghana for fun, competition and learning. In the olden days it was played during the day and in moonlight; because of its agility it was first a boys' game, but today girls play it too, often during school sessions.",
      "Its roots lie in community sanitation. Elders organised task-forces to inspect houses for filth, searching even the backyards where recalcitrant households hid refuse. Offenders were disgraced and punished until cleanliness became the order of the day. That practice grew into a game: players squat to represent houses while one player runs around them as the sanitary inspector.",
    ],
    description: [
      "Players squat in a circle to represent houses in the community, forbidden to look back but alert to whatever falls behind them. A moderator runs around the circle holding a folded rag that stands for filth found at the back of a house.",
      "The moderator drops the rag behind a player. If that player fails to notice and pick it up before the moderator laps the circle, the group punishes the defaulter with light beatings until they cry “Adwo brɛ woo” — “it’s alright.” The relieved defaulter then takes the moderator’s role. The game ends when players tire, at bedtime, or when the school break is over.",
    ],
    aesthetics: [
      "Antoakyire is energetic and rhythmic — squatting, singing, clapping and running all synchronise to a beat, and a player who falls off the rhythm is quickly lost. The questioning built into the song trains attentiveness and alertness, while the punishment teaches children to admit fault, show remorse and obey the community’s rules from a tender age.",
      "There is beauty, too, in the geometry: players join hands to form a circle before squatting, the inspector bends and circles them, and their modest costumes teach children about proper dress for every occasion.",
    ],
    songs: [
      {
        variant: "Asante & Bono",
        lines: [
          { call: "Antoakyire", response: "Yeee ye" },
          { call: "Obi reba ooo", response: "Yeee ye" },
          { call: "Ɔbɛta ooo", response: "Yeee ye" },
          { call: "Ɔbɛne oo", response: "Yeee ye" },
          { call: "Ta poi-poi", response: "Yeee ye" },
          { call: "Saadine tontrowa", response: "Koo Moosi" },
          { call: "Saadine tontrowa", response: "Koo Moosi" },
          { call: "W’anhwɛ w’akyiri a", response: "Ɔde bɛto hɔ" },
          { call: "W’anhwɛ w’akyiri a", response: "Ɔde bɛto hɔ" },
        ],
      },
      {
        variant: "Akyem",
        lines: [
          { call: "Antoakyire", response: "Kyin – kɔ" },
          { call: "Kankɛ se Bɔɔdee", response: "Kyin – kɔ" },
          { call: "Yenni no kwa", response: "Kyin – kɔ" },
          { call: "Yɛnhwɛ yɛ akyi ooo", response: "Kyin – kɔ" },
          { call: "Wohwɛ woakyi aaa", response: "Kyin – kɔ" },
          { call: "Yɛbɛbo wo nnɛ", response: "Kyin – kɔ" },
          { call: "Yɛrekɔ foro bepo, Mankani no aben", response: "Mo mma yendiɛɛ" },
          { call: "Obi ba ooo", response: "Ɔrebɛwu ooo" },
        ],
      },
    ],
    youtubeUrl: "https://youtu.be/BvMd7Keqcb0",
  },
  {
    id: "dua-oo-dua",
    title: "Dua oo Dua",
    tagline: "Call the animals with tails — a naming game of classification.",
    origin: "Akan · Twi-speaking sub-groups",
    energy: "Low",
    players: "Group, seated or standing",
    accent: "#1E824C",
    image: "/games/dua-oo-dua.png",
    context: [
      "In the olden days hunting was a key Akan occupation, and humans devised ways to classify and lord over the other animal species — birds, mammals, fishes, amphibians and reptiles — by the traits they shared. They ran a roll-call: all tailed animals respond, all hairy animals respond, all feathered animals respond, and so on until the list was exhausted.",
      "This grew into Dua oo Dua, a low-energy classification game born of farming and herding communities where elders taught the young to identify and sort animals. Popular among Twi-speakers, it is often played while resting in the shade after work.",
    ],
    description: [
      "The leader calls “Agorɔ berɛ aduro ooo!” (“it’s time to play!”) and players gather. He names the day’s category — for example “animals that have tails” — and the rule: he will name an animal, and if it has a tail (“dua”) you respond “Dua”; if it has none, stay silent.",
      "A wrong response is a fault. The defaulter is chased with a cloth duster until they reach the mango tree, touch it and say “Mabɔ abo” to be free, then they watch as audience. As players are eliminated the tempo quickens, and variations emphasise tails, hair, complexion or legs to sort one animal from another until a winner emerges.",
    ],
    aesthetics: [
      "The game is pure Akan call-and-response — the leader’s call evoking a king and his subjects. It builds alertness and listening skills, teaches children the kinds and behaviours of animals, and even the running to-and-fro doubles as exercise. When a player defaults and runs to touch the tree, they also learn when and how to say sorry.",
    ],
    songs: [
      {
        lines: [
          { call: "Dua ooooo Dua", response: "Dua" },
          { call: "Dua oooo Dua", response: "Dua" },
          { call: "Dua Opuro-dua", response: "Dua" },
          { call: "Dua Kraman-dua", response: "Dua" },
          { call: "Dua Akokɔ-dua", response: "— silence —" },
        ],
        meaning:
          "Responding to “Akokɔ-dua” is a fault: a fowl has no tail, only sickle feathers, so the correct response is silence.",
      },
    ],
    youtubeUrl: "https://youtu.be/X-4dAlSBw3Q",
  },
  {
    id: "karikokoo",
    title: "Karikokoo",
    tagline: "Weighing the cocoa — a see-saw test of strength and balance.",
    origin: "Akan · Akyem & Bono cocoa country",
    energy: "Moderate",
    players: "Pairs",
    accent: "#7B3F00",
    image: undefined,
    context: [
      "Karikokoo has two narratives, both from the cocoa-weighing era of the Twi-speaking forest belt. The name joins “Kari” (to weigh) and “Kokoo” (cocoa) — “weighing dried cocoa beans” — a reminder that cocoa is precious and must be valued and protected.",
      "In a second telling, loading dried cocoa into trucks became lucrative work, and loading officers tested recruits’ strength by having two men interlock arms back-to-back and lift each other in turn. Children imitated the men, singing “Karikokoo, kariwaa, waa,” and it became a game for children and young adults alike.",
    ],
    description: [
      "Two players stand back-to-back, interlock their arms and lift each other alternately, like a see-saw. One lifts and stays standing while the other’s legs rise into the air for a while before they swap.",
      "The player who keeps their balance and stability without tiring is the winner; whoever tires first drops out. They never let go of each other’s arms until one becomes weak.",
    ],
    aesthetics: [
      "Karikokoo moves like a swinging pendulum or an old clock — the “brɛ kyerɛfoɔ” — and the audience sways and nods along. It teaches up-and-down rhythm and the idea of measurement: that you cannot judge weight by the eye alone. It also teaches children to lift only what they can carry — to bite only what they can chew.",
    ],
    songs: [
      {
        lines: [
          { call: "Kari – kokoo", response: "Kari – waa – waa" },
          { call: "Kari – kokoo", response: "Kari – waa – waa" },
          { call: "Kari – kokoo", response: "Kari – waa – waa" },
        ],
        meaning: "“Carry the cocoa beans — quickly, quickly.” Sung and clapped until a winner is declared.",
      },
    ],
    youtubeUrl: "https://youtu.be/XJTZQYLFDj0",
  },
  {
    id: "kurope",
    title: "Kuropɛ",
    tagline: "Searching for a town — hopscotch as land, war and ownership.",
    origin: "Akan · Akyem-Abuakwa",
    energy: "Moderate",
    players: "Individual, in turns",
    accent: "#C4551D",
    image: undefined,
    context: [
      "Kuropɛ — literally “searching for a town” — is an ancient Akan game rooted in the discovery and defence of land, traced to the Akyem-Abuakwa people. Ancestors fought to own towns, then marked boundaries with the “Ntɔmmɛ” plant, palm fronds, rocks and rivers to declare occupied land.",
      "The game teaches that land is won and held, not taken for free: “we don’t just clear and cultivate vast land as ours.” In play, as in life, no one may step on another’s occupied ground without permission.",
    ],
    description: [
      "Lines are drawn on dusty (mfuturom) ground in one of two forms — linear or blocked — with eight spaces. A player hops, jumps and turns through the spaces, mostly on one leg, depicting the effort to occupy and possess land.",
      "A player who passes cleanly through all eight spaces claims one as their town — hence “Kuropɛ” — marking it so that others cannot step there without permission. A player may hold more than one town. Play continues until all spaces are taken, and whoever holds the most communities wins.",
    ],
    aesthetics: [
      "Kuropɛ teaches the protection of what is acquired and respect for culture and heritage. It is also a classroom for mathematics — the lines and shapes, estimating the distance to throw the seed, counting and geometry all bring beauty and excitement to players and audience alike.",
    ],
    songs: [],
    songNote:
      "Kuropɛ is played to counting, calling and the rhythm of hopping rather than a fixed chant; players call out claims as they take each space.",
    youtubeUrl: "https://youtu.be/Bs6J3gzlo4c",
  },
  {
    id: "kyem-pe",
    title: "Kyem-pɛ",
    tagline: "“Divide it!” — a game of sharing, promise and honour.",
    origin: "Akan · communal-labour tradition",
    energy: "Low",
    players: "2+",
    accent: "#B23A2E",
    image: "/games/kyem-pe.png",
    context: [
      "Kyem-pɛ grows from Akan values of communal labour and mutual support, touching three areas: agriculture, moral philosophy and the principle of honour. Its farming root is “nnɔboa” — farmers agreeing to clear and cultivate each other’s land in rotation, then sharing the harvest “Abunu” (evenly) or “Abusa” (one-third), always keeping their word.",
      "That habit of sharing was passed to children through the game, teaching that it is healthier to share with a friend in need than to watch them suffer while you have plenty — generosity over greed — and that agreements must be honoured.",
    ],
    description: [
      "The game is built on “nhyehyɛyɛɛ” — a contract entered before play. Its core act is sharing. When a player sees an opponent holding something, they call “Kyem-pɛ” (“divide it”) and the holder must share it.",
      "But if the holder sees their opponent first, they may say “No Kyem-pɛ” and keep it. A player who dishonours the agreement can be expelled from the game, which may even dissolve it — so keeping one’s word is everything.",
    ],
    aesthetics: [
      "Some players weep from the pain of parting with what they hold, and the game hardens them to bear what life brings. It instils the habit of sharing, warns against taking what is not yours, and teaches children to keep their promises and not be deceitful like “Kwaku Ananse.”",
    ],
    songs: [],
    songNote:
      "Kyem-pɛ is driven by the spoken calls of the contract — “Kyem-pɛ” and “No Kyem-pɛ” — rather than a sung melody.",
    youtubeUrl: "https://youtu.be/hBrfXhFVNHY",
  },
  {
    id: "twe-ma-mentwe",
    title: "Twe-ma-mentwe",
    tagline: "Tug of peace — collective strength on either side of a line.",
    origin: "Akan · Akyem-Abuakwa, adopted by Asante & Bono",
    energy: "High",
    players: "Two teams (~10 each)",
    accent: "#C9971C",
    image: "/games/twe-ma-mentwe.png",
    context: [
      "By oral tradition, Twe-ma-mentwe grew from recruiting military gallants. The Akyem-Abuakwa people used it to sieve and select the strongest men for battle, and the Asante and Bono later adopted the strategy. Since not everyone could go to war, it served as a physical assessment; women were excluded from this particular test.",
      "Originally it used only interlocked hands and fingers. Over time rope replaced the fingers, and Twe-ma-mentwe became known as “Tug-of-Peace” or “Tug-of-War” depending on the purpose of the day.",
    ],
    description: [
      "Two teams of about ten form lines, each player holding the waist of the one in front. The two front leaders face each other and interlock their fingers, planting matching fore-legs to build a grounded anchor. A line drawn between the teams is the bridge or boundary.",
      "The umpire raises the song, then strikes and shouts “Montwe!” (“Start!”). The teams pull in opposite directions; the moment a leader is dragged across the line, unlocks, or falls, the umpire declares the winning team — the one that pulls the other across the bridge.",
    ],
    aesthetics: [
      "The game enforces unity and togetherness: players hold one another to keep from falling, learning to support each other and fight for a common goal. They learn linear shapes, cooperation and how to spot who is strong enough to fight for them. It demands a fair, firm umpire — usually older and stronger — to settle close calls before they escalate into quarrels.",
    ],
    songs: [
      {
        lines: [
          { call: "Twe me mentwe", response: "Yɛrebɛ twe" },
        ],
        meaning:
          "“Pull me, let me pull.” The umpire then shouts “Montwe!” (“Start!”) and the tug begins.",
      },
    ],
    youtubeUrl: "https://youtu.be/h9t5IhLi_5s",
  },
  {
    id: "mpeewa",
    title: "Mpeewa",
    tagline: "Rub, slap, clap and sing — the palm-rhythm coordination game.",
    origin: "Akan · Ghana-wide",
    energy: "Moderate",
    players: "2+ (line, triangle or circle)",
    accent: "#C43D2E",
    image: "/games/mpeewa.png",
    context: [
      "Oral tradition says Mpeewa was inspired by antelopes: a hunter saw two of them galloping and embracing, and when something fell into one’s eye the other removed it, after which they scratched each other’s palms in joy — the spirit of “scratch my back and let me scratch yours,” mutual assistance. The hunter imitated it and taught his family, and it spread into a game.",
      "Historically women performed it while the men tilled the land, and over time the community added songs to the rhythmic movements to make it lively.",
    ],
    description: [
      "Mpeewa is a multi-task rhythmic game of high coordination. Two players form a line, three a triangle, four or more a circle, holding hands. Players rub each other’s palms and clap to a set rhythm, alternating hands, slapping and singing all at once.",
      "A player who loses the rhythm or makes a mistake is eliminated and becomes a spectator; the last player standing wins. Many songs accompany it — the most iconic being “Robert” (Robert Mensah) and “Amina” — and children still compose new ones about their studies and daily life.",
    ],
    aesthetics: [
      "Mpeewa trains coordination, focus and reflexes — fingers, palms, lower arms and speech working together while clapping, slapping and singing. Children learn to follow rules and accept punishment, make friends, sing in Twi and English, control their tempers, and pick up simple numeracy through songs like “Practical Skills.” It forms circles and lines, exercises the body, and above all releases stress and joy.",
    ],
    songs: [
      {
        title: "Amina",
        lines: [
          { text: "Amina! A – mina" },
          { text: "Hyɛ m’ataadeɛ / Menhyɛ" },
          { text: "Adɛn nti aa / Tailor wɔ hɔ" },
          { text: "Ɔbɛhyɛ ama me / Ɔbɛ si ama me" },
          { text: "Choir Master – Master / Mister Poke – Poku" },
          { text: "Poku ware – Ware / Ware sɔ – Sɔɔ" },
          { text: "Sɔɔfo – foo / Foriwaa – Waa" },
          { text: "Waakye – kyee / Kyɛnam – nam" },
          { text: "Nampa – paa / Paanoo – noo" },
          { text: "Nomaa – maa / Ma – mango" },
          { text: "Amina trumu gyengyen / Trumu gyengyen tu gyengyen" },
        ],
      },
      {
        title: "Robert Mensah",
        lines: [
          { text: "Rob – bert! (2×)" },
          { text: "Robert Mensa goalkeeper / Number one" },
          { text: "Aka nansa na wakɔ Abrokyire" },
          { text: "Akoa bi te hɔ / Ɛyɛ ne ya" },
          { text: "Wakɔ fa pentoa / N’ɔde awɔ ne mfe" },
          { text: "Adeɛkyee a ne yere awo / Ne ba no de sɛn?" },
          { text: "Kofi Anto, Kofi Anto, wanto ne Papa;" },
          { text: "Kofi Anto, wanto ne Maame" },
          { text: "Amina tumu hye / Tu hyeeehye; tu hyeehye" },
        ],
      },
    ],
    youtubeUrl: "https://youtu.be/UyfWGbDObJg",
  },
  {
    id: "aso-teele",
    title: "Asɔ / Teele",
    tagline: "Throw and catch — lifting one another into the air.",
    origin: "Akan · Akyem & Asante (Asɔ), Bono (Teele)",
    energy: "High",
    players: "Circle of women",
    accent: "#2E9E5B",
    image: "/games/aso-teele.png",
    context: [
      "Asɔ — “throw and catch” — is a common Akan folk game; the Akyem and Asante call it Asɔ, the Bono call it Teele. It reflects the history and lived experience of the Akan, particularly in times of war.",
      "The game emanated from attempts to recruit women as warriors. The method used for men could not test women, so a different technique arose: if a woman could keep her partner from falling she could hold and fire a gun, and if she could lift the fallen she could carry the wounded from the front. That war test grew into a recreational performance game among women.",
    ],
    description: [
      "Women form a semi-circle or full circle and lean on one another for support. A player is lifted and thrown into the air by the others, and as she falls they catch her and may throw her again, taking turns around the circle.",
      "If a player lands and her hands touch the ground she has failed and joins the catchers while another takes her place. Throughout, the players sing, clap and move to the rhythm, dancing as they go.",
    ],
    aesthetics: [
      "Performers and audience delight when a player is thrown high; the jumping, bending and clapping keep them fit and energetic. The songs are full of romantic, “sugar-coated” words — “the player who can land on her feet without touching the ground is the one who can face a man for long.” Leaning on and falling into each other’s hands reveals true friends, and any quarrels must be settled before the game can begin — conflict resolution through play.",
    ],
    songs: [],
    songNote:
      "Asɔ / Teele is carried by love songs — romantic, teasing verses improvised by the players — rather than a single fixed chant.",
    youtubeUrl: "https://youtu.be/6NqJyT6yZrQ",
  },
  {
    id: "ampe",
    title: "Ampe",
    tagline: "Clap, jump and present a leg — Ghana’s beloved playground classic.",
    origin: "Akan · Twi-speaking, Ghana-wide",
    energy: "High",
    players: "Two teams",
    accent: "#E8B923",
    image: "/games/ampe.png",
    context: [
      "Ampe is one of the best-known indigenous folk games among the Twi-speaking Akan, widely played and easily recognised across many communities, especially among girls. Simple in structure but rich in performance, it blends clapping, jumping, rhythm and song, and serves as both recreation and exercise.",
      "Unusually, Ampe has no clear origin story. Elders told the participants that they too met the game already in existence — an inherited cultural activity whose beginnings are lost to time, yet which remains everywhere in play.",
    ],
    description: [
      "Two players (or two teams, A and B) face off. Players clap, jump into the air and paddle their legs, then land presenting one leg. The outcome turns on which legs are shown: “Opare” (Paapaa) when both present the same leg, “Oshiwa” (Shishii) when they present opposite legs.",
      "Before play each side chooses Opare or Oshiwa; whenever their chosen outcome occurs, they score. Teams agree a target score, count their tallies as they go, and the first to reach the mark wins. Teasing songs are added to needle the losers and lift the excitement.",
    ],
    aesthetics: [
      "Costumes identify and beautify the teams, and the lines and shapes formed please the eye. The clapping gives rhythm and the paddled leg in the air adds drama. Ampe is energetic but not brutal, prizing eye-hand-leg coordination and strategy. Children pick up simple numeracy — counting, multiplication, addition and subtraction — while the game builds fitness and a sound, healthy mind.",
    ],
    songs: [],
    songNote:
      "Ampe’s songs — like “Gari wura” (gari seller) and “Twi me” — are improvised mainly to tease the losing side; children compose them on the spot.",
    youtubeUrl: "https://youtu.be/PcLMNadB6V8 ",
  },
  {
    id: "merepe-kwan-masen",
    title: "Merepɛ Kwan M’asen",
    tagline: "“I want a way to pass” — breaking through the human wall.",
    altNames: ["Mepɛ Kwan Akɔ"],
    origin: "Akan · Twi-speaking",
    energy: "Moderate",
    players: "5+ in a circle",
    accent: "#8A5A2B",
    image: undefined,
    context: [
      "Merepɛ Kwan M’asen — the same game as Mepɛ Kwan Akɔ — reflects the Akan experience of warfare, protection and the security of communities, teaching strength, courage and persistence through play.",
      "Its origin lies in the era of inter-community wars, when settlements were defended by strong fences. Simple palm-frond fences (“Dwaa”) gave way to the mighty “Papim” or “Fasuo” — great trees bound with softened “Dɔɔt” rope and backed with rocks. Such walls held out enemies and held in captives, and breaking through took great strength. That reality became a game.",
    ],
    description: [
      "About five or more players interlock their fingers firmly to form a circle — the fence, or “Fasuo.” One player, the captive, stands at the centre, holds their hands together and moves around searching for a weak point.",
      "The captive strikes the locked hands while singing “Mepɛ kwan akɔ ooo” (“I want a way to pass”); the guards answer “Wonnya” (“you will not get a way”). If the captive breaks through, they run and the guards give chase — whoever catches them becomes the next captive; if uncaught, the captive escapes as a brave hero.",
    ],
    aesthetics: [
      "The game sharpens the mind — the captive studies the wall for the easiest point to break — and teaches shapes, dodging, running and speech. Children with long fingernails are told to trim them, a lesson in hygiene. Its two-part song even teaches sentence construction: one part seeks a way out, the other refuses it. The joy peaks when a captive escapes the chase, and the one who catches them becomes the hero.",
    ],
    songs: [
      {
        lines: [
          { call: "he kwan ni ooo?", response: "Nkran kwan" },
          { call: "he kwan ni ooo?", response: "Kumasi kwan" },
          { call: "he kwan ni ooo?", response: "Koforidua kwan" },
          { call: "Merepɛ kwan m’akɔ?", response: "Worennnya" },
          { call: "Memmpɛ kwan m’akɔ?", response: "Worennnya" },
          { call: "Menya kwan mekɔ aa?", response: "Worennnya" },
          { call: "Mo renhu me bio?", response: "Worennnya" },
        ],
        meaning: "“Where is the road? — The Accra road, the Kumasi road, the Koforidua road… I want a way to pass — you will not get one.”",
      },
    ],
    youtubeUrl: "",
  },
  {
    id: "bankye-sansankroma",
    title: "Bankye ma Akrakuro & Sansankrɔma",
    tagline: "Passing stones in a circle — rhythm, timing and togetherness.",
    origin: "Akan · Twi & Fante speakers",
    energy: "Low",
    players: "2+ in a circle",
    accent: "#D2691E",
    image: undefined,
    context: [
      "These twin stone-passing games are performed by Twi and Fante speakers alike. Bankye ma Akrakuro recalls an Ewe woman, Daavi, who sold cassava dough-nuts by the roadside; boys with no money sat near her passing stones and singing of their wish to taste them, and she often took pity and shared. Children began using stones to stand for the dough-nuts, passing them anticlockwise — and a game was born.",
      "Sansankrɔma tells of a spoiled young hawk who roamed far from home for years; returning at last, she found both parents dead and was left to wander, crying, in search of already-cooked food. An elder set the tale to a stone-passing song, and it spread across the Akan communities and beyond.",
    ],
    description: [
      "Both games share one mode of play: players squat or sit in a circle, each holding a stone, and pass the stones from left to right (anticlockwise) in time to the song. Each player takes the stone from the left and releases it to the right, keeping the rhythm and tempo.",
      "Attention is everything — a player who delays, or is caught with more than one stone in front of them, commits a fault and is eliminated. Play speeds from slow to fast to fast-fast until the most attentive, quickest player is the last remaining — the winner.",
    ],
    aesthetics: [
      "The stones’ “kim” and “grab” sounds shape the game, and bodies sway with the song. Beyond timing and alertness, the games carry lessons: Sansankrɔma warns against roaming so far from family that we lose our roots and heritage, while the shared, passed stone teaches that we hold one thing in common and must be fair — or we end up hurting one another. Above all they foster unity, cooperation and we-feeling among peers and siblings.",
    ],
    songs: [
      {
        title: "Bankye ma Akrakuro",
        lines: [
          { text: "Bankye ma Akrakuro, mɛyɛ deɛn m’anya bi m’adi?" },
          { text: "Menni sika; mɛyɛ deɛn m’anya bi m’adi?" },
          { text: "Akrakuro-Akrakuro, mɛyɛ deɛn m’anya bi m’adi?" },
          { text: "Menni sika; mɛyɛ deɛn m’anya bi m’adi?" },
        ],
        meaning: "“There is cassava dough-nut — how will I get some to eat? I have no money; how will I get some to eat?”",
      },
      {
        title: "Sansankrɔma",
        lines: [
          { text: "Sansankrɔma ne ni awu oo, kyer’kyer’ nkokɔ ɔmma;" },
          { text: "Ɔse nkɔ ɔyɛ adwuma, ne ni awu oo, kyer’kyer’ nkokɔ ɔmma." },
          { text: "W’akyini-a-kyini, ne ni awu oo, n’agya wu oo, wɔnte yɛ ooo" },
          { text: "Sansankrɔma ne ni awu oo, kyer’kyer’ nkokɔ ɔmma" },
        ],
      },
    ],
    youtubeUrl: "https://youtu.be/NcIlbIagDwY",
  },
  {
    id: "krodom",
    title: "Krodom",
    tagline: "Finding the path home — seeds, lines and hand-span measurement.",
    origin: "Akan · Akyem, Asante & Bono",
    energy: "Low",
    players: "Four players",
    accent: "#6B7A3A",
    image: "/games/krodom.png",
    context: [
      "Krodom traces to a warrior lost in a dense forest after battle, who found his way home by reading landmarks — special trees telling him to turn left on return where he had passed on the right going out. In a war, a warrior who could not remember the path could be captured or killed.",
      "Warriors began teaching children to read such signs, and it grew into a game in which four players, as soldiers of one community, must find their way in and out after being shown the path.",
    ],
    description: [
      "Played in “mfutrom” sand, a hole is dug at the centre of a circle to represent the community, and each of four players is given an equal path measured in hand-spans (usually five). Players use turkey berries — “Abeduru” (Akyem) or “Kwahu Nsosuaa” (Asante and Bono) — placed at the centre.",
      "Facing each other north-south and east-west, players ballot for who pushes first. Each flicks the berry along their drawn line with a forefinger; if it lands within the path, they measure hand-spans from the circle to where it stopped and add to their count. Reaching an opponent’s position “cuts off his head.” Play continues until the player who cannot be cut, or who cuts the most heads, wins.",
    ],
    aesthetics: [
      "Krodom develops mathematical and creative-art thinking — lines, shapes and cursive drawing, drawing circles, rolling the berry and hand-span measurement. It stirs fewer insults than many games and nurtures investigative, estimating skills in the children who play it.",
    ],
    songs: [],
    songNote:
      "Krodom is a game of quiet concentration — measuring, flicking and counting — played without a set chant.",
    youtubeUrl: "https://youtu.be/hGSGF3HYMXQ",
  },
  {
    id: "kwasiada-frankaa",
    title: "Kwasiada Frankaa",
    tagline: "Victory Sunday’s flag — a strategy board of soldiers and lines.",
    origin: "Akan · Akyem, Asante & Bono",
    energy: "Low",
    players: "Two players",
    accent: "#D4A017",
    image: "/games/kwasiada-frankaa.png",
    context: [
      "By oral tradition Kwasiada Frankaa comes from warfare, introduced by warriors returning from battle. “Frankaa” means “flag” — the symbol, such as a hawk, that a victorious community raised to mark its presence and freedom. The name signals “Kwasiada Faahodie,” Victory Sunday.",
      "In war, warriors moved secretly while watching that they stayed in line with one another; if a gap opened and an opponent crossed, they could move neither forward nor back. The game’s design mirrors that need to stay aligned and re-strategise whenever an intruder appears.",
    ],
    description: [
      "Two players each hold three pebbles or seeds. The board is a square pattern of four lines joined corner-to-corner and diagonally, with the middle divided in two. Each player begins by fixing a seed — a soldier — on an intersection, taking turns until all seeds are placed.",
      "As play proceeds, players read the opponent’s positions and make strategic moves; in most cases the placement of the final seed decides who wins or loses.",
    ],
    aesthetics: [
      "Kwasiada Frankaa teaches shapes and estimation, and rewards puzzle-solving and reading an opponent’s intentions. It builds vigilance and critical thinking, encouraging players to solve problems alone. The seeds moving through the pattern resemble Kente weaving — coming and going in order — or a bird moving watchfully from place to place, echoing how soldiers advanced while staying aligned with their comrades.",
    ],
    songs: [],
    songNote:
      "Kwasiada Frankaa is a silent game of strategy — the tension lives in the placement of the seeds, not in a song.",
    youtubeUrl: "https://youtu.be/r98Pnah03fE",
  },
];

/** Convenience lookup used by the showcase. */
export function getGameById(id: string): GameItem | undefined {
  return gamesData.find((g) => g.id === id);
}
