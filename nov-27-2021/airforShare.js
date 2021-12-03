function add(a = 0, b = 0) {
    return a + b;
  }
  
  // function mul(a = 1, b = 1) {
  //   return a * b;
  // }
  
  // console.log(add(3, 5)); // 8
  // console.log(mul(3, 5)); // 15
  // console.log(add(1)); // 1
  // console.log(mul(1)); // 1
  // console.log(add()); // 0
  // console.log(mul()); // 1
  
  // Template Literals
  
  // const firstName = "Amir";
  // const lastName = "Ali";
  
  // const greetingString = "Welcome" + firstName + lastName;
  
  // const greetingStringTemplateLiteral = `Welcome ${firstName} ${lastName}`;
  
  // console.log(greetingString);
  // console.log(greetingStringTemplateLiteral);
  
  // Asad, Raza, Ali, Amir
  
  // const usersRollNumbers = [23, 53, 25, 64];
  // const moreUsersRollNumbers = [6, 2, 3, 9, 10];
  
  // Spread Operator
  // const allStudentsArr = usersRollNumbers.concat(moreUsersRollNumbers);
  // const allStudentsArr = [...usersRollNumbers, ...moreUsersRollNumbers];
  // const asad = [0];
  // const raza = [1];
  // const ali = [2];
  // const amir = [3];
  
  // console.log(...allStudentsArr);
  // const [asad, raza, ali, amir] = usersRollNumbers;
  
  // const myObj = {
  //   a: 1,
  //   b: 2,
  // };
  // console.log(myObj.b);
  // const mySecondObject = { ...myObj, b: 5 };
  
  // console.log(myObj);
  // console.log(mySecondObject);
  
  // Pass by value and pass by reference
  
  // //675456(asd)
  // let a = "asd";
  
  // //556465(asd)
  // let b = a;
  // //556465(43)
  // b = 43;
  
  //{ a: 1, b: 2 }; -> sdugf75(Reference)
  
  //287345(sdugf75)
  const myObj = { a: 1, b: 2 };
  
  //{ a: 1, b: 2 }; -> fs4tr(Reference)
  //782545(fs4tr)
  const otherObj = myObj;
  // const otherObj = { ...myObj };
  
  const as = 322;
  const bs = as;
  
  otherObj.a = 3;
  console.log("myObj: ", myObj); //{ a: 1, b: 2 };
  console.log("otherObj: ", otherObj); //{ a: 3, b: 2 };
  
  // myObj.a = 4;
  // console.log("myObj: ", myObj); //{ a: 1, b: 2 };
  // console.log("otherObj: ", otherObj); //{ a: 3, b: 2 };
  
  // const myObj = { a: 1 };
  
  // function multiply(myVariable) {
  //   myVariable.a = myVariable.a * 2;
  //   return myVariable.a;
  // }
  
  // a = 3;
  // function multiply(myVariable) {
  //   myVariable = myVariable * 2;
  //   return myVariable;
  // }
  
  // console.log("myObj: ", myObj);
  // console.log("multiply: ", multiply(myObj));
  // console.log("myObj: ", myObj);
  
  // console.log("a: ", a);
  // console.log("multiply: ", multiply(a));
  // console.log("a: ", a);