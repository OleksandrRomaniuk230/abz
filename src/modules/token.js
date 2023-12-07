export default (fetch) => ({
  getToken() {
    return fetch(`/token`);
  }
})

