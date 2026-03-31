import { Scene } from 'phaser';
import { AssetManifest, ImageAssets } from '@/game/config/AssetManifest';

export class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        Object.entries(AssetManifest.images).forEach(([key, path]) => {
            this.load.image(key, path);
        });

        Object.entries(AssetManifest.audio).forEach(([key, path]) => {
            this.load.audio(key, path);
        });

        // Barra de progresso visual simulada...
    }

    create() {
        this.add.image(512, 384, ImageAssets.BACKGROUND);
        this.scene.start('MainMenu');
    }
}