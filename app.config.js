module.exports = {
  expo: {
    name: 'OneELAB',
    slug: 'elab-mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'elabmobile',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.elab.mobileapp',
      buildNumber: process.env.EXPO_IOS_BUILD_NUMBER,
      config: {
        usesNonExemptEncryption: false
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      versionCode: process.env.EXPO_ANDROID_VERSION_CODE,
      package: 'com.elab.mobileapp'
    },
    plugins: [
      [
        'react-native-auth0',
        {
          domain: 'zeithrold.jp.auth0.com'
        }
      ],
      'expo-router',
      'expo-build-properties',
      [
        'expo-av',
        {
          microphonePermission: '请允许 $(PRODUCT_NAME) 使用麦克风。'
        }
      ],
      [
        'expo-barcode-scanner',
        {
          cameraPermission: '请允许 $(PRODUCT_NAME) 使用相机。'
        }
      ],
      [
        'expo-calendar',
        {
          calendarPermission: '请允许 $(PRODUCT_NAME) 使用日历。',
          remindersPermission: '请允许 $(PRODUCT_NAME) 使用提醒事项。'
        }
      ],
      [
        'expo-camera',
        {
          cameraPermission: '请允许 $(PRODUCT_NAME) 使用相机。'
        }
      ],
      [
        'expo-document-picker',
        {
          iCloudContainerEnvironment: 'Production'
        }
      ],
      [
        'expo-image-picker',
        {
          photosPermission: '请允许 $(PRODUCT_NAME) 访问您的照片。'
        }
      ],
      [
        'expo-local-authentication',
        {
          faceIDPermission: '请允许 $(PRODUCT_NAME) 使用生物验证。'
        }
      ],
      [
        'expo-media-library',
        {
          photosPermission: '请允许 $(PRODUCT_NAME) 访问您的照片。',
          savePhotosPermission: '请允许 $(PRODUCT_NAME) 存储您的图片。',
          isAccessMediaLocationEnabled: true
        }
      ],
      'expo-localization',
      [
        '@config-plugins/react-native-ble-plx',
        {
          isBackgroundEnabled: true,
          modes: [
            'peripheral',
            'central'
          ],
          bluetoothAlwaysPermission: '请允许 $(PRODUCT_NAME) 使用蓝牙。'
        }
      ],
      [
        'react-native-nfc-manager',
        {
          nfcPermission: '请允许 $(PRODUCT_NAME) 使用NFC。',
          includeNdefEntitlement: false
        }
      ]
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: '6ddf56fd-8646-4ca6-807b-e7840c53b5a4'
      }
    },
    runtimeVersion: {
      policy: 'appVersion'
    },
    updates: {
      url: 'https://u.expo.dev/6ddf56fd-8646-4ca6-807b-e7840c53b5a4'
    }
  }
}
