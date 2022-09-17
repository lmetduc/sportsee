class Performance {
    constructor(data) {
      this._kind = data.kind;
      this._data = data.data;
    }
  
    get kind() {
      return this._kind;
    }
  
    get data() {
      return this._data;
    }
  
    get activityData() {
      return this._data.map((item) => {
        let kind = this._kind[item.kind];
        switch (kind) {
          case "intensity":
            kind = "Intensité";
            break;
          case "speed":
            kind = "Vitesse";
            break;
          case "strength":
            kind = "Force";
            break;
          case "endurance":
            kind = "Endurance";
            break;
          case "energy":
            kind = "Energie";
            break;
          case "cardio":
            kind = "Cardio";
            break;
          default:
        };

        return {
          value: item.value,
          kind: kind
        };
      });
    }
  }
  
  export default Performance;