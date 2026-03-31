import { Scene } from 'phaser';
import { EventBus, GameEvents } from '@/game/events/EventBus';

export class GameScene extends Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        EventBus.emit(GameEvents.SCENE_READY, this);

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
}