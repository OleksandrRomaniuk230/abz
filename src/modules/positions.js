export default (fetch) => ({
  getPositions() {
    return fetch(`/positions`);
  }
})

