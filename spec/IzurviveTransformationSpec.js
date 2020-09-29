describe("iZurvive Transformation", () => {
  const { IzurviveTransformation }  = require('../lib/izurvive')
  const { Point, Coordinate } = require('../lib/model')

  describe("Chernarus Plus", () => {
    let transformation

    beforeAll(() => {
      transformation = IzurviveTransformation.chernarusPlus()
    })

    it("should transform from dayz point to izurvive coordinate", () => {
      const point = new Point(2500, 3500)
      const coordinate = transformation.dayzPointToIzurviveCoordinate(point)
  
      expect(coordinate.lat).toBeCloseTo(-70.47692456866, 0.000000001)
      expect(coordinate.lng).toBeCloseTo(-123.43985675584182, 0.000000001)
    });
  
    it("should transform from izurvive coordinate to dayz point", () => {
      const coordinate = new Coordinate(-10, 80)
      const point = transformation.izurviveCoordinateToDayzPoint(coordinate)

      expect(point.x).toBeCloseTo(11501.33074262134, 0.000000001)
      expect(point.y).toBeCloseTo(7517.227462549195, 0.000000001)
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