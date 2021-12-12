// arrow function and normal function
// map functions
// again we learned about the json 
// client server model
// api 
// how data send to server (in the form of JSON)
// how we get data from the server ( in the form of JSON)
function double(num) {
    const result = 2 * num;

}
const obj = {
    name: "parentObj",
    child: {
        getName: () => {
            console.log("this: ", this);
            return this.name;
        }
    }
}
console.log(obj.child);
console.log(obj.child.getName);
console.log(obj.child.getName());