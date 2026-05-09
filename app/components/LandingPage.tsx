'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, FileText, Lightbulb, Mail, Menu, Shield, X } from 'lucide-react';
import LangSwitch from './LangSwitch';
import SideToc from './SideToc';
import ContactModal from './ContactModal';
import type { Dict } from '../lib/i18n';
import pubs from '../../data/publications.json';

type LandingPageProps = {
  t: Dict;
  aboutHref: string;
  publicationHref: string;
  locale: 'zh' | 'en' | 'ja';
};

const iconMap: Record<string, any> = {
  Brain,
  Lightbulb,
  FileText,
  Shield,
};

function SectionHeading({ kicker, title, summary }: { kicker?: string; title: string; summary: string }) {
  return (
    <div className="section-head">
      {kicker ? (
        <p className="section-kicker" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
          {kicker}
        </p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      <p className="section-summary">{summary}</p>
      <div className="section-line" />
    </div>
  );
}

export default function LandingPage({ t, aboutHref, publicationHref, locale }: LandingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  // Display latest 4 publications on home
  const homePubs = pubs.slice(0, 4);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-shell">
      <header className={`site-header${menuOpen ? ' header-menu-open' : ''}`}>
        <div className="container header-inner">
          <div className="brand">
            <Link href="/">{t.brand}</Link>
          </div>

          <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
            <a href="#home" aria-current="page" onClick={closeMenu}>{t.nav.home}</a>
            <Link href={aboutHref} onClick={closeMenu}>{t.nav.about}</Link>
            <a href="#research-areas" onClick={closeMenu}>{t.labIntro.researchTitle}</a>
            <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
            <Link href={publicationHref} onClick={closeMenu}>{t.nav.publications}</Link>
            <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
          </nav>

          <div className="header-actions">
            <LangSwitch />
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <Image
          src="/hero.jpg"
          alt="H!NT Lab Hero Background"
          fill
          className="hero-bg"
          priority
        />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">
              {locale === 'zh'
                ? '人机智能融合实验室'
                : locale === 'ja'
                  ? '人間-AI統合研究室'
                  : 'Human-Intelligence iNTegration Lab'}
            </p>
            <p className="hero-keywords">{t.hero.subtitle}</p>
            <p className="hero-description">{t.labIntro.p1}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#research-areas">
                <span>{t.hero.ctaLearn}</span>
                <ArrowRight size={18} />
              </a>
              <button className="btn btn-outline" onClick={() => setShowContactModal(true)}>
                <span>{t.hero.ctaEmail}</span>
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="research-areas" className="section section-alt">
        <div className="container">
          <SectionHeading
            title={t.labIntro.researchTitle}
            summary={t.labIntro.researchIntro}
          />

          <div className="feature-grid">
            {t.labIntro.areas.map((area: any, idx: number) => {
              const IconComponent = iconMap[area.icon] || Brain;
              return (
                <article key={idx} className="feature-card" style={{ textAlign: 'left' }}>
                  <div className="feature-icon">
                    <IconComponent size={44} strokeWidth={1.5} />
                  </div>
                  <h3>{area.title}</h3>
                  {area.subtitle && (
                    <p style={{ marginTop: 0, fontSize: 13, color: '#888', fontWeight: 400 }}>{area.subtitle}</p>
                  )}
                  <p style={{ textAlign: 'left' }}>{area.description}</p>
                  {area.bullets && area.bullets.length > 0 && (
                    <ul style={{ marginTop: 12, paddingLeft: 0, fontSize: 14, color: '#555', listStyleType: 'none' }}>
                      {area.bullets.map((bullet: string, i: number) => (
                        <li key={i} style={{ marginBottom: 6, paddingLeft: 16, textAlign: 'left', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#2563eb' }}>▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>

          <div className="callout" style={{ textAlign: 'center', marginTop: 80, border: 'none', background: 'transparent', boxShadow: 'none', fontSize: 16, color: '#86868b' }}>
            <p>{t.labIntro.synergy}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading
            title={t.projects.title}
            summary={t.projects.subtitle}
          />

          <div className="projects-grid">
            {t.projects.cards.map((project: any, idx: number) => {
              const styles = [
                { class: 'thumb-purple', label: 'DEEPLING' },
                { class: 'thumb-green', label: 'DeepTrans' },
                { class: 'thumb-blue', label: 'DeepMed' },
                { class: 'thumb-orange', label: 'CLT' },
              ];
              const style = styles[idx % styles.length];

              return (
                <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                  <div className={`project-thumb ${style.class}`}>
                    <span>{style.label}</span>
                  </div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="publications" className="section section-alt">
        <div className="container">
          <SectionHeading
            title={t.nav.publications}
            summary={locale === 'zh' ? '实验室近年发表的代表性学术论文' : locale === 'ja' ? '近年の代表的な研究成果' : 'Selected research publications from our lab'}
          />

          <div className="pub-list">
            {homePubs.map((e, idx) => (
              <div key={idx} className="pub-item">
                <div className="pub-year">{e.year}</div>
                <div className="pub-title">{e.title}</div>
                <div className="pub-venue">{(e as any).abbr || (e as any).journal || (e as any).booktitle || ''}</div>
                <div className="card-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-wrap">
            <Link href={publicationHref} className="btn btn-outline" style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)' }}>
              <span>{locale === 'zh' ? '查看全部成果' : locale === 'ja' ? '全ての業績を見る' : 'View all publications'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <SectionHeading
            title={t.contact.title}
            summary={locale === 'zh' ? '如需了解实验室、合作研究或招生信息，请与我们联系。' : 'Questions about the lab, research collaboration, or student opportunities.'}
          />

          <div className="contact-panel">
            <div className="contact-panel-item">
              <div className="contact-icon-box">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <div className="contact-text-box">
                <label>{t.contact.emailLabel}</label>
                <button onClick={() => setShowContactModal(true)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: 'inherit', fontWeight: 500, textDecoration: 'underline', padding: 0 }}>{t.contact.email}</button>
              </div>
            </div>

            <div className="contact-panel-divider" />

            <a
              className="contact-panel-item"
              href="https://github.com/hint-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <div className="contact-text-box">
                <label>GitHub</label>
                <span>github.com/hint-lab</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="expectations" className="section section-alt">
        <div className="container">
          <SectionHeading title={t.expectations.title} />
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.expectations.paragraphs.map((p: string, idx: number) => {
              const isLast = idx === t.expectations.paragraphs.length - 1;
              const isQuestion = idx >= t.expectations.paragraphs.length - 4 && idx < t.expectations.paragraphs.length - 1 && p.endsWith('？');
              if (isQuestion) {
                return (
                  <p key={idx} style={{
                    fontSize: '16px',
                    lineHeight: '1.85',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    color: 'var(--color-text)',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#2563eb' }}>▸</span>
                    {p}
                  </p>
                );
              }
              return (
                <p key={idx} style={{
                  fontSize: '16px',
                  lineHeight: '1.85',
                  marginBottom: isLast ? 0 : '16px',
                  color: isLast ? 'var(--color-primary)' : 'var(--color-text)',
                  fontWeight: isLast ? 600 : 400,
                  marginTop: isQuestion ? '16px' : undefined
                }}>{p}</p>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} H!NT Lab · Shanghai University · 保留所有权利。</p>
          <p style={{ marginTop: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
            <img src="/beian.png" alt="beian" style={{ height: '16px' }} />
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" style={{ color: '#666' }}>
              沪ICP备2025152739号-2
            </a>
          </p>
        </div>
      </footer>

      <SideToc
        items={[
          { id: 'home', label: t.nav.home },
          { id: 'research-areas', label: t.labIntro.researchTitle },
          { id: 'projects', label: t.nav.projects },
          { id: 'contact', label: t.nav.contact },
          { id: 'expectations', label: t.expectations.title },
        ]}
      />

      {showContactModal && (
        <ContactModal
          t={{ ...t.expectations, email: t.contact.email }}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </main>
  );
}
