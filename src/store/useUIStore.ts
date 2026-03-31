import { create } from 'zustand';

export type ScreenState = 'MAIN_MENU' | 'PLAYING' | 'PAUSED' | 'GAME_OVER';

interface UIState {
    currentScreen: ScreenState;
    setScreen: (screen: ScreenState) => void;
}

export const useUIStore = create<UIState>((set) => ({
    currentScreen: 'MAIN_MENU',
    setScreen: (screen) => set({ currentScreen: screen }),
}));