import AppNavigation from "./src/navigations";
// import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    "PoetsenOne-Regular": require("./assets/fonts/PoetsenOne-Regular.ttf"),
    "MavenPro-Black": require("./assets/fonts/MavenPro-Black.ttf"),
    "MavenPro-Bold": require("./assets/fonts/MavenPro-Bold.ttf"),
    "MavenPro-ExtraBold": require("./assets/fonts/MavenPro-ExtraBold.ttf"),
    "MavenPro-Medium": require("./assets/fonts/MavenPro-Medium.ttf"),
    "MavenPro-Regular": require("./assets/fonts/MavenPro-Regular.ttf"),
    "MavenPro-SemiBold": require("./assets/fonts/MavenPro-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    // if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    // console.log(fontsLoaded, error);
    return null;
  }

  return (
      <AppNavigation/>
  );
}
