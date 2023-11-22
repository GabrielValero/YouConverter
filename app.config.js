const IS_DEV = process.env.APP_VARIANT === 'development';
const expo = ()=>({
  name: IS_DEV ? 'You Converter (Dev)' : 'You Converter',
    slug: 'YouConverter',
    version: '1.0.0',
    orientation: 'portrait',
    entryPoint: './index.js',
    icon: IS_DEV ? './assets/iconDev.png' : './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: IS_DEV ? './assets/splashDev.png': './assets/splash.png',
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
        foregroundImage: IS_DEV ? './assets/iconDev.png' : './assets/icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: IS_DEV ? 'com.gabrielvalero.YouConverter.dev' : 'com.gabrielvalero.YouConverter',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: IS_DEV ? '7ea12872-8ee9-4f52-8dbc-eeb8bc8d9b1b-dev' : '7ea12872-8ee9-4f52-8dbc-eeb8bc8d9b1b',
      },
    }
})
export default expo