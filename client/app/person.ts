export class Person {
  firstName: string;
  lastName: string;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  name(): any {
    return `${this.firstName} ${this.lastName}`
  }

  whoAreYou(): any {
    return `Hi I'm ${this.name()}` ;
};

};

export class Student extends Person {
  course;

  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }
  whoAreYou() {
    return `${super.whoAreYou()} and I am studying ${this.course}`
  }
}


