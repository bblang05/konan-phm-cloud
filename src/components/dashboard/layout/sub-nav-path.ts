import type {SubNavItemConfig} from "@/types/sub-nav";
import {paths} from '@/paths';

export const subNavItems = [
    {key: 'user', title: '사용자 관리', href: paths.dashboard.userList},
    {key: 'group', title: '그룹 관리', href: paths.dashboard.groupSettings},
    {key: 'billing', title: '빌링 관리', href: paths.dashboard.billingSettings},
    {key: 'usage', title: '사용량 관리', href: paths.dashboard.usageSettings},
] satisfies SubNavItemConfig[];
