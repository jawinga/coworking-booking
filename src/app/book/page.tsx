"use client";
import React, { useState } from "react";
import SpaceCard from "../components/SpaceCard";

const Page = () => {
  const [spaces, setSpaces] = useState([
    "office1",
    "office2",
    "office3",
    "office4",
    "office5",
  ]);

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
      <SpaceCard />
    </div>
  );
};

export default Page;
