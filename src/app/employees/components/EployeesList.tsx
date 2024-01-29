"use client";
import {
  AllEmployee,
  Manager,
  Assistant,
  AllEmployeeArr,
  Positions,
  Section,
} from "../../../../dto/employees.dto";

interface Props {
  employees: AllEmployeeArr;
}

function EployeesList({ employees }: Props) {
  function typeChecker<T extends AllEmployee>(empl: AllEmployee, key: keyof T) {
    if (empl.hasOwnProperty(key)) {
      return (empl as T)[key];
    } else {
      return undefined;
    }
  }

  return (
    <div className="w-[100%] bg-primary flex flex-col justify-start items-start gap-sm">
      <div className="grid grid-cols-6 gap-xs">
        <div className="p-sm bg-grey font-bold w-[200px]">name</div>
        <div className="p-sm bg-grey font-bold w-[200px]">position</div>
        <div className="p-sm bg-grey font-bold w-[200px]">id</div>
        <div className="p-sm bg-grey font-bold w-[200px]">phoneNumber</div>
        <div className="p-sm bg-grey font-bold w-[200px]">section</div>
        <div className="p-sm bg-grey font-bold w-[200px]">managerId</div>
      </div>
      {employees.map((empl) => {
        return (
          <div key={empl.id} className="grid grid-cols-6 gap-xs">
            <div className="p-sm bg-grey font-bold w-[200px]">{empl.name}</div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {Positions[empl.position]}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">{empl.id}</div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {typeChecker<Manager>(empl, "phoneNumber")}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {typeChecker<Manager>(empl, "section") &&
                Section[typeChecker<Manager>(empl, "section") as number]}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {typeChecker<Assistant>(empl, "managerId")}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EployeesList;
