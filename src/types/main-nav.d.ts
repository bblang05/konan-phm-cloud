export interface MainNavItemConfig {
    key: string;
    title?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    href?: string;
    items?: MainNavItemConfig[];
    matcher?: { type: 'startsWith' | 'equals'; href: string };
}
