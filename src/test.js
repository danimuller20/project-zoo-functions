const { animals, employees, } = require('./data');
const data = require('./data');

/* function employeeByName(employeeName) {
  return employees.forEach((theEmployee, positionEmployee) => {
    //console.log(theEmployee)
    console.log(positionEmployee)
  });
}
 
employeeByName('Nigel'); */



function employeeByName(employeeName) {
  let result = employees.find(theEmployee => {
    theEmployee.firstName === employeeName || theEmployee.lastName === employeeName;
  });
  return result
}
console.log(employeeByName('Emery'))