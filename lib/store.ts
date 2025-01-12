import { create } from 'zustand';

// Define the type for the store's state and actions
interface AppState {
  isLoggedIn: boolean;
  
  toggleLoggedIn: () => void;
  
  
  setLoggedIn: (value: boolean) => void;
  
}

// Create the Zustand store
const useStore = create<AppState>((set) => ({
  isLoggedIn: false,
  toggleLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
  setLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
  
}));

export default useStore;
