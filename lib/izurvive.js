const { Size } = require('./model')
const { LinearTransform, SphericalMercator } = require('./transform')

class IzurviveMap { 
  constructor(size, coverage) { 
    this.size = size
    this.coverage = coverage
  }

  static chernarusPlus() { 
    return new IzurviveMap(new Size(
      15360, 15360
    ), 0.9644165039)
  }

  static livonia() { 
    return new IzurviveMap(new Size(
      12800, 12800
    ), 1.0)
  }
}

class IzurviveTransformation { 
  constructor(linearTransform) { 
    this.linearTransform = linearTransform
  }
  
  static chernarusPlus() { 
    const map = IzurviveMap.chernarusPlus()
    const transform = LinearTransform.fromSize(map.size, map.coverage)
    return new IzurviveTransformation(transform)
  }
  
  static livonia() { 
    const map = IzurviveMap.livonia()
    const transform = LinearTransform.fromSize(map.size, map.coverage)
    return new IzurviveTransformation(transform)
  }

  dayzPointToIzurviveCoordinate(point) { 
    return SphericalMercator.unproject(
      this.linearTransform.reverse(point)
    )
  }

  izurviveCoordinateToDayzPoint(coordinate) { 
    return this.linearTransform.transform(
      SphericalMercator.project(coordinate)
    )
  }
}

module.exports = { IzurviveTransformation, IzurviveMap }