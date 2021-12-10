// this keyword

// const userOne = {
//   name: "Ali",
//   changeName: function (newName) {
//     // get the name property and then assign the new value to it
//     // this represents the object in which you are calling the function
//     console.log("this: ", this);
//     // mySelf.name = newName;
//     this.name = newName;
//   },
// };

// // console.log(mySelf);
// // console.log(mySelf.changeName("Amir"));
// // // console.log(mySelf);

// // function myFun() {
// //   console.log("this: ", this);
// // }

// // myFun();

// const obj = {
//   a: {
//     name: "Ali",
//     changeName: function () {
//       console.log("this: ", this);
//     },
//   },
//   changeName: function () {
//     console.log("this: ", this);
//   },
// };
// obj.changeName();
// obj.a.changeName();

// Global Object javascript

// Class is a blueprint to make object

// Class of Human

class Human {
    // name, height, age
    // changeName, changeHeight, changeAge
  
    // constructor -> function
    constructor(name, height, age) {
      this.name = name;
      this.height = height;
      this.age = age;
    }
  
    changeName(newName) {
      this.name = newName;
    }
  }
  
  // const mySelf = new Human("Amir", "5.10", "24");
  // const mySelf2 = new Human("Talha", "5.10", "24");
  // const mySelf3 = new Human("Ali", "5.10", "24");
  
  // console.log("mySelf: ", mySelf);
  // mySelf.changeName("Abrar");
  // console.log("mySelf: ", mySelf);
  
  // console.log("mySelf2: ", mySelf2);
  // console.log("mySelf3: ", mySelf3);
  
  // Link Human class with Student
  class Student extends Human {
    // Class Human
    // Roll No, Section
    constructor(name, height, age, rollNo, section) {
      // To call the constructor
      super(name, height, age);
      this.rollNo = rollNo;
      this.section = section;
    }
  
    changeRollNo(newRollNo) {
      this.rollNo = newRollNo;
    }
  }
  
  // const human1 = new Human("Ali", 6, 20);
  const student1 = new Student("Ali", 6, 20, 2342, "Section A");
  
  // console.log("human1: ", human1);
  console.log("student1: ", student1);
  student1.changeRollNo(1122);
  console.log("student1: ", student1);