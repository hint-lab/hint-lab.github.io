import Link from 'next/link';
import pubs from '../../data/publications.json';

type Pub = typeof pubs[number];

export default function PublicationZH() {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <h1 className="section-title">研究成果</h1>
                    {(() => {
                        const byYear: Record<string, Pub[]> = {};
                        pubs.forEach((e: Pub) => {
                            const y = String(e.year || '其他');
                            (byYear[y] ||= []).push(e);
                        });
                        const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));
                        return years.map((year) => (
                            <div key={year} style={{ marginBottom: 24 }}>
                                <h2 className="section-title">{year}</h2>
                                <ul className="list">
                                    {byYear[year].map((e) => (
                                        <li key={e.id}>
                                            <strong>{e.abbr ? `[${e.abbr}] ` : ''}{e.title}</strong>
                                            <div style={{ color: '#6b7280' }}>
                                                {Array.isArray(e.authors) ? e.authors.join(', ') : ''} · {(e as any).journal || (e as any).booktitle || ''}
                                                {e.pages ? ` · ${e.pages}` : ''}
                                            </div>
                                            {(e as any).html ? (
                                                <div><a href={(e as any).html} target="_blank" rel="noopener noreferrer">PDF</a></div>
                                            ) : (e as any).url ? (
                                                <div><a href={(e as any).url} target="_blank" rel="noopener noreferrer">Link</a></div>
                                            ) : e.doi ? (
                                                <div><a href={e.doi} target="_blank" rel="noopener noreferrer">DOI</a></div>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ));
                    })()}
                    <p style={{ marginTop: 16 }}><Link href="/">返回主页</Link></p>
                </div>
            </section>
        </main>
    );
}


