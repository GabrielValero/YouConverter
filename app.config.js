const IS_PROD = process.env.EXPO_PUBLIC_APP_VARIANT === 'production'

const expo = () => ({
    name: IS_PROD ? 'You Converter' : 'You Converter (Dev)',
    slug: 'YouConverter',
    version: '1.0.0',
    runtimeVersion: '1.0.0',
    entryPoint: './index.js',

    updates: {
        url: 'https://u.expo.dev/7ea12872-8ee9-4f52-8dbc-eeb8bc8d9b1b',
        fallbackToCacheTimeout: 0,
    },
    android: {
        package: 'com.gabrielvalero.YouConverter',
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
