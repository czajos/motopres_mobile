import axios from "axios";
import { serverAddress } from "./config";

export const instance=axios.create({
    baseURL:serverAddress,
    timeout:9000
})