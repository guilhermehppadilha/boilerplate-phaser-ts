import { Scene } from 'phaser';
import { useGameStore } from '../../store/useGameStore';
import { AudioAssets } from '../../config/AssetManifest';

export class AudioManager {
    private static instance: AudioManager;
    private scene: Scene | null = null;

    private constructor() {}

    public static getInstance(): AudioManager {
        if (!AudioManager.instance) {
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }

    public init(scene: Scene) {
        this.scene = scene;
    }

    public playSFX(key: AudioAssets) {
        if (!this.scene) return;
        
        const isMuted = useGameStore.getState().isMuted;
        if (!isMuted) {
            this.scene.sound.play(key);
        }
    }

    public playBGM(key: AudioAssets) {
        if (!this.scene) return;
        
        const isMuted = useGameStore.getState().isMuted;
        if (this.scene.sound.get(key)) return; 

        const bgm = this.scene.sound.add(key, { loop: true, volume: 0.5 });
        if (!isMuted) bgm.play();
    }

    public syncMuteState() {
        if (!this.scene) return;
        const isMuted = useGameStore.getState().isMuted;
        this.scene.sound.mute = isMuted;
    }
}