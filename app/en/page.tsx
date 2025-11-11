import LangSwitch from '../components/LangSwitch';
import SideToc from '../components/SideToc';
import Link from 'next/link';
import { getDict } from '../lib/i18n';
import Image from 'next/image';
import { Brain, Lightbulb, FileText } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Brain,
    Lightbulb,
    FileText,
};

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
                            <Link href="/people/wang_hao/en">{t.nav.about}</Link>
                            <a href="#research-areas">{t.labIntro.researchTitle}</a>
                            <a href="#projects">{t.nav.projects}</a>
                            <Link href="/en/publication">{t.nav.publications}</Link>
                            <a href="#contact">{t.nav.contact}</a>
                        </nav>
                        <LangSwitch />
                    </div>
                </div>
            </header>

            <section id="home" className="hero">
                <div className="container">
                    {/* Logo */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                        <Image src="/hint-lab-logo.svg" alt="H!NT Lab Logo" width={300} height={300} style={{ width: 'auto', height: '120px' }} />
                    </div>
                    
                    {/* Title and Subtitle */}
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <h1 className="title">{t.hero.title}</h1>
                        <p className="subtitle">{t.hero.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p style={{ 
                        textAlign: 'center', 
                        maxWidth: '800px', 
                        margin: '0 auto 40px',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: 'var(--color-text)'
                    }}>
                        {t.labIntro.p1}
                    </p>
                    
                    {/* Buttons */}
                    <div className="hero-actions" style={{ justifyContent: 'center' }}>
                        <a className="btn btn-primary" href="#research-areas">{t.hero.ctaLearn}</a>
                        <a className="btn btn-outline" href={`mailto:${t.contact.email}`}>{t.hero.ctaEmail}</a>
                    </div>
                </div>
            </section>

            {/* Publications moved to /en/publication */}

            <section id="research-areas" className="section">
                <div className="container">
                    <h2 className="section-title">{t.labIntro.researchTitle}</h2>
                    <p>{t.labIntro.researchIntro}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '24px' }}>
                        {t.labIntro.areas.map((area: any, idx: number) => {
                            const IconComponent = iconMap[area.icon] || Brain;
                            return (
                                <div key={idx} style={{ 
                                    padding: '24px', 
                                    background: 'var(--bg-secondary)', 
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <IconComponent size={40} className="icon-primary" />
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>{area.title}</h4>
                                    <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{area.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    
                    <p style={{ marginTop: '24px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                        {t.labIntro.synergy}
                    </p>
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

            <section id="projects" className="section">
                <div className="container">
                    <h2 className="section-title">{t.projects.title}</h2>
                    <p style={{ color: 'var(--color-muted)', marginBottom: '8px' }}>{t.projects.subtitle}</p>
                    <div className="projects-grid">
                        {t.projects.cards.map((project: any, idx: number) => (
                            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                                {project.status && <div className="project-status">{project.status}</div>}
                                <Image src={project.logo} alt={project.name} width={160} height={120} className="project-logo" />
                                <div className="project-content">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                        ))}
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
                { id: 'research-areas', label: t.labIntro.researchTitle },
                { id: 'projects', label: t.nav.projects },
                { id: 'contact', label: t.nav.contact }
            ]} />
        </main>
    );
}


