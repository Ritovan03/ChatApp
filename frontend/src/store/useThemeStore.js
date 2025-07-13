import {create} from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "corporate",
  setTheme: (theme) => {
    console.log("Setting theme to:", theme); // Debug log
    localStorage.setItem("chat-theme", theme);
    // Apply theme to document.documentElement (html tag)
    document.documentElement.setAttribute('data-theme', theme);
    console.log("Theme applied to HTML:", document.documentElement.getAttribute('data-theme')); // Debug log
    set({ theme });
  }
}));