function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
}
console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe', [], [] ))
