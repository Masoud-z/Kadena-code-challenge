import React from "react";
import EployeesList from "./components/EployeesList";

const dummyData: AllEmployee = [
  {
    id: 1,
    name: "John",
    position: 1,
    phoneNumber: "123-456-7890",
    section: Section["marketing"],
  },
  {
    id: 2,
    name: "Jane",
    position: 2,
    phoneNumber: "123-456-7890",
    section: Section["marketing"],
  },
  {
    id: 3,
    name: "Bob",
    position: 2,
    managerId: 1,
  },
];

export default function Employees() {
  return (
    <div>
      <EployeesList employees={dummyData} />
    </div>
  );
}
