import {create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import { toast } from 'react-hot-toast';

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

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const response = await axiosInstance.post('/auth/signup', data);
            toast.success('Account created successfully!');
            set({ authUser: response.data});
            
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },
}))