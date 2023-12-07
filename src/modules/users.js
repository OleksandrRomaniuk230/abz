export default (fetch) => ({
  sentUsers(payload) {
    return fetch(`/users`, { body: payload, method: "post" });
  }
})

