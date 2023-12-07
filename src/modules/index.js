import positions from "./positions";
import users from "./users";
import token from "./token";

export default ($apiSettings ) => {
  return {
    positions: positions($apiSettings),
    users: users($apiSettings),
    token: token($apiSettings),
  };
};
