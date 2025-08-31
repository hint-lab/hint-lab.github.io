export function withBase(path: string): string {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
    if (!path) return base;
    // Normalize: ensure leading slash for relative assets in public
    const normalized = path.startsWith('/') ? path : `/${path}`;
    // If already has base prefix, avoid duplicating
    if (base && normalized.startsWith(base + '/')) return normalized;
    return `${base}${normalized}`;
}


