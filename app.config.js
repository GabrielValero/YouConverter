const IS_PROD = process.env.EXPO_PUBLIC_APP_VARIANT === 'production'

const expo = () => ({
    name: IS_PROD ? 'You Converter' : 'You Converter (Dev)',
    slug: 'YouConverter',
    version: '1.0.0',
    orientation: 'portrait',
    entryPoint: './index.js',
    icon: IS_PROD ? './assets/icon.png' : './assets/iconDev.png',
    userInterfaceStyle: 'dark',
    splash: {
        image: IS_PROD ? './assets/splash.png' : './assets/splashDev.png',
        resizeMode: 'cover',
        backgroundColor: '#ffffff',
    },
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: IS_PROD
                ? './assets/icon.png'
                : './assets/iconDev.png',
            backgroundColor: '#FFFFFF',
        },
        package: IS_PROD
            ? 'com.gabrielvalero.YouConverter'
            : 'com.gabrielvalero.YouConverter.dev',
    },
    web: {
        favicon: './assets/favicon.png',
    },
    extra: {
        eas: {
            projectId: '7ea12872-8ee9-4f52-8dbc-eeb8bc8d9b1b',
        },
    },
})

export default expo
