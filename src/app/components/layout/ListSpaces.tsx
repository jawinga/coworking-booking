import React, { useEffect } from "react";
import SpaceCard from "../SpaceCard";
import { SpaceCardProps } from "../SpaceCard";

interface ListSpacesProps {
  spaces: SpaceCardProps[];
}

const ListSpaces = ({ spaces }: ListSpacesProps) => {
  useEffect(() => {
    console.log("Spaces updated", { spaces });
  }, [spaces]);

  return (
    <div>
      <header className="header-book">
        <h2>
          Available <span>spaces</span>{" "}
          {spaces.length > 0 && (
            <span className="header-book__spaces">{spaces.length}</span>
          )}
        </h2>
        <h3>Pick and choose a slot and date</h3>
        <hr />
      </header>

      {spaces.length >= 1 ? (
        spaces.map((space) => (
          <SpaceCard
            key={space.id}
            id={space.id}
            image={space.image}
            title={space.title}
            capacity={space.capacity}
            price={space.price}
            features={space.features}
            location={space.location}
          />
        ))
      ) : (
        <h2>There aren &apos t coworking spaces left! 😥</h2>
      )}
    </div>
  );
};

export default ListSpaces;
