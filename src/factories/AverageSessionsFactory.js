import AverageSessions from "../model/AverageSessions";

class AverageSessionsFactory {
  constructor(data, type) {
    if (type === "api") {
      return new AverageSessions(data);
    }
  }
}

export default AverageSessionsFactory;