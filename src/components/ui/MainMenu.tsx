import React from 'react';
import { Play, Settings } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { EventBus, GameEvents } from '../../game/events/EventBus';

export const MainMenu: React.FC = () => {
    const setScreen = useUIStore((state) => state.setScreen);

    const handleStartGame = () => {
        setScreen('PLAYING');
        EventBus.emit(GameEvents.START_GAME); 
    };

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10 text-white">
            <h1 className="text-5xl font-black mb-8 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                BIOMA BLOCK
            </h1>
            
            <div className="flex flex-col gap-4 w-64">
                <button 
                    onClick={handleStartGame}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all py-4 rounded-xl font-bold text-xl shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                >
                    <Play size={24} fill="currentColor" />
                    JOGAR
                </button>

                <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all py-3 rounded-xl font-semibold">
                    <Settings size={20} />
                    CONFIGURAÇÕES
                </button>
            </div>
        </div>
    );
};