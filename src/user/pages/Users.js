import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://static.vecteezy.com/ti/vecteur-libre/p1/2002257-belle-femme-avatar-personnage-icone-gratuit-vectoriel.jpg ",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
