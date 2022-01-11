const list = [-1, 3, 51, -5, 4, -98, 1, 2, 4, 34, 5, 3, 2, 7, 5, 19]

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[j + 1] < array[j]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

console.log(bubbleSort(list)) // O(n*n)