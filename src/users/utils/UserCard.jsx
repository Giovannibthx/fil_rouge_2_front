import PropTypes from "prop-types";

import {Card, CardHeader, Avatar, Button} from "@nextui-org/react";
import { Icon } from '@iconify/react';

import UpsertModal from "../views/UpsertModal";

const UserCard = ({ user, deleteUser, isDeleting }) => {

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  return (
    <Card className="max-w-[330px] m-2 h-25">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{`${user.first_name} ${user.last_name}`}</h4>
            <h5 className="text-small tracking-tight text-default-400">{`@${user.first_name}_${user.last_name}`}</h5>
          </div>
        </div>
        <Button
          color="primary"
          radius="full"
          size="sm"
          className="ml-7"
        >
          Posts
        </Button>
        <div className="max-w-[40px]">
        <Button isIconOnly color="danger" size="sm" radius="full" isLoading={isDeleting} onClick={() => handleDelete(user._id)} className="m-1">
          <Icon icon="octicon:trash-16" style={{ fontSize: '12px'}} />
        </Button>
        <UpsertModal isUpdate user={user} />
        </div>
      </CardHeader>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
  deleteUser: PropTypes.func,
  isDeleting: PropTypes.bool
};

export default UserCard;