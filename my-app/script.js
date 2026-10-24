import { inject } from "@vercel/analytics";
import {
  artCards,
  artHTML,
  artRings,
  companyMarksHTML,
  devHTML,
  landingHTML,
  lifeHTML,
  seededRandom,
} from "./render.js";

inject();

const sections = {
  "": document.querySelector("#home"),
  art: document.querySelector("#art"),
  dev: document.querySelector("#dev"),
  life: document.querySelector("#life"),
};

// The build prerenders every section into index.html; only render here when it is still empty (dev server).
function fill(content, html) {
  if (!content.childElementCount) content.innerHTML = html;
}

function landing() {
  fill(sections[""], landingHTML());
}

function art() {
  const content = sections.art;
  fill(content, artHTML());

  orbitArt(artRings, artCards);

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
  const title = orbit.querySelector(".art-title-stack");
  const elements = [...orbit.querySelectorAll(".art-card")];
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Per-card hold: a hovered card eases out of its ring and parks where it was (h -> 1),
  // then glides back into its moving slot when released (h -> 0). The rest keep orbiting.
  const holds = elements.map(() => ({ h: 0, target: 0, x: 0, y: 0, renderX: 0, renderY: 0 }));
  let elapsed = 0;
  let last = 0;
  let visible = false;
  // Ring radii per axis, from the inner (clear of the title) to the outer (inside the section) ellipse.
  let inner = { x: 0, y: 0 };
  let outer = { x: 0, y: 0 };

  const measure = () => {
    // Keep the outer ring's cards inside the section: inset by the largest card's half-size.
    const inset = Math.max(...elements.map((el) => Math.max(el.offsetWidth, el.offsetHeight))) / 2;
    outer = { x: orbit.clientWidth / 2 - inset, y: orbit.clientHeight / 2 - inset };

    // Title box (word + portfolio link) as half-extents from the orbit center, padded by an average card.
    const box = orbit.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const parts = [title.querySelector(".art-word"), title.querySelector(".art-portfolio")]
      .map((el) => el.getBoundingClientRect());
    const cardW = elements.reduce((sum, el) => sum + el.offsetWidth, 0) / elements.length;
    const cardH = elements.reduce((sum, el) => sum + el.offsetHeight, 0) / elements.length;
    const gap = 16;
    const clearX = Math.max(...parts.flatMap((r) => [cx - r.left, r.right - cx])) + cardW / 2 + gap;
    const clearY = Math.max(...parts.flatMap((r) => [cy - r.top, r.bottom - cy])) + cardH / 2 + gap;

    // Smallest ellipse that never crosses that box: at the corner angle, x must clear clearX while y
    // still clears clearY. Take the vertical radius first (room is tighter there), then solve for x.
    const y = Math.min(clearY * Math.SQRT2, outer.y);
    const x = y > clearY ? clearX / Math.sqrt(1 - (clearY / y) ** 2) : outer.x;
    inner = { x: Math.min(x, outer.x), y };
  };

  const place = (dt = 0) => {
    const ease = 1 - Math.exp(-dt * 9);
    elements.forEach((el, i) => {
      const { ring, phase } = cards[i];
      const hold = holds[i];
      const angle = (phase + elapsed * rings[ring].speed) * Math.PI * 2;
      const t = rings[ring].radius;
      const along = (a, b) => (t < 0 ? a * (1 + t) : a + (b - a) * t);
      const orbitX = Math.cos(angle) * along(inner.x, outer.x);
      const orbitY = Math.sin(angle) * along(inner.y, outer.y);
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
  const remeasure = () => {
    measure();
    place();
  };
  // The title is resized by fitAboutTitle after fonts load, so watch it rather than the window.
  new ResizeObserver(remeasure).observe(title);
  new ResizeObserver(remeasure).observe(orbit);
  elements.forEach((el) => el.querySelector("img").addEventListener("load", remeasure, { once: true }));
  remeasure();

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
  // The title's height sets how much room the terminal boxes get.
  fitDevSection();
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

function dev(active) {
  const content = sections.dev;
  if (active) content.innerHTML = devHTML(active);
  else fill(content, devHTML());

  content.querySelectorAll("[data-dev]").forEach((button) => {
    button.addEventListener("click", () => dev(button.dataset.dev));
  });
  rasterizeCodeWords();
}

// Grows the section when a short window would clip the terminal boxes, then refits the monitor to the new height.
function fitDevSection() {
  const section = sections.dev;
  section.style.removeProperty("--dev-fit");
  const columns = section.querySelectorAll(".dev-side, .dev-copy");
  const overflow = Math.max(0, ...[...columns].map((column) => column.scrollHeight - column.clientHeight));
  if (overflow > 0) section.style.setProperty("--dev-fit", `${section.offsetHeight + overflow}px`);
  fitMonitorScreen();
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

window.addEventListener("resize", fitDevSection);

// Horizontal inset (%) so edge polaroids aren't clipped by the viewport.
const lifeInset = (narrow) => (narrow ? 10 : 4);

// Phones show only the first photos so the board stays about a screen tall (style.css hides the rest).
const lifeMobileCount = 30;

// Picks the fewest rows that fit every photo once the cells under the title
// (plus roughly half a polaroid of margin) are left empty. Rows set the
// section's height through --life-rows, so each try is measured for real.
function lifeGrid(count, narrow, section, board, title) {
  const cols = narrow ? 6 : 12;
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
  fill(content, lifeHTML());

  const board = content.querySelector(".life-board");
  const polaroids = board.querySelectorAll(".polaroid");
  const title = board.querySelector(".life-title");
  const narrow = window.matchMedia("(max-width: 760px)");
  const layoutPolaroids = () => {
    const count = narrow.matches ? Math.min(lifeMobileCount, polaroids.length) : polaroids.length;
    const grid = lifeGrid(count, narrow.matches, content, board, title);
    scatterPolaroids(count, grid, narrow.matches).forEach((spot, i) => {
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
  const target = sections[section];
  if (!target) return;
  // .content is sticky, so measure from it and add the door height it scrolls past.
  const content = document.querySelector("#content");
  const door = document.querySelector(".masthead").offsetHeight;
  const top =
    target.getBoundingClientRect().top -
    content.getBoundingClientRect().top +
    door -
    parseFloat(getComputedStyle(target).scrollMarginTop);
  window.scrollTo({ top, behavior });
}


function renderCompanyMarks() {
  fill(document.querySelector(".company-marks"), companyMarksHTML());
}

renderCompanyMarks();

// Scale a line of display type so it spans its parent's full width at the font's natural proportions.
function fitToWidth(el) {
  el.style.fontSize = "100px";
  const box = getComputedStyle(el.parentElement);
  const width =
    el.parentElement.clientWidth -
    parseFloat(box.paddingLeft) -
    parseFloat(box.paddingRight);
  el.style.fontSize = `${(100 * width) / el.scrollWidth}px`;
}

// The masthead name and the footer email both run edge to edge.
function fitDisplayType() {
  fitToWidth(document.querySelector(".name-mark"));
  fitToWidth(document.querySelector(".site-footer__email"));
}

fitDisplayType();
document.fonts.ready.then(fitDisplayType);
window.addEventListener("resize", fitDisplayType);

landing();
art();
dev();
life();

// Scale the about headline so the copy column reaches the top of the portrait, without overflowing its width.
function fitAboutTitle() {
  const title = document.querySelector("#about-title");
  title.style.fontSize = "";
  if (window.matchMedia("(max-width: 760px)").matches) {
    // Phones: the headline takes the section words' size, shrunk only if "APPROVE." would overflow.
    title.style.fontSize = `${window.innerWidth * 0.26}px`;
    title.style.width = "max-content";
    const fit = document.querySelector(".about-copy").clientWidth / title.offsetWidth;
    title.style.width = "";
    if (fit < 1) title.style.fontSize = `${window.innerWidth * 0.26 * fit}px`;
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
// On phones "MY CODE" shrinks to its column's full width instead.
function matchArtWord(title) {
  const narrow = window.matchMedia("(max-width: 760px)").matches;
  const size = getComputedStyle(title).fontSize;
  document.querySelector(".art-word").style.fontSize = size;
  document.querySelector(".life-title").style.fontSize = size;
  codeWordSize = narrow ? window.innerWidth : parseFloat(size);
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
