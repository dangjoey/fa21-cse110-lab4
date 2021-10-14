var declaration
1) Line 9 prints: "values added: 20"
2) Line 13 prints "final result: 20"

let declaration
1) Line 9 prints "values added: 20"
2) Line 13 will return an error because the variable, result, is declared using let which means the variable can only be accessed within the block. Since result is being access in line 13 which is outside the block, the variable result "doesn't exist" and causes an error.

const declaration
1) The code would return an error because the variable, result, is declared with const which means results cannot be reassigned. However, results is atttempted to be reassigned in line 7 which returns an error and the code would not reach to line 9.
2) The code would return an error because the variable, result, is declared with const which means results cannot be reassigned. However, results is atttempted to be reassigned in line 7 which returns an error and the code would not reach to line 13.
