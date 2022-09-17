import User from "../model/User";

class UserFactory {
  constructor(data, type) {
    if (type === "api") {
      return new User(data);
    }
  }
}

export default UserFactory;
