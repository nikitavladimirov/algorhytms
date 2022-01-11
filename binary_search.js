const list = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16]

function binarySearch(array, item) {
  let start = 0
  let end = array.length
  let middle
  let found = false
  let position = -1
  while (found === false && start <= end){
    middle = Math.floor((start + end) / 2)
    if(array[middle] === item) {
      found = true
      position = middle
      return position
    }
    if(item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return position
}

function binarySearchRecurive(array, item, start, end) {
  let middle = Math.floor((start + end) / 2)
  if(item === array[middle]) {
    return middle
  }
  if(item < array[middle]) {
    return binarySearchRecurive(array, item, start, middle - 1)
  } else {
    return binarySearchRecurive(array, item, middle + 1, end)
  }
}
console.log(binarySearch(list, 10))
console.log(binarySearchRecurive(list, 10, 0, list.length))