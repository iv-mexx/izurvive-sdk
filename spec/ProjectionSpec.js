describe("Projection", () => {
  const { SphericalMercator } = require('../lib/transform')

  describe("Bounds", () => {
    it("should have min and max values", () => {
      expect(SphericalMercator.bounds.minX).toBeCloseTo(-20037508.3, 1.0)
      expect(SphericalMercator.bounds.maxX).toBeCloseTo(20037508.3, 1.0)
      expect(SphericalMercator.bounds.minY).toBeCloseTo(-20037508.3, 1.0)
      expect(SphericalMercator.bounds.maxY).toBeCloseTo(20037508.3, 1.0)
    })
  })
})