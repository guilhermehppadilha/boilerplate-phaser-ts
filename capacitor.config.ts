import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.mokk.your-game-name',
    appName: 'boilerplate-phaser-ts',
    webDir: 'dist',
    // bundledWebRuntime: false,
    server: {
        androidScheme: 'https'
    },
    plugins: {
        StatusBar: {
            style: 'DARK',
            overlaysWebView: true,
        }
    }
};

export default config;
