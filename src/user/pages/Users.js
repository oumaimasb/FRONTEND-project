import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lamiaa Mn",
      image:
        "https://c8.alamy.com/zoomsfr/9/065fccaef457421b90c19d57e4b452d8/jam84d.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Oumaima Sb",
      image:
        "https://c8.alamy.com/compfr/2cdgc22/avatar-de-femme-musulmane-isole-sur-blanc-jeune-fille-arabe-portant-le-hijab-et-des-lunettes-de-soleil-dessin-anime-portrait-de-femme-illustration-vectorielle-plate-2cdgc22.jpg",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
