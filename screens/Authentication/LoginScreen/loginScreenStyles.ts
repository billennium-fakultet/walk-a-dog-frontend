import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButton: {
    backgroundColor: "#8FE388",
    width: 265,
    height: 64,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
    elevation: 5,
  },
  loginButtonText: {
    fontSize: 36,
    lineHeight: 42,
    fontFamily: "Roboto_500Medium",
  },
  registerButton: {
    backgroundColor: "#C4C4C4",
    width: 175,
    height: 33,
    borderRadius: 15,
  },
  registerButtonText: {
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
  },
  forgotPassword: {
    color: "#434343",
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
  },
});
