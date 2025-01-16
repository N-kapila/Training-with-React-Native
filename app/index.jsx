import { Image, StyleSheet, Pressable, Text} from "react-native";
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
          source={require("@/assets/images/cover.png")}
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
        <Link href={"/contact"} style={{marginHorizontal:"auto"}} asChild>
        <Pressable style={styles.button}>
           <Text style={styles.buttonText}>Contact Me  </Text> 
        </Pressable>
        </Link>  
      </ThemedView>

       <ThemedView style={styles.stepContainer}>
        <Link href={"/menu"} style={{marginHorizontal:"auto"}} asChild>
        <Pressable style={styles.button}>
           <Text style={styles.buttonText}>Menu  </Text> 
        </Pressable>
        </Link>  
      </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
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
  button:{
    width: 200,
    height: 50,
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    borderRadius: 10,
  },
  buttonText:{
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  }
});
