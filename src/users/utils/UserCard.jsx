import {Card, CardHeader, Avatar, Button} from "@nextui-org/react";
import { Icon } from '@iconify/react';

const UserCard = ({ name }) => {

  return (
    <Card className="max-w-[330px] m-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{name}</h5>
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
        <div>
        <Button isIconOnly color="danger" aria-label="Like" size="sm" radius="full"  className="m-1">
          <Icon icon="octicon:trash-16" style={{ fontSize: '12px'}} />
        </Button>
        <Button isIconOnly color="default" aria-label="Like" size="sm" radius="full"  className="m-1">
          <Icon icon="fluent:edit-12-regular" style={{ fontSize: '12px', color: "whi"}} />
        </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;