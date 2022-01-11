const factorial = n => {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

const fibonacсi = n => {
  if(n === 1 || n === 2) {
    return 1
  }
  return fibonacсi(n - 1) + fibonacсi(n - 2) 
}

console.log(factorial(8))
console.log(fibonacсi(8))