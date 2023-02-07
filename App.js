import * as React from "react";
import { StyleSheet, View } from "react-native";
import useCachedResources from "./hook/useCached";
import Navigation from "./navigation";
export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Navigation></Navigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
