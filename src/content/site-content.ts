// All visible site text lives here, in English (en) and Mongolian (mn).
export type Language = "en" | "mn";
export type Localized = Record<Language, string>;

export const languageNames: Record<Language, string> = { en: "EN", mn: "MN" };

export const t = (value: Localized, language: Language) => value[language] || value.en;

export const ui = {
  skip: { en: "Skip to content", mn: "Үндсэн хэсэг рүү очих" },
  menu: { en: "Open menu", mn: "Цэс нээх" },
  close: { en: "Close menu", mn: "Цэс хаах" },
  language: { en: "Change language", mn: "Хэл солих" },
  register: { en: "Register", mn: "Бүртгүүлэх" },
  registerLong: { en: "Register for Ulaanbaatar", mn: "Улаанбаатарт бүртгүүлэх" },
  learnMore: { en: "Learn about the hackathon", mn: "Хакатоны тухай" },
  challenges: { en: "Challenges", mn: "Сорилтууд" },
  faq: { en: "FAQ", mn: "Асуулт, хариулт" },
  seeAllChallenges: { en: "See all 14 challenges", mn: "14 сорилтыг бүгдийг нь үзэх" },
  allQuestions: { en: "All questions", mn: "Бүх асуулт" },
  opensInNewTab: { en: "(opens in a new tab)", mn: "(шинэ цонхонд нээгдэнэ)" },
  comingSoon: { en: "To be announced", mn: "Удахгүй зарлана" },
  backHome: { en: "Back to home", mn: "Нүүр хуудас руу буцах" },
  hostedBy: { en: "Hosted by", mn: "Зохион байгуулагч" },
} satisfies Record<string, Localized>;

export const navItems = [
  { to: "/about", label: { en: "About", mn: "Тухай" } },
  { to: "/challenges", label: { en: "Challenges", mn: "Сорилтууд" } },
  { to: "/schedule", label: { en: "Schedule", mn: "Хөтөлбөр" } },
  { to: "/judging", label: { en: "Judging", mn: "Шалгаруулалт" } },
  { to: "/faq", label: { en: "FAQ", mn: "Асуулт" } },
  { to: "/organizers", label: { en: "Organizers", mn: "Зохион байгуулагч" } },
] as const;

export const hero = {
  kicker: {
    en: "NASA Space Apps Challenge 2026 · Local event",
    mn: "NASA Space Apps Challenge 2026 · Орон нутгийн арга хэмжээ",
  },
  titleTop: { en: "Ulaanbaatar", mn: "Улаанбаатар" },
  titleBottom: { en: "14–15 November 2026", mn: "2026.11.14–15" },
  summary: {
    en: "Two days to build solutions for challenges on Earth and in space with NASA open data. Free, in person or virtual, and open to every skill level.",
    mn: "NASA-гийн нээлттэй өгөгдлийг ашиглан Дэлхий болон сансарт тулгамдаж буй асуудлуудад шийдэл бүтээх хоёр өдөр. Танхимаар болон цахимаар үнэ төлбөргүй оролцох боломжтой бөгөөд бүх түвшний оролцогчдод нээлттэй.",
  },
  imageAlt: {
    en: "Earth and Central Asia seen from low orbit",
    mn: "Сансраас харагдах Дэлхий болон Төв Ази",
  },
} satisfies Record<string, Localized>;

export const keyFacts = [
  {
    label: { en: "When", mn: "Хэзээ" },
    value: { en: "Sat 14 – Sun 15 November 2026", mn: "2026.11.14 (Бя) – 11.15 (Ня)" },
  },
  {
    label: { en: "Where", mn: "Хаана" },
    value: {
      en: "Ulaanbaatar · venue to be announced",
      mn: "Улаанбаатар · байршлыг удахгүй зарлана",
    },
  },
  {
    label: { en: "Format", mn: "Хэлбэр" },
    value: { en: "In person + virtual", mn: "Танхим + цахим" },
  },
  { label: { en: "Cost", mn: "Төлбөр" }, value: { en: "Free", mn: "Үнэ төлбөргүй" } },
  {
    label: { en: "Language", mn: "Хэл" },
    value: { en: "Mongolian and English", mn: "Монгол, Англи" },
  },
] as const;

export const about = {
  eyebrow: { en: "About the hackathon", mn: "Хакатоны тухай" },
  title: {
    en: "Global questions. Local imagination.",
    mn: "Дэлхийн сорилт. Монголын бүтээлч сэтгэлгээ.",
  },
  pageIntro: {
    en: "What NASA Space Apps is, how the Ulaanbaatar event works, and how to take part.",
    mn: "NASA Space Apps гэж юу вэ, Улаанбаатарын арга хэмжээ хэрхэн явагдах, хэрхэн оролцох талаарх мэдээлэл.",
  },
  lead: {
    en: "NASA Space Apps is the world’s largest annual global hackathon. In Ulaanbaatar, students, scientists, designers, engineers, storytellers and curious minds come together to turn open data into ideas with real-world impact.",
    mn: "NASA Space Apps бол жил бүр зохион байгуулагддаг дэлхийн хамгийн том хакатон юм. Улаанбаатарт оюутан, эрдэмтэн, дизайнер, инженер, контент бүтээгч болон шинэ зүйлд тэмүүлэгч хүн бүр нэгдэж, нээлттэй өгөгдлийг бодит үр нөлөөтэй шийдэл болгон хөгжүүлнэ.",
  },
  body: {
    en: "You do not need to be a space expert. Bring a perspective, find a team, choose a NASA challenge, and prototype a response over one focused weekend. Local winners are nominated for NASA Global Judging.",
    mn: "Сансрын мэргэжилтэн байх шаардлагагүй. Өөрийн өвөрмөц санаа, үзэл бодлоо хуваалцаж, багаа бүрдүүлэн, NASA-гийн сорилтоос сонгоод, нэг амралтын өдрийн дотор шийдлийнхээ загварыг бүтээгээрэй. Улаанбаатарын шилдэг багууд NASA-гийн дэлхийн шатны шалгаруулалтад нэр дэвшинэ.",
  },
  modesTitle: { en: "Choose how you join", mn: "Хэрхэн оролцохоо сонгоно уу" },
  modes: [
    {
      title: { en: "In person", mn: "Танхимаар" },
      text: {
        en: "Build alongside the local community in Ulaanbaatar, with mentors, workshops and the full event atmosphere. Venue to be announced.",
        mn: "Улаанбаатар дахь хамт олонтойгоо нэгдэж, менторуудын зөвлөгөө, сургалтад хамрагдан, арга хэмжээний уур амьсгал дунд хамтдаа бүтээнэ. Байршлыг удахгүй зарлана.",
      },
    },
    {
      title: { en: "Virtual", mn: "Цахимаар" },
      text: {
        en: "Join the Ulaanbaatar event remotely, collaborate online, and take part in scheduled check-ins and submissions from wherever you are.",
        mn: "Хаанаас ч Улаанбаатарын арга хэмжээнд цахимаар нэгдэж, багтайгаа онлайнаар хамтран ажиллаж, товлосон уулзалт болон бүтээл илгээх үйл явцад оролцоно.",
      },
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: { en: "How it works", mn: "Хэрхэн явагдах вэ" },
  title: {
    en: "From open data to a working idea in one weekend",
    mn: "Нээлттэй өгөгдлөөс бодит шийдэл хүртэл ердөө хоёр өдөрт",
  },
  steps: [
    {
      title: { en: "Register", mn: "Бүртгүүлэх" },
      text: {
        en: "Sign up on the official NASA Space Apps site and choose the Ulaanbaatar local event.",
        mn: "NASA Space Apps-ийн албан ёсны сайтад бүртгүүлж, Улаанбаатарын арга хэмжээг сонгоно.",
      },
    },
    {
      title: { en: "Join a team", mn: "Багт нэгдэх" },
      text: {
        en: "Come with a team, form one on the official site, or meet teammates at the event.",
        mn: "Багтайгаа ирэх, албан ёсны сайт дээр баг үүсгэх эсвэл арга хэмжээний үеэр шинэ хамтрагчидтай танилцаж болно.",
      },
    },
    {
      title: { en: "Build", mn: "Бүтээх" },
      text: {
        en: "Pick one of the 14 NASA challenges and build over two days with help from local mentors.",
        mn: "NASA-гийн 14 сорилтоос нэгийг сонгож, менторуудын дэмжлэгтэйгээр хоёр өдрийн турш бүтээнэ.",
      },
    },
    {
      title: { en: "Present", mn: "Танилцуулах" },
      text: {
        en: "Submit your project and pitch it to local judges. Local nominees go on to NASA Global Judging.",
        mn: "Бүтээлээ илгээж, орон нутгийн шүүгчдэд танилцуулна. Шилдэг багууд NASA-гийн дэлхийн шатны шалгаруулалтад нэр дэвшинэ.",
      },
    },
  ],
} as const;

export const participantGuide = {
  eyebrow: { en: "Participant guide", mn: "Оролцогчийн хөтөч" },
  title: {
    en: "Come curious. Leave with a project.",
    mn: "Сониуч сэтгэлээр ирж, бүтээлтэй буцаарай.",
  },
  items: [
    {
      title: { en: "Who can join", mn: "Хэн оролцох вэ" },
      text: {
        en: "Students, professionals, makers, researchers, artists and first-time hackers are all welcome. Age and participation rules follow the official NASA Space Apps terms.",
        mn: "Оюутан, мэргэжилтэн, бүтээгч, судлаач, уран бүтээлч болон анх удаа оролцож буй хүн бүрт нээлттэй. Нас болон оролцооны дүрэм NASA Space Apps-ийн албан ёсны нөхцөлийг баримтална.",
      },
    },
    {
      title: { en: "What to bring", mn: "Юу авчрах вэ" },
      text: {
        en: "A laptop and charger, identification, a reusable water bottle, and anything your craft needs. Most importantly, an open mind.",
        mn: "Зөөврийн компьютер, цэнэглэгч, иргэний үнэмлэх, усны сав болон бүтээлдээ хэрэгтэй бусад зүйлсээ авчраарай. Хамгийн гол нь нээлттэй сэтгэлгээ.",
      },
    },
    {
      title: { en: "Teams and skills", mn: "Баг ба ур чадвар" },
      text: {
        en: "Mixed teams do best. Coding helps, but research, design, communication, science and local knowledge matter just as much.",
        mn: "Олон талын ур чадвартай багууд илүү амжилтад хүрдэг. Код бичих чадвар тустай ч судалгаа, дизайн, харилцаа, шинжлэх ухаан, орон нутгийн мэдлэг ч мөн адил чухал.",
      },
    },
  ],
} as const;

export type Difficulty = "beginner" | "intermediate" | "advanced";

export const difficultyLabels: Record<Difficulty, Localized> = {
  beginner: { en: "Beginner/Youth", mn: "Анхан шат/Залуучууд" },
  intermediate: { en: "Intermediate", mn: "Дунд шат" },
  advanced: { en: "Advanced", mn: "Ахисан шат" },
};

export const subjectLabels = {
  astrophysics: { en: "Astrophysics", mn: "Астрофизик" },
  planets: { en: "Planets & Moons", mn: "Гараг ба дагуул" },
  space: { en: "Space Exploration", mn: "Сансрын судалгаа" },
  earth: { en: "Earth Science", mn: "Дэлхий судлал" },
  software: { en: "Software", mn: "Програм хангамж" },
  games: { en: "Games", mn: "Тоглоом" },
  sun: { en: "Sun", mn: "Нар" },
  human: { en: "Human Exploration", mn: "Хүний сансрын судалгаа" },
  moon: { en: "Moon", mn: "Сар" },
  arts: { en: "Arts & Multimedia", mn: "Урлаг ба мультимедиа" },
  mars: { en: "Mars", mn: "Ангараг" },
} satisfies Record<string, Localized>;

export type Subject = keyof typeof subjectLabels;

export type Challenge = {
  code: string;
  title: Localized;
  difficulty: Difficulty[];
  subjects: Subject[];
  introduction: Localized;
  purpose: Localized;
};

export const challenges = {
  index: "03",
  eyebrow: { en: "2026 challenges", mn: "2026 оны сорилтууд" },
  title: {
    en: "The questions arrive from NASA. The answers come from you.",
    mn: "Асуулт NASA-гаас. Хариулт танаас.",
  },
  intro: {
    en: "Fourteen official 2026 challenges, from storytelling about lunar hardware to radar views of a changing Earth. Pick the one your team wants to solve.",
    mn: "2026 оны албан ёсны 14 сорилт: Сар дээрх тоног төхөөрөмжийн түүхээс эхлээд өөрчлөгдөж буй Дэлхийг радараар харах хүртэл. Багаараа шийдэхийг хүссэн сорилтоо сонгоорой.",
  },
  all: { en: "All", mn: "Бүгд" },
  pageIntro: {
    en: "Each challenge comes from NASA with real data. Filter by level, search by topic and pick the one your team wants to solve.",
    mn: "Сорилт бүр NASA-гаас бодит өгөгдөлтэй ирдэг. Түвшнээр шүүж, сэдвээр хайж, багаараа шийдэх сорилтоо сонгоорой.",
  },
  searchLabel: { en: "Search challenges", mn: "Сорилт хайх" },
  searchPlaceholder: { en: "Search by title or topic", mn: "Нэр эсвэл сэдвээр хайх" },
  noResults: { en: "No challenges match your search.", mn: "Хайлтад тохирох сорилт олдсонгүй." },
  clearFilters: { en: "Clear filters", mn: "Шүүлтүүрийг арилгах" },
  officialList: {
    en: "Full challenge details on the official site",
    mn: "Сорилтын дэлгэрэнгүйг албан ёсны сайтаас",
  },
  findTeam: { en: "Find a team", mn: "Баг хайх" },
  teaserTitle: {
    en: "14 questions from NASA. Pick yours.",
    mn: "NASA-гийн 14 сорилт. Өөрт тохирохыг нь сонгоорой.",
  },
  goalLabel: { en: "The challenge", mn: "Сорилт" },
  backgroundLabel: { en: "Background", mn: "Суурь мэдээлэл" },
  showBackground: { en: "Read background", mn: "Суурь мэдээлэл унших" },
  hideBackground: { en: "Hide background", mn: "Хураах" },
  source: {
    en: "Summaries from the official NASA Space Apps Challenge website.",
    mn: "Сорилтуудын товч мэдээллийг NASA Space Apps Challenge-ийн албан ёсны сайтаас авсан болно.",
  },
  items: [
    {
      code: "01",
      title: {
        en: "Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars",
        mn: "Орхигдсон ч мартагдаагүй: Сар, Ангараг дээр үлдсэн NASA-гийн тоног төхөөрөмжийн түүх",
      },
      difficulty: ["intermediate", "beginner"],
      subjects: ["astrophysics", "planets", "space"],
      introduction: {
        en: "Since the 1960s, NASA has left hardware across the solar system: on the Moon, on Mars, and in deep space. From rovers and instruments that completed their science missions to probes still traveling away from Earth, this hardware varies widely in both its purpose and current level of functionality.",
        mn: "1960-аад оноос хойш NASA Нарны аймгийн өнцөг булан бүрт буюу Сар, Ангараг болон алс сансарт тоног төхөөрөмж үлдээсээр ирсэн. Шинжлэх ухааны даалгавраа биелүүлсэн ровер, багажуудаас эхлээд Дэлхийгээс холдон нисэж буй зондууд хүртэл эдгээр төхөөрөмжийн зориулалт, одоогийн ажиллагаа нь эрс ялгаатай.",
      },
      purpose: {
        en: "Tell stories about some or all of this equipment that introduce school-age space enthusiasts to the hardware and the science it made possible.",
        mn: "Эдгээр тоног төхөөрөмжийн заримын эсвэл бүгдийнх нь тухай түүх бүтээж, сансар сонирхогч сурагчдад тэдгээр төхөөрөмж болон түүний ачаар хийгдсэн шинжлэх ухааны ажлыг танилцуулах.",
      },
    },
    {
      code: "02",
      title: {
        en: "Be An Earth System Trend Detective!",
        mn: "Дэлхийн системийн чиг хандлагын мөрдөгч бол!",
      },
      difficulty: ["advanced"],
      subjects: ["earth", "software"],
      introduction: {
        en: "Change is always occurring in the Earth's interconnected environmental system, and when it runs in a consistent direction (rising or falling, increasing or decreasing, thickening or thinning), measured variables reflect it. But a variable can trend one way in one region and the opposite way in another, even when the same process drives both.",
        mn: "Дэлхийн харилцан уялдаатай орчны системд өөрчлөлт байнга явагддаг бөгөөд тэр нь тогтвортой чиглэлтэй (өсөх, буурах, зузаарах, нимгэрэх) үед хэмжсэн үзүүлэлтүүдэд илэрдэг. Гэвч нэг ижил үйл явцын нөлөөгөөр нэг үзүүлэлт нэг бүсэд өсөж, нөгөө бүсэд эсрэгээрээ буурч болно.",
      },
      purpose: {
        en: "Find and examine variables measured by NASA missions or produced by NASA models, visualize how they change over time, and determine what is changing, where, by how much, and whether those changes are what scientists call “significant.”",
        mn: "NASA-гийн сансрын нислэгээр хэмжсэн эсвэл NASA-гийн загвараар гаргасан үзүүлэлтүүдийг олж судлан, цаг хугацааны өөрчлөлтийг дүрслэн харуулж, юу, хаана, хэр их өөрчлөгдөж байгааг болон эдгээр өөрчлөлт эрдэмтдийн хэлдгээр “ач холбогдолтой” эсэхийг тодорхойлох.",
      },
    },
    {
      code: "03",
      title: {
        en: "Build a Junior Astronaut Mission Trainer",
        mn: "Бяцхан сансрын нисгэгчдэд зориулсан сургалтын тоглоом бүтээ",
      },
      difficulty: ["intermediate", "beginner"],
      subjects: ["games", "planets", "software", "space", "sun"],
      introduction: {
        en: "Space-themed STEM content often oversimplifies the engineering trade-offs that define a real mission, or presents them at a level too complex to hold a young learner's attention. Few tools make those trade-offs both tangible and fun.",
        mn: "Сансрын сэдэвтэй STEM контент нь бодит нислэгийг тодорхойлдог инженерийн сонголтуудыг хэт хялбарчлах, эсвэл хүүхдийн анхаарлыг татахааргүй хэт төвөгтэй болгох нь элбэг. Эдгээр сонголтыг ойлгомжтой бас сонирхолтой болгосон хэрэгсэл цөөхөн.",
      },
      purpose: {
        en: "Design and build an interactive game or app that lets students run a lunar or Martian outpost, balancing competing demands like life support, radiation shielding, power, and food production, so they experience firsthand the decisions that determine whether a mission fails or succeeds.",
        mn: "Сурагчид Сар эсвэл Ангараг дээрх суурийг удирдаж, амьдрал хангамж, цацрагаас хамгаалалт, эрчим хүч, хүнсний үйлдвэрлэл зэрэг өрсөлдөгч хэрэгцээг тэнцвэржүүлэх интерактив тоглоом эсвэл апп бүтээх. Ингэснээр нислэгийн амжилт, бүтэлгүйтлийг шийддэг шийдвэрүүдийг өөрсдөө мэдрэх юм.",
      },
    },
    {
      code: "04",
      title: { en: "CLPS Lunar Mission Browser", mn: "CLPS сарны нислэгийн хөтөч" },
      difficulty: ["advanced", "intermediate"],
      subjects: ["human", "moon", "software", "space"],
      introduction: {
        en: "Missions to the Moon's south pole face extreme lighting and communication constraints, and planning them takes careful coordination between science and engineering teams. Tools for determining Sun and Earth positions at candidate landing sites exist, but their complicated interfaces make it difficult to evaluate critical information efficiently.",
        mn: "Сарны өмнөд туйл руу чиглэсэн нислэгүүд гэрэлтүүлэг болон холбооны хүнд хязгаарлалттай тулгардаг тул тэдгээрийг төлөвлөхөд шинжлэх ухаан, инженерийн багуудын нягт уялдаа шаардлагатай. Буух боломжит газруудад Нар, Дэлхийн байрлалыг тодорхойлох хэрэгслүүд байдаг ч төвөгтэй интерфейсээс болж чухал мэдээллийг хурдан үнэлэхэд хэцүү.",
      },
      purpose: {
        en: "Create an intuitive tool that lets mission planners, educators, and the public quickly compare landing sites and dates, visualizing Sun and Earth positions relative to the horizon to assess power generation potential and direct-to-Earth communication windows.",
        mn: "Нислэг төлөвлөгч, багш болон олон нийт буух газар, огноог хурдан харьцуулж, тэнгэрийн хаяатай харьцангуй Нар, Дэлхийн байрлалыг дүрслэн харж, эрчим хүч үйлдвэрлэх боломж болон Дэлхийтэй шууд холбогдох цонхыг үнэлэх хялбар хэрэгсэл бүтээх.",
      },
    },
    {
      code: "05",
      title: {
        en: "Create Health Monitoring Software for Astronauts on Space Missions",
        mn: "Сансрын нисгэгчдэд зориулсан эрүүл мэндийн хяналтын програм бүтээ",
      },
      difficulty: ["intermediate"],
      subjects: ["human", "software", "space"],
      introduction: {
        en: "Long-duration missions expose astronauts to space radiation, isolation and confinement, altered gravity, and a hostile closed environment, which can bring immune changes, bone loss, cardiovascular events, and behavioral health problems. On long missions, astronauts carry much of the responsibility for spotting these changes in themselves.",
        mn: "Урт хугацааны нислэгийн үеэр сансрын нисгэгчид сансрын цацраг, тусгаарлалт, өөрчлөгдсөн таталцал, хаалттай хатуу ширүүн орчинд өртөж, дархлааны өөрчлөлт, ясны сулрал, зүрх судасны эмгэг, сэтгэцийн эрүүл мэндийн асуудалтай тулгарч болно. Урт нислэгт эдгээр өөрчлөлтийг өөрсдөө илрүүлэх үүрэг голчлон нисгэгчдэд ногддог.",
      },
      purpose: {
        en: "Build health monitoring software that gathers health indicators and enables astronauts to evaluate and act on the status of their health.",
        mn: "Эрүүл мэндийн үзүүлэлтүүдийг цуглуулж, сансрын нисгэгчдэд өөрийн эрүүл мэндийн байдлыг үнэлж, арга хэмжээ авах боломж олгох хяналтын програм бүтээх.",
      },
    },
    {
      code: "06",
      title: { en: "Dancing with the SARs", mn: "SAR-тай бүжиглэе" },
      difficulty: ["advanced", "intermediate"],
      subjects: ["earth"],
      introduction: {
        en: "Earth's surface is an endless dance of natural processes and human activities, but these changes are often difficult to visualize, understand, and communicate. From wetland loss to forest wildfires, earthquakes, farming activities, glacier movement, and more, Earth is in a constant waltz of surface changes.",
        mn: "Дэлхийн гадаргуу бол байгалийн үйл явц, хүний үйл ажиллагааны төгсгөлгүй бүжиг боловч эдгээр өөрчлөлтийг дүрслэх, ойлгох, бусдад тайлбарлахад ихэвчлэн хэцүү байдаг. Намгархаг газрын хорогдол, ойн түймэр, газар хөдлөлт, газар тариалан, мөсөн голын хөдөлгөөн гээд Дэлхийн гадаргуу байнга өөрчлөгдсөөр байна.",
      },
      purpose: {
        en: "Build an interactive application that uses radar remote sensing data from the NASA-ISRO Synthetic Aperture Radar (NISAR) mission to track and visualize one or more types of surface change at locations around the world.",
        mn: "NASA-ISRO-гийн Синтетик апертурын радар (NISAR) нислэгийн зайнаас тандан судлалын радарын өгөгдлийг ашиглан дэлхийн өнцөг булан бүрт гадаргуугийн нэг буюу хэд хэдэн төрлийн өөрчлөлтийг хянаж, дүрслэх интерактив апп бүтээх.",
      },
    },
    {
      code: "07",
      title: {
        en: "Field Shift: Adapting Farms with NASA Data",
        mn: "Field Shift: NASA-гийн өгөгдлөөр тариаланг шинэ нөхцөлд дасан зохицуулах нь",
      },
      difficulty: ["advanced", "intermediate"],
      subjects: ["arts", "earth", "software"],
      introduction: {
        en: "Farmers around the world navigate shifting temperatures, changing rainfall patterns, water shortages, extreme weather, and declining soil health. These pressures make it difficult to choose crop rotations that protect fields, conserve water, and support long-term resilience.",
        mn: "Дэлхийн тариаланчид температурын хэлбэлзэл, хур тунадасны өөрчлөлт, усны хомсдол, цаг агаарын эрс тэс үзэгдэл, хөрсний доройтолтой тулгарч байна. Энэ нь талбайг хамгаалж, ус хэмнэж, урт хугацааны тэсвэрт чадварыг дэмжих тариалангийн сэлгээг сонгоход хүндрэл учруулдаг.",
      },
      purpose: {
        en: "Create a decision-support tool that uses NASA Earth observations along with local soil information, crop characteristics, and farmer priorities to help farmers explore rotation strategies that could strengthen soil health and adapt their farms to changing conditions.",
        mn: "NASA-гийн Дэлхийн ажиглалтын өгөгдлийг орон нутгийн хөрсний мэдээлэл, үр тарианы онцлог, тариаланчийн тэргүүлэх зорилготой хослуулан, хөрсний эрүүл мэндийг сайжруулж, өөрчлөгдөж буй нөхцөлд дасан зохицох сэлгээний стратегийг тариаланчдад судлахад туслах шийдвэр гаргалтын хэрэгсэл бүтээх.",
      },
    },
    {
      code: "08",
      title: {
        en: "Flame in Freefall: AI-Powered Fire Safety Insights from Microgravity Combustion Data",
        mn: "Чөлөөт уналт дахь дөл: Бичил таталцлын шаталтын өгөгдлөөс AI-д суурилсан галын аюулгүй байдлын дүгнэлт",
      },
      difficulty: ["advanced", "intermediate"],
      subjects: ["space"],
      introduction: {
        en: "For decades, NASA has studied how flames and fire behave in microgravity, gathering a trove of experimental data along the way. That knowledge matters more than ever as humans gear up to return to the Moon and press on to Mars, yet the volume of results makes them hard to find, compare, and understand.",
        mn: "NASA олон арван жилийн турш бичил таталцалд дөл, гал хэрхэн биеэ авч явдгийг судалж, асар их туршилтын өгөгдөл цуглуулжээ. Хүн төрөлхтөн Сар руу эргэн очиж, Ангараг руу тэмүүлж буй энэ үед уг мэдлэг урьд урьдынхаас чухал болсон ч үр дүн хэт их тул олох, харьцуулах, ойлгоход хэцүү байна.",
      },
      purpose: {
        en: "Create an interactive, AI-powered dashboard that summarizes, ranks, and interprets those findings to deliver fire safety insights for human space exploration.",
        mn: "Эдгээр судалгааны үр дүнг нэгтгэж, эрэмбэлж, тайлбарлан хүний сансрын судалгаанд зориулсан галын аюулгүй байдлын дүгнэлт гаргах AI-д суурилсан интерактив самбар бүтээх.",
      },
    },
    {
      code: "09",
      title: {
        en: "Harmonization of MODIS and VIIRS Hot Spots",
        mn: "MODIS ба VIIRS галын голомтын өгөгдлийг нэгтгэх нь",
      },
      difficulty: ["advanced", "intermediate"],
      subjects: ["earth", "software"],
      introduction: {
        en: "Understanding how burning activity is distributed across our planet over time, including wildfires and agricultural burns intense enough to be detected by satellite sensors, helps us anticipate critical periods, guide monitoring, and improve fire response. Satellites have tracked active fire hotspots for more than two decades, but the record is split across sensors whose data cannot be compared directly, leaving fire managers without a consistent picture of when and where burning has occurred.",
        mn: "Хиймэл дагуулын мэдрэгчээр илрэх хэмжээний ойн түймэр, хөдөө аж ахуйн шаталт зэрэг гал түймэр цаг хугацааны явцад гараг даяар хэрхэн тархаж байгааг ойлгох нь эрсдэлтэй үеийг урьдчилан харах, хяналтыг чиглүүлэх, галын хариу арга хэмжээг сайжруулахад тусалдаг. Хиймэл дагуулууд хорь гаруй жил идэвхтэй галын голомтыг ажиглаж ирсэн ч өгөгдөл нь шууд харьцуулах боломжгүй өөр өөр мэдрэгчид хуваагдсан тул хэзээ, хаана шаталт болсон талаар нэгдсэн дүр зураг алга.",
      },
      purpose: {
        en: "Build a web application that harmonizes these records into a burning-activity calendar based on active fire hotspots, so early-warning teams, emergency responders, scientists, and land managers can examine historical fire patterns, unusual conditions, and critical periods within a selected area.",
        mn: "Эдгээр бүртгэлийг нэгтгэн идэвхтэй галын голомтод суурилсан шаталтын хуанли болгож, эрт сэрэмжлүүлгийн баг, онцгой байдлын алба, эрдэмтэд, газрын менежерүүдэд сонгосон бүс нутгийн түүхэн галын хэв маяг, ер бусын нөхцөл, эрсдэлтэй үеийг судлах боломж олгох веб апп бүтээх.",
      },
    },
    {
      code: "10",
      title: {
        en: "Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars",
        mn: "Сарны байнгын бааз болон Ангарагтай төстэй Дэлхий дээрх газруудыг тодорхойл",
      },
      difficulty: ["advanced", "intermediate"],
      subjects: ["earth", "planets", "software", "space"],
      introduction: {
        en: "Selecting future landing sites and lunar base locations depends on many factors, including topography, geology, environment, and available resources. Places on Earth with characteristics similar to the Moon or Mars, such as the Atacama Desert, Haughton Crater, and Death Valley, let mission teams test equipment and methods before they fly; however, these terrestrial analog sites are not fully characterized.",
        mn: "Ирээдүйн буух газар болон сарны баазын байршлыг сонгоход газрын гадаргуу, геологи, орчин, нөөц зэрэг олон хүчин зүйл нөлөөлдөг. Атакама цөл, Хоутон тогоо, Үхлийн хөндий зэрэг Сар эсвэл Ангарагтай төстэй Дэлхий дээрх газрууд нь нислэгийн багуудад нислэгээс өмнө тоног төхөөрөмж, аргачлалаа турших боломж олгодог ч эдгээр газрыг бүрэн судлаагүй байна.",
      },
      purpose: {
        en: "Use open Earth, Moon, and Mars data from NASA and other space agencies to identify and characterize new terrestrial analogs for future bases or landing sites, drawing on deserts, polar regions, volcanic and arid terrain, caves, and other environments that share conditions with the lunar or Martian surface.",
        mn: "NASA болон бусад сансрын агентлагийн Дэлхий, Сар, Ангарагийн нээлттэй өгөгдлийг ашиглан цөл, туйлын бүс, галт уул, хуурай газар, агуй зэрэг Сар, Ангарагийн гадаргуутай төстэй нөхцөлтэй орчноос ирээдүйн бааз, буух газарт тохирох шинэ газрыг тодорхойлж, тодорхойлолт гаргах.",
      },
    },
    {
      code: "11",
      title: {
        en: "Interplanetary Survival Guide: Martian Map",
        mn: "Гараг хоорондын амьд үлдэх гарын авлага: Ангарагийн газрын зураг",
      },
      difficulty: ["intermediate"],
      subjects: ["human", "mars", "planets", "software", "space"],
      introduction: {
        en: "NASA has explored Mars robotically for decades, studying its extreme environment, mapping its surface, and collecting many types of data. Far from home, the first astronauts to set foot on Mars will want the best map possible, with details of their routes and destinations, updates on current conditions, and the data needed to complete their mission quickly and safely.",
        mn: "NASA олон арван жилийн турш роботоор Ангараг гарагийг судалж, түүний эрс тэс орчныг шинжилж, гадаргууг зураглан, олон төрлийн өгөгдөл цуглуулжээ. Гэрээсээ хол Ангараг дээр анх хөл тавих сансрын нисгэгчдэд маршрут, очих газрын нарийн мэдээлэл, одоогийн нөхцөл байдал болон даалгавраа хурдан, аюулгүй гүйцэтгэхэд шаардлагатай өгөгдөл бүхий хамгийн сайн газрын зураг хэрэгтэй.",
      },
      purpose: {
        en: "Create a layered, integrated view of a location or route on the Martian surface that pulls together data from multiple NASA science missions and could help a human explorer plan and carry out a successful Marswalk while doing new and exciting science along the way.",
        mn: "NASA-гийн олон шинжлэх ухааны нислэгийн өгөгдлийг нэгтгэсэн, Ангарагийн гадаргуу дээрх байршил эсвэл маршрутын давхаргатай нэгдсэн харагдацыг бүтээж, хүн судлаачид Ангараг дээр амжилттай явган аялал төлөвлөн хийж, замдаа шинэ сонирхолтой судалгаа хийхэд туслах.",
      },
    },
    {
      code: "12",
      title: { en: "Planet X and SPHEREx", mn: "X гараг ба SPHEREx" },
      difficulty: ["advanced"],
      subjects: ["astrophysics", "planets", "software"],
      introduction: {
        en: "Since 2025, NASA's SPHEREx mission has been mapping the entire sky every six months in 102 bands of near-infrared light, returning images of more than a billion objects. Comets, asteroids, stars, brown dwarfs, and even new planets reveal themselves by shifting position between images, but no one person can sift through all that data alone.",
        mn: "2025 оноос хойш NASA-гийн SPHEREx нислэг зургаан сар тутам ойрын хэт улаан туяаны 102 зурвасаар бүх тэнгэрийг зураглан, тэрбум гаруй объектын зургийг дамжуулж байна. Сүүлт од, астероид, од, хүрэн одой, тэр байтугай шинэ гараг ч зургуудын хооронд байрлалаа өөрчлөх замаар илэрдэг ч энэ бүх өгөгдлийг ганц хүн шүүж чадахгүй.",
      },
      purpose: {
        en: "Create a public-facing web tool that displays images of the sky from the SPHEREx mission, making it easy for anyone to quickly see how they change over time.",
        mn: "SPHEREx нислэгийн тэнгэрийн зургуудыг харуулж, хэн ч цаг хугацааны өөрчлөлтийг хурдан харах боломжтой олон нийтэд зориулсан веб хэрэгсэл бүтээх.",
      },
    },
    {
      code: "13",
      title: { en: "Space Mission Design Game", mn: "Сансрын нислэг төлөвлөх тоглоом" },
      difficulty: ["intermediate", "beginner"],
      subjects: ["games"],
      introduction: {
        en: "Designing a space mission requires careful consideration of competing demands, including mission objectives, spacecraft design, scientific instruments, launch vehicles, budgets, power, mass, communications, and orbital constraints. For students who rarely get to experiment with an entire mission from concept to operation, these trade-offs often remain abstract.",
        mn: "Сансрын нислэг төлөвлөхөд зорилго, сансрын хөлгийн загвар, шинжлэх ухааны багаж, хөөргөх пуужин, төсөв, эрчим хүч, жин, холбоо, тойрог замын хязгаарлалт зэрэг өрсөлдөгч олон шаардлагыг сайтар тооцох хэрэгтэй. Нислэгийг санаанаас гүйцэтгэл хүртэл бүхэлд нь туршиж үзэх боломж ховор сурагчдад эдгээр сонголт ихэвчлэн хийсвэр хэвээр үлддэг.",
      },
      purpose: {
        en: "Create an interactive game that lets participants design, manage, and simulate a complete space mission while making engineering decisions, managing limited resources, and seeing how each choice shapes the success of their mission.",
        mn: "Оролцогчид инженерийн шийдвэр гаргаж, хязгаарлагдмал нөөцийг удирдан, сонголт бүр нислэгийн амжилтад хэрхэн нөлөөлж байгааг харангаа сансрын нислэгийг бүхэлд нь төлөвлөж, удирдаж, загварчлах интерактив тоглоом бүтээх.",
      },
    },
    {
      code: "14",
      title: { en: "The Earth Information Jukebox", mn: "Дэлхийн мэдээллийн жүкбокс" },
      difficulty: ["intermediate", "beginner"],
      subjects: ["arts", "earth", "software"],
      introduction: {
        en: "NASA's Earth Information Center (EIC) produces stunning visualizations of our changing planet, but presenting Earth science through visualization alone limits who it can reach. This challenge invites you to make complex Earth science accessible, engaging, and multi-sensory by translating sight into sound.",
        mn: "NASA-гийн Дэлхийн мэдээллийн төв (EIC) өөрчлөгдөж буй гарагийн гайхалтай дүрслэлүүдийг бүтээдэг ч Дэлхий судлалыг зөвхөн дүрслэлээр хүргэх нь хүртээмжийг хязгаарладаг. Харагдах зүйлийг дуу авиа болгон хувиргаж, нарийн төвөгтэй Дэлхий судлалыг хүртээмжтэй, сонирхолтой, олон мэдрэхүйн туршлага болгохыг урьж байна.",
      },
      purpose: {
        en: "Build an “Earth Jukebox”: an interface, script, or application that pairs Earth Information Center (EIC) visual frames with dynamic sonifications generated in real time.",
        mn: "Дэлхийн мэдээллийн төвийн (EIC) дүрс бичлэгийн кадруудыг бодит цаг хугацаанд үүсгэсэн динамик дуу авиатай хослуулах “Дэлхийн жүкбокс” буюу интерфейс, скрипт эсвэл апп бүтээх.",
      },
    },
  ] as Challenge[],
};

// TODO(content): confirm times once the venue is booked.
export const schedule = {
  eyebrow: { en: "Two-day schedule", mn: "Хоёр өдрийн хөтөлбөр" },
  title: {
    en: "A focused weekend to make something matter",
    mn: "Үнэ цэнтэй зүйл бүтээх хоёр өдөр",
  },
  pageIntro: {
    en: "The provisional programme for Saturday and Sunday. Final times will be confirmed with the venue.",
    mn: "Бямба, Ням гарагийн урьдчилсан хөтөлбөр. Эцсийн цагийг байршил баталгаажсаны дараа мэдэгдэнэ.",
  },
  provisional: { en: "Provisional", mn: "Урьдчилсан" },
  keyMoment: { en: "Key moment", mn: "Чухал үе" },
  days: [
    {
      label: { en: "Day 1", mn: "1-р өдөр" },
      date: { en: "Saturday · 14 November", mn: "Бямба · 11-р сарын 14" },
      items: [
        {
          time: "08:30",
          title: { en: "Doors open and check-in", mn: "Хаалга нээгдэж, бүртгэл эхэлнэ" },
        },
        { time: "09:30", title: { en: "Opening briefing", mn: "Нээлтийн танилцуулга" } },
        {
          time: "10:30",
          title: {
            en: "Team formation and challenge selection",
            mn: "Баг бүрдүүлэлт ба сорилт сонголт",
          },
        },
        {
          time: "12:00",
          title: { en: "Build session begins", mn: "Бүтээлийн ажил эхэлнэ" },
          key: true,
        },
        { time: "18:00", title: { en: "Mentor checkpoint", mn: "Менторын зөвлөгөө" } },
      ],
    },
    {
      label: { en: "Day 2", mn: "2-р өдөр" },
      date: { en: "Sunday · 15 November", mn: "Ням · 11-р сарын 15" },
      items: [
        { time: "09:00", title: { en: "Build session resumes", mn: "Бүтээлийн ажил үргэлжилнэ" } },
        { time: "12:00", title: { en: "Submission clinic", mn: "Бүтээл илгээх зөвлөгөө" } },
        {
          time: "15:00",
          title: { en: "Project submissions close", mn: "Бүтээл хүлээн авах хугацаа дуусна" },
          key: true,
        },
        { time: "16:00", title: { en: "Team presentations", mn: "Багуудын танилцуулга" } },
        {
          time: "18:30",
          title: { en: "Local awards and closing", mn: "Орон нутгийн шагнал ба хаалт" },
          key: true,
        },
      ],
    },
  ],
} as const;

// TODO(content): confirm local prizes, award categories and the criteria weights.
export const judging = {
  eyebrow: { en: "Judging & awards", mn: "Шалгаруулалт ба шагнал" },
  title: {
    en: "Good ideas are clear, useful and built to travel",
    mn: "Сайн санаа ойлгомжтой, хэрэгцээтэй, цаашид хөгжих боломжтой байдаг",
  },
  pageIntro: {
    en: "How projects are judged in Ulaanbaatar and how local nominees reach NASA Global Judging.",
    mn: "Улаанбаатарт төслүүдийг хэрхэн үнэлдэг, шилдэг багууд NASA-гийн дэлхийн шатны шалгаруулалтад хэрхэн шалгардаг тухай.",
  },
  intro: {
    en: "Local judges assess each eligible project using the NASA Space Apps criteria. Local nominees advance to NASA Global Judging and are considered for Global Awards.",
    mn: "Орон нутгийн шүүгчид шаардлага хангасан бүтээл бүрийг NASA Space Apps-ийн шалгуураар үнэлнэ. Нэр дэвшсэн багууд NASA-гийн дэлхийн шатны шалгаруулалтад оролцож, Global Awards-ын төлөө өрсөлдөнө.",
  },
  criteriaTitle: { en: "Judging criteria", mn: "Үнэлгээний шалгуур" },
  criteria: [
    {
      value: "25%",
      label: { en: "Impact", mn: "Үр нөлөө" },
      text: {
        en: "How much the project could matter to people or science.",
        mn: "Төсөл хүмүүс болон шинжлэх ухаанд хэр их ач холбогдолтой вэ.",
      },
    },
    {
      value: "25%",
      label: { en: "Creativity", mn: "Бүтээлч байдал" },
      text: {
        en: "How original the idea and its approach are.",
        mn: "Санаа болон шийдлийн арга хэр шинэлэг вэ.",
      },
    },
    {
      value: "25%",
      label: { en: "Validity", mn: "Үндэслэл" },
      text: {
        en: "Whether the solution is sound and actually works.",
        mn: "Шийдэл үндэслэлтэй, бодитоор ажилладаг эсэх.",
      },
    },
    {
      value: "25%",
      label: { en: "Relevance", mn: "Нийцэл" },
      text: {
        en: "How directly it answers the chosen NASA challenge.",
        mn: "Сонгосон NASA-гийн сорилтод хэр оновчтой хариулж байна вэ.",
      },
    },
  ],
  pathTitle: { en: "From Ulaanbaatar to Global Judging", mn: "Улаанбаатараас дэлхийн шат хүртэл" },
  path: [
    {
      en: "Teams submit projects on the official site by Sunday 15:00",
      mn: "Багууд Ням гарагийн 15:00 цаг хүртэл албан ёсны сайтад бүтээлээ илгээнэ",
    },
    {
      en: "Local judges review and hear team presentations",
      mn: "Орон нутгийн шүүгчид бүтээлүүдийг үнэлж, танилцуулгыг сонсоно",
    },
    {
      en: "Ulaanbaatar nominees are announced at the closing",
      mn: "Хаалтын үеэр Улаанбаатарын нэр дэвшигчдийг зарлана",
    },
    {
      en: "Nominees enter NASA Global Judging for the Global Awards",
      mn: "Нэр дэвшигчид NASA-гийн дэлхийн шатны шалгаруулалтад оролцоно",
    },
  ],
  prizes: {
    en: "Local award and prize details will be announced.",
    mn: "Орон нутгийн шагналын дэлгэрэнгүйг удахгүй зарлана.",
  },
  peopleTitle: { en: "Mentors & judges", mn: "Ментор ба шүүгчид" },
  peopleText: {
    en: "We are inviting leaders across science, technology, design, data, business and storytelling. Confirmed names will appear here.",
    mn: "Шинжлэх ухаан, технологи, дизайн, өгөгдөл, бизнес, контент бүтээлийн салбарын манлайлагчдыг урьж байна. Баталгаажсан нэрсийг энд нийтэлнэ.",
  },
  // TODO(content): add confirmed people as { name, role, organization }.
  mentors: [] as Array<{ name: string; role: Localized; organization: string }>,
  judges: [] as Array<{ name: string; role: Localized; organization: string }>,
} as const;

export type FaqTopic = "registration" | "teams" | "participation" | "event" | "judging";

export const faqs = {
  eyebrow: { en: "Questions", mn: "Асуултууд" },
  title: { en: "Before you join", mn: "Оролцохын өмнө" },
  pageIntro: {
    en: "Answers to common questions. Can't find yours? Get in touch with the Ulaanbaatar team.",
    mn: "Түгээмэл асуултуудын хариулт. Хариултаа олж чадсангүй юу? Улаанбаатарын зохион байгуулах багтай холбогдоорой.",
  },
  topics: {
    registration: { en: "Registration", mn: "Бүртгэл" },
    teams: { en: "Teams", mn: "Баг" },
    participation: { en: "Taking part", mn: "Оролцоо" },
    event: { en: "On the day", mn: "Арга хэмжээний өдөр" },
    judging: { en: "Judging", mn: "Шалгаруулалт" },
  } satisfies Record<FaqTopic, Localized>,
  items: [
    {
      topic: "registration",
      featured: true,
      question: { en: "Is participation free?", mn: "Оролцоо үнэ төлбөргүй юу?" },
      answer: {
        en: "Yes. NASA Space Apps is free to join, both in person and virtually.",
        mn: "Тийм. NASA Space Apps-д танхимаар болон цахимаар үнэ төлбөргүй оролцоно.",
      },
    },
    {
      topic: "registration",
      question: {
        en: "How do I register for the Ulaanbaatar event?",
        mn: "Улаанбаатарын арга хэмжээнд хэрхэн бүртгүүлэх вэ?",
      },
      answer: {
        en: "Use any Register button on this site. It opens the Ulaanbaatar page on the official NASA Space Apps site, where you create an account and join the local event.",
        mn: "Энэ сайт дээрх «Бүртгүүлэх» товчийг дарахад NASA Space Apps-ийн албан ёсны сайтын Улаанбаатарын хуудас нээгдэнэ. Тэнд бүртгэл үүсгээд Улаанбаатарын арга хэмжээнд нэгдээрэй.",
      },
    },
    {
      topic: "registration",
      question: { en: "Is there an age requirement?", mn: "Насны шаардлага бий юу?" },
      answer: {
        en: "Age rules follow the official NASA Space Apps participant terms. Check the official Participant FAQs, linked at the bottom of this page.",
        mn: "Насны дүрэм NASA Space Apps-ийн албан ёсны оролцогчийн нөхцөлийг баримтална. Дэлгэрэнгүйг хуудасны доод хэсэгт байрлах албан ёсны Participant FAQs-аас үзнэ үү.",
      },
    },
    {
      topic: "teams",
      featured: true,
      question: {
        en: "Do I need a team before registering?",
        mn: "Бүртгүүлэхээс өмнө багтай байх хэрэгтэй юу?",
      },
      answer: {
        en: "No. Register on your own, then form or join a team on the official site or meet teammates at the opening team-formation session.",
        mn: "Үгүй. Ганцаараа бүртгүүлээд албан ёсны сайт дээр баг үүсгэх, багт нэгдэх эсвэл нээлтийн үеэр болох баг бүрдүүлэлтээр хамтрагчаа олж болно.",
      },
    },
    {
      topic: "teams",
      question: {
        en: "Can I join a team from another city or country?",
        mn: "Өөр хот, улсын багт нэгдэж болох уу?",
      },
      answer: {
        en: "Team rules are set by NASA Space Apps. The official Find a Team page shows the options for 2026.",
        mn: "Багийн дүрмийг NASA Space Apps тогтоодог. 2026 оны дэлгэрэнгүй мэдээллийг албан ёсны Find a Team хуудаснаас үзнэ үү.",
      },
    },
    {
      topic: "participation",
      featured: true,
      question: { en: "Do I need to know how to code?", mn: "Код бичдэг байх шаардлагатай юу?" },
      answer: {
        en: "No. Strong teams combine technical and non-technical skills, including science, research, design, storytelling and community knowledge.",
        mn: "Үгүй. Амжилттай багууд техникийн ур чадварыг шинжлэх ухаан, судалгаа, дизайн, контент бүтээл, орон нутгийн мэдлэг зэрэг бусад чадвартай хослуулдаг.",
      },
    },
    {
      topic: "participation",
      question: { en: "Can I take part virtually?", mn: "Цахимаар оролцож болох уу?" },
      answer: {
        en: "Yes. Virtual participants join the Ulaanbaatar event online. Connection details, check-ins and submission guidance are shared with registered participants.",
        mn: "Тийм. Цахим оролцогчид Улаанбаатарын арга хэмжээнд онлайнаар нэгдэнэ. Холболт, уулзалтын цаг, бүтээл илгээх зааврыг бүртгүүлсэн оролцогчдод хүргэнэ.",
      },
    },
    {
      topic: "participation",
      question: {
        en: "What language will the event use?",
        mn: "Арга хэмжээ ямар хэлээр явагдах вэ?",
      },
      answer: {
        en: "The local programme runs in Mongolian and English. NASA challenge materials are published in English.",
        mn: "Орон нутгийн хөтөлбөр Монгол, Англи хэлээр явагдана. NASA-гийн сорилтын материал Англи хэлээр нийтлэгддэг.",
      },
    },
    {
      topic: "event",
      question: { en: "What should I bring?", mn: "Юу авчрах вэ?" },
      answer: {
        en: "A laptop and charger, identification and a reusable water bottle. Details for the venue will be shared before the event.",
        mn: "Зөөврийн компьютер, цэнэглэгч, иргэний үнэмлэх, усны сав. Байршлын дэлгэрэнгүй мэдээллийг арга хэмжээний өмнө хүргэнэ.",
      },
    },
    {
      topic: "event",
      question: { en: "Where is the venue?", mn: "Хаана болох вэ?" },
      answer: {
        en: "The Ulaanbaatar venue will be announced here and on Questa's Instagram.",
        mn: "Улаанбаатар дахь байршлыг энэ сайт болон Questa-гийн Instagram хуудсаар зарлана.",
      },
    },
    {
      topic: "judging",
      question: { en: "How are projects judged?", mn: "Төслүүдийг хэрхэн үнэлэх вэ?" },
      answer: {
        en: "Local judges score projects on impact, creativity, validity and relevance. Local nominees go on to NASA Global Judging. See the Judging page for details.",
        mn: "Орон нутгийн шүүгчид төслүүдийг үр нөлөө, бүтээлч байдал, үндэслэл, нийцэл гэсэн шалгуураар үнэлнэ. Шилдэг багууд NASA-гийн дэлхийн шатны шалгаруулалтад нэр дэвшинэ. Дэлгэрэнгүйг «Шалгаруулалт» хуудаснаас үзнэ үү.",
      },
    },
  ] as Array<{ topic: FaqTopic; featured?: boolean; question: Localized; answer: Localized }>,
};

export const organizers = {
  eyebrow: { en: "Organizers", mn: "Зохион байгуулагчид" },
  title: {
    en: "Built in Ulaanbaatar. Connected to the world.",
    mn: "Улаанбаатараас эхэлж, дэлхийтэй холбогдоно.",
  },
  pageIntro: {
    en: "NASA Space Apps Challenge Ulaanbaatar is hosted by Questa as an official local event of the global hackathon.",
    mn: "NASA Space Apps Challenge Улаанбаатарыг Questa дэлхийн хакатоны албан ёсны орон нутгийн арга хэмжээ болгон зохион байгуулж байна.",
  },
  // TODO(content): replace with Questa's own approved description.
  hostTitle: { en: "Hosted by Questa", mn: "Зохион байгуулагч: Questa" },
  hostText: {
    en: "Questa hosts NASA Space Apps Challenge Ulaanbaatar, bringing the world’s largest annual hackathon to Mongolia’s students, builders and STEM community.",
    mn: "Questa нь жил бүр зохион байгуулагддаг дэлхийн хамгийн том хакатоныг Монголын оюутан залуус, бүтээгчид болон STEM хамт олонд хүргэж, NASA Space Apps Challenge Улаанбаатарыг зохион байгуулж байна.",
  },
  followQuesta: { en: "Follow Questa on Instagram", mn: "Questa-г Instagram-аас дагах" },
  teamTitle: { en: "Local team and partners", mn: "Орон нутгийн баг ба түншүүд" },
  teamText: {
    en: "The local organizing team, partners and sponsors will be announced as they are confirmed.",
    mn: "Орон нутгийн зохион байгуулах баг, түнш, ивээн тэтгэгчдийг баталгаажсаны дараа зарлана.",
  },
  partnerCta: {
    en: "Interested in partnering or mentoring? Contact the team.",
    mn: "Түнш эсвэл ментор болох сонирхолтой юу? Бидэнтэй холбогдоорой.",
  },
} as const;

export const officialLinks = {
  eyebrow: {
    en: "Official NASA Space Apps links",
    mn: "NASA Space Apps-ийн албан ёсны холбоосууд",
  },
  title: { en: "Everything official, one click away", mn: "Албан ёсны бүх мэдээлэл нэг дор" },
  items: [
    {
      key: "localEvent",
      label: { en: "Ulaanbaatar event page", mn: "Улаанбаатарын арга хэмжээний хуудас" },
    },
    { key: "challenges", label: { en: "2026 challenges", mn: "2026 оны сорилтууд" } },
    { key: "findTeam", label: { en: "Find a team", mn: "Баг хайх" } },
    {
      key: "participantFaqs",
      label: { en: "Participant FAQs", mn: "Оролцогчийн түгээмэл асуулт" },
    },
    { key: "resources", label: { en: "Resources and guides", mn: "Нөөц ба гарын авлага" } },
    { key: "hackathon", label: { en: "About the 2026 hackathon", mn: "2026 оны хакатоны тухай" } },
  ],
} as const;

export const register = {
  eyebrow: { en: "14–15 November 2026", mn: "2026 оны 11-р сарын 14–15" },
  title: { en: "Your perspective belongs in the room.", mn: "Таны оролцоо, санаа энд хэрэгтэй." },
  text: {
    en: "Registration is open on the official NASA Space Apps site. Sign up for the Ulaanbaatar local event and join or form a team.",
    mn: "Бүртгэл NASA Space Apps-ийн албан ёсны сайт дээр нээлттэй байна. Улаанбаатарын арга хэмжээнд бүртгүүлж, баг үүсгэх эсвэл багт нэгдээрэй.",
  },
  cta: { en: "Register now", mn: "Одоо бүртгүүлэх" },
  note: {
    en: "Free to participate · Limited in-person capacity",
    mn: "Үнэ төлбөргүй · Танхимын оролцоо хязгаартай",
  },
} satisfies Record<string, Localized>;

export const footer = {
  identity: {
    en: "NASA Space Apps Challenge Ulaanbaatar 2026",
    mn: "NASA Space Apps Challenge Улаанбаатар 2026",
  },
  pagesLabel: { en: "Event", mn: "Арга хэмжээ" },
  officialLabel: { en: "NASA Space Apps", mn: "NASA Space Apps" },
  contactLabel: { en: "Contact", mn: "Холбоо барих" },
  emailSoon: { en: "Official email coming soon", mn: "Албан ёсны имэйл удахгүй" },
  followSpaceApps: { en: "Follow NASA Space Apps", mn: "NASA Space Apps-ийг дагах" },
  disclaimer: {
    en: "NASA Space Apps Challenge Ulaanbaatar is a local event of the global NASA International Space Apps Challenge, hosted by Questa. NASA does not endorse any non-U.S. Government entity and is not responsible for information contained on non-U.S. Government websites.",
    mn: "NASA Space Apps Challenge Улаанбаатар нь NASA International Space Apps Challenge дэлхийн арга хэмжээний орон нутгийн салбар бөгөөд Questa зохион байгуулж байна. NASA нь АНУ-ын Засгийн газрын бус байгууллагыг дэмждэггүй бөгөөд тэдгээрийн вэбсайт дээрх мэдээллийг хариуцахгүй.",
  },
  copyright: {
    en: "© 2026 NASA Space Apps Challenge Ulaanbaatar",
    mn: "© 2026 NASA Space Apps Challenge Улаанбаатар",
  },
} as const;
