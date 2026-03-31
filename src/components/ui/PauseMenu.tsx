import React from 'react';
import { Play, Home } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { EventBus, GameEvents } from '../../game/events/EventBus';

export const PauseMenu: React.FC = () => {
    const setScreen = useUIStore((state) => state.setScreen);

    const handleResume = () => {
        setScreen('PLAYING');
        EventBus.emit(GameEvents.RESUME_GAME);
    };

    const handleQuit = () => {
        setScreen('MAIN_MENU');
        EventBus.emit(GameEvents.QUIT_TO_MENU);
    };

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md z-20 text-white">
            <h2 className="text-3xl font-bold mb-8">JOGO PAUSADO</h2>
            
            <div className="flex flex-col gap-4 w-56">
                <button 
                    onClick={handleResume}
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all py-3 rounded-lg font-bold"
                >
                    <Play size={20} fill="currentColor" />
                    RETOMAR
                </button>

                <button 
                    onClick={handleQuit}
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 active:scale-95 transition-all py-3 rounded-lg font-bold"
                >
                    <Home size={20} />
                    SAIR
                </button>
            </div>
        </div>
    );
};