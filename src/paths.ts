export const paths = {
    home: '/',
    auth: {
        signIn: '/auth/sign-in',
        signUp: '/auth/sign-up',
        passwordChange: '/auth/password-change',
        changePassword: '/auth/change-password',
        changePasswordDay: '/auth/change-password-day',
        firstLogin: '/auth/first-login',
        passwordError: '/auth/password-error',
    },
    dashboard: {
        overview: '/dashboard',

        userList: '/dashboard-a/user-list',
        userEdit: '/dashboard-a/user-edit',
        userCreate: '/dashboard-a/user-create',
        userDetail: '/dashboard-a/user-detail',
        groupSettings: '/dashboard-a/group-setting',
        billingSettings: '/dashboard-a/billing-setting',
        usageSettings: '/dashboard-a/usage-setting',
        groupSettingDefault: '/dashboard-a/group-setting-default',
        groupSetting: '/dashboard-a/group-setting',
        groupSettingMenuAuthority: '/dashboard-a/group-setting-menu-authority',

        tenantCreate: '/dashboard-b/tenant-create',
        usageSetting: '/dashboard-b/usage-setting',
        ratePlanDetail: '/dashboard-b/rate-plan-detail',
        ratePlanEdit: '/dashboard-b/rate-plan-edit',
        AdditionalRatePlanEdit: '/dashboard-b/additional-rate-plan-edit',
        DefaultRatePlanEdit: '/dashboard-b/default-rate-plan-edit',
    },
    errors: {notFound: '/errors/not-found'},
} as const;
