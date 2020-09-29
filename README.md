### Transform coordinates

iZurvive uses geographical coordinate system (latitude, longitude) thats different than the in-game coordinate system of DayZ

Moreover, the Transformation is dependent on the DayZ Map.

Use `IzurviveTransformation` to transform between these coordinate systems:

```js
  const { IzurviveTransformation }  = require('./lib/izurvive')
  const { Point, Coordinate } = require('./lib/model')

  // Transform the DayZ Coordinate 1500 2500 on Chernarus Plus to iZurvive Coordinates
  const dayzPoint = new Point(1500, 2500)
  const transformation = IzurviveTransformation.chernarusPlus()
  const izurviveCoordinate = transformation.dayzPointToIzurviveCoordinate(dayzPoint)
```

```js
  const { IzurviveTransformation }  = require('./lib/izurvive')
  const { Point, Coordinate } = require('./lib/model')

  // Transform the iZurvive Coordinate (-50, 30) to DayZ Coordinates on Livonia
  const izurviveCoordinate = new Coordinate(-50, 30)
  const transformation = IzurviveTransformation.livonia()
  const dayzPoint = izurviveCoordinateToDayzPoint(izurviveCoordinate)
```

