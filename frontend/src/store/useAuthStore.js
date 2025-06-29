import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isLoggingOut: false,
  onlineUsers: [],
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/check");
      set({ authUser: response.data.user });
    } catch (error) {
      console.error("Error checking auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const response = await axiosInstance.post("/auth/signup", data);
      toast.success("Account created successfully!");
      set({ authUser: response.data });
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to log out. Please try again.");
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post("/auth/login", data);
      set({ authUser: response.data });
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async(data) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: response.data });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

}));
