// Site data and HTML templates. Pure strings, no DOM: script.js uses them in the browser and
// scripts/prerender.ts uses them at build time so crawlers get the full page without running JS.
import lifePhotoManifest from "./public/optimized/life-photos.json";
import lifeAlts from "./life-alts.json";

export const img = {
  artRain: "/optimized/art-file-000-5-1920.webp",
  artBust: "/optimized/art-file-011-1024.webp",
  artSketch: "/optimized/art-4a6154b1-b03b-4831-860a-ec601cf7fd46-1024.webp",
  artPortrait: "/optimized/art-7ebf613a-080b-418d-802a-611900c027c4-1024.webp",
  artStudy: "/optimized/art-fecf90b7-acbb-40e4-a307-19d98610ba81-1024.webp",
  artSmall: "/optimized/art-file-005-2-1024.webp",
  artPhoto: "/optimized/art-photo-480.webp",
  artPosterLight: "/optimized/art-artboard-1-copy-2-1024.webp",
  artPosterDark: "/optimized/art-artboard-1-copy-4-1024.webp",
  artFates: "/optimized/art-3-fates-256.webp",
  artCoverPage: "/optimized/art-cover-page-1024.webp",
  artImg1211: "/optimized/art-img-1211-1-1024.webp",
  artImg1214: "/optimized/art-img-1214-1-1024.webp",
  artImg1219: "/optimized/art-img-1219-1-1024.webp",
  artImg1221: "/optimized/art-img-1221-1-1024.webp",
  artImg1223A: "/optimized/art-img-1223-1-1024.webp",
  artImg1223B: "/optimized/art-img-1223-2-1024.webp",
  artImg1233: "/optimized/art-img-1233-1-1024.webp",
  artImg1234: "/optimized/art-img-1234-1-1024.webp",
  artPortraitSketch: "/optimized/art-portrait-sketch-1024.webp",
  artFigureStool: "/optimized/art-figure-stool-1024.webp",
  artFigurePair: "/optimized/art-figure-pair-1024.webp",
  artThanos: "/optimized/art-thanos-1024.webp",
  artHandsPortrait: "/optimized/art-hands-portrait-1024.webp",
  desert: "/optimized/image-9-1920.webp",
  mountain: "/optimized/landscape-1920.webp",
  workImage17: "/optimized/work-image-17-209.webp",
  workImage18: "/optimized/work-image-18-210.webp",
  workImage19: "/optimized/work-image-19-205.webp",
  workRectangle13: "/optimized/work-rectangle-13-205.webp",
  workSoti: "/public/work/image.png",
  workWealthsimple: "/optimized/work-wealthsimple-447.webp",
  queensCrest: "/optimized/about-queens-960.webp",
  canadaFlag: "/optimized/about-canada-500.webp",
  portrait: "/optimized/life-img-1882-1024.webp",
  comingSoon: "/public/coming-soon.png",
  devLocalReach: "/optimized/dev-localreach-1024.webp",
  devFightLabs: "/optimized/dev-fightlab-1024.webp",
  devStumble: "/optimized/dev-stumble-1024.webp",
  devDearJournal: "/optimized/dev-deer-journal-1024.webp",
  devCatsCradle: "/optimized/dev-cats-cradle-1024.webp",
  devBaoBab: "/public/dev/Baobab.svg",
  devBetter: "/optimized/dev-better-1024.webp",
  devMonitor: "/optimized/dev-monitor-1600.webp",
};

export const jobs = [
  {
    icon: img.workImage18,
    company: "TAIV YCW20",
    start: "2025-01",
    position: "Software Engineer, AI Operations Lead",
    meta: "Jan 2025 - Jan 2026 / Winnipeg, Manitoba",
  },
  {
    icon: img.workImage19,
    company: "Larus Technologies",
    start: "2025-09",
    position: "Software Developer",
    meta: "Sept 2025 - Sept 2026 / Contract / Ottawa, Ontario",
  },
  {
    icon: img.workRectangle13,
    company: "TD Bank Group",
    start: "2026-01",
    position: "Software Developer Intern",
    meta: "Jan 2026 - May 2026 / Toronto, Ontario",
  },
  {
    icon: img.workImage17,
    company: "Local Reach",
    start: "2024-01",
    position: "Co-founder",
    meta: "Jan 2024 - Jan 2025 / Acquired by Taiv / Kingston, Ontario",
  },
];

// Shown in the masthead only; not yet listed under professional experience.
export const upcoming = [
  { icon: img.workWealthsimple, company: "Wealthsimple", position: "Incoming Software Engineer Intern", meta: "Jan 2027 - Apr 2027" },
];

export const devItems = {
  local: {
    title: "Local Reach",
    text: "Startup I co-founded that helps restaurants and bars monetize TV commercial breaks. Venues install our Raspberry Pi device into their cable setup, where it detects ad breaks and switches the screen to local business advertisements; advertisers pay for venue exposure and partners keep 30% of the revenue.",
    details: [
      "Raised $40K+ non-dilutive and joined 3 accelerators",
      "Partnered with 4 of Kingston's largest bars and advertisers including SpearHead Breweries",
      "Used TensorFlow logo detection, OpenCV colour variance, Raspberry Pi hardware, and IR control to detect commercial breaks and switch inputs",
    ],
    links: [
      [
        "Betakit",
        "https://betakit.com/taiv-acquihires-fellow-canadian-adtech-startup-local-reach-to-aid-expansion-plans/",
      ],
      ["Local Reach", "https://www.thelocalreach.ca/"],
      ["The Forge", "https://theforge.mcmaster.ca/startups/local-reach/"],
      [
        "Queen's Gazette",
        "https://www.queensu.ca/gazette/stories/pitch-competition-celebrates-innovation-and-entrepreneurship-0",
      ],
      ["Pilot House Demo", "https://youtu.be/yGFYpenWrVo"],
      ["Brass Pub Demo", "https://youtu.be/dBMbcPxOehA"],
      ["Tommy's Demo", "https://youtu.be/AOXebwhuOH8"],
    ],
    image: img.devLocalReach,
    alt: "Local Reach logo with a Raspberry Pi 5 board on an orange background",
  },
  scenariogpt: {
    title: "ScenarioGPT",
    text: "Production frontend and UX work for Larus Technologies' ScenarioGPT platform, focused on turning complex AI planning workflows into usable interfaces.",
    details: [
      "Wrote 150,000+ lines of production frontend code",
      "Translated defense, aviation, and stakeholder requirements into product flows",
      "Designed 10+ high-fidelity Figma mockups before implementing production UI",
    ],
    links: [["GitHub", "https://github.com/JosephLiao542211"]],
    image: img.workImage19,
    alt: "Larus Technologies logo, developer of ScenarioGPT",
  },
  baobab: {
    title: "BaoBab",
    text: "Civic innovation startup project recognized by the City of Kingston for turning a student-built product concept into a funded early-stage venture.",
    details: [
      "Won 1st place at the Mayor's Innovation Challenge",
      "Received $5K in seed funding for continued product development",
      "Featured by Kingstonist and the Queen's Gazette for student innovation impact",
    ],
    links: [
      [
        "Kingstonist",
        "https://www.kingstonist.com/news/winners-of-the-2024-mayors-innovation-challenge-announced/",
      ],
      [
        "Queen's Gazette",
        "https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations",
      ],
    ],
    image: img.devBaoBab,
    alt: "BaoBab logo in white on a green background",
  },
  fight: {
    title: "Fight Labs",
    text: "HackMIT project exploring how software can support combat-sports training through structured feedback, performance tracking, and faster review loops.",
    details: [
      "Designed around athletic progress, coaching workflows, and measurable skill development",
      "Built as a focused hackathon prototype with product and engineering constraints",
      "Won Most Marvelous Hack at HackMIT",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211/HackMIT-Fight-Labs"],
    ],
    image: img.devFightLabs,
    alt: "Fight Labs dashboard with kinetic force, combat efficiency, and rotation charts",
  },
  stumble: {
    title: "Stumble",
    text: "LeetCode-style dating trainer that uses AI dialogue simulations to help users practice conversations, get feedback, and build confidence through progressively harder scenarios.",
    details: [
      "Built with React, TypeScript, Express, MongoDB, OpenAI, and ElevenLabs",
      "Designed modules with difficulty levels and test-case style evaluation",
      "Won Best UI/UX Implementation at Hack the Hill II",
    ],
    links: [
      ["GitHub", "https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"],
      ["Devpost", "https://devpost.com/software/stumble-qpgf2o"],
    ],
    image: img.devStumble,
    alt: "Stumble team pitching at a uOttawa podium at Hack the Hill II",
  },
  better: {
    title: "Better",
    text: "Decentralized fitness accountability app built on the NEAR protocol where users bet $NEAR on physical goals and earn rewards when they follow through.",
    details: [
      "Users create physical challenges and stake tokens against their own commitment",
      "Successful users reclaim their stake and share rewards from missed challenges",
      "Won 2nd place in the NEAR category at HawkHacks",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211/Better-HawkHack2024"],
      [
        "Taikai",
        "https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwdf3lwh0efbyg016jpi8xzn/idea",
      ],
    ],
    image: img.devBetter,
    alt: "Better app dashboard showing fitness goals and a NEAR token balance",
  },
  journal: {
    title: "Dear Journal",
    text: "Journaling experiment focused on making reflection feel structured, private, and easy to return to without turning writing into another noisy productivity feed.",
    details: [
      "Designed a calmer writing experience for daily reflection",
      "Explored structured memory, emotional context, and lightweight prompts",
      "Placed top 5 at QHacks",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211"],
      ["Devpost", "https://devpost.com/software/deer-journal"],
    ],
    image: img.devDearJournal,
    alt: "Dear Journal plush prototype with wiring beside the app's home screen",
  },
  cats: {
    title: "Cat's Cradle",
    text: "GMTK Game Jam puzzle prototype about leading loose dogs out of your home using movement, transformation, undo, reset, and a scream mechanic for adjacent dogs.",
    details: [
      "Made in Unity as a short top-down HTML5 puzzle game",
      "Contributed art alongside a small cross-functional jam team",
      "Ranked 299th out of 6,600+ submissions in GMTK Game Jam 2023",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211"],
      ["itch.io", "https://xinmi.itch.io/cats-cradle"],
    ],
    image: img.devCatsCradle,
    alt: "Cat's Cradle pixel art title screen with a black cat at night",
  },
  jaja: {
    title: "JAJA",
    status: "coming soon",
    comingSoonText:
      "A polished product and design-system case study is being shaped here, with more interface work, visuals, and implementation notes coming soon.",
    text: "Design and product systems work focused on high-fidelity interface exploration, rapid prototyping, and clean implementation paths.",
    details: ["Figma systems", "Interaction design", "Frontend implementation"],
    links: [["GitHub", "https://github.com/JosephLiao542211"]],
    image: img.comingSoon,
    alt: "",
  },
  jajaLabs: {
    title: "JAJA Labs",
    status: "coming soon",
    comingSoonText:
      "An experimental lab for visual systems, software prototypes, and interface concepts. The first public project is still being assembled.",
    text: "Experimental product lab for visual systems, software prototypes, and polished interface concepts.",
    details: ["Design systems", "Prototype lab", "Visual direction"],
    links: [["GitHub", "https://github.com/JosephLiao542211"]],
    image: img.comingSoon,
    alt: "",
  },
};

export const devOrder = [
  "local",
  "scenariogpt",
  "baobab",
  "fight",
  "stumble",
  "better",
  "journal",
  "cats",
  "jaja",
  "jajaLabs",
];

function renderDevProject(item) {
  return `
    <article class="dev-project">
      <figure class="dev-project-photo ${item.status ? "dev-photo--coming-soon" : ""}"><img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async"></figure>
      <div class="dev-project-copy">
        ${
          item.status
            ? `
          <p class="dev-status">${item.status}</p>
          <h2 class="dev-title">${item.title}</h2>
          <p class="dev-description">${item.comingSoonText}</p>
        `
            : `
          <h2 class="dev-title">${item.title}</h2>
          <p class="dev-description">${item.text}</p>
          <div class="dev-points">
            ${item.details.map((detail) => `<p class="dev-point">&gt; ${detail}</p>`).join("")}
          </div>
        `
        }
        ${
          item.links
            ? `
          <div class="dev-links" aria-label="${item.title} links">
            ${item.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
          </div>
        `
            : ""
        }
      </div>
    </article>
  `;
}

export function landingHTML() {
  return `
    <div class="landing">
      <section class="about" aria-labelledby="about-title">
        <picture class="about-portrait">
          <source srcset="${img.portrait} 1024w" sizes="(max-width: 760px) 100vw, 18vw" type="image/webp">
          <img src="${img.portrait}" alt="Joseph Liao pointing at shop signs in San Francisco Chinatown" loading="eager" decoding="async">
        </picture>
        <div class="about-copy">
          <h2 id="about-title">JUST<br>APPROVE.</h2>
          <p>I am a computer science student at Queen's focused on shipping useful products quickly: AI tools, data pipelines, product interfaces, and the occasional hardware prototype. I like work that moves from messy idea to working system, especially when design and engineering have to meet in the same place.</p>
          <dl class="about-stats" aria-label="Quick profile stats">
            <div>
              <span class="company-mark company-mark--crest" aria-hidden="true">
                <img src="${img.queensCrest}" alt="">
              </span>
              <dt>Education</dt>
              <dd>Queen's University, BCmpH ’27</dd>
            </div>
            <div>
              <span class="company-mark" aria-hidden="true">
                <img src="${img.canadaFlag}" alt="">
              </span>
              <dt>Location</dt>
              <dd>Kingston / Toronto</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  `;
}

const artImages = [
  [img.artRain, "Acrylic painting of a couple under an umbrella on a rainy, lamplit riverside path at night"],
  [img.artPhoto, "Charcoal drawing of an old man in profile as a crumbling statue bust surrounded by text"],
  [img.artPortraitSketch, "Graphite portrait of a long-haired man with a mustache looking down"],
  [img.artSketch, "Sketchbook spread with a pencil torso sculpture study and a woman's portrait"],
  [img.artPortrait, "Sepia pencil portrait of a young woman with tied-back hair"],
  [img.artBust, "Graphite drawing of a classical male plaster bust"],
  [img.artStudy, "Sketchbook pages with a pencil drawing of a screaming monkey and an elderly man's head"],
  [img.artFates, "Digital illustration of three hooded figures holding a thread, the Three Fates"],
  [img.artFigureStool, "Charcoal figure drawing of a seated nude model on a stool holding a staff"],
  [img.artHandsPortrait, "Graphite portrait of a young man covering his face with his hands"],
  [img.artCoverPage, "Pixel art game cover reading Oh Hel No with skeletons and a warrior"],
  [img.artPosterLight, "Poster for inQubate reading No Sh*tter Policy with a seated figure icon"],
  [img.artPosterDark, "Red and white inQubate poster reading See Something? Say Something! with a halftone face"],
  [img.artImg1211, "Pencil study of a classical marble torso sculpture"],
  [img.artImg1214, "Pencil drawing of a crumbling statue bust of an old man in profile with collaged text"],
  [img.artImg1219, "Pen and ink drawings of a squid and a stippled octopus"],
  [img.artFigurePair, "Charcoal gesture drawings of two dancing figures"],
  [img.artImg1221, "Pen and ink drawing of a fish with its body reduced to a skeleton"],
  [img.artImg1223A, "Sketchbook spread of ink rabbit studies and practice drawings of eyes"],
  [img.artImg1223B, "Pen and ink sketches of three rabbits in different poses"],
  [img.artImg1233, "Pen sketch of a classical statue head with blank eyes"],
  [img.artThanos, "Graphite drawing of Thanos wearing the Infinity Gauntlet with colored stones"],
  [img.artImg1234, "Ink drawing of a classic Ford Mustang, signed and dated 2024"],
  [img.artSmall, "Graphite study of a classical plaster head wearing a helmet"],
];

// Concentric orbits around the title: radius places the ring across the band between the title
// (0, just clear of it) and the section edge (1); negative values shrink inside that clearance, letting
// cards brush the title. speed is revolutions per second (sign sets direction), size scales the cards.
export const artRings = [
  { count: 6, radius: -0.2, speed: 1 / 70, size: 0.85 },
  { count: 8, radius: 0.5, speed: -1 / 95, size: 1 },
  { count: 10, radius: 1, speed: 1 / 120, size: 1.15 },
];

let nextArt = 0;
export const artCards = artRings.flatMap((ring, r) =>
  Array.from({ length: ring.count }, (_, i) => {
    const [src, alt] = artImages[nextArt++];
    return { ring: r, phase: i / ring.count + r * 0.13, src, alt };
  }),
);

export function artHTML() {
  return `
    <div class="art-orbit" aria-label="Art gallery">
      <div class="art-title">
        <div class="art-title-stack">
          <h2 class="art-word">MY ART</h2>
          <a class="art-portfolio" href="/portfolio">serious design portfolio (coming soon)</a>
        </div>
      </div>
      ${artCards.map(({ ring, src, alt }, index) => `
        <button class="art-card" type="button" style="--art-size: ${artRings[ring].size}" data-art-image="${src}" aria-label="Open artwork ${index + 1}">
          <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
        </button>
      `).join("")}
    </div>
    <div class="art-lightbox" hidden>
      <button class="art-lightbox-close" type="button" aria-label="Close artwork preview">x</button>
      <img alt="Selected artwork by Joseph Liao">
    </div>
  `;
}

// Terminal-style frame drawn with plain ASCII (+ - |); the rules stretch to fit via CSS overflow.
const boxRule = "-".repeat(400);
const boxSide = "|\n".repeat(200);

function termBox(label, body, className = "", footer = "") {
  return `
    <section class="term-box ${className}">
      <div class="term-box-edge"><span aria-hidden="true">+-</span><h3 class="term-box-label">${label}</h3><span class="term-box-rule" aria-hidden="true"><span>${boxRule}</span></span><span aria-hidden="true">+</span></div>
      <div class="term-box-body">
        <span class="term-box-side" aria-hidden="true">${boxSide}</span>
        ${body}
        <span class="term-box-side" aria-hidden="true">${boxSide}</span>
      </div>
      <div class="term-box-edge"><span aria-hidden="true">+${footer ? "-" : ""}</span>${footer ? `<span class="term-box-label">${footer}</span>` : ""}<span class="term-box-rule" aria-hidden="true"><span>${boxRule}</span></span><span aria-hidden="true">+</span></div>
    </section>
  `;
}

function renderDevLinks(links) {
  return `<div class="dev-links" aria-label="Related links">${links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}</div>`;
}

export function devHTML(active = "local") {
  const item = devItems[active] || devItems.local;
  const mobileProjects = devOrder
    .map((key) => renderDevProject(devItems[key]))
    .join("");
  return `
    <div class="dev-layout">
      <div class="dev-text">
        <h2 class="code-word" aria-label="MY CODE"><span aria-hidden="true"></span></h2>
        <div class="dev-info">
          <div class="dev-side">
            ${termBox(
              "projects",
              `<nav class="dev-menu" aria-label="Projects">
                ${devOrder
                  .map(
                    (key) =>
                      `<button class="${active === key ? "active" : ""}" type="button" data-dev="${key}">&gt;${devItems[key].title}${devItems[key].status ? ` <span>${devItems[key].status}</span>` : ""}</button>`,
                  )
                  .join("")}
              </nav>`,
            )}
            ${termBox(
              "links",
              item.links ? renderDevLinks(item.links) : "",
              "dev-box-links",
            )}
          </div>
          <div class="dev-copy">
            ${
              item.status
                ? termBox(`${item.title} <span class="dev-status">${item.status}</span>`, `<p>${item.comingSoonText}</p>`, "dev-box-about")
                : termBox(item.title, `<p>${item.text}</p>`, "dev-box-about")
            }
            ${termBox(
              "highlights",
              item.status ? "" : `<p>${item.details.map((detail) => `&gt; ${detail}`).join("<br>")}</p>`,
              "dev-box-highlights",
            )}
          </div>
        </div>
      </div>
      <figure class="dev-photo dev-monitor">
        <div class="dev-monitor-frame">
          <img class="dev-monitor-body" src="${img.devMonitor}" alt="">
          <div class="dev-monitor-screen ${item.status ? "dev-photo--coming-soon" : ""}"><img src="${item.image}" alt="${item.alt}"></div>
        </div>
      </figure>
      <div class="dev-mobile-list">
        ${mobileProjects}
      </div>
    </div>
  `;
}

// Seeded so the scatter is identical on every visit.
export function seededRandom(seed) {
  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

// Fixed shuffle so the photo sets mix across the board the same way every visit.
const lifePhotos = (() => {
  const photos = [...lifePhotoManifest];
  const random = seededRandom(11);
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
  return photos;
})();

export function lifeHTML() {
  return `
    <div class="life-board" aria-label="Life photos">
      <h2 class="life-title">MY LIFE</h2>
      ${lifePhotos
        .map(
          (photo, i) => `
          <button class="polaroid" type="button" style="--i: ${i}" data-life-image="${photo.full}" aria-label="Open life photo">
            <img src="${photo.thumb}" alt="${lifeAlts[photo.thumb] ?? "Life photo by Joseph Liao"}" loading="lazy" decoding="async">
          </button>
        `,
        )
        .join("")}
    </div>
    <div class="life-lightbox" hidden>
      <button class="life-lightbox-close" type="button" aria-label="Close photo preview">x</button>
      <img alt="Selected life photo by Joseph Liao">
    </div>
  `;
}

export function companyMarksHTML() {
  const recentFirst = [...jobs].sort((a, b) => b.start.localeCompare(a.start));
  return [...upcoming, ...recentFirst]
    .map(
      (job) => `
      <span class="company-chip" tabindex="0">
        <span class="company-mark">
          <img src="${job.icon}" alt="${job.company}">
        </span>
        <span class="company-chip__info">
          <span class="company-chip__company">${job.company}</span>
          <span class="company-chip__role">${job.position}</span>
          <span class="company-chip__date">${job.meta.split(" / ")[0]}</span>
        </span>
      </span>
    `,
    )
    .join("");
}
