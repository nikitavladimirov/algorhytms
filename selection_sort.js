const list = [-1, 3, 51, -5, 4, -98, 1, 2, 4, 34, 5, 3, 2, 7, 5, 19]

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[indexMin]) {
        indexMin = j
      }
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array
}

console.log(selectionSort(list))