'use client';

import type {User} from '@/types/user';

function generateToken(): string {
    const arr = new Uint8Array(12);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
    id: 'USR-000',
    firstName: 'Sofia',
    lastName: 'Rivers',
    email: 'admin@konantech.com',
} satisfies User;

export interface SignInWithPasswordParams {
    email: string;
    password: string;
}

class AuthClient {

    async signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
        const {email, password} = params;


        if (email !== 'admin@konantech.com' || password !== '1234') {
            return {error: 'Invalid credentials'};
        }

        const token = generateToken();
        localStorage.setItem('custom-auth-token', token);

        return {};
    }

    async getUser(): Promise<{ data?: User | null; error?: string }> {
        const token = localStorage.getItem('custom-auth-token');

        if (!token) {
            return {data: null};
        }

        return {data: user};
    }

    async signOut(): Promise<{ error?: string }> {
        localStorage.removeItem('custom-auth-token');

        return {};
    }
}

export const authClient = new AuthClient();
