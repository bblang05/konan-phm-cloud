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

        userList: '/dashboard/user-list',
        userEdit: '/dashboard/user-edit',
        userCreate: '/dashboard/user-create',
        userDetail: '/dashboard/user-detail',
        groupSettings: '/dashboard/group-setting',
        billingSettings: '/dashboard/billing-setting',
        usageSettings: '/dashboard/usage-setting',
        tenantCreate: '/dashboard/create-tenant',
        groupSetting: '/dashboard/group-setting',
        usageSetting: '/dashboard/usage-setting',
    },
    errors: {notFound: '/errors/not-found'},
} as const;
