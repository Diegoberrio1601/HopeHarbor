import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colorPalette } from "../../styles/colorPalette";

export const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate("LoginScreen");
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
      <ScrollView bounces={false} contentContainerStyle={styles.content}>
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
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={handleBack}
              style={styles.containerArrow}
            >
              <FontAwesome6
                name="arrow-left-long"
                size={16}
                color={currentPage === 1 ? "#66676B" : "#fff"}
              />
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              onPress={handleNext}
              style={styles.containerArrow}
            >
              <FontAwesome6 name="arrow-right-long" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.dark,
  },
  content: {
    alignItems: "center",
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
    fontFamily: "Bold",
  },
  subtitle: {
    color: "#8E9295",
    fontFamily: "Light",
    textAlign: "center",
    width: 355,
    fontSize: 16,
    marginBottom: 20,
  },
  skipButton: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  skipButtonText: {
    color: "#D7D7D7",
    fontFamily: "SemiBold",
    fontSize: 18,
    padding: 10,
  },

  containerButton: {
    alignItems: "center",
    marginVertical: 10,
  },
  buttons: {
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
