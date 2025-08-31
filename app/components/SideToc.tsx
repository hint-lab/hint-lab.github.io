"use client";

import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };

export default function SideToc({ items }: { items: TocItem[] }) {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        if (!active && items.length > 0) {
            setActive(items[0].id);
        }
        const observers: IntersectionObserver[] = [];
        items.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const ob = new IntersectionObserver(
                entries => {
                    entries.forEach(e => {
                        if (e.isIntersecting) setActive(id);
                    });
                },
                { root: null, rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
            );
            ob.observe(el);
            observers.push(ob);
        });
        return () => observers.forEach(o => o.disconnect());
    }, [items, active]);

    return (
        <nav className="side-toc" aria-label="Section Navigation">
            {items.map(({ id, label }) => (
                <a key={id} href={`#${id}`} aria-current={active === id ? 'page' : undefined}>
                    {label}
                </a>
            ))}
        </nav>
    );
}


