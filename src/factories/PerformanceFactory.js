import Performance from "../model/Performance";

class PerformanceFactory {
  constructor(data, type) {
    if (type === "api") {
      return new Performance(data);
    }
  }
}

export default PerformanceFactory;