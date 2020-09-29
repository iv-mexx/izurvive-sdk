const { Coordinate, Point } = require('./model')

// Parameters for a 2d linear transform
class LinearTransform { 
  constructor(kx, ky, dx, dy) { 
    this.kx = kx
    this.ky = ky
    this.dx = dx
    this.dy = dy
  }

  // Transforms a point with this transformation
  transform(point) { 
    return new Point(
      point.x * this.kx + this.dx,
      point.y * this.ky + this.dy,
    )
  }

  // Transforms a point with the inverse of this transformation
  reverse(point) { 
    return new Point(
      (point.x - this.dx) / this.kx, 
      (point.y - this.dy) / this.ky, 
    )
  }
}

// Map Projection
const R = 6378137;
const MAX_LATITUDE = 85.0511287798;
class SphericalMercator {
  
	static project(coordinate) {
		var d = Math.PI / 180,
		    max = MAX_LATITUDE,
		    lat = Math.max(Math.min(max, coordinate.lat), -max),
        sin = Math.sin(lat * d);

		return new Point(
				R * coordinate.lng * d,
				R * Math.log((1 + sin) / (1 - sin)) / 2);
	}

	static unproject(point) {
		var d = 180 / Math.PI;

		return new Coordinate(
			(2 * Math.atan(Math.exp(point.y / R)) - (Math.PI / 2)) * d,
			point.x * d / R);
	}
}


module.exports = { LinearTransform, SphericalMercator }