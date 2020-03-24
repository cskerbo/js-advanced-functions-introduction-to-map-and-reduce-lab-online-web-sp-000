function mapToNegativize(sourceArray) {
  const newArray = sourceArray.map(x => x * -1)
  return newArray
}

function mapToNoChange(sourceArray) {
  const newArray = sourceArray.map(x => x)
  return newArray
}

function mapToDouble(sourceArray) {
  const newArray = sourceArray.map(x => x * 2)
  return newArray
}

function mapToSquare(sourceArray) {
  const newArray = sourceArray.map(x => x ** 2)
  return newArray
}
