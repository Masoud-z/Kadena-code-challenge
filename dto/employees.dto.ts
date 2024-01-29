export enum Positions {
  manager = 0,
  employee = 1,
  Assistnat = 2,
}

export enum Section {
  marketing = 0,
  sales = 1,
  hr = 2,
}

export interface Employees {
  name: string;
  position: Positions;
  id: number;
}

export interface Manager extends Employees {
  phoneNumber: string;
  section: Section;
}

export interface Assistant extends Employees {
  managerId: number;
}

export type AllEmployee = Employees | Manager | Assistant;
export type AllEmployeeArr =Array<AllEmployee>;
