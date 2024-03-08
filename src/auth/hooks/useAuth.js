import { useMutation } from "react-query";
import axios from "axios";

import useTokenStore from "./useTokenStore";
import { createNotification } from "../../utils/Notification";

/**
 * REQUESTS
 */

const register = async (user) => {
    const { data } = await axios.post("http://localhost:3000/register", user);
    return data;
};

const login = async (user) => {
    const response = await axios.post("http://localhost:3000/login", user);
    const data = response.data;
    const token = response.headers["auth-token"];
    return { data, token };
};

/**
 * HOOKS
 */

const useRegister = () => {
    return useMutation(
        async (user) => {
            return register(user);
        },
        {
            onMutate: async (user) => {
                return { user };
            },
            onSuccess: (response) => {
                createNotification(
                    `Your registration was success ${response.first_name} !`,
                    "success"
                );
            },
            onError: () => {
                createNotification("Registration error...", "error");
            },
        }
    );
};

const useLogin = (shouldNotify = true) => {
    const { setToken } = useTokenStore();
    return useMutation(
        async (user) => {
            return login(user);
        },
        {
            onMutate: async (user) => {
                return { user };
            },
            onSuccess: ({ token }) => {
                setToken(token);
                localStorage.setItem("auth-token", token);
                if (shouldNotify) {
                    createNotification(`Welcome back !`, "success");
                }
            },
            onError: () => {
                createNotification("Login error...", "error");
            },
        }
    );
};

const useLogout = () => {
    const { setToken } = useTokenStore();
    return useMutation(
        async () => {
            setToken(undefined);
            localStorage.removeItem("auth-token");
        },
        {
            onSuccess: () => {
                createNotification(`Goodbye !`, "success");
            },
            onError: () => {
                createNotification("Logout error...", "error");
            },
        }
    );
};

export { useRegister, useLogin, useLogout };
