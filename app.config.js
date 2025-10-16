const IS_PROD = process.env.EXPO_PUBLIC_APP_VARIANT != 'production'

const expo = () => ({
    name: IS_PROD ? 'You Converter' : 'You Converter (Dev)',
    slug: 'YouConverter',
    version: '1.0.0',
    runtimeVersion: "1.0.0",
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
        url: "https://u.expo.dev/7ea12872-8ee9-4f52-8dbc-eeb8bc8d9b1b",
        channel: "preview",
        fallbackToCacheTimeout: 0,
    },
    android: {
        package: 'com.gabrielvalero.YouConverter',
        versionCode: 1,
        adaptiveIcon: {
            foregroundImage: IS_PROD
                ? './assets/icon.png'
                : './assets/iconDev.png',
            backgroundColor: '#FFFFFF',
        }
    },
    assetBundlePatterns: ['**/*'],
    plugins: [
        [
            'expo-splash-screen',
            {
                image: IS_PROD ? './assets/icon.png' : './assets/iconDev.png',
                resizeMode: 'cover',
                backgroundColor: '#ffffff',
                imageWidth: 200,
            },
        ],
    ],
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
