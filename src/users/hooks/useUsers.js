import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

/**
 * KEYS
 */

const usersKeys = {
    all: ["users"],
    details: () => [...usersKeys.all, "detail"],
    detail: (id) => [...usersKeys.details(), id],
};

/**
 * REQUESTS
 */

const searchUsers = async () => {
    const { data } = await axios.get("http://localhost:3000/users");
    return data;
};

const upsertUser = async (user) => {
    if (user._id) {
        const { data } = await axios.put(
            `http://localhost:3000/users/${user._id}`,
            user
        );
        return data;
    } else {
        const { data } = await axios.post("http://localhost:3000/users", user);
        return data;
    }
};

/**
 * HOOKS
 */
// READ
const useUsers = () => {
    return useInfiniteQuery(usersKeys.all, () => searchUsers(), {
        select: (data) => {
            return data;
        },
    });
};

const useUserUpsert = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async (user) => {
            return upsertUser(user);
        },
        {
            onMutate: async (user) => {
                const detailKey = usersKeys.detail(user._id);
                await queryClient.cancelQueries(detailKey);
                const previousUser = queryClient.getQueryData(detailKey);
                return { previousUser, user };
            },
            onSuccess: (response, previousUser) => {
                const status = !previousUser._id ? "created" : "updated";
                console.log(
                    "success",
                    response.projectName,
                    `has been ${status}.`
                );
            },
            onError: (error) => {
                console.log("error", "User upsert error: ", `${error}`);
            },
            onSettled: () => {
                queryClient.invalidateQueries(usersKeys.all);
            },
        }
    );
};

export { useUsers, useUserUpsert };
