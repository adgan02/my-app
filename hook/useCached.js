import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "Khand-Bold": require("../assets/fonts/Khand-Bold.ttf"),
          "Khand-Light": require("../assets/fonts/Khand-Light.ttf"),
          "Khand-Medium": require("../assets/fonts/Khand-Medium.ttf"),
          "Khand-Regular": require("../assets/fonts/Khand-Regular.ttf"),
          "Khand-SemiBold": require("../assets/fonts/Khand-SemiBold.ttf"),

        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
