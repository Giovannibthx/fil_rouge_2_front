import { CircularProgress } from "@nextui-org/react";

import Nav from "../../nav/views/Nav";
import UserCard from "../utils/UserCard";
import UpsertModal from "./UpsertModal";
import { useUsers, useUserUpsert } from "../hooks/useUsers";

const Users = () => {
  const { data, isLoading } = useUsers();
  const { mutate, isLoading: isLoadingUpsert } = useUserUpsert();

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center space-x-4 mt-8">
        <h1 className="text-4xl">Users</h1>
        <UpsertModal mutate={mutate} isLoading={isLoadingUpsert} />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <CircularProgress label="Loading..." />
        </div>
      ) : (
        <div className="container mx-auto m-6">
          <div className="flex flex-wrap justify-center gap-4">
            {data && data.pages[0].length > 0 ? (
              data.pages[0].map((user) => 
                  <UserCard key={user._id} name={`${user.first_name}_${user.last_name}`} />
              )
            ) : (
              <p className="mt-6">No users found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Users;