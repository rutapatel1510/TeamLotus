// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const signup = () => {
//   return (
//     <SafeAreaView style={{flex : 1}}>
//       <Text style={{color : "red"}}>signup</Text>
//     </SafeAreaView>
//   )
// }

// export default signup

// const styles = StyleSheet.create({});
import React from "react";
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import {LinearGradient} from 'expo-linear-gradient'; // Import LinearGradient

const SignUpScreen = () => {
  return (
    <LinearGradient // Use LinearGradient for the background
    colors={['#CA6955', '#CA6955', '#D26187']} // Set your gradient colors here
    style={styles.container}
  >
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Top Row with Status Bar Icons */}
        {/* <View style={styles.row}>
          <Text style={styles.statusText}>9:41</Text>
          <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.icon} />
          <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.icon} />
          <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.iconLarge} />
        </View> */}

        {/* Main Sign-Up Content */}
        <View style={styles.signUpContainer}>
          {/* <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.profileIcon} /> */}
          <Image source={require('../../assets/images/MainLogo.png')} resizeMode="stretch" style={styles.mainLogo} />

          <Text style={styles.labelText}>Email or Username</Text>
          <TextInput style={styles.inputBox} placeholder="Enter your email or username" placeholderTextColor="#757575" />

          <Text style={styles.labelText}>Password</Text>
          <TextInput style={styles.inputBox} placeholder="Enter your password" placeholderTextColor="#757575" secureTextEntry />

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Login Buttons */}
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/images/google.png')} resizeMode="stretch" style={styles.socialIcon} />
            <Text style={styles.socialText}>Sign up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/images/facebook.png')} resizeMode="stretch" style={styles.socialIcon} />
            <Text style={styles.socialText}>Sign up with Facebook</Text>
          </TouchableOpacity>

          <Text style={styles.loginPrompt}>
            Have an account? 
          </Text>
          <Link
          href="/signup" style={styles.loginLink}>
            Log In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUpScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   scrollView: {
//     alignItems: "center",
//     paddingVertical: 16,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     paddingHorizontal: 20,
//   },
//   statusText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     flex: 1,
//   },
//   icon: {
//     width: 18,
//     height: 10,
//     marginHorizontal: 5,
//   },
//   iconLarge: {
//     width: 26,
//     height: 13,
//   },
//   signUpContainer: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     width: '90%',
//     alignItems: "center",
//   },
//   profileIcon: {
//     width: 22,
//     height: 22,
//     marginBottom: 20,
//   },
//   mainLogo: {
//     height: 124,
//     marginBottom: 40,
//   },
//   labelText: {
//     color: "#757575",
//     fontSize: 16,
//     alignSelf: "flex-start",
//     marginBottom: 8,
//     marginLeft: 5,
//   },
//   inputBox: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#FFFFFF",
//     borderColor: "#34CC99",
//     borderRadius: 10,
//     borderWidth: 1,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     color: "#181818",
//   },
//   signUpButton: {
//     backgroundColor: "#34CC99",
//     borderRadius: 58,
//     paddingVertical: 14,
//     width: "100%",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   signUpText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   orContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: "#34CC99",
//   },
//   orText: {
//     marginHorizontal: 10,
//     color: "#34CC99",
//     fontSize: 16,
//   },
//   socialButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     borderColor: "#B3B3B3",
//     borderRadius: 58,
//     borderWidth: 1,
//     paddingVertical: 13,
//     paddingHorizontal: 20,
//     marginBottom: 15,
//     width: "100%",
//     justifyContent: "center",
//   },
//   socialIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialText: {
//     color: "#757575",
//     fontSize: 16,
//   },
//   loginPrompt: {
//     color: "#757575",
//     fontSize: 14,
//     marginTop: 20,
//     textAlign: "center",
//   },
//   loginLink: {
//     color: "#34CC99",
//     fontWeight: "bold",
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   scrollView: {
//     alignItems: "center",
//     paddingVertical: 16,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     paddingHorizontal: 20,
//   },
//   statusText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     flex: 1,
//   },
//   icon: {
//     width: 18,
//     height: 10,
//     marginHorizontal: 5,
//   },
//   iconLarge: {
//     width: 26,
//     height: 13,
//   },
//   signUpContainer: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     width: '90%',
//     alignItems: "center",
//   },
//   profileIcon: {
//     width: 22,
//     height: 22,
//     marginBottom: 20,
//   },

//   // Updated main logo styling
//   mainLogo: {
//     width: "80%",       // Scales with screen width
//     height: 120,        // Fixed height for consistent appearance
//     marginBottom: 40,   // Space below the logo
//   },

//   labelText: {
//     color: "#757575",
//     fontSize: 16,
//     alignSelf: "flex-start",
//     marginBottom: 8,
//     marginLeft: 5,
//   },
//   inputBox: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#FFFFFF",
//     borderColor: "#34CC99",
//     borderRadius: 10,
//     borderWidth: 1,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     color: "#181818",
//   },
//   signUpButton: {
//     backgroundColor: "#34CC99",
//     borderRadius: 58,
//     paddingVertical: 14,
//     width: "100%",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   signUpText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   orContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: "#34CC99",
//   },
//   orText: {
//     marginHorizontal: 10,
//     color: "#34CC99",
//     fontSize: 16,
//   },
//   socialButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     borderColor: "#B3B3B3",
//     borderRadius: 58,
//     borderWidth: 1,
//     paddingVertical: 13,
//     paddingHorizontal: 20,
//     marginBottom: 15,
//     width: "100%",
//     justifyContent: "center",
//   },
//   socialIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialText: {
//     color: "#757575",
//     fontSize: 16,
//   },
//   loginPrompt: {
//     color: "#757575",
//     fontSize: 14,
//     marginTop: 20,
//     textAlign: "center",
//   },
//   loginLink: {
//     color: "#34CC99",
//     fontWeight: "bold",
//   },
// });

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      alignItems: "center",
      paddingVertical: 16,
    },
    signUpContainer: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      paddingHorizontal: 20,
      paddingVertical: 30,
      width: '90%',
      alignItems: "center",
    },
    mainLogo: {
      width: "80%",       // Scales with screen width
      height: 120,        // Fixed height for consistent appearance
      marginBottom: 40,   // Space below the logo
      objectFit : "contain"
    },
    labelText: {
      color: "#757575",
      fontSize: 16,
      alignSelf: "flex-start",
      marginBottom: 8,
      marginLeft: 5,
    },
    inputBox: {
      width: "100%",
      height: 50,
      backgroundColor: "#FFFFFF",
      borderColor: "#34CC99",
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 15,
      marginBottom: 20,
      color: "#181818",
    },
    signUpButton: {
      backgroundColor: "#34CC99",
      borderRadius: 58,
      paddingVertical: 14,
      width: "100%",
      alignItems: "center",
      marginBottom: 20,
    },
    signUpText: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: "bold",
    },
    orContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: "#34CC99",
    },
    orText: {
      marginHorizontal: 10,
      color: "#34CC99",
      fontSize: 16,
    },
    socialButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderColor: "#B3B3B3",
      borderRadius: 58,
      borderWidth: 1,
      paddingVertical: 13,
      paddingHorizontal: 20,
      marginBottom: 15,
      width: "100%",
      justifyContent: "center",
    },
    socialIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    socialText: {
      color: "#757575",
      fontSize: 16,
    },
    loginPrompt: {
      color: "#757575",
      fontSize: 14,
      marginTop: 20,
      textAlign: "center",
    },
    loginLink: {
      color: "#34CC99",
      fontWeight: "bold",
    },
  });
  