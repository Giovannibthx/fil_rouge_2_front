import { useInfiniteQuery } from "react-query";
import axios from "axios";

/**
 * KEYS
 */

const usersKeys = {
    all: ["users"],
};

/**
 * REQUESTS
 */

const searchUsers = async () => {
    const { data } = await axios.get("http://localhost:3000/users");
    return data;
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

export { useUsers };
