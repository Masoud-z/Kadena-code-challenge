import React from "react";



interface Props {
  employees: AllEmployee;
}

function EployeesList({ employees }: Props) {
  return (
    <div className="w-[100%] bg-primary flex flex-col justify-start items-start gap-sm">
      <div className="grid grid-cols-6 gap-xs">
        <div className="p-sm bg-grey font-bold">name</div>
        <div className="p-sm bg-grey font-bold">position</div>
        <div className="p-sm bg-grey font-bold">id</div>
        <div className="p-sm bg-grey font-bold">phoneNumber</div>
        <div className="p-sm bg-grey font-bold">section</div>
        <div className="p-sm bg-grey font-bold">managerId</div>
      </div>
      {employees.map((empl) => {
        return (
          <div key={empl.id} className="grid grid-cols-6 gap-xs">
            <div className="p-sm bg-grey font-bold">{empl.name}</div>
            <div className="p-sm bg-grey font-bold">{empl.position}</div>
            <div className="p-sm bg-grey font-bold">{empl.id}</div>
            <div className="p-sm bg-grey font-bold">
              {(empl as Manager)?.phoneNumber || "-"}
            </div>
            <div className="p-sm bg-grey font-bold">
              {(empl as Manager)?.section || "-"}
            </div>
            <div className="p-sm bg-grey font-bold">
              {(empl as Assistnat)?.managerId || "-"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EployeesList;
