import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Phaser from 'phaser';
import { getGameConfig } from '../config/GameConfig';
import { EventBus, GameEvents } from '../game/events/EventBus';

export interface IPhaserGameRef {
    game: Phaser.Game | null;
    scene: Phaser.Scene | null;
}

interface PhaserGameProps {
    onSceneReady?: (scene: Phaser.Scene) => void;
}

export const PhaserGame = forwardRef<IPhaserGameRef, PhaserGameProps>(
    ({ onSceneReady }, ref) => {
        const gameRef = useRef<Phaser.Game | null>(null);

        useLayoutEffect(() => {
            if (!gameRef.current) {
                gameRef.current = new Phaser.Game(getGameConfig('game-container'));

                if (typeof ref === 'function') {
                    ref({ game: gameRef.current, scene: null });
                } else if (ref) {
                    ref.current = { game: gameRef.current, scene: null };
                }
            }

            return () => {
                if (gameRef.current) {
                    gameRef.current.destroy(true);
                    gameRef.current = null;
                }
            };
        }, [ref]);

        useEffect(() => {
            const handleSceneReady = (scene: Phaser.Scene) => {
                if (onSceneReady) onSceneReady(scene);
                if (typeof ref === 'function') {
                    ref({ game: gameRef.current, scene });
                } else if (ref) {
                    ref.current = { game: gameRef.current, scene };
                }
            };

            EventBus.on(GameEvents.SCENE_READY, handleSceneReady);

            return () => {
                EventBus.off(GameEvents.SCENE_READY, handleSceneReady);
            };
        }, [onSceneReady, ref]);

        return <div id="game-container" style={{ width: '100%', height: '100%' }} />;
    }
);

PhaserGame.displayName = 'PhaserGame';