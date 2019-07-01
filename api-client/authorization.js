import { post } from "./base";

export const registerRequest = (data) => post('registration/', data)
export const loginRequest = (data) => post('login/', data)