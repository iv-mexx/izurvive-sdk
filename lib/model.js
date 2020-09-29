// A Point in the linear In-Game coordinate system of DayZ
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// A Coordinate in the non-linear coordinate system of iZurvive
class Coordinate { 
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

module.exports = { Point, Coordinate }