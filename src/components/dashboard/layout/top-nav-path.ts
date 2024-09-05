import type {MainNavItemConfig} from "@/types/main-nav";
import {paths} from '@/paths';

export const mainNavItems = [
    {key: 'dashboard', title: '대시보드', href: ''},
    {key: 'data', title: '데이터 비교', href: ''},
    {key: 'tenant', title: '테넌트 관리', href: paths.dashboard.userList},
] satisfies MainNavItemConfig[];
