import { FC } from "react";
import { UserSelect } from "./components/UserSelect";
import { UserTable } from "./components/UserTable";

export const UserPage: FC = () => {
  return (
    <>
      <UserSelect />
      <UserTable />
    </>
  );
};
