import * as products from '../products.json.js'
import * as users from '../users.json.js'

class Api {
  constructor(items) {
    this.items = items
  }
  async getAll({ filter }) {
    const data = filter ? { ...this.items[filter] } : { ...this.items }
    delete data.id, data.uid
    return Promise.resolve(data)
  }
  async getOne({ filter }) {
    const data = { ...this.items[filter] }
    delete data.id, data.uid
    return Promise.resolve(data)
  }
}

export class Products extends Api {
  constructor() {
    super(products)
  }
}

export class Users extends Api {
  constructor() {
    super(users)
  }
}
