import { Scene } from 'phaser';
import { EventBus, GameEvents } from '@/game/events/EventBus';
import { useGameStore } from '@/store/useGameStore';

export class GameScene extends Scene {
    private score: number = 0;

    constructor() {
        super('GameScene');
    }

    create() {
        EventBus.emit(GameEvents.SCENE_READY, this);

        this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.cleanUp, this);
        
        this.score = 0;

        EventBus.on(GameEvents.PAUSE_GAME, () => {
            this.scene.pause();
        });

        EventBus.on(GameEvents.RESUME_GAME, () => {
            this.scene.resume();
        });

        EventBus.on(GameEvents.QUIT_TO_MENU, () => {
            this.scene.stop();
        });
        
        this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
            EventBus.off(GameEvents.PAUSE_GAME);
            EventBus.off(GameEvents.RESUME_GAME);
            EventBus.off(GameEvents.QUIT_TO_MENU);
        });
    }

    public addScore(points: number) {
        this.score += points;
        EventBus.emit(GameEvents.SCORE_UPDATED, { score: this.score });
    }

    private collectCoin() {
        useGameStore.getState().addCoins(10);
        
        const isMuted = useGameStore.getState().isMuted;
        if (!isMuted) {
            this.sound.play('coin_sfx');
        }
    }

    private cleanUp() {
    }
}