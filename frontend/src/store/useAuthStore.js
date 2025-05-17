import {create } from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isLoggingOut: false,

    isCheckingAuth: true,
    checkAuth: async () => {
        try {
            const response = await axiosInstance.get('/auth/check');
            set({ authUser: response.data.user});
        } catch (error) {
            console.error('Error checking auth:', error);
            set({ authUser: null});
        } finally {
            set({ isCheckingAuth: false });
        }
    },
}))