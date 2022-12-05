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

class Bounds { 
  constructor(p1, p2) { 
    this.p1 = p1
    this.p2 = p2
  }

  get size() { 
    return new Size(
      this.maxX - this.minX,
      this.maxY - this.minY
    )
  }

  get minX() { 
    const [x1, _y1] = this.p1
    const [x2, _y2] = this.p2
    return Math.min(x1, x2)
  }

  get maxX() { 
    const [x1, _y1] = this.p1
    const [x2, _y2] = this.p2
    return Math.max(x1, x2)
  }

  get minY() { 
    const [_x1, y1] = this.p1
    const [_x2, y2] = this.p2
    return Math.min(y1, y2)
  }

  get maxY() { 
    const [_x1, y1] = this.p1
    const [_x2, y2] = this.p2
    return Math.max(y1, y2)
  }
}

class Size { 
  constructor(width, height) { 
    this.width = width
    this.height = height
  }
}

module.exports = { Point, Coordinate, Size, Bounds }