class Activity {
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions;
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions.map((item, i) => {
      return {
        day: i + 1,
        kilogram: item.kilogram,
        calories: item.calories,
      };
    });
  }
}

export default Activity;
