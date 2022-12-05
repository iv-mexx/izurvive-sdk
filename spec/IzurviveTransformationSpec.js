describe("iZurvive Transformation", () => {
  const { IzurviveTransformation }  = require('../lib/izurvive')
  const { Point, Coordinate } = require('../lib/model')

  describe("Chernarus Plus", () => {
    let transformation

    beforeAll(() => {
      transformation = IzurviveTransformation.chernarusPlus()
    })

    it("should have a transform", () => { 
      expect(transformation.linearTransform.kx).toEqual(0.00039742288351666166)
      expect(transformation.linearTransform.ky).toEqual(0.00039742288351666166)
      expect(transformation.linearTransform.dx).toEqual(7963.364344080466)
      expect(transformation.linearTransform.dy).toEqual(7963.364344080466)
    })

    it("should transform from dayz point to izurvive coordinate", () => {
      const point = new Point(2500, 3500)
      const coordinate = transformation.dayzPointToIzurviveCoordinate(point)
  
      expect(coordinate.lat).toBeCloseTo(-70.49199108456305, 0.000000001)
      expect(coordinate.lng).toBeCloseTo(-123.49122047460938, 0.000000001)
    })
  
    it("should transform from izurvive coordinate to dayz point", () => {
      const coordinate = new Coordinate(-10, 80)
      const point = transformation.izurviveCoordinateToDayzPoint(coordinate)

      expect(point.x).toBeCloseTo(11502.637385894006, 0.000000001)
      expect(point.y).toBeCloseTo(7518.691863934531, 0.000000001)
    })

    it("should be reversible", () => {
      const point = new Point(10000, 3000)
      const pointAgain = transformation.izurviveCoordinateToDayzPoint(
        transformation.dayzPointToIzurviveCoordinate(point)
      )

      expect(point.x).toBeCloseTo(pointAgain.x, 0.000000001)
      expect(point.y).toBeCloseTo(pointAgain.y, 0.000000001)
    })
  })
})

describe("IzurviveMap", () => {
  const { IzurviveMap } = require('../lib/izurvive')
  let map

  beforeAll(() => {
    map = IzurviveMap.chernarusPlus()
  })

  it("should have a size and coverage", () => {
    expect(map.size.width).toEqual(15360)
    expect(map.size.height).toEqual(15360)
    expect(map.coverage).toBeCloseTo(0.964, 0.001)
  })
})