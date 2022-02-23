import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const places = [
  {
    id: "p1",
    title: "« place de la mosquée des trépassés »",
    description:
      "est une célèbre place publique au sud-ouest de la médina de Marrakech au Maroc. Ce haut-lieu traditionnel, populaire et animé notamment la nuit attire plus d'un million de visiteurs chaque année. Jemaa el-Fna incarne la diversité de l’identité marocaine en raison de la présence de représentants des différentes cultures qui constituent le Maroc : Arabes, Berbères, Gnaouas1. ",
    imageUrl:
      "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/koutoubia-mosque-minaret-located-at-medina-quarter-of-marrakesh-morocco-balate-dorin.jpg?itok=08hAHERp",
    address: "10 Derb Semmarine, Marrakech 40000",
    location: {
      lat: 31.625521,
      lng: -7.9871825,
    },
    creator: "u1",
  },
  {
    id: "p3",
    title: "« place de la mosquée des trépassés »",
    description:
      "est une célèbre place publique au sud-ouest de la médina de Marrakech au Maroc. Ce haut-lieu traditionnel, populaire et animé notamment la nuit attire plus d'un million de visiteurs chaque année. Jemaa el-Fna incarne la diversité de l’identité marocaine en raison de la présence de représentants des différentes cultures qui constituent le Maroc : Arabes, Berbères, Gnaouas1. ",
    imageUrl:
      "http://www.marrakech-private-resort.com/wp-content/uploads/2019/10/place-jeema-el-fna-nuit.png",
    address: "10 Derb Semmarine, Marrakech 40000",
    location: {
      lat: 31.625521,
      lng: -7.9871825,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const uid = useParams().uid;
  const loadedPlaces = places.filter((place) => place.creator === uid);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
