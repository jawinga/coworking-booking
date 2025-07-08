"use client";
import mock from "@/app/data/mock.json";
import ListSpaces from "@/app/components/layout/ListSpaces";

const Page = () => {
  return (
    <div>
      <ListSpaces spaces={mock}></ListSpaces>
    </div>
  );
};

export default Page;
