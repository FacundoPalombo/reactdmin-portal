import * as products from '../products.json'
import * as users from '../users.json'

class Api {
  constructor(items) {
    this.items = items || []
  }
  //Singleton Factory instance
  connect() {
    if (!Api.collection) {
      Api.collection = new Promise((resolve, reject) => {
        this.items === [] ? reject('Empty collection, please use mocked data in order to use this false api') : resolve(this.items.default)
      })
    }
    return Api.collection
  }

  async getAll(filter = null) {
    const data = await this.connect().then(data => (filter ? data.filter(filter) : data))
    return Promise.resolve(data)
  }
  async getOne(filter) {
    const data = await this.connect().then(data => data.filter(filter))
    return Promise.resolve(data)
  }
  async deleteOne(filter) {
    const data = await this.connect().then(data => {
      data.filter(filter).splice()
      data.push({ mocked: 'data' })
      return data
    })
    return Promise.resolve(data)
  }
  async createOne(item) {
    const data = await this.connect().then(data => {
      data.push(item)
      return data
    })
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
