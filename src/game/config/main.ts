import Phaser from 'phaser';
import { BootScene } from '@/game/scenes/BootScene';
import { PreloadScene } from '@/game/scenes/PreloadScene';
import { MainMenuScene } from '@/game/scenes/MainMenuScene';
import { GameScene } from '@/game/scenes/GameScene';

export const getGameConfig = (parent: string): Phaser.Types.Core.GameConfig => ({
    type: Phaser.AUTO,
    parent,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1080,
        height: 1920,
    },
    render: {
        antialias: false,
        pixelArt: false,
        powerPreference: 'high-performance'
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: process.env.NODE_ENV === 'development',
            gravity: { y: 0, x: 0 }
        }
    },
    backgroundColor: '#000000',
    scene: [BootScene, PreloadScene, MainMenuScene, GameScene],
    disableContextMenu: true,
});