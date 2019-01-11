import { Database } from 'arangojs'

export class Arango {
  private static instance: Arango

  private db: Database

  private constructor() {
    this.db = new Database()
    this.db.useBasicAuth('root', 'openSesame')
    this.db.useDatabase('dtr-local')
    console.log(`Connected to Arango`)
  }

  static db(): Database {
    return Arango.getInstance().db
  }
  static connect() {
    Arango.getInstance()
  }
  private static getInstance(): Arango {
    if (!Arango.instance) {
      Arango.instance = new Arango()
    }

    return Arango.instance
  }
}
