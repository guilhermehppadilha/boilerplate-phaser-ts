export enum ImageAssets {
    BACKGROUND = 'BACKGROUND',
    LOGO = 'LOGO',
    BLOCK_WATER = 'BLOCK_WATER',
}

export enum AudioAssets {
    BGM_MAIN = 'BGM_MAIN',
    SFX_CLICK = 'SFX_CLICK',
}

export const AssetManifest = {
    images: {
        [ImageAssets.BACKGROUND]: 'assets/bg.png',
        [ImageAssets.LOGO]: 'assets/logo.png',
        [ImageAssets.BLOCK_WATER]: 'assets/blocks/water.png',
    },
    audio: {
        [AudioAssets.BGM_MAIN]: 'assets/audio/bgm.mp3',
        [AudioAssets.SFX_CLICK]: 'assets/audio/click.wav',
    }
} as const;