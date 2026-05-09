'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

type ContactModalProps = {
    t: any;
    onClose: () => void;
};

export default function ContactModal({ t, onClose }: ContactModalProps) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
        }}>
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                }}
                onClick={onClose}
            />
            <div style={{
                position: 'relative',
                background: '#fff',
                borderRadius: '16px',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '85vh',
                overflow: 'auto',
                padding: '40px 36px 32px',
                boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 36,
                        height: 36,
                        border: 'none',
                        background: 'var(--color-bg-alt, #f5f5f7)',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-muted, #888)',
                    }}
                >
                    <X size={18} />
                </button>

                <h2 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    color: 'var(--color-text)',
                }}>
                    {t.title}
                </h2>

                <div style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--color-text)' }}>
                    {t.paragraphs.slice(0, -1).map((p: string, idx: number) => (
                        <p key={idx} style={{
                            marginBottom: '14px',
                            fontWeight: idx >= t.paragraphs.length - 4 && idx < t.paragraphs.length - 1 ? 500 : 400,
                        }}>
                            {p}
                        </p>
                    ))}
                </div>

                {!revealed ? (
                    <button
                        onClick={() => setRevealed(true)}
                        style={{
                            display: 'block',
                            width: '100%',
                            marginTop: '24px',
                            padding: '14px 0',
                            border: 'none',
                            borderRadius: '10px',
                            background: 'var(--color-primary, #2563eb)',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                    >
                        {t.modalButton || '我已读完，查看联系方式'}
                    </button>
                ) : (
                    <div style={{
                        marginTop: '24px',
                        padding: '20px',
                        background: 'var(--color-bg-alt, #f8f9fa)',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <p style={{
                            marginBottom: '6px',
                            fontSize: '13px',
                            color: 'var(--color-muted, #888)',
                        }}>
                            {t.modalRevealLabel || '期待与你的交流'}
                        </p>
                        <a
                            href={`mailto:${t.email}`}
                            style={{
                                fontSize: '18px',
                                fontWeight: 700,
                                color: 'var(--color-primary, #2563eb)',
                                textDecoration: 'none',
                            }}
                        >
                            {t.email}
                        </a>
                        <p style={{
                            marginTop: '12px',
                            fontSize: '14px',
                            color: 'var(--color-text)',
                        }}>
                            {t.paragraphs[t.paragraphs.length - 1]}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
