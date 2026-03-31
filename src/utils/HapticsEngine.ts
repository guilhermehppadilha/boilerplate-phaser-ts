import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Capacitor } from '@capacitor/core';

export class HapticsEngine {
    static async lightImpact() {
        if (!Capacitor.isNativePlatform()) return;
        await Haptics.impact({ style: ImpactStyle.Light });
    }

    static async mediumImpact() {
        if (!Capacitor.isNativePlatform()) return;
        await Haptics.impact({ style: ImpactStyle.Medium });
    }

    static async heavyImpact() {
        if (!Capacitor.isNativePlatform()) return;
        await Haptics.impact({ style: ImpactStyle.Heavy });
    }

    static async error() {
        if (!Capacitor.isNativePlatform()) return;
        await Haptics.vibrate({ duration: 300 });
    }
}