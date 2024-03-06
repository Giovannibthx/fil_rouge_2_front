import Nav from "../../nav/views/Nav";
import UserCard from "../utils/UserCard";
import { useUsers } from "../hooks/useUsers";
import { CircularProgress } from "@nextui-org/react";

const Users = () => {
  const { data, isLoading } = useUsers();

  return (
    <>
      <Nav />
      <h1 className="text-4xl text-center">Users</h1>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <CircularProgress label="Loading..." />
        </div>
      ) : (
        <div className="container mx-auto m-6">
          <div className="flex flex-wrap justify-center gap-4">
            {data && data.pages[0].length > 0 ? (
              data.pages[0].map((page) => 
                page.map((user) => (
                  <UserCard key={user.id} name={user.name} />
                ))
              )
            ) : (
              <p>No users found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Users;