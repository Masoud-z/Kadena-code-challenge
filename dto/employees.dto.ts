enum Positions {
  manager = 0,
  employee = 1,
  Assistnat = 2,
}

enum Section {
  marketing = 0,
  sales = 1,
  hr = 2,
}

interface Employees {
  name: string;
  position: Positions;
  id: number;
}

interface Manager extends Employees {
  phoneNumber: string;
  section: Section;
}

interface Assistnat extends Employees {
  managerId: number;
}

type AllEmployee = Array<Employees | Manager | Assistnat>;
