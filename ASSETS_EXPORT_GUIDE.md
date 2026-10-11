# Splash Screen & App Icon Asset Generation Guide

## Asset Export Instructions

Export the SVG files from `assets/` folder using Figma, Illustrator, Inkscape, or online SVG-to-PNG converters.

### For Android Splash Screens

Export `assets/splash-screen.svg` at these exact sizes and save in `android/app/src/main/res/`:

```
drawable-ldpi/splash.png          (200x320)
drawable-mdpi/splash.png          (320x470)
drawable-hdpi/splash.png          (480x800)
drawable-xhdpi/splash.png         (720x1280)
drawable-xxhdpi/splash.png        (1080x1920)
drawable-xxxhdpi/splash.png       (1440x2560)
drawable-land-ldpi/splash.png     (320x200)
drawable-land-mdpi/splash.png     (470x320)
drawable-land-hdpi/splash.png     (800x480)
drawable-land-xhdpi/splash.png    (1280x720)
drawable-land-xxhdpi/splash.png   (1920x1080)
drawable-land-xxxhdpi/splash.png  (2560x1440)
```

### For iPhone/iOS Splash Screens

Export `assets/splash-screen.svg` at these exact sizes and save in `ios/App/App/Assets.xcassets/`:

```
LaunchScreen/Default@2x~iphone.png           (640x1136)   - iPhone 5/5S
LaunchScreen/Default-Portrait@2x~ipad.png   (1536x2048)  - iPad 2/3/4
LaunchScreen/Default-Portrait@3x~iphone.png (1242x2208)  - iPhone 6 Plus
LaunchScreen/Default-667h@2x~iphone.png     (750x1334)   - iPhone 6/7/8
LaunchScreen/Default-Portrait~ipad.png      (768x1024)   - iPad Mini
LaunchScreen/Default@3x~iphone.png          (1125x2436)  - iPhone X/11 Pro
LaunchScreen/Default-414w-896h@3x~iphone.png (1242x2688) - iPhone 11 Pro Max
LaunchScreen/Default-414w-896h@2x~iphone.png (828x1792)  - iPhone 11/XR
LaunchScreen/Default-428w-926h@3x~iphone.png (1284x2778) - iPhone 13 Pro Max
LaunchScreen/Default-430w-932h@3x~iphone.png (1290x2796) - iPhone 14 Pro Max
```

### For App Icons - Android

Export `assets/app-icon.svg` at these exact sizes and save in `android/app/src/main/res/`:

```
mipmap-ldpi/ic_launcher.png       (36x36)
mipmap-mdpi/ic_launcher.png       (48x48)
mipmap-hdpi/ic_launcher.png       (72x72)
mipmap-xhdpi/ic_launcher.png      (96x96)
mipmap-xxhdpi/ic_launcher.png     (144x144)
mipmap-xxxhdpi/ic_launcher.png    (192x192)
mipmap-anydpi-v33/ic_launcher.xml (adaptive icon config)
```

### For App Icons - iOS

Export `assets/app-icon.svg` at these exact sizes and save in `ios/App/App/Assets.xcassets/AppIcon.appiconset/`:

```
AppIcon-20x20@1x.png              (20x20)   - iPad Notifications
AppIcon-20x20@2x.png              (40x40)   - iPhone Notifications
AppIcon-20x20@3x.png              (60x60)   - iPhone Notifications
AppIcon-29x29@1x.png              (29x29)   - iPad Settings
AppIcon-29x29@2x.png              (58x58)   - iPhone Settings
AppIcon-29x29@3x.png              (87x87)   - iPhone Settings
AppIcon-40x40@1x.png              (40x40)   - iPad Spotlight
AppIcon-40x40@2x.png              (80x80)   - iPhone Spotlight
AppIcon-40x40@3x.png              (120x120) - iPhone Spotlight
AppIcon-60x60@2x.png              (120x120) - iPhone App
AppIcon-60x60@3x.png              (180x180) - iPhone App
AppIcon-76x76@1x.png              (76x76)   - iPad App
AppIcon-76x76@2x.png              (152x152) - iPad App
AppIcon-83.5x83.5@2x.png          (167x167) - iPad Pro App
AppIcon-1024x1024@1x.png          (1024x1024) - App Store
```

## Quick Export Steps

### Using Figma (Recommended):
1. Open the SVG file in Figma
2. Select the frame
3. In the right panel → Export → Add export
4. Set format to PNG, scale to 1x, 2x, 3x as needed
5. Export and rename files according to the list above

### Using Online Converter (ezgif.com, cloudconvert.com):
1. Upload `assets/splash-screen.svg` or `assets/app-icon.svg`
2. Set output format to PNG
3. Set size (e.g., 1242x2688 for splash)
4. Download and rename

### Using ImageMagick (CLI):
```bash
# Splash screen - all sizes
convert assets/splash-screen.svg -resize 200x320 android/app/src/main/res/drawable-ldpi/splash.png
convert assets/splash-screen.svg -resize 320x470 android/app/src/main/res/drawable-mdpi/splash.png
convert assets/splash-screen.svg -resize 480x800 android/app/src/main/res/drawable-hdpi/splash.png
convert assets/splash-screen.svg -resize 720x1280 android/app/src/main/res/drawable-xhdpi/splash.png
convert assets/splash-screen.svg -resize 1080x1920 android/app/src/main/res/drawable-xxhdpi/splash.png
convert assets/splash-screen.svg -resize 1440x2560 android/app/src/main/res/drawable-xxxhdpi/splash.png

# App icon - all sizes
convert assets/app-icon.svg -resize 36x36 android/app/src/main/res/mipmap-ldpi/ic_launcher.png
convert assets/app-icon.svg -resize 48x48 android/app/src/main/res/mipmap-mdpi/ic_launcher.png
convert assets/app-icon.svg -resize 72x72 android/app/src/main/res/mipmap-hdpi/ic_launcher.png
convert assets/app-icon.svg -resize 96x96 android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
convert assets/app-icon.svg -resize 144x144 android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
convert assets/app-icon.svg -resize 192x192 android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
```

## Directory Structure After Export

```
android/app/src/main/res/
├── drawable-ldpi/
│   └── splash.png
├── drawable-mdpi/
│   └── splash.png
├── drawable-hdpi/
│   └── splash.png
├── drawable-xhdpi/
│   └── splash.png
├── drawable-xxhdpi/
│   └── splash.png
├── drawable-xxxhdpi/
│   └── splash.png
├── drawable-land-ldpi/
│   └── splash.png
├── drawable-land-mdpi/
│   └── splash.png
├── drawable-land-hdpi/
│   └── splash.png
├── drawable-land-xhdpi/
│   └── splash.png
├── drawable-land-xxhdpi/
│   └── splash.png
├── drawable-land-xxxhdpi/
│   └── splash.png
├── mipmap-ldpi/
│   └── ic_launcher.png
├── mipmap-mdpi/
│   └── ic_launcher.png
├── mipmap-hdpi/
│   └── ic_launcher.png
├── mipmap-xhdpi/
│   └── ic_launcher.png
├── mipmap-xxhdpi/
│   └── ic_launcher.png
└── mipmap-xxxhdpi/
    └── ic_launcher.png

ios/App/App/Assets.xcassets/
├── AppIcon.appiconset/
│   ├── AppIcon-20x20@1x.png
│   ├── AppIcon-20x20@2x.png
│   ├── AppIcon-20x20@3x.png
│   ├── AppIcon-29x29@1x.png
│   ├── AppIcon-29x29@2x.png
│   ├── AppIcon-29x29@3x.png
│   ├── AppIcon-40x40@1x.png
│   ├── AppIcon-40x40@2x.png
│   ├── AppIcon-40x40@3x.png
│   ├── AppIcon-60x60@2x.png
│   ├── AppIcon-60x60@3x.png
│   ├── AppIcon-76x76@1x.png
│   ├── AppIcon-76x76@2x.png
│   ├── AppIcon-83.5x83.5@2x.png
│   ├── AppIcon-1024x1024@1x.png
│   └── Contents.json
└── LaunchImage.launchimage/
    ├── Default@2x~iphone.png
    ├── Default-Portrait@2x~ipad.png
    ├── Default-Portrait@3x~iphone.png
    ├── Default-667h@2x~iphone.png
    ├── Default-Portrait~ipad.png
    ├── Default@3x~iphone.png
    ├── Default-414w-896h@3x~iphone.png
    ├── Default-414w-896h@2x~iphone.png
    ├── Default-428w-926h@3x~iphone.png
    ├── Default-430w-932h@3x~iphone.png
    └── Contents.json
```

## Next Steps

1. **Export the assets** using one of the methods above
2. **Place them** in the correct directories (android/ and ios/)
3. **Run**: `npx cap sync`
4. **Build the app**:
   - Android: `npx cap open android` → Build APK in Android Studio
   - iOS: `npx cap open ios` → Build in Xcode

## Notes

- Keep transparent background for app icons (PNG with alpha channel)
- Splash screens should have the full background (no transparency)
- All sizes must be exact pixel dimensions (not scaled)
- iOS requires both 1x, 2x, and 3x versions for different device densities
- Android automatically scales based on screen density (ldpi, mdpi, hdpi, etc.)
- Capacitor will automatically use these assets during native app build

## Verification

After placing assets, verify they're recognized:
```bash
npx cap sync
npx cap copy
```

Then check the native project:
- Android Studio: View → Resource Manager
- Xcode: App → Assets.xcassets
