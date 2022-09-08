import Activity from "../model/Activity";

class ActivityFactory {
  constructor(data, type) {
    if (type === "api") {
      return new Activity(data);
    }
  }
}

export default ActivityFactory;