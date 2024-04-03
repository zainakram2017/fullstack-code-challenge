import axios from "axios";
import { SignInResponseType } from "../../types";

export const signIn = async (
  username: string
): Promise<SignInResponseType | null> => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BE_URL}/user/mock_login`,
      {
        username: username,
      }
    );
    return {
      token: res.data.access_token,
      user: res.data.user,
    };
  } catch (error) {
    debugger;

    console.log(error);
    return null;
  }
};
