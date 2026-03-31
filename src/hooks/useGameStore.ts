import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
    coins: number;
    isMuted: boolean;
    currentLevel: number;
    addCoins: (amount: number) => void;
    toggleMute: () => void;
    setLevel: (level: number) => void;
}

export const useGameStore = create<GameState>()(
    persist(
        (set) => ({
            coins: 0,
            isMuted: false,
            currentLevel: 1,
            addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
            toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
            setLevel: (level) => set({ currentLevel: level }),
        }),
        {
            name: 'game-storage',
        }
    )
);