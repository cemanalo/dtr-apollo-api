import { Arango } from '../../database/arango'
import { aql } from 'arangojs'

export async function employees() {
  Arango.db().collection('employees')
  const cursor = await Arango.db().query(aql`
    FOR e in employees
      RETURN e
  `)
  return cursor.all()
}

// not a create
export async function addEmployee (parent:any, args:any, context:any, info:any) {
  Arango.db().collection('employees')
  const cursor = await Arango.db().query(aql`
    INSERT ${args.employee} 
      in employees
      RETURN NEW
  `)
  return cursor.next()
}