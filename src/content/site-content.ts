export type Language = "en" | "mn";
export type Localized = Record<Language, string>;

export const languageNames: Record<Language, string> = { en: "EN", mn: "MN" };

export const ui = {
  skip: { en: "Skip to content", mn: "Үндсэн хэсэг рүү очих" },
  menu: { en: "Open menu", mn: "Цэс нээх" },
  close: { en: "Close menu", mn: "Цэс хаах" },
  language: { en: "Change language", mn: "Хэл солих" },
  register: { en: "Register interest", mn: "Сонирхлоо бүртгүүлэх" },
  detailsSoon: { en: "Details coming soon", mn: "Дэлгэрэнгүй мэдээлэл удахгүй" },
  comingSoon: { en: "To be announced", mn: "Удахгүй зарлана" },
} satisfies Record<string, Localized>;

export const navItems = [
  { href: "#about", label: { en: "About", mn: "Тухай" } },
  { href: "#challenges", label: { en: "Challenges", mn: "Сорилтууд" } },
  { href: "#schedule", label: { en: "Schedule", mn: "Хөтөлбөр" } },
  { href: "#faq", label: { en: "FAQ", mn: "Асуулт" } },
] as const;

export const hero = {
  eyebrow: { en: "NASA INTERNATIONAL SPACE APPS CHALLENGE", mn: "NASA Олон Улсын Space Apps Challenge" },
  titleTop: { en: "Ulaanbaatar", mn: "Улаанбаатар" },
  titleBottom: { en: "2026", mn: "2026" },
  summary: {
    en: "Two days. One planet. Build solutions for challenges we face on Earth and in space.",
    mn: "Хоёр өдөр. Нэг дэлхий. Дэлхий болон сансарт тулгарч буй сорилтуудад шийдэл бүтээцгээе.",
  },
  date: { en: "14—15 November 2026", mn: "2026 оны 11-р сарын 14—15" },
  location: { en: "Ulaanbaatar, Mongolia", mn: "Улаанбаатар, Монгол" },
  format: { en: "In person + virtual", mn: "Танхим + цахим" },
  imageAlt: { en: "Earth and Central Asia seen from low orbit", mn: "Дэлхий болон Төв Ази сансраас харагдах нь" },
  scroll: { en: "Scroll to enter", mn: "Доош гүйлгэнэ үү" },
} satisfies Record<string, Localized>;

export const about = {
  index: "01",
  eyebrow: { en: "The local event", mn: "Орон нутгийн арга хэмжээ" },
  title: {
    en: "Global questions. Local imagination.",
    mn: "Дэлхийн хэмжээний асуулт. Монголын бүтээлч сэтгэлгээ.",
  },
  lead: {
    en: "NASA Space Apps is the world’s largest annual global hackathon. In Ulaanbaatar, students, scientists, designers, engineers, storytellers, and curious minds come together to turn open data into ideas with real-world impact.",
    mn: "NASA Space Apps бол дэлхийн хамгийн том жил бүрийн хакатон. Улаанбаатарт оюутан, эрдэмтэн, дизайнер, инженер, өгүүлэгч, шинийг эрэлхийлэгчид нээлттэй өгөгдлийг бодит нөлөө бүхий санаа болгон хувиргана.",
  },
  body: {
    en: "You do not need to be a space expert. Bring a perspective, find a team, choose a NASA challenge, and prototype a response over one focused weekend. Local winners advance for consideration in the NASA Global Judging process.",
    mn: "Сансрын мэргэжилтэн байх шаардлагагүй. Өөрийн өнцгийг авч ирээд, багаа бүрдүүлж, NASA-гийн сорилтыг сонгон нэг амралтын өдрөөр шийдлийн загвар бүтээнэ. Орон нутгийн ялагчид NASA-гийн дэлхийн шатны шүүлтэд нэр дэвшинэ.",
  },
  modesTitle: { en: "Choose how you join", mn: "Хэрхэн оролцохоо сонгоно уу" },
  modes: [
    {
      number: "01",
      title: { en: "In person", mn: "Танхимаар" },
      text: {
        en: "Build alongside the local community in Ulaanbaatar, with access to mentors, workshops, and the full event atmosphere. Exact venue to be announced.",
        mn: "Улаанбаатар дахь хамт олонтойгоо ментор, сургалт, арга хэмжээний бүрэн орчинд бүтээнэ. Байршлыг удахгүй зарлана.",
      },
    },
    {
      number: "02",
      title: { en: "Virtual", mn: "Цахимаар" },
      text: {
        en: "Join the Ulaanbaatar event remotely, collaborate online, and take part in scheduled check-ins and submissions from wherever you are.",
        mn: "Улаанбаатарын арга хэмжээнд алсаас нэгдэж, цахимаар хамтран ажиллаж, товлосон уулзалт болон бүтээл илгээх үйл явцад оролцоно.",
      },
    },
  ],
} as const;

// UPDATE POINT: edit these steps when the final participant flow is confirmed.
export const howItWorks = {
  index: "02",
  eyebrow: { en: "How it works", mn: "Хэрхэн явагдах вэ" },
  title: { en: "From open data to working idea.", mn: "Нээлттэй өгөгдлөөс бодит санаа хүртэл." },
  steps: [
    { number: "01", title: { en: "Register", mn: "Бүртгүүлэх" }, text: { en: "Sign up individually. You can arrive with a team or meet collaborators at the event.", mn: "Ганцаарчилж бүртгүүлнэ. Багтайгаа ирэх эсвэл арга хэмжээний үеэр хамтрагчаа олох боломжтой." } },
    { number: "02", title: { en: "Choose a challenge", mn: "Сорилт сонгох" }, text: { en: "Explore the 2026 NASA challenge statements and select the question your team wants to solve.", mn: "2026 оны NASA-гийн сорилтуудтай танилцаж, багийнхаа шийдэх асуултыг сонгоно." } },
    { number: "03", title: { en: "Build together", mn: "Хамтдаа бүтээх" }, text: { en: "Research, design, code, analyze, and test with support from local mentors across two focused days.", mn: "Хоёр өдрийн турш судалж, загварчилж, код бичиж, шинжилж, менторуудын дэмжлэгтэй туршина." } },
    { number: "04", title: { en: "Present", mn: "Танилцуулах" }, text: { en: "Submit your project and pitch it to local judges. Selected teams progress toward global consideration.", mn: "Бүтээлээ илгээж, орон нутгийн шүүгчдэд танилцуулна. Шалгарсан багууд дэлхийн шатанд нэр дэвшинэ." } },
  ],
} as const;

// TODO(content): replace these sample structures with NASA's official 2026 challenge titles and EN/MN explanations once released.
export const challenges = {
  index: "03",
  eyebrow: { en: "2026 challenges", mn: "2026 оны сорилтууд" },
  title: { en: "The questions arrive from NASA. The answers come from you.", mn: "Асуулт NASA-гаас. Хариулт танаас." },
  intro: { en: "Official 2026 challenge statements will be published closer to the event. Every challenge will include source data, context, and a clear submission brief.", mn: "2026 оны албан ёсны сорилтууд арга хэмжээ дөхөхөд нийтлэгдэнэ. Сорилт бүр эх өгөгдөл, тайлбар болон бүтээл илгээх заавартай байна." },
  items: [
    { code: "CH—01", status: { en: "Awaiting NASA release", mn: "NASA-гийн мэдээллийг хүлээж байна" }, title: { en: "Earth systems", mn: "Дэлхийн систем" }, description: { en: "A 2026 challenge exploring how open Earth observation data can help communities understand a changing planet.", mn: "Дэлхийн ажиглалтын нээлттэй өгөгдлөөр өөрчлөгдөж буй гарагийг ойлгоход нийгэмд туслах 2026 оны сорилт." } },
    { code: "CH—02", status: { en: "Awaiting NASA release", mn: "NASA-гийн мэдээллийг хүлээж байна" }, title: { en: "Space exploration", mn: "Сансрын судалгаа" }, description: { en: "A 2026 challenge centered on safer, smarter, or more inclusive human and robotic exploration beyond Earth.", mn: "Дэлхийгээс цааш хүн болон роботын судалгааг илүү аюулгүй, ухаалаг, хүртээмжтэй болгох 2026 оны сорилт." } },
    { code: "CH—03", status: { en: "Awaiting NASA release", mn: "NASA-гийн мэдээллийг хүлээж байна" }, title: { en: "Data and discovery", mn: "Өгөгдөл ба нээлт" }, description: { en: "A 2026 challenge transforming complex NASA datasets into useful tools, stories, or scientific insight.", mn: "NASA-гийн нарийн төвөгтэй өгөгдлийг хэрэгтэй хэрэгсэл, түүх эсвэл шинжлэх ухааны шинэ ойлголт болгох 2026 оны сорилт." } },
  ],
} as const;

// TODO(content): replace provisional times after the venue and global challenge release schedule are confirmed.
export const schedule = {
  index: "04",
  eyebrow: { en: "Two-day schedule", mn: "Хоёр өдрийн хөтөлбөр" },
  title: { en: "A focused weekend to make something matter.", mn: "Үнэ цэнтэй зүйл бүтээх төвлөрсөн амралтын өдрүүд." },
  provisional: { en: "Provisional programme", mn: "Урьдчилсан хөтөлбөр" },
  days: [
    { label: { en: "Day 01", mn: "Өдөр 01" }, date: { en: "Saturday · 14 November", mn: "Бямба · 11-р сарын 14" }, items: [
      { time: "08:30", title: { en: "Doors open & check-in", mn: "Бүртгэл эхэлнэ" } },
      { time: "09:30", title: { en: "Opening briefing", mn: "Нээлтийн танилцуулга" } },
      { time: "10:30", title: { en: "Team formation & challenge selection", mn: "Баг бүрдүүлэлт ба сорилт сонголт" } },
      { time: "12:00", title: { en: "Build session begins", mn: "Бүтээх үе эхэлнэ" } },
      { time: "18:00", title: { en: "Mentor checkpoint", mn: "Менторын зөвлөгөө" } },
    ] },
    { label: { en: "Day 02", mn: "Өдөр 02" }, date: { en: "Sunday · 15 November", mn: "Ням · 11-р сарын 15" }, items: [
      { time: "09:00", title: { en: "Build session resumes", mn: "Бүтээх үе үргэлжилнэ" } },
      { time: "12:00", title: { en: "Submission clinic", mn: "Бүтээл илгээх зөвлөгөө" } },
      { time: "15:00", title: { en: "Project submissions close", mn: "Бүтээл хүлээн авч дуусна" } },
      { time: "16:00", title: { en: "Team presentations", mn: "Багуудын танилцуулга" } },
      { time: "18:30", title: { en: "Local awards & closing", mn: "Орон нутгийн шагнал ба хаалт" } },
    ] },
  ],
} as const;

// TODO(content): confirm local prizes and exact award categories.
export const judging = {
  index: "05",
  eyebrow: { en: "Judging & awards", mn: "Шүүлт ба шагнал" },
  title: { en: "Good ideas are clear, useful, and built to travel.", mn: "Сайн санаа ойлгомжтой, хэрэгтэй, өргөжин хөгжих чадвартай." },
  intro: { en: "Local judges assess each eligible project using NASA Space Apps criteria. Local nominees may advance to NASA’s Global Judging stage and be considered for Global Awards.", mn: "Орон нутгийн шүүгчид шаардлага хангасан бүтээл бүрийг NASA Space Apps-ийн шалгуураар үнэлнэ. Нэр дэвшсэн багууд NASA-гийн дэлхийн шатны шүүлт болон Global Awards-д өрсөлдөх боломжтой." },
  criteria: [
    { value: "25%", label: { en: "Impact", mn: "Үр нөлөө" } },
    { value: "25%", label: { en: "Creativity", mn: "Бүтээлч байдал" } },
    { value: "25%", label: { en: "Validity", mn: "Үндэслэл" } },
    { value: "25%", label: { en: "Relevance", mn: "Нийцэл" } },
  ],
  prizes: { en: "Local award and prize details will be announced.", mn: "Орон нутгийн шагналын дэлгэрэнгүйг удахгүй зарлана." },
} as const;

// TODO(content): add confirmed mentors and judges as objects with name, role, organization, bio, and image.
export const people = {
  index: "06",
  eyebrow: { en: "People", mn: "Хүмүүс" },
  title: { en: "Mentors & judges", mn: "Ментор ба шүүгчид" },
  emptyTitle: { en: "The 2026 panel is taking shape.", mn: "2026 оны бүрэлдэхүүн удахгүй тодорно." },
  emptyText: { en: "We are inviting leaders across science, technology, design, data, business, and storytelling. Confirmed names will appear here.", mn: "Шинжлэх ухаан, технологи, дизайн, өгөгдөл, бизнес, өгүүлэмжийн салбарын манлайлагчдыг урьж байна. Баталгаажсан нэрсийг энд нийтэлнэ." },
  mentors: [] as Array<{ name: string; role: Localized; organization: string; bio: Localized; image?: string }>,
  judges: [] as Array<{ name: string; role: Localized; organization: string; bio: Localized; image?: string }>,
} as const;

export const participantGuide = {
  index: "07",
  eyebrow: { en: "Participant guide", mn: "Оролцогчийн хөтөч" },
  title: { en: "Come curious. Leave with a project.", mn: "Сониуч ир. Бүтээлтэй буц." },
  items: [
    { title: { en: "Who can join", mn: "Хэн оролцох вэ" }, text: { en: "Students, professionals, makers, researchers, artists, and first-time hackers are welcome. Participation rules and minimum age will be confirmed with registration.", mn: "Оюутан, мэргэжилтэн, бүтээгч, судлаач, уран бүтээлч болон анх удаа оролцогч бүгдэд нээлттэй. Нас болон оролцооны дүрмийг бүртгэлтэй хамт баталгаажуулна." } },
    { title: { en: "What to bring", mn: "Юу авчрах вэ" }, text: { en: "A laptop and charger, identification, reusable water bottle, and anything your craft needs. Most importantly: bring an open mind.", mn: "Зөөврийн компьютер, цэнэглэгч, үнэмлэх, усны сав болон бүтээлдээ хэрэгтэй зүйлсээ авчирна. Хамгийн чухал нь нээлттэй сэтгэлгээ." } },
    { title: { en: "Teams & skills", mn: "Баг ба ур чадвар" }, text: { en: "Multidisciplinary teams are encouraged. Coding helps, but research, design, communication, science, and local knowledge matter just as much.", mn: "Олон талын ур чадвартай багийг дэмжинэ. Код бичих нь тустай ч судалгаа, дизайн, харилцаа, шинжлэх ухаан, орон нутгийн мэдлэг адил чухал." } },
  ],
} as const;

// UPDATE POINT: add or reorder FAQs here without changing the accordion layout.
export const faqs = {
  index: "08",
  eyebrow: { en: "Questions", mn: "Асуултууд" },
  title: { en: "Before you join", mn: "Оролцохын өмнө" },
  items: [
    { question: { en: "Is participation free?", mn: "Оролцоо үнэ төлбөргүй юу?" }, answer: { en: "NASA Space Apps events are free to participate in. Final local registration terms will be published when registration opens.", mn: "NASA Space Apps арга хэмжээнд үнэ төлбөргүй оролцоно. Орон нутгийн бүртгэлийн нөхцөлийг бүртгэл нээгдэхэд нийтэлнэ." } },
    { question: { en: "Do I need a team before registering?", mn: "Бүртгүүлэхээс өмнө багтай байх хэрэгтэй юу?" }, answer: { en: "No. You may register individually and meet potential teammates during the opening team-formation session.", mn: "Үгүй. Ганцаарчилж бүртгүүлээд нээлтийн баг бүрдүүлэх үеэр хамтрагчидтайгаа танилцаж болно." } },
    { question: { en: "Do I need to know how to code?", mn: "Код бичдэг байх шаардлагатай юу?" }, answer: { en: "No. Strong teams combine technical and non-technical skills, including science, research, design, storytelling, and community knowledge.", mn: "Үгүй. Амжилттай багт техник, шинжлэх ухаан, судалгаа, дизайн, өгүүлэмж, орон нутгийн мэдлэг зэрэг олон ур чадвар нэгддэг." } },
    { question: { en: "Can I participate virtually?", mn: "Цахимаар оролцож болох уу?" }, answer: { en: "Yes. A virtual participation track is planned. Connection details, checkpoints, and submission guidance will be shared with registered participants.", mn: "Тийм. Цахим оролцооны чиглэл төлөвлөгдсөн. Холболт, уулзалтын цаг, бүтээл илгээх зааврыг бүртгүүлсэн оролцогчдод хүргэнэ." } },
    { question: { en: "What language will the event use?", mn: "Арга хэмжээ ямар хэлээр явагдах вэ?" }, answer: { en: "Core local programming will support Mongolian and English. NASA challenge materials are released in English, with local explanation where available.", mn: "Орон нутгийн үндсэн хөтөлбөр Монгол, Англи хэлээр явагдана. NASA-гийн сорилтын материал Англи хэлээр гарч, боломжтой хэсэгт Монгол тайлбар дагалдана." } },
  ],
} as const;

// TODO(content): replace organizer name, contact email, and social URLs with confirmed official details.
export const organizers = {
  index: "09",
  eyebrow: { en: "Organizers", mn: "Зохион байгуулагчид" },
  title: { en: "Built in Ulaanbaatar. Connected to the world.", mn: "Улаанбаатарт бүтээнэ. Дэлхийтэй холбогдоно." },
  text: { en: "The local organizing team and community partners will be announced as confirmations are completed.", mn: "Орон нутгийн зохион байгуулагч баг болон хамтрагч байгууллагууд баталгаажсаны дараа зарлагдана." },
  team: [] as Array<{ name: string; role: Localized; logo?: string }>,
} as const;

export const register = {
  eyebrow: { en: "14—15 November 2026", mn: "2026 оны 11-р сарын 14—15" },
  title: { en: "Your perspective belongs in the room.", mn: "Таны өнцөг энд хэрэгтэй." },
  text: { en: "Registration is not open yet. Leave this page bookmarked and follow the official channels for the first announcement.", mn: "Бүртгэл хараахан нээгдээгүй байна. Энэ хуудсыг хадгалж, албан ёсны сувгуудаар бүртгэлийн мэдээллийг аваарай." },
  cta: { en: "Registration opens soon", mn: "Бүртгэл удахгүй нээгдэнэ" },
  note: { en: "Free to participate · Limited in-person capacity", mn: "Үнэ төлбөргүй · Танхимын оролцоо хязгаартай" },
} satisfies Record<string, Localized>;

export const footer = {
  identity: { en: "NASA Space Apps Challenge Ulaanbaatar 2026", mn: "NASA Space Apps Challenge Улаанбаатар 2026" },
  contactLabel: { en: "Contact", mn: "Холбоо барих" },
  contact: { en: "Official email coming soon", mn: "Албан ёсны имэйл удахгүй" },
  socialLabel: { en: "Follow", mn: "Дагах" },
  socials: [
    { label: "Facebook", href: "#" }, // TODO(content): add official Facebook URL.
    { label: "Instagram", href: "#" }, // TODO(content): add official Instagram URL.
    { label: "LinkedIn", href: "#" }, // TODO(content): add official LinkedIn URL.
  ],
  disclaimer: {
    en: "NASA Space Apps Challenge Ulaanbaatar is a local event within the global NASA International Space Apps Challenge.",
    mn: "NASA Space Apps Challenge Улаанбаатар нь NASA International Space Apps Challenge дэлхийн арга хэмжээний орон нутгийн салбар юм.",
  },
  copyright: { en: "© 2026 Ulaanbaatar Local Event", mn: "© 2026 Улаанбаатар орон нутгийн арга хэмжээ" },
} as const;

export const t = (value: Localized, language: Language) => value[language] || value.en;
