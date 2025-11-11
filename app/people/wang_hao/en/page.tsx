import LangSwitch from '../../../components/LangSwitch';
import Link from 'next/link';
import SideToc from '../../../components/SideToc';
import { getDict } from '../../../lib/i18n';
import { withBase } from '../../../lib/paths';
import Image from 'next/image';

export default function WangHaoPageEN() {
    const t = getDict('en');
    return (
        <main>
            <header className="site-header">
                <div className="container header-inner">
                    <div className="brand"><Link href="/">{t.brand}</Link></div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <nav className="nav">
                            <Link href="/en">{t.nav.home}</Link>
                            <Link href="/people/wang_hao/en">{t.nav.about}</Link>
                            <a href="/en#research-areas">{t.labIntro.researchTitle}</a>
                            <a href="/en#projects">{t.nav.projects}</a>
                            <Link href="/en/publication">{t.nav.publications}</Link>
                            <a href="/people/wang_hao/en#students">{t.nav.students}</a>
                            <a href="/en#contact">{t.nav.contact}</a>
                        </nav>
                        <LangSwitch />
                    </div>
                </div>
            </header>

            <section id="about" className="section">
                <div className="container">
                    <h2 className="section-title">{t.about.title}</h2>
                    <div className="about-grid">
                        <div className="about-photo">
                            <Image src={withBase("/wang_hao.jpeg")} alt="Hao WANG" width={300} height={300} style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            {t.profile && t.profile.name && Array.isArray(t.profile.lines) && (
                                <div className="profile-card">
                                    <h2>{t.profile.name}</h2>
                                    <div className="lines">
                                        {t.profile.lines.map((line: string, idx: number) => (<div key={idx}>{line}</div>))}
                                    </div>
                                    <div className="contact-email">
                                        <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                </div>
            </section>

            <section id="courses" className="section">
                <div className="container">
                    <h2 className="section-title">{t.courses.title}</h2>
                    <ul className="list">
                        {t.courses.list.map((item, idx) => (
                            <li key={idx}>
                                {item.href ? (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">{item.text}</a>
                                ) : (
                                    item.text
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="research" className="section">
                <div className="container">
                    <h2 className="section-title">{t.research.title}</h2>
                    <ul className="list">
                        {t.research.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
                    </ul>
                    <p>
                        {t.research.notePrefix} <a className="link-strong" href={`mailto:${t.contact.email}`}>{t.research.contactCta}</a>{t.research.noteSuffix}
                    </p>
                </div>
            </section>

            <section id="expectations" className="section">
                <div className="container">
                    <h2 className="section-title">{t.expectations.title}</h2>
                    <ul className="list">
                        {t.expectations.list.map((b, idx) => (<li key={idx}>{b}</li>))}
                    </ul>
                </div>
            </section>

            <section id="insights" className="section">
                <div className="container">
                    <h2 className="section-title">{t.insights.title}</h2>
                    <blockquote className="quote">
                        <p>
                            {t.insights.quoteLines[0]}<br />
                            {t.insights.quoteLines[1]}
                        </p>
                    </blockquote>
                </div>
            </section>

            <section id="students" className="section">
                <div className="container">
                    <h2 className="section-title">{t.students.title}</h2>
                    <div className="table-wrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    {t.students.columns.map((c, idx) => (<th key={idx}>{c}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.students.rows.map((r, idx) => (
                                    <tr key={idx}>
                                        {r.map((cell, cidx) => (<td key={cidx}>{cell}</td>))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="alumni" className="section">
                <div className="container">
                    <h2 className="section-title">{t.alumni.title}</h2>
                    <div className="table-wrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    {t.alumni.columns.map((c, idx) => (<th key={idx}>{c}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.alumni.rows.map((r, idx) => (
                                    <tr key={idx}>
                                        {r.map((cell: any, cidx: number) => (
                                            <td key={cidx}>
                                                {cell && typeof cell === 'object' && 'href' in cell ? (
                                                    <a href={withBase(cell.href)} target="_blank" rel="noopener noreferrer">{cell.text}</a>
                                                ) : (
                                                    cell
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="container">
                    <p>{t.footer.replace('{year}', String(new Date().getFullYear()))}</p>
                </div>
            </footer>

            <SideToc items={[
                { id: 'about', label: t.nav.about },
                { id: 'courses', label: t.nav.courses },
                { id: 'research', label: t.nav.research },
                { id: 'expectations', label: t.nav.expectations },
                { id: 'insights', label: t.nav.insights },
                { id: 'students', label: t.nav.students },
                { id: 'alumni', label: t.nav.alumni }
            ]} />
        </main>
    );
}

