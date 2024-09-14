import type {MainNavItemConfig} from "@/types/main-nav";
import {paths} from '@/paths';

export const mainNavItems = [
    {key: 'dashboard', title: '대시보드', href: ''},
    {key: 'tenant', title: '테넌트 관리', href: paths.dashboard.tenantCreate},
    {key: 'data', title: '관리자 관리', href: ''},
    {key: 'data', title: '요금제 관리', href: paths.dashboard.ratePlanDetail},
] satisfies MainNavItemConfig[];
