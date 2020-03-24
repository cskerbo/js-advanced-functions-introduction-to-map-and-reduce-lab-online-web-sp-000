function mapToNegativize(sourceArray) {
  const newArray = sourceArray.map(x => x * -1)
  return newArray
}

function mapToNoChange(sourceArray) {
  const newArray = sourceArray.map(x => x)
  return newArray
}
