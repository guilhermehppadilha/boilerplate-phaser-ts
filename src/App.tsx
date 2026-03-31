import React, { useState } from 'react';
import { PhaserGame } from './components/PhaserGame';
import { useGameEvent } from './hooks/useGameEvent';
import { GameEvents, IScorePayload } from './game/events/EventBus';

export const App: React.FC = () => {
    const [score, setScore] = useState(0);

    useGameEvent<IScorePayload>(GameEvents.SCORE_UPDATED, (payload) => {
        setScore(payload.score);
    })

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <PhaserGame />
            {/* Camada React (HUD) sobreposta ao Canvas */}
            <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
                Score: {score}
            </div>
        </div>
    );
};