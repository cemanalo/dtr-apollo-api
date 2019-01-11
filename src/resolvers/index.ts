import hello from './hello'
import { employees, addEmployee } from './employees'

export default {
  Query: {
    hello,
    employees
  },
  Mutation: {
    addEmployee
  }
}