import { createContext, useEffect, useReducer } from "react";

// import axios from "../utils/axios";
import axios from "axios";
import { isValidToken, setSession } from "../utils/jwt";

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      console.log("initialzing from initialize");
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          console.log("isvalid");

          const response = await axios.get(
            "http://localhost/semaapi/public/api/auth/token_gets_user"
          );

          console.log(response);
          // console.log("token valid going to api");
          // const { user } = response.data;

          // dispatch({
          //   type: INITIALIZE,
          //   payload: {
          //     isAuthenticated: true,
          //     user,
          //   },
          // });
        } else {
          console.log("token not found or invalid");
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  // const signIn = async (email, password) => {
  //   console.log("inside isgnin:", password);
  //   axios.defaults.withCredentials = true;
  //   axios
  //     .get("http://localhost/semaapi/public/sanctum/csrf-cookie")
  //     .then((response) => {
  //       axios
  //         .post("http://localhost/semaapi/public/api/loginuser", {
  //           params: { email, password },
  //         })
  //         .then((response) => {
  //           console.log("signin res:", response.data);
  //           const { accessToken, user } = response.data;

  //           setSession(accessToken);
  //           dispatch({ type: SIGN_IN, payload: { user } });
  //           return "1";
  //         })
  //         .catch((err) => {
  //           console.log("signin error:", err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log("csrf err:", err);
  //       return "0";
  //     });
  // };

  const get_csrf = async () => {
    axios.defaults.withCredentials = true;
    const csrf = await axios
      .get("http://localhost/semaapi/public/sanctum/csrf-cookie")
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const signIn = async (email, password) => {
    axios.defaults.withCredentials = true;
    const csrf_res = await get_csrf();
    try {
      const response = await axios.post("loginuser", {
        params: { email, password },
      });

      console.log("sign in", response);

      const { accessToken, user } = response.data;
      window.localStorage.setItem("user", user);
      setSession(accessToken);
      dispatch({ type: SIGN_IN, payload: { user } });
      return user;
    } catch (e) {
      console.log("sign in:", e.message);
      return e.message;
    }
  };

  // const signIn = async (email, password) => {
  //   // axios.get().then((response) => {
  //   //   // Login...
  //   // });
  //   const csrf = await axios.get(
  //     "http://localhost/semaapi/public/sanctum/csrf-cookie"
  //   );
  //   const response = await axios.get(
  //     "http://localhost/semaapi/public/api/loginuser",
  //     {
  //       params: { email: "baraka@aimfirms.com", password: "LoginPass123" },
  //     }
  //   );

  //   // console.log(response);
  //   // const response = await axios.post(
  //   //   "http://localhost/semaapi/public/api/loginuser/",
  //   //   {
  //   //     email,
  //   //     password,
  //   //   }
  //   // );
  //   console.log("singin", response);
  //   const { accessToken, user } = response.data;

  //   setSession(accessToken);
  //   dispatch({
  //     type: SIGN_IN,
  //     payload: {
  //       user,
  //     },
  //   });
  // };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (
    email,
    password,
    first_name,
    last_name,
    phone_number
  ) => {
    const response = await axios.post("register_new_client", {
      email,
      password,
      first_name,
      last_name,
      phone_number,
    });
    console.log(response);
    // const { accessToken, user } = response.data;

    // window.localStorage.setItem("accessToken", accessToken);
    // window.localStorage.setItem("user", user);
    // dispatch({
    //   type: SIGN_UP,
    //   payload: {
    //     user,
    //   },
    // });
  };

  const resetPassword = async (email) => {
    const response = await axios.get(
      "http://localhost/semaapi/public/api/reset_password_request",
      { email }
    );
    console.log("Password reset: ", response);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        signIn,
        signOut,
        signUp,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
