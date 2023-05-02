import axios from "axios";

const API_ENDPOINT =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXOnrgHjLa3DNh1RTs1AQg2ejmQE4h9ws";

export async function userRegistration(email, password) {
  // docs: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
  await axios
    .post(API_ENDPOINT, {
      email,
      password,
      returnSecureToken: true,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        // handle bad request error
        console.log(error.response.data);
      } else {
        // handle other error types
        console.log(error);
      }
    });
}
