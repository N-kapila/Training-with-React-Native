import { Image, StyleSheet} from "react-native";
import { Link } from "expo-router";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#ffffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/my-img.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Nirmal Kapilarathne!</ThemedText>
        <HelloWave />
      </ThemedView>

      <Image source={require("@/assets/images/my-img1.png")} 
      style={styles.myImage}/>

      <ThemedView style={styles.stepContainer}>
        <Link href={"/explore"} style={styles.exploreLink}>Explore</Link>  
      </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: 290,
   flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  myImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  exploreLink: {
    color: "blue",
    textAlign: "center",
    fontSize: 20,
  },
});
