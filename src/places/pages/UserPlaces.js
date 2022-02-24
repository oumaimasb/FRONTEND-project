import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "« Place de la mosquée des trépassés »",
    description:
      " « Place de la mosquée des trépassés » est une célèbre place publique au sud-ouest de la médina de Marrakech au Maroc. Ce haut-lieu traditionnel, populaire et animé notamment la nuit attire plus d'un million de visiteurs chaque année. ",
    imageUrl:
      "http://vivre-marrakech.com/script/imgx.php?src=http://vivre-marrakech.com/upload/place%20jemma%20el%20fna%20marrakech.jpg&h=535&w=950&zc=1&q=100",
    address: "Place jemaa lefna, 40000",
    location: {
      lat: 31.625971,
      lng: -7.989098,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
