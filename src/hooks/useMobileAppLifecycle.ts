import { useEffect } from 'react';
import { App } from '@capacitor/app';
import { useUIStore } from '../store/useUIStore';
import { EventBus, GameEvents } from '../game/events/EventBus';

export function useMobileAppLifecycle() {
    const setScreen = useUIStore((state) => state.setScreen);

    useEffect(() => {
        const listener = App.addListener('appStateChange', ({ isActive }) => {
            if (!isActive) {
                setScreen('PAUSED');
                EventBus.emit(GameEvents.PAUSE_GAME);
            }
        });

        return () => {
            listener.then(sub => sub.remove());
        };
    }, [setScreen]);
}