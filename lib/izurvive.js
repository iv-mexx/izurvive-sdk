const { LinearTransform, SphericalMercator } = require('./transform')

class IzurviveTransformation { 
  constructor(linearTransform) { 
    this.linearTransform = linearTransform
  }
  
  static chernarusPlus() { 
    const linearTransform = new LinearTransform(
      0.00039746552365541434,
      0.00039747543741573465,
      7961.677966525134,
      7961.958744725942
    )
    return new IzurviveTransformation(linearTransform)
  }
  
  static livonia() { 
    const linearTransform = new LinearTransform(
      0.00031945948468785357,
      0.00031945948468792187,
      6399.609303461327,
      6401.172089614661
    )
    return new IzurviveTransformation(linearTransform)
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

module.exports = { IzurviveTransformation }