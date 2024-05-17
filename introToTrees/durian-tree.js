class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
    this.adress = {
      city: "toronto",
      postalCode: "B1E!BO"
    }
  }

  get fullAdress() {
    return `${this.adress.city} ${this.adress.postalCode}`
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }
    // loops through ech entry in this.subordinate
    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver =
        //note this recursion i need more practice in this:
        subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }



  get totalEmployees() {
    let totalEmployees = 1;
    for (const subordinate of this.subordinates) {
      totalEmployees +=subordinate.totalEmployees
    }
    return totalEmployees;
  }
}


const ada = new Employee("ada", "CEO", 3000000.0);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const florida = new Employee("Florida", "Hired Goon", 60000);
const david = new Employee("Florida", "Hench Person in Training", 50000);
const brian = new Employee("Brian", "Man whose Name Should Be Brain", 65000);
const karla = new Employee("Karla", "Head Of The Secret Division", 100000);
const simone = new Employee("Simone", "Code Rhino", 100000);
const ali = new Employee("Ali", "O.W.C.A Liason", 100000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

craig.addSubordinate(simone);
craig.addSubordinate(ali);
craig.addSubordinate(florida);
// console.log(craig.totalEmployees);
// console.log(craig.fullAdress);
console.log(ada.totalEmployees);
// console.log(craig.boss, "CRAIG BOSS");
// console.log(craig.numberOfSubordinates, "CRAIG SUBS");
// console.log(craig.numberOfPeopleToCEO, "CRAIG CEO LINK");
