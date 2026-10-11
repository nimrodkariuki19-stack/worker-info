/* Initialize Capacitor plugins and app lifecycle */
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

// Detect if running in Capacitor
const isCapacitor = window.Capacitor && window.Capacitor.isNativePlatform;

if (isCapacitor) {
  // Initialize plugins
  document.addEventListener('deviceready', () => {
    console.log('Capacitor app initialized');
    
    // Hide splash screen after 2 seconds (or when content is ready)
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  });

  // Handle app pause/resume
  App.addListener('appStateChange', ({ isActive }) => {
    if (!isActive) {
      console.log('App sent to background');
    } else {
      console.log('App resumed to foreground');
    }
  });

  // Handle back button
  App.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      App.exitApp();
    } else {
      window.history.back();
    }
  });
}

// Register service worker for offline support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker registered successfully');
  }).catch((err) => {
    console.warn('Service Worker registration failed:', err);
  });
}

// Install prompt handling for PWA (web install button)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button if it exists
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'block';
  }
});

window.addEventListener('appinstalled', () => {
  console.log('PWA installed successfully');
  deferredPrompt = null;
});

// Global function to trigger install prompt
window.installApp = function() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  }
};

console.log('Worker Info app initialized');
