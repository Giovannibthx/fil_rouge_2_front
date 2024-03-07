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
    const { data } = await axios.post("http://localhost:3000/login", user);
    const token = data.headers["auth-token"];
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

const useLogin = () => {
    const { setToken } = useTokenStore();
    return useMutation(
        async (user) => {
            return login(user);
        },
        {
            onMutate: async (user) => {
                return { user };
            },
            onSuccess: ({ response, token }) => {
                setToken(token);
                localStorage.setItem("token", token);
                createNotification(
                    `Welcome back ${response.first_name} !`,
                    "success"
                );
            },
            onError: () => {
                createNotification("Login error...", "error");
            },
        }
    );
};

export { useRegister, useLogin };
