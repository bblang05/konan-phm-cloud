export interface SubNavItemConfig {
    key: string;
    title?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    href?: string;
    items?: SubNavItemConfig[];
    matcher?: { type: 'startsWith' | 'equals'; href: string };
}
