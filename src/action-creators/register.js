export const registerRquest = formValues => {
    return { type: "REGISTER_REQUEST", values: formValues}
};

export const registerSuccess = userData => {
    return { type: "REGISTER_SUCCESS", payload: userData }
}

export const registerFailure = error => {
    return { type: ""}
}