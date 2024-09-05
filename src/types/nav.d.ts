export interface NavItemConfig {
    key: string;
    title?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    href?: string;
    items?: NavItemConfig[];
    matcher?: { type: 'startsWith' | 'equals'; href: string };
}
