"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { withBase } from '../lib/paths';
export default function LangSwitch() {
    const pathname = usePathname();
    const current = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/ja') ? 'ja' : 'zh';
    const routes = { zh: '/', en: '/en', ja: '/ja' } as const;

    const [open, setOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!open) return;
            const target = e.target as Node;
            if (menuRef.current && !menuRef.current.contains(target) && btnRef.current && !btnRef.current.contains(target)) {
                setOpen(false);
            }
        }
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('click', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const currentLabel = current === 'zh' ? '中文' : current === 'en' ? 'EN' : '日本語';

    return (
        <div className="lang-dropdown">

            <button ref={btnRef} className="btn btn-outline btn-inline" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
                <Image src={withBase("/language-svgrepo-com.svg")} alt="H!NT Lab" width={20} height={20} />
                {currentLabel}
            </button>
            {open && (
                <div ref={menuRef} className="lang-menu" role="menu">

                    <Link role="menuitem" href={routes.zh} aria-current={current === 'zh' ? 'page' : undefined} onClick={() => setOpen(false)}>中文</Link>
                    <Link role="menuitem" href={routes.en} aria-current={current === 'en' ? 'page' : undefined} onClick={() => setOpen(false)}>EN</Link>
                    <Link role="menuitem" href={routes.ja} aria-current={current === 'ja' ? 'page' : undefined} onClick={() => setOpen(false)}>日本語</Link>
                </div>
            )}
        </div>
    );
}


