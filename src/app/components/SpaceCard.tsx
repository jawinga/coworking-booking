import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface SpaceCardProps {
  id: string;
  image: string;
  location: string;
  title: string;
  features: string[];
  capacity: number;
  price: number;
}

const SpaceCard = ({
  image,
  title,
  location,
  features,
  capacity,
  price,
}: SpaceCardProps) => {
  return (
    <div className="space-card">
      <Image src={image} className="space-card__image" alt={`${title}`}></Image>
      <div className="space-card__container">
        <p>
          {capacity}
          <User></User>
        </p>
        <h3>{title}</h3>
        <h4>{location}</h4>

        {features.slice(0, 2).map((f, i) => {
          return <p key={i + 1}>{f}</p>;
        })}

        {features.length > 2 && <span>+{features.length - 2}</span>}
        <p>${price}/day</p>
      </div>
    </div>
  );
};

export default SpaceCard;
