import { useEffect } from 'react';
import { EventBus, GameEvents } from '../game/events/EventBus';

export function useGameEvent<T = void>(
    eventName: GameEvents,
    callback: (payload: T) => void
) {
    useEffect(() => {
        EventBus.on(eventName, callback);
        
        return () => {
            EventBus.off(eventName, callback);
        };
    }, [eventName, callback]);
}