const content = document.querySelector("#content");
const navButtons = [...document.querySelectorAll("[data-section]")];
let activeSection = "";

const img = {
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
  lifeStreet: "/optimized/portrait-1024.webp",
  lifeTeam: "/optimized/life-wt-1024.webp",
  lifeStudio: "/optimized/life-life-1024.webp",
  lifeMic: "/optimized/life-mic-1024.webp",
  lifeLife3: "/optimized/life-life3-1024.webp",
  lifeDDQIC: "/optimized/life-ddqic-531.webp",
  lifeBananda: "/optimized/life-bananda-1024.webp",
  lifeBjj: "/optimized/life-bjj-259.webp",
  desert: "/optimized/image-9-1920.webp",
  mountain: "/optimized/landscape-1920.webp",
  workImage17: "/optimized/work-image-17-209.webp",
  workImage18: "/optimized/work-image-18-210.webp",
  workImage19: "/optimized/work-image-19-205.webp",
  workRectangle13: "/optimized/work-rectangle-13-205.webp",
  workSoti: "/public/work/image.png",
  portrait: "/optimized/life-img-1882-1024.webp",
  comingSoon: "/public/coming-soon.png",
  devLocalReach: "/optimized/dev-localreach-1024.webp",
  devFightLabs: "/optimized/dev-fightlab-1024.webp",
  devStumble: "/optimized/dev-stumble-1024.webp",
  devDearJournal: "/optimized/dev-deer-journal-1024.webp",
  devCatsCradle: "/optimized/dev-cats-cradle-1024.webp",
  devBaoBab: "/public/dev/Baobab.svg",
  devBetter: "/optimized/dev-better-1024.webp",
};

const jobs = [
  {
    icon: img.workImage18,
    company: "TAIV YCW20",
    position: "Software Engineer, AI Operations Lead",
    meta: "Jan 2025 - Jan 2026 / Winnipeg, Manitoba",
  },
  {
    icon: img.workImage19,
    company: "Larus Technologies",
    position: "Software Developer",
    meta: "Sept 2025 - Present / Contract / Ottawa, Ontario",
  },
  {
    icon: img.workRectangle13,
    company: "TD Bank Group",
    position: "Software Developer Intern",
    meta: "Jan 2026 - May 2026 / Toronto, Ontario",
  },
  {
    icon: img.workImage17,
    company: "Local Reach",
    position: "Co-founder",
    meta: "Jan 2024 - Jan 2025 / Acquired by Taiv / Kingston, Ontario",
  },
 
];

const devItems = {
  local: {
    title: "Local Reach",
    text: "Startup I co-founded that helps restaurants and bars monetize TV commercial breaks. Venues install our Raspberry Pi device into their cable setup, where it detects ad breaks and switches the screen to local business advertisements; advertisers pay for venue exposure and partners keep 30% of the revenue.",
    details: [
      "Raised $40K+ non-dilutive and joined 3 accelerators",
      "Partnered with 4 of Kingston's largest bars and advertisers including SpearHead Breweries",
      "Used TensorFlow logo detection, OpenCV colour variance, Raspberry Pi hardware, and IR control to detect commercial breaks and switch inputs",
    ],
    links: [
      ["Betakit", "https://betakit.com/taiv-acquihires-fellow-canadian-adtech-startup-local-reach-to-aid-expansion-plans/"],
      ["Local Reach", "https://www.thelocalreach.ca/"],
      ["The Forge", "https://theforge.mcmaster.ca/startups/local-reach/"],
      ["Queen's Gazette", "https://www.queensu.ca/gazette/stories/pitch-competition-celebrates-innovation-and-entrepreneurship-0"],
      ["Pilot House Demo", "https://youtu.be/yGFYpenWrVo"],
      ["Brass Pub Demo", "https://youtu.be/dBMbcPxOehA"],
      ["Tommy's Demo", "https://youtu.be/AOXebwhuOH8"],
    ],
    image: img.devLocalReach,
  },
  scenariogpt: {
    title: "ScenarioGPT",
    text: "Production frontend and UX work for Larus Technologies' ScenarioGPT platform, focused on turning complex AI planning workflows into usable interfaces.",
    details: [
      "Wrote 150,000+ lines of production frontend code",
      "Translated defense, aviation, and stakeholder requirements into product flows",
      "Designed 10+ high-fidelity Figma mockups before implementing production UI",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211"],
    ],
    image: img.workImage19,
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
      ["Kingstonist", "https://www.kingstonist.com/news/winners-of-the-2024-mayors-innovation-challenge-announced/"],
      ["Queen's Gazette", "https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations"],
    ],
    image: img.devBaoBab,
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
      ["Taikai", "https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwdf3lwh0efbyg016jpi8xzn/idea"],
    ],
    image: img.devBetter,
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
  },
  jaja: {
    title: "JAJA",
    status: "coming soon",
    comingSoonText: "A polished product and design-system case study is being shaped here, with more interface work, visuals, and implementation notes coming soon.",
    text: "Design and product systems work focused on high-fidelity interface exploration, rapid prototyping, and clean implementation paths.",
    details: [
      "Figma systems",
      "Interaction design",
      "Frontend implementation",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211"],
    ],
    image: img.comingSoon,
  },
  jajaLabs: {
    title: "JAJA Labs",
    status: "coming soon",
    comingSoonText: "An experimental lab for visual systems, software prototypes, and interface concepts. The first public project is still being assembled.",
    text: "Experimental product lab for visual systems, software prototypes, and polished interface concepts.",
    details: [
      "Design systems",
      "Prototype lab",
      "Visual direction",
    ],
    links: [
      ["GitHub", "https://github.com/JosephLiao542211"],
    ],
    image: img.comingSoon,
  },
};

const devOrder = [
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
      <figure class="dev-project-photo ${item.status ? "dev-photo--coming-soon" : ""}"><img src="${item.image}" alt=""></figure>
      <div class="dev-project-copy">
        ${item.status ? `
          <p class="dev-status">${item.status}</p>
          <h2 class="dev-title">${item.title}</h2>
          <p>${item.comingSoonText}</p>
        ` : `
          <h2 class="dev-title">${item.title}</h2>
          <p>${item.text}</p>
          <p>${item.details.map((detail) => `&gt; ${detail}`).join("<br>")}</p>
        `}
        ${item.links ? `
          <div class="dev-links" aria-label="${item.title} links">
            ${item.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

function setActive(section) {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section);
  });
}

function landing() {
  setActive("");
  content.innerHTML = `
    <div class="landing">
      <section class="about" aria-labelledby="about-title">
        <picture class="about-portrait">
          <source srcset="${img.portrait} 1024w" sizes="(max-width: 760px) 100vw, 18vw" type="image/webp">
          <img src="${img.portrait}" alt="Joseph Liao at a night carousel" loading="eager" decoding="async">
        </picture>
        <div class="about-copy">
          <p class="label">who am i</p>
          <h2 id="about-title">builder between software, systems, and visual work.</h2>
          <p>I am a computer science student at Queen's focused on shipping useful products quickly: AI tools, data pipelines, product interfaces, and the occasional hardware prototype. I like work that moves from messy idea to working system, especially when design and engineering have to meet in the same place.</p>
          <dl class="about-stats" aria-label="Quick profile stats">
            <div>
              <dt>Education</dt>
              <dd>Queen's University, BCmpH ’27</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Kingston / Toronto</dd>
            </div>
            <div>
              <dt>Programming Languages</dt>
              <dd>TypeScript, Go, Python, C++</dd>
            </div>
          </dl>
        </div>
      </section>
      <section class="experience-panel" aria-labelledby="experience-title">
        <p id="experience-title" class="label">professional experience</p>
        <div class="experience">
          ${jobs.map((job) => `
            <div class="job">
              <img class="job-mark" src="${job.icon}" alt="">
              <div class="job-copy">
                <p class="job-company">${job.company}</p>
                <p class="job-position">${job.position}</p>
                <p class="job-meta">${job.meta}</p>
              </div>
              <span class="job-line"></span>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function art() {
  setActive("art");
  const artImages = [
    { src: img.artRain, width: "clamp(210px, 22vw, 410px)" },
    { src: img.artPhoto, width: "clamp(110px, 12vw, 190px)" },
    { src: img.artSketch, width: "clamp(135px, 14vw, 235px)" },
    { src: img.artPortrait, width: "clamp(118px, 13vw, 220px)" },
    { src: img.artBust, width: "clamp(120px, 13vw, 215px)" },
    { src: img.artStudy, width: "clamp(165px, 17vw, 290px)" },
    { src: img.artFates, width: "clamp(88px, 9vw, 150px)" },
    { src: img.artCoverPage, width: "clamp(170px, 18vw, 320px)" },
    { src: img.artPosterLight, width: "clamp(118px, 13vw, 210px)" },
    { src: img.artPosterDark, width: "clamp(118px, 13vw, 210px)" },
    { src: img.artImg1211, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1214, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1219, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1221, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1223A, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1223B, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1233, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artImg1234, width: "clamp(130px, 14vw, 240px)" },
    { src: img.artSmall, width: "clamp(92px, 10vw, 165px)" },
  ];
  const galleryItems = artImages
    .map(({ src, width }, index) => `
      <button class="art-card" type="button" style="--art-width: ${width}" data-art-image="${src}" aria-label="Open artwork ${index + 1}">
        <img src="${src}" alt="Artwork ${index + 1} by Joseph Liao" loading="lazy" decoding="async">
      </button>
    `)
    .join("");

  content.innerHTML = `
    <div class="art-gallery" aria-label="Rotating art gallery">
      <div class="art-track">
        <div class="art-set">${galleryItems}</div>
        <div class="art-set" aria-hidden="true" inert>${galleryItems}</div>
      </div>
    </div>
    <div class="art-lightbox" hidden>
      <button class="art-lightbox-close" type="button" aria-label="Close artwork preview">x</button>
      <img alt="Selected artwork by Joseph Liao">
    </div>
  `;

  const lightbox = content.querySelector(".art-lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
  };

  content.querySelector(".art-gallery").addEventListener("click", (event) => {
    const card = event.target.closest("[data-art-image]");
    if (!card) return;
    lightboxImage.src = card.dataset.artImage;
    lightbox.hidden = false;
    content.querySelector(".art-lightbox-close").focus();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest(".art-lightbox-close")) {
      closeLightbox();
    }
  });

  const onEscape = (event) => {
    if (activeSection === "art" && event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  };

  if (window.artLightboxEscape) {
    window.removeEventListener("keydown", window.artLightboxEscape);
  }
  window.artLightboxEscape = onEscape;
  window.addEventListener("keydown", window.artLightboxEscape);
}

function dev(active = "local") {
  setActive("dev");
  const item = devItems[active] || devItems.local;
  const mobileProjects = devOrder.map((key) => renderDevProject(devItems[key])).join("");
  content.innerHTML = `
    <div class="dev-layout">
      <div class="dev-menu">
        <button class="${active === "local" ? "active" : ""}" type="button" data-dev="local">&gt;Local Reach</button>
        <button class="${active === "scenariogpt" ? "active" : ""}" type="button" data-dev="scenariogpt">&gt;ScenarioGPT</button>
        <button class="${active === "baobab" ? "active" : ""}" type="button" data-dev="baobab">&gt;BaoBab</button>
        <button class="${active === "fight" ? "active" : ""}" type="button" data-dev="fight">&gt;Fight Labs</button>
        <button class="${active === "stumble" ? "active" : ""}" type="button" data-dev="stumble">&gt;Stumble</button>
        <button class="${active === "better" ? "active" : ""}" type="button" data-dev="better">&gt;Better</button>
        <button class="${active === "journal" ? "active" : ""}" type="button" data-dev="journal">&gt;Dear Journal</button>
        <button class="${active === "cats" ? "active" : ""}" type="button" data-dev="cats">&gt;Cat's Cradle</button>
        <button class="${active === "jaja" ? "active" : ""}" type="button" data-dev="jaja">&gt;JAJA <span>coming soon</span></button>
        <button class="${active === "jajaLabs" ? "active" : ""}" type="button" data-dev="jajaLabs">&gt;JAJA Labs <span>coming soon</span></button>
      </div>
      <div class="dev-copy">
        ${item.status ? `
          <div class="coming-soon-copy">
            <p class="dev-status">${item.status}</p>
            <h2 class="dev-title">${item.title}</h2>
            <p>${item.comingSoonText}</p>
            <div class="dev-links" aria-label="Related links">
              ${item.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
            </div>
          </div>
        ` : `
          <h2 class="dev-title">${item.title}</h2>
          <p>${item.text}</p>
          <p>${item.details.map((detail) => `&gt; ${detail}`).join("<br>")}</p>
          ${item.links ? `
            <div class="dev-links" aria-label="Related links">
              ${item.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
            </div>
          ` : ""}
          <p>learn more</p>
        `}
      </div>
      <figure class="dev-photo ${item.status ? "dev-photo--coming-soon" : ""}"><img src="${item.image}" alt=""></figure>
      <div class="dev-mobile-list">
        ${mobileProjects}
      </div>
    </div>
  `;

  content.querySelectorAll("[data-dev]").forEach((button) => {
    button.addEventListener("click", () => dev(button.dataset.dev));
  });
}

const lifeTiles = [
  { type: "image", src: img.lifeTeam, className: "life-tile--team" },
  { type: "image", src: img.lifeStreet, className: "life-tile--street life-photo--tall" },
  { type: "image", src: img.lifeStudio, className: "life-tile--studio" },
  {
    type: "text",
    className: "life-tile--note-a",
    kicker: "training",
    text: "wrestling rooms, late buses, and the useful kind of tired.",
  },
  { type: "image", src: img.lifeMic, className: "life-tile--mic" },
  { type: "image", src: img.lifeBjj, className: "life-tile--bjj life-photo--tall" },
  {
    type: "text",
    className: "life-tile--note-b",
    kicker: "people",
    text: "small teams, sharper friends, shared projects, loud dinners.",
  },
  { type: "image", src: img.lifeLife3, className: "life-tile--life3" },
  { type: "image", src: img.lifeDDQIC, className: "life-tile--ddqic" },
  {
    type: "text",
    className: "life-tile--note-c",
    kicker: "between",
    text: "a few strange costumes, a lot of motion, always another story.",
  },
  { type: "image", src: img.lifeBananda, className: "life-tile--bananda" },
  {
    type: "text",
    className: "life-tile--note-d",
    kicker: "home",
    text: "built from the parts that do not fit inside one lane.",
  },
];

function life() {
  setActive("life");
  content.innerHTML = `
    <div class="life-layout" aria-label="Life photo mosaic">
      ${lifeTiles.map((tile) => {
        if (tile.type === "text") {
          return `
            <article class="life-note ${tile.className}">
              <span>${tile.kicker}</span>
              <p>${tile.text}</p>
            </article>
          `;
        }

        return `
          <figure class="life-photo ${tile.className}">
            <img src="${tile.src}" alt="">
          </figure>
        `;
      }).join("")}
    </div>
  `;
}

function route(section) {
  activeSection = section || "";
  if (section === "art") art();
  else if (section === "dev") dev();
  else if (section === "life") life();
  else landing();
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.dataset.section;
    history.replaceState(null, "", section ? `#${section}` : location.pathname);
    route(button.dataset.section);
  });
});

window.addEventListener("hashchange", () => route(location.hash.slice(1)));
route(location.hash.slice(1));
