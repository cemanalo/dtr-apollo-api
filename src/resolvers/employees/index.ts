export function employees() {
  return [{
    fname: 'e',
    lname: 'manalo'
  }]
}

export function addEmployee (parent:any, args:any, context:any, info:any) {
  console.log('dumaan')
  console.log(args.employee)
  return args.employee
}