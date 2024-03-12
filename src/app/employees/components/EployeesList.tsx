"use client";
import { useState } from "react";
import {
  AllEmployee,
  Manager,
  Assistant,
  AllEmployeeArr,
  Positions,
  Section,
  Employees,
} from "../../../../dto/employees.dto";

interface Props {
  employees: AllEmployeeArr;
}

function EployeesList({ employees }: Props) {
  function employeeTypeChecker<T extends AllEmployee>(
    empl: Object,
    key: keyof T
  ): empl is T {
    return key in empl;
  }

  function employeeParameterGetter<T extends AllEmployee>(
    empl: Object,
    key: keyof T
  ) {
    return employeeTypeChecker<T>(empl, key) ? empl[key] : "-";
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
              {employeeParameterGetter<Manager>(empl, "phoneNumber")}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {employeeTypeChecker<Manager>(empl, "section")
                ? Section[empl.section]
                : "-"}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {employeeParameterGetter<Assistant>(empl, "managerId")}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EployeesList;
