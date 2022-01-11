let list = [-1, 3, 51, -5, 4, -98, 1, 2, 4, 34, 5, 3, 2, 7, 5, 19]

function quickSort(array) {
  if(array <= 1) {
    return array
  }
  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array[pivotIndex]
  let less = []
  let greater = []
  for (let i = 0; i < array.length; i++) {
    if(i === pivotIndex)
      continue
    if(array[i] < pivotIndex) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
}
 
console.log(quickSort(list))