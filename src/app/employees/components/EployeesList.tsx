"use client";
import {
  AllEmployee,
  Manager,
  AllEmployeeArr,
  Positions,
  Assistant,
} from "../../../../dto/employees.dto";

interface Props {
  employees: AllEmployeeArr;
}

function EployeesList({ employees }: Props) {
  function employeeTypeChecker<TEmployee extends AllEmployee>(
    empl: AllEmployee,
    key: keyof TEmployee
  ) {
    if (key in empl) {
      const tEmpl = empl as TEmployee;
      return tEmpl[key];
    } else return "-";
  }

  // function employeeTypeChecker<TEmployee extends AllEmployee>(
  //   empl: AllEmployee,
  //   key: keyof TEmployee
  // ) {
  //   return key in empl ? empl[key as keyof AllEmployee] : "-";
  // }

  // function employeeTypeChecker<TEmployee extends AllEmployee>(
  //   empl: AllEmployee,
  //   key: keyof TEmployee
  // ): empl is TEmployee {
  //   return key in empl;
  // }

  // function employeeParameterGetter<TEmployee extends AllEmployee>(
  //   empl: AllEmployee,
  //   key: keyof TEmployee
  // ) {
  //   return employeeTypeChecker<TEmployee>(empl, key) ? empl[key] : "-";
  // }

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
              {employeeTypeChecker<Manager>(empl, "phoneNumber")}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {employeeTypeChecker<Manager>(empl, "section")}
              {/* {employeeTypeChecker<Manager>(empl, "section")
                ? Section[empl.section]
                : "-"} */}
            </div>
            <div className="p-sm bg-grey font-bold w-[200px]">
              {employeeTypeChecker<Assistant>(empl, "managerId")}
              {/* {employeeTypeChecker<Assistant>(empl, "managerId")} */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EployeesList;
