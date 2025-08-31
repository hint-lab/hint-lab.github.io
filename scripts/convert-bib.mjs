import fs from 'fs';
import path from 'path';

function cleanValue(raw) {
    let v = raw.trim();
    if ((v.startsWith('{') && v.endsWith('}')) || (v.startsWith('"') && v.endsWith('"'))) {
        v = v.slice(1, -1);
    }
    return v.replace(/\s+/g, ' ').trim();
}

function parseBibTex(content) {
    const sanitized = content
        .replace(/^---[\s\S]*?---/m, '')
        .replace(/@string\s*\{[\s\S]*?\}/gi, '');

    const entries = [];
    const re = /@(\w+)\s*\{\s*([^,]+),([\s\S]*?)\}\s*(?=@|$)/g;
    let m;
    while ((m = re.exec(sanitized)) !== null) {
        const [, type, id, body] = m;
        const e = { id: id.trim(), type: type.toLowerCase(), title: '', authors: [] };
        const fieldRe = /(\w+)\s*=\s*(\{[\s\S]*?\}|"[\s\S]*?"|[^,\n]+)\s*,?/g;
        let f;
        while ((f = fieldRe.exec(body)) !== null) {
            const key = f[1].toLowerCase();
            const val = cleanValue(f[2]);
            switch (key) {
                case 'title': e.title = val; break;
                case 'author': e.authors = val.replace(/\n/g, ' ').split(/\s+and\s+/i).map(s => s.trim()).filter(Boolean); break;
                case 'year': const y = parseInt(val, 10); if (!Number.isNaN(y)) e.year = y; break;
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
    return entries.sort((a, b) => (b.year || 0) - (a.year || 0));
}

const root = process.cwd();
const bibPath = path.join(root, 'public', 'papers.bib');
const outDir = path.join(root, 'data');
const outPath = path.join(outDir, 'publications.json');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
const raw = fs.readFileSync(bibPath, 'utf8');
const data = parseBibTex(raw);
fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
console.log(`Wrote ${data.length} entries to ${outPath}`);

