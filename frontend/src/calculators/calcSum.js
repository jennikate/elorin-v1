function calculator(num1, num2, symbol) {
  let result = 0

  switch (symbol) {
    case '+' : result =  num1 += num2; break
    case '-' : result = num1 - num2; break
  }

  return result
}

export default calculator