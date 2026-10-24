import { inject } from "@vercel/analytics";
import lifePhotoManifest from "./public/optimized/life-photos.json";

inject();

const sections = {
  "": document.querySelector("#home"),
  art: document.querySelector("#art"),
  dev: document.querySelector("#dev"),
  life: document.querySelector("#life"),
};

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

const jobs = [
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
    meta: "Sept 2025 - Present / Contract / Ottawa, Ontario",
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
      [
        "Taikai",
        "https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwdf3lwh0efbyg016jpi8xzn/idea",
      ],
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
    comingSoonText:
      "A polished product and design-system case study is being shaped here, with more interface work, visuals, and implementation notes coming soon.",
    text: "Design and product systems work focused on high-fidelity interface exploration, rapid prototyping, and clean implementation paths.",
    details: ["Figma systems", "Interaction design", "Frontend implementation"],
    links: [["GitHub", "https://github.com/JosephLiao542211"]],
    image: img.comingSoon,
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

function landing() {
  const content = sections[""];
  content.innerHTML = `
    <div class="landing">
      <section class="about" aria-labelledby="about-title">
        <picture class="about-portrait">
          <source srcset="${img.portrait} 1024w" sizes="(max-width: 760px) 100vw, 18vw" type="image/webp">
          <img src="${img.portrait}" alt="Joseph Liao at a night carousel" loading="eager" decoding="async">
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

function art() {
  const content = sections.art;
  const artImages = [
    img.artRain, img.artPhoto, img.artPortraitSketch, img.artSketch, img.artPortrait, img.artBust,
    img.artStudy, img.artFates, img.artFigureStool, img.artHandsPortrait, img.artCoverPage, img.artPosterLight, img.artPosterDark,
    img.artImg1211, img.artImg1214, img.artImg1219, img.artFigurePair, img.artImg1221, img.artImg1223A,
    img.artImg1223B, img.artImg1233, img.artThanos, img.artImg1234, img.artSmall,
  ];
  // Concentric orbits around the word: radius is a fraction of the available half-width/height,
  // speed is revolutions per second (sign sets direction), size scales the cards.
  const rings = [
    { count: 6, radius: 0.52, speed: 1 / 70, size: 0.85 },
    { count: 8, radius: 0.76, speed: -1 / 95, size: 1 },
    { count: 10, radius: 0.97, speed: 1 / 120, size: 1.15 },
  ];

  let next = 0;
  const cards = rings.flatMap((ring, r) =>
    Array.from({ length: ring.count }, (_, i) => ({
      ring: r,
      phase: i / ring.count + r * 0.13,
      src: artImages[next++],
    })),
  );

  content.innerHTML = `
    <div class="art-orbit" aria-label="Art gallery">
      <h2 class="art-word">MY ART</h2>
      ${cards.map(({ ring, src }, index) => `
        <button class="art-card" type="button" style="--art-size: ${rings[ring].size}" data-art-image="${src}" aria-label="Open artwork ${index + 1}">
          <img src="${src}" alt="Artwork ${index + 1} by Joseph Liao" loading="lazy" decoding="async">
        </button>
      `).join("")}
    </div>
    <div class="art-lightbox" hidden>
      <button class="art-lightbox-close" type="button" aria-label="Close artwork preview">x</button>
      <img alt="Selected artwork by Joseph Liao">
    </div>
  `;

  orbitArt(rings, cards);

  const lightbox = content.querySelector(".art-lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
  };

  content.querySelector(".art-orbit").addEventListener("click", (event) => {
    const card = event.target.closest("[data-art-image]");
    if (!card) return;
    lightboxImage.src = card.dataset.artImage;
    lightbox.hidden = false;
    content.querySelector(".art-lightbox-close").focus();
  });

  lightbox.addEventListener("click", (event) => {
    if (
      event.target === lightbox ||
      event.target.closest(".art-lightbox-close")
    ) {
      closeLightbox();
    }
  });

  const onEscape = (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  };

  window.addEventListener("keydown", onEscape);
}

function orbitArt(rings, cards) {
  const orbit = sections.art.querySelector(".art-orbit");
  const elements = [...orbit.querySelectorAll(".art-card")];
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Per-card hold: a hovered card eases out of its ring and parks where it was (h -> 1),
  // then glides back into its moving slot when released (h -> 0). The rest keep orbiting.
  const holds = elements.map(() => ({ h: 0, target: 0, x: 0, y: 0, renderX: 0, renderY: 0 }));
  let elapsed = 0;
  let last = 0;
  let visible = false;

  const place = (dt = 0) => {
    // Keep the outer ring's cards inside the section: inset by the largest card's half-size.
    const inset = Math.max(...elements.map((el) => Math.max(el.offsetWidth, el.offsetHeight))) / 2;
    const rx = orbit.clientWidth / 2 - inset;
    const ry = orbit.clientHeight / 2 - inset;
    const ease = 1 - Math.exp(-dt * 9);
    elements.forEach((el, i) => {
      const { ring, phase } = cards[i];
      const hold = holds[i];
      const angle = (phase + elapsed * rings[ring].speed) * Math.PI * 2;
      const orbitX = Math.cos(angle) * rx * rings[ring].radius;
      const orbitY = Math.sin(angle) * ry * rings[ring].radius;
      hold.h += (hold.target - hold.h) * ease;
      if (Math.abs(hold.target - hold.h) < 0.001) hold.h = hold.target;
      hold.renderX = orbitX + (hold.x - orbitX) * hold.h;
      hold.renderY = orbitY + (hold.y - orbitY) * hold.h;
      el.classList.toggle("is-held", hold.target === 1);
      el.style.transform = `translate(-50%, -50%) translate(${hold.renderX}px, ${hold.renderY}px)`;
    });
  };

  const tick = (now) => {
    if (!visible) return;
    const dt = Math.min(now - last, 100) / 1000;
    elapsed += dt;
    last = now;
    place(dt);
    requestAnimationFrame(tick);
  };

  const grab = (i) => {
    const hold = holds[i];
    hold.x = hold.renderX;
    hold.y = hold.renderY;
    hold.target = 1;
  };
  const release = (i) => { holds[i].target = 0; };

  if (!still) {
    elements.forEach((el, i) => {
      el.addEventListener("pointerenter", () => grab(i));
      el.addEventListener("pointerleave", () => release(i));
      el.addEventListener("focus", () => grab(i));
      el.addEventListener("blur", () => release(i));
    });
  }
  window.addEventListener("resize", () => place());
  elements.forEach((el) => el.querySelector("img").addEventListener("load", () => place(), { once: true }));
  place();

  if (still) return;
  new IntersectionObserver(([entry]) => {
    const wasVisible = visible;
    visible = entry.isIntersecting;
    if (visible && !wasVisible) {
      last = performance.now();
      requestAnimationFrame(tick);
    }
  }).observe(orbit);
}

// Draw "MY CODE" in Djingo on a canvas, then resample its ink coverage into a grid of ASCII keys.
// Faint edge cells stay blank so the gaps between letters read as clean whitespace.
const asciiRamp = "-=+*#%@";
const asciiThreshold = 0.5;

let codeWordSize = 0;

// dev() re-renders the section on every click, so the title is redrawn each time.
function rasterizeCodeWords() {
  if (codeWordSize) rasterizeCodeWord(document.querySelector(".code-word"), codeWordSize);
}

function rasterizeCodeWord(word, fontSize) {
  const out = word.querySelector("span");
  const text = "MY CODE";
  const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  const setFont = (size) => {
    ctx.font = `${size}px Djingo`;
    ctx.wordSpacing = `${size * -0.15}px`;
  };

  setFont(fontSize);
  let m = ctx.measureText(text);
  const inkWidth = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
  // Longer than "MY ART", so shrink when it would overflow its column.
  if (inkWidth > word.clientWidth) {
    fontSize *= word.clientWidth / inkWidth;
    setFont(fontSize);
    m = ctx.measureText(text);
  }

  const width = Math.ceil(m.actualBoundingBoxLeft + m.actualBoundingBoxRight);
  const height = Math.ceil(m.actualBoundingBoxAscent + m.actualBoundingBoxDescent);
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  setFont(fontSize);
  ctx.fillText(text, m.actualBoundingBoxLeft, m.actualBoundingBoxAscent);
  const { data } = ctx.getImageData(0, 0, width, height);

  // Monospace cells are roughly twice as tall as they are wide.
  const cols = Math.round(width / Math.max(3, fontSize / 56));
  const rows = Math.round(cols * (height / width) / 2);
  const cellW = width / cols;
  const cellH = height / rows;
  const lines = [];
  for (let row = 0; row < rows; row++) {
    let line = "";
    for (let col = 0; col < cols; col++) {
      const x0 = Math.floor(col * cellW), x1 = Math.floor((col + 1) * cellW);
      const y0 = Math.floor(row * cellH), y1 = Math.floor((row + 1) * cellH);
      let ink = 0;
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) ink += data[(y * width + x) * 4 + 3];
      }
      const coverage = ink / (255 * (x1 - x0) * (y1 - y0));
      line += coverage < asciiThreshold
        ? " "
        : asciiRamp[Math.round(((coverage - asciiThreshold) / (1 - asciiThreshold)) * (asciiRamp.length - 1))];
    }
    lines.push(line.trimEnd());
  }

  out.textContent = lines.join("\n");
  // IBM Plex Mono advances 0.6em per glyph, so this makes the grid match the rasterized size exactly.
  out.style.fontSize = `${cellW / 0.6}px`;
  out.style.lineHeight = `${cellH}px`;
}

function dev(active = "local") {
  const content = sections.dev;
  const item = devItems[active] || devItems.local;
  const mobileProjects = devOrder
    .map((key) => renderDevProject(devItems[key]))
    .join("");
  content.innerHTML = `
    <div class="dev-layout">
      <div class="dev-text">
        <h2 class="code-word" aria-label="MY CODE"><span aria-hidden="true"></span></h2>
        <div class="dev-info">
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
            ${
              item.status
                ? `
              <div class="coming-soon-copy">
                <p class="dev-status">${item.status}</p>
                <h2 class="dev-title">${item.title}</h2>
                <p>${item.comingSoonText}</p>
                <div class="dev-links" aria-label="Related links">
                  ${item.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
                </div>
              </div>
            `
                : `
              <h2 class="dev-title">${item.title}</h2>
              <p>${item.text}</p>
              <p>${item.details.map((detail) => `&gt; ${detail}`).join("<br>")}</p>
              ${
                item.links
                  ? `
                <div class="dev-links" aria-label="Related links">
                  ${item.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
                </div>
              `
                  : ""
              }
              <p>learn more</p>
            `
            }
          </div>
        </div>
      </div>
      <figure class="dev-photo dev-monitor">
        <div class="dev-monitor-frame">
          <img class="dev-monitor-body" src="${img.devMonitor}" alt="">
          <div class="dev-monitor-screen ${item.status ? "dev-photo--coming-soon" : ""}"><img src="${item.image}" alt=""></div>
        </div>
      </figure>
      <div class="dev-mobile-list">
        ${mobileProjects}
      </div>
    </div>
  `;

  content.querySelectorAll("[data-dev]").forEach((button) => {
    button.addEventListener("click", () => dev(button.dataset.dev));
  });
  fitMonitorScreen();
  rasterizeCodeWords();
}

// Screen corners as fractions of the monitor image's width/height: TL, TR, BR, BL.
// The image is mirrored in CSS to face left, so these are the source corners flipped (x -> 1 - x).
const monitorScreen = [
  [0.2673, 0.10568],
  [0.81196, 0.0869],
  [0.79711, 0.64011],
  [0.26086, 0.59068],
];

// CRT glass bulge: an SVG displacement filter that magnifies the centre and leaves the corners pinned.
function installBulgeFilter(strength = 0.09, scale = 0.2) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const map = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = (x / (size - 1)) * 2 - 1;
      const v = (y / (size - 1)) * 2 - 1;
      const pull = strength * (1 - (u * u + v * v) / 2);
      // Offsets are in fractions of the element's box; R/G encode them around 0.5.
      const i = (y * size + x) * 4;
      map.data[i] = 128 + ((-u * pull) / 2 / scale) * 255;
      map.data[i + 1] = 128 + ((-v * pull) / 2 / scale) * 255;
      map.data[i + 2] = 128;
      map.data[i + 3] = 255;
    }
  }
  ctx.putImageData(map, 0, 0);

  document.body.insertAdjacentHTML("beforeend", `
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <filter id="crt-bulge" x="0" y="0" width="1" height="1" primitiveUnits="objectBoundingBox" color-interpolation-filters="sRGB">
        <feImage href="${canvas.toDataURL()}" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map"/>
        <feDisplacementMap in="SourceGraphic" in2="map" scale="${scale}" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </svg>
  `);
}

installBulgeFilter();

// Warp the project image onto the monitor's screen with a projective (perspective) transform.
function fitMonitorScreen() {
  const frame = document.querySelector(".dev-monitor-frame");
  const screen = frame?.querySelector(".dev-monitor-screen");
  if (!screen || !frame.offsetWidth) return;

  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = monitorScreen.map(([fx, fy]) => [
    fx * frame.offsetWidth,
    fy * frame.offsetHeight,
  ]);

  // Size the layer to the screen's average edge lengths so the image crops at the right aspect.
  const w = (Math.hypot(x1 - x0, y1 - y0) + Math.hypot(x2 - x3, y2 - y3)) / 2;
  const h = (Math.hypot(x3 - x0, y3 - y0) + Math.hypot(x2 - x1, y2 - y1)) / 2;
  screen.style.width = `${w}px`;
  screen.style.height = `${h}px`;

  // Unit square -> quad (Heckbert), then scaled from the layer's w x h box.
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / den;
  const k = (dx1 * dy3 - dx3 * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + k * x3;
  const d = y1 - y0 + g * y1, e = y3 - y0 + k * y3;

  screen.style.transform = `matrix3d(${[
    a / w, d / w, 0, g / w,
    b / h, e / h, 0, k / h,
    0, 0, 1, 0,
    x0, y0, 0, 1,
  ].join(",")})`;
}

window.addEventListener("resize", fitMonitorScreen);

// Seeded so the scatter is identical on every visit.
function seededRandom(seed) {
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

// Horizontal inset (%) so edge polaroids aren't clipped by the viewport.
const lifeInset = (narrow) => (narrow ? 11 : 4);

// Picks the fewest rows that fit every photo once the cells under the title
// (plus roughly half a polaroid of margin) are left empty. Rows set the
// section's height through --life-rows, so each try is measured for real.
function lifeGrid(count, narrow, section, board, title) {
  const cols = narrow ? 5 : 12;
  const inset = lifeInset(narrow);
  for (let rows = 4; ; rows++) {
    section.style.setProperty("--life-rows", rows);
    const { clientWidth: width, clientHeight: height } = board;
    const cellWidth = (width * (100 - inset * 2)) / 100 / cols;
    const cellHeight = height / rows;
    const clearX = title.offsetWidth / 2 + cellWidth * 0.6;
    const clearY = title.offsetHeight / 2 + cellHeight * 0.6;
    const isTitleCell = (col, row) =>
      Math.abs((width * inset) / 100 + (col + 0.5) * cellWidth - width / 2) < clearX &&
      Math.abs((row + 0.5) * cellHeight - height / 2) < clearY;

    let free = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!isTitleCell(col, row)) free++;
      }
    }
    if (free >= count) return { cols, rows, isTitleCell };
  }
}

// Jittered grid with the title's cells left empty, so polaroids ring the heading.
function scatterPolaroids(count, { cols, rows, isTitleCell }, narrow) {
  const random = seededRandom(narrow ? 7 : 42);

  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!isTitleCell(col, row)) cells.push({ col, row });
    }
  }

  return Array.from({ length: count }, (_, i) => {
    const { col, row } = cells[Math.floor((i * cells.length) / count)];
    const jitter = () => (random() - 0.5) * 0.55;
    const inset = lifeInset(narrow);
    return {
      x: inset + ((col + 0.5 + jitter()) / cols) * (100 - inset * 2),
      y: ((row + 0.5 + jitter()) / rows) * 100,
      r: (random() - 0.5) * 24,
    };
  });
}

function life() {
  const content = sections.life;
  content.innerHTML = `
    <div class="life-board" aria-label="Life photos">
      <h2 class="life-title">MY LIFE</h2>
      ${lifePhotos
        .map(
          (photo, i) => `
          <button class="polaroid" type="button" style="--i: ${i}" data-life-image="${photo.full}" aria-label="Open life photo">
            <img src="${photo.thumb}" alt="Life photo by Joseph Liao" loading="lazy" decoding="async">
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

  const board = content.querySelector(".life-board");
  const polaroids = board.querySelectorAll(".polaroid");
  const title = board.querySelector(".life-title");
  const narrow = window.matchMedia("(max-width: 760px)");
  const layoutPolaroids = () => {
    const grid = lifeGrid(polaroids.length, narrow.matches, content, board, title);
    scatterPolaroids(polaroids.length, grid, narrow.matches).forEach((spot, i) => {
      polaroids[i].style.setProperty("--x", `${spot.x}%`);
      polaroids[i].style.setProperty("--y", `${spot.y}%`);
      polaroids[i].style.setProperty("--r", `${spot.r}deg`);
    });
  };
  layoutPolaroids();
  narrow.addEventListener("change", layoutPolaroids);
  // The title is resized to match "MY ART" once fonts load and on resize.
  new ResizeObserver(layoutPolaroids).observe(title);

  new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;
      board.classList.add("is-in-view");
      observer.disconnect();
    },
    { threshold: 0.2 },
  ).observe(board);

  const lightbox = content.querySelector(".life-lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
  };

  board.addEventListener("click", (event) => {
    const photo = event.target.closest("[data-life-image]");
    if (!photo) return;
    lightboxImage.src = photo.dataset.lifeImage;
    lightbox.hidden = false;
    content.querySelector(".life-lightbox-close").focus();
  });

  lightbox.addEventListener("click", (event) => {
    if (
      event.target === lightbox ||
      event.target.closest(".life-lightbox-close")
    ) {
      closeLightbox();
    }
  });

  const onEscape = (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  };

  window.addEventListener("keydown", onEscape);
}

function scrollToSection(section, behavior = "smooth") {
  if (!section) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  sections[section]?.scrollIntoView({ behavior, block: "start" });
}

// Shown in the masthead only; not yet listed under professional experience.
const upcoming = [{ icon: img.workWealthsimple, company: "Wealthsimple" }];

function renderCompanyMarks() {
  const recentFirst = [...jobs].sort((a, b) => b.start.localeCompare(a.start));
  document.querySelector(".company-marks").innerHTML = [
    ...upcoming,
    ...recentFirst,
  ]
    .map(
      (job) => `
      <span class="company-mark" title="${job.company}">
        <img src="${job.icon}" alt="${job.company}">
      </span>
    `,
    )
    .join("");
}

renderCompanyMarks();

// Scale the name so it spans the full masthead width at the font's natural proportions.
function fitName() {
  const name = document.querySelector(".name-mark");
  name.style.fontSize = "100px";
  name.style.fontSize = `${(100 * name.parentElement.clientWidth) / name.scrollWidth}px`;
}

fitName();
document.fonts.ready.then(fitName);
window.addEventListener("resize", fitName);

landing();
art();
dev();
life();

// Scale the about headline so the copy column reaches the top of the portrait, without overflowing its width.
function fitAboutTitle() {
  const title = document.querySelector("#about-title");
  title.style.fontSize = "";
  if (window.matchMedia("(max-width: 760px)").matches) {
    matchArtWord(title);
    return;
  }

  const portrait = document.querySelector(".about-portrait");
  const copy = document.querySelector(".about-copy");
  const base = parseFloat(getComputedStyle(title).fontSize);
  const spare =
    portrait.offsetHeight - (copy.offsetHeight - title.offsetHeight);
  const byHeight = (base * spare) / title.offsetHeight;
  title.style.width = "max-content";
  const byWidth = (base * copy.clientWidth) / title.offsetWidth;
  title.style.width = "";
  title.style.fontSize = `${Math.min(byHeight, byWidth)}px`;
  matchArtWord(title);
}

// "MY ART" and "MY LIFE" use the same type size as the about headline, and "MY CODE" is rasterized at it.
function matchArtWord(title) {
  const size = getComputedStyle(title).fontSize;
  document.querySelector(".art-word").style.fontSize = size;
  document.querySelector(".life-title").style.fontSize = size;
  codeWordSize = parseFloat(size);
  rasterizeCodeWords();
}

fitAboutTitle();
document.fonts.ready.then(fitAboutTitle);
window.addEventListener("resize", fitAboutTitle);

window.addEventListener("hashchange", () =>
  scrollToSection(location.hash.slice(1)),
);
if (location.hash) {
  // Late-loading images shift section offsets, so re-align once they finish.
  const jump = () => scrollToSection(location.hash.slice(1), "auto");
  jump();
  window.addEventListener("load", jump, { once: true });
}
