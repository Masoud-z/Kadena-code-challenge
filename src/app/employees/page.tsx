import React from "react";
import EployeesList from "./components/EployeesList";
import {
  AllEmployee,
  AllEmployeeArr,
  Section,
} from "../../../dto/employees.dto";

const dummyData: AllEmployeeArr = [
  {
    id: 1,
    name: "John",
    position: 1,
    phoneNumber: "123-456-7890",
    section: 1,
  },
  {
    id: 2,
    name: "Jane",
    position: 0,
    phoneNumber: "123-456-7890",
    section: 0,
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
