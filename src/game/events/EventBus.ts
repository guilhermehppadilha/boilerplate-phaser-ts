import { Events } from 'phaser';

export const EventBus = new Events.EventEmitter();

export enum GameEvents {
    SCENE_READY = 'SCENE_READY',
    SCORE_UPDATED = 'SCORE_UPDATED',
    GAME_OVER = 'GAME_OVER',
    MUTE_TOGGLED = 'MUTE_TOGGLED'
}

export interface IScorePayload {
    score: number;
    multiplier?: number;
}