import axios from "axios";
import { setLoading, setUserInfo } from "../slices/user";

export const signup =
  ({ nama, email, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log("nama", nama);
      console.log("email", email);
      console.log("password", password);

      const data = await axios.post(
        "https://api.marica.id/api/v1/user",
        { nama, password, email },
        config
      );

      console.log("data", data);

      // if success
      dispatch(setUserInfo(data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
      // Add your error handling logic here
      //   state.authentication.status = error.status;
      //   state.authentication.message = error.message;
      //   state.isLoading = false;
    }
  };
