import LangSwitch from '../components/LangSwitch';
import SideToc from '../components/SideToc';
import Link from 'next/link';
import { getDict } from '../lib/i18n';

export default function HomePageEN() {
    const t = getDict('en');
    return (
        <main>
            <header className="site-header">
                <div className="container header-inner">
                    <div className="brand"><Link href="/">{t.brand}</Link></div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <nav className="nav">
                            <a href="#home">{t.nav.home}</a>
                            <a href="#publications">{t.nav.publications}</a>
                            <a href="#research">{t.nav.research}</a>
                            <a href="#courses">{t.nav.courses}</a>
                        </nav>
                        <LangSwitch />
                    </div>
                </div>
            </header>

            <section id="home" className="hero">
                <div className="container">
                    <h1 className="title">{t.hero.title}</h1>
                    <p className="subtitle">{t.hero.subtitle}</p>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#about">{t.hero.ctaLearn}</a>
                        <a className="btn btn-outline" href={`mailto:${t.contact.email}`}>{t.hero.ctaEmail}</a>
                    </div>
                    <div className="profile-card">
                        <h2>{t.profile.name}</h2>
                        <div className="lines">
                            {t.profile.lines.map((line: string, idx: number) => (<div key={idx}>{line}</div>))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="publications" className="section">
                <div className="container">
                    <h2 className="section-title">{t.publications.title}</h2>
                    <ul className="list">
                        {t.publications.list.map((p: any, idx: number) => (
                            <li key={idx}>
                                {p.href ? (<a href={p.href} target="_blank" rel="noopener noreferrer">{p.text}</a>) : p.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="about" className="section">
                <div className="container">
                    <h2 className="section-title">{t.about.title}</h2>
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
                                        {r.map((cell, cidx) => (<td key={cidx}>{cell}</td>))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <div className="container">
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p>
                        <strong>{t.contact.emailLabel}</strong>: <a className="link-strong" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                    </p>
                </div>
            </section>

            <footer className="site-footer">
                <div className="container">
                    <p>{t.footer.replace('{year}', String(new Date().getFullYear()))}</p>
                </div>
            </footer>

            <SideToc items={[
                { id: 'home', label: t.nav.home },
                { id: 'publications', label: t.nav.publications },
                { id: 'research', label: t.nav.research },
                { id: 'courses', label: t.nav.courses }
            ]} />
        </main>
    );
}


