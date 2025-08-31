import 'server-only';
import fs from 'fs';
import path from 'path';

export type BibEntry = {
  id: string;
  type: string;
  title: string;
  authors: string[];
  year?: number;
  abbr?: string;
  journal?: string;
  booktitle?: string;
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
  html?: string;
};

function cleanValue(raw: string): string {
  let v = raw.trim();
  if ((v.startsWith('{') && v.endsWith('}')) || (v.startsWith('"') && v.endsWith('"'))) {
    v = v.slice(1, -1);
  }
  v = v.replace(/\s+/g, ' ').trim();
  return v;
}

export function parseBibTex(content: string): BibEntry[] {
  // remove front-matter style lines and string definitions
  const sanitized = content
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/@string\s*\{[\s\S]*?\}/gi, '');

  const entries: BibEntry[] = [];
  const re = /@(\w+)\s*\{\s*([^,]+),([\s\S]*?)\}\s*(?=@|$)/g; // type, id, body
  let m: RegExpExecArray | null;
  while ((m = re.exec(sanitized)) !== null) {
    const [, type, id, body] = m;
    const e: BibEntry = { id: id.trim(), type: type.toLowerCase(), title: '', authors: [] };
    const fieldRe = /(\w+)\s*=\s*(\{[\s\S]*?\}|"[\s\S]*?"|[^,\n]+)\s*,?/g;
    let f: RegExpExecArray | null;
    while ((f = fieldRe.exec(body)) !== null) {
      const key = f[1].toLowerCase();
      const val = cleanValue(f[2]);
      switch (key) {
        case 'title': e.title = val; break;
        case 'author':
          e.authors = val.replace(/\n/g, ' ').split(/\s+and\s+/i).map(s => s.trim()).filter(Boolean);
          break;
        case 'year':
          const y = parseInt(val, 10);
          if (!Number.isNaN(y)) e.year = y;
          break;
        case 'abbr': e.abbr = val; break;
        case 'journal': e.journal = val; break;
        case 'booktitle': e.booktitle = val; break;
        case 'volume': e.volume = val; break;
        case 'number': e.number = val; break;
        case 'pages': e.pages = val; break;
        case 'doi': e.doi = val; break;
        case 'url': e.url = val; break;
        case 'html': e.html = val; break;
        default: break;
      }
    }
    entries.push(e);
  }
  return entries;
}

export function readPublications(): BibEntry[] {
  const filePath = path.join(process.cwd(), 'public', 'papers.bib');
  const raw = fs.readFileSync(filePath, 'utf8');
  const entries = parseBibTex(raw);
  // sort by year desc then type
  return entries.sort((a, b) => (b.year || 0) - (a.year || 0));
}

export function formatAuthors(authors: string[]): string {
  return authors.join(', ');
}

export function getVenue(e: BibEntry): string {
  return e.journal || e.booktitle || '';
}

export function getBestLink(e: BibEntry): { href: string; label: string } | null {
  if (e.html) return { href: e.html, label: 'PDF' };
  if (e.url) return { href: e.url, label: 'Link' };
  if (e.doi) return { href: e.doi, label: 'DOI' };
  return null;
}


