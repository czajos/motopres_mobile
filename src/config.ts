import { Dimensions } from "react-native";

export const isTest = true;
export const serverAddress = isTest ? "http://81.162.209.192:6969" : "http://51.83.134.120:5000"

export const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} = Dimensions.get('window');
