import { CircularProgress, Button } from "@nextui-org/react";
import { Icon } from '@iconify/react';

import Nav from "../../nav/views/Nav";
import UserCard from "../utils/UserCard";
import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { data, isLoading } = useUsers();

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center space-x-4 mt-8">
        <h1 className="text-4xl">Users</h1>
        <Button
            color="primary"
            radius="full"
            size="sm"
            endContent={<Icon icon="lucide:user-plus" style={{ fontSize: '16px'}} />}
          >
          Add User
        </Button>
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
                  <UserCard key={user._id} name={`${user.first_name} ${user.last_name}`} />
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