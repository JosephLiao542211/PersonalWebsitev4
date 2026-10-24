// Fills the empty section shells in index.html with the same markup script.js renders, so the
// content is in the HTML for crawlers and link previews. script.js leaves prerendered sections alone.
import {
  artHTML,
  companyMarksHTML,
  devHTML,
  landingHTML,
  lifeHTML,
} from "../render.js";

const sections: Record<string, () => string> = {
  home: landingHTML,
  art: artHTML,
  dev: () => devHTML(),
  life: lifeHTML,
};

export function prerender(html: string) {
  let out = html.replace(
    /(<div class="?company-marks"?[^>]*>)(<\/div>)/,
    (_, open, close) => open + companyMarksHTML() + close,
  );
  for (const [id, render] of Object.entries(sections)) {
    const shell = new RegExp(`(<section id="?${id}"?[^>]*>)(</section>)`);
    if (!shell.test(out)) throw new Error(`prerender: no empty #${id} section in index.html`);
    out = out.replace(shell, (_, open, close) => open + render() + close);
  }
  return out;
}
