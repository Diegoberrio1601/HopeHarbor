import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colorPalette } from "../../styles/colorPalette";


export const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleNext = ( ) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  const handleSkip = () => {
    if (currentPage < totalPages) {
      // Llevar directamente a la última página
      setCurrentPage(totalPages);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Contenido de cada página
  const pages = [
    {
      image: require("../../../assets/images/stepOne.png"),
      title: "Desbloquea tu poder con la ayuda de la IA",
      subtitle:
        "Conectando corazones y salvando vidas con IA un mensaje a la vez.",
    },
    {
      image: require("../../../assets/images/stepTwo.png"),
      title: "Con amor y apoyo, evitamos tragedias.",
      subtitle: "Forjemos un futuro lleno de luz, con amor y cuidado mutuo.",
    },
    {
      image: require("../../../assets/images/stepThree.png"),
      title: "Mente sana, corazón contento.",
      subtitle: "Mente serena, corazón radiante. El equilibrio será tu fuerza.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Saltar</Text>
        </TouchableOpacity>

        <Image source={pages[currentPage - 1].image} style={styles.image} />

        <View style={styles.indicators}>
          {[...Array(totalPages)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index + 1 === currentPage ? styles.activeIndicator : null,
              ]}
            />
          ))}
        </View>

        <Text style={styles.title}>{pages[currentPage - 1].title}</Text>
        <Text style={styles.subtitle}>{pages[currentPage - 1].subtitle}</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity onPress={handleBack} style={styles.containerArrow}>
            <FontAwesome6
              name="arrow-left-long"
              size={16}
              color={currentPage === 1 ? "#66676B" : "#fff"}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={handleNext} style={styles.containerArrow} >
            <FontAwesome6 name="arrow-right-long" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorPalette.dark,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  image: {
    width: 362,
    height: 456,
    marginBottom: 20,
  },
  title: {
    width: 355,
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 28,
    fontFamily: "Poppins_700Bold",
  },
  subtitle: {
    color: "#8E9295",
    fontFamily: "Poppins_300Light",
    textAlign: "center",
    width: 355,
    fontSize: 16,
    marginBottom: 20,
  },
  skipButton: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  skipButtonText: {
    color: "#D7D7D7",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },

  containerButton: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#232627",
    width: 154,
    height: 54,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 18,
  },

  containerArrow: {
    padding: 15,
  },

  divider: {
    backgroundColor: "#fff",
    width: 2,
    height: 24,
    borderRadius: 2,
  },

  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF80",
    marginHorizontal: 5,
  },

  activeIndicator: {
    backgroundColor: "#fff",

    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
