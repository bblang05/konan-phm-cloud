export const paths = {
    home: '/',
    auth: {
        // signUp: '/auth/sign-up',
        // resetPassword: '/auth/reset-password',

        signIn: '/auth/sign-in',
        passwordChange: '/auth/password-change',
        changePassword: '/auth/change-password',
        changePasswordDay: '/auth/change-password-day',
        firstLogin: '/auth/first-login',
        passwordError: '/auth/password-error',
    },
    dashboard: {
        overview: '/dashboard',
        // account: '/dashboard/account',
        // password: '/dashboard/password',
        // customers: '/dashboard/customers',
        // integrations: '/dashboard/integrations',
        // settings: '/dashboard/settings',

        userList: '/dashboard/user-list',
        userEdit: '/dashboard/user-edit',
        userCreate: '/dashboard/user-create',
        userDetail: '/dashboard/user-detail',
        groupSettings: '/dashboard/group-setting',
        billingSettings: '/dashboard/billing-setting',
        usageSettings: '/dashboard/usage-setting',
        tenantCreate: '/dashboard/create-tenant',
        groupSetting: '/dashboard/group-setting',
    },
    errors: {notFound: '/errors/not-found'},
} as const;
