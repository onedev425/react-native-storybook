export class Auth0Mock {
  getUser() {
    return Promise.resolve({ user: 'Bob', token: 'authtokenvalue' })
    // return Promise.resolve(null);
  }

  authenticate() {
    return this.getUser()
  }

  login(settings) {
    return this.getUser()
  }

  logout() {
    return Promise.resolve({})
  }
}
