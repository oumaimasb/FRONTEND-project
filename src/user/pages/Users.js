import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Oumaima sb",
      image:
        "https://us.123rf.com/450wm/nikolaydzhi/nikolaydzhi1609/nikolaydzhi160900310/64778716-beau-visage-de-femme-arabe-musulman-hijab-illustration-vectorielle.jpg?ver=6",
      places: 3,
    },
    {
      id: "u2",
      name: "Fatima sb",
      image:
        "https://us.123rf.com/450wm/nikolaydzhi/nikolaydzhi1609/nikolaydzhi160900310/64778716-beau-visage-de-femme-arabe-musulman-hijab-illustration-vectorielle.jpg?ver=6",
      places: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
