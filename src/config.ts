import { Dimensions } from "react-native";

export const isTest = true;
export const serverAddress = isTest ? "https://api.motopres.marcinloch.pl" : ""

export const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} = Dimensions.get('window');

