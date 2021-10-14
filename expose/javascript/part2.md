1) At line 12, the number, 3, will be printed because the variable, i, is intialized in the for loop. Because the length of prices is size 3, the variable, i, will be incremented to 3 because the loop stops incrementing i when i is equal to or more than the length of the array, prices.

2) At line 13, the number 150 will be printed because the variable discountedPrice is changed in each iteration. Because the last variable in the array, prices, is 300, discountedPrice is set to prices[i] * (1 - discount) which is equal to 300 * (1 - 0.5) causing discountedPrice to be 150.

3) At line 14, the number 150 will be printed because the variable finalPrice is changed in each iteration. finalPrice is dependent on discountedPrice and discountedPrice is depedent on prices in a specific iteration where it equals to Math.round(discountedPrice * 100) / 100. In the last iteration, discountedPrice is equal to 150 which causes finalPrice to be Math.round(150 * 100) / 100 which equals to 150.

4) This function will return the array of [50, 100, 150] because in each iteration, the finalPrice of each price item after the discount is put into the array, discounted. In the three iteration, it first takes in the price 100, calculates the discountedPrice of 50, and puts value of the finalPrice of 50 into the discounted array. In the second iteration, it takes in the price, 200, calculates the discountedPrice of 100, and puts value of the finalPrice of 100 into the discounted array. Finally in the last iteration, it takes in the price, 300, calculates the discountedPrice of 150, and puts value of the finalPrice of 150 into the discounted array.

5) Line 12 will return an error because the variable, i, is declared using let in line 6 which means the variable can only be accessed within the block. Since i is being access in line 12 which is outside the block, the variable result "doesn't exist" and causes an error.

6) Line 13 will return an error because the variable, discountPrice, is declared using let in line 7 which means the variable can only be accessed within the block. Since discountPrice is being access in line 13 which is outside the block, the variable result "doesn't exist" and causes an error.

7) At line 14, the number 150 will be printed because the variable finalPrice is declared using let and it is changed in each iteration. finalPrice is dependent on discountedPrice and discountedPrice is depedent on prices in a specific iteration where it equals to Math.round(discountedPrice * 100) / 100. In the last iteration, discountedPrice is equal to 150 which causes finalPrice to be Math.round(150 * 100) / 100 which equals to 150.

8) This function will return the array of [50, 100, 150] because discounted in each iteration, the finalPrice of each price item after the discount is put into the array, discounted which is declared with let. In the three iteration, it first takes in the price 100, calculates the discountedPrice of 50, and puts value of the finalPrice of 50 into the discounted array. In the second iteration, it takes in the price, 200, calculates the discountedPrice of 100, and puts value of the finalPrice of 100 into the discounted array. Finally in the last iteration, it takes in the price, 300, calculates the discountedPrice of 150, and puts value of the finalPrice of 150 into the discounted array.

9) Line 11 will return an error because the variable, i, is declared using let in line 6 which means the variable can only be accessed within the block. Since i is being access in line 11 which is outside the block, the variable result "doesn't exist" and causes an error.

10) Line 12, the number, 3, will be printed because we set the variable, length, as the length of prices. Becasue prices holds an array of [100, 200, 300], it means it has an length of 3 which allows length be printed in line 12 after being intialized as 3 and cannot be change.

11) This function will return the array of [50, 100, 150] because discounted in each iteration, the finalPrice of each price item after the discount is put into the array, discounted which is declared with const. In the three iteration, it first takes in the price 100, calculates the discountedPrice of 50, and puts value of the finalPrice of 50 into the discounted array. In the second iteration, it takes in the price, 200, calculates the discountedPrice of 100, and puts value of the finalPrice of 100 into the discounted array. Finally in the last iteration, it takes in the price, 300, calculates the discountedPrice of 150, and puts value of the finalPrice of 150 into the discounted array. There will  be no error because we are only adding into the array and not reassigning/reclaring the variable, discounted.

Data Types

12) A) student.name

    B) student["Grad Year"]

    C) student.greeting()

    D) student["Favorite Teacher"].name

    E) student.courseLoad[0]

Basic Operators & Type Conversion 

13) A) "32" because the integer 2 maps to its string representation "2" causing "3" + "2" = "32"
 
    B) 1 because strings cannot be substracted, allowing "3" to become an integer representation, 3, causing 3 - 2 = 1

    C) 3 because null maps to 0 causing 3 + 0 = 3

    D) "3null" because null maps to the string representation "null" causing "3" + "null" = "3null"

    E) 4 because true maps to 1 causing 1 + 3 = 4

    F) 0 because false maps to 0 and null maps to 0 causing 0 + 0 = 0

    G) "3undefined" because undefined maps to the string "undefined" causing "3" + "undefined" = "3undefined"

    H) NaN because the string representation "3" maps to 3 for subtraction and undefined maps to NaN causing 3 - NaN = NaN

14) A) true because the string representation "2" becomes 2 causing 2 > 1 = true
    
    B) false because "2" is being compared to "1," and lexicographically, "2" > "1" is false causing "2" < "12" = false

    C) true because the string representation "2" because 2 because "==" converts types when comparing,causing 2 == 2 is true

    D) false because there will be no conversion involved because "===" makes comparisons without type conversion causing 2 === "2" = false

    E) false because true becomes 1 causing 1 == 2 = false
    
    F) true because Boolean(2) is true and there will be no conversion involved because "===" makes comparisons without type conversion causing true === true = true

15) "==" will have type conversions before checking equality while "===" checks equality without type conversions

Loops

16) part2-question16.js

Functions

17) The results of the code would be [2, 4, 6]. In each iteration of the loop, it calls the function, doSomething and takes a specific index of the array input. In the first iteration, 1 is inserted into the function, doSomething and doSomething will return the value 2 because it multiplies the num inserted by 2. The ouput of doSomething, 2, is inserted into the array that will be returned. In the second iteration, 2 is inserted into the function, doSomething and doSomething will return the value 4 because it multiplies the num inserted by 2. The ouput of doSomething, 4, is inserted into the array that will be returned. In the last iteration, 3 is inserted into the function, doSomething and doSomething will return the value 6 because it multiplies the num inserted by 2. The ouput of doSomething, 6, is inserted into the array that will be returned.

setInterval(), setTimeout(), clearTimeout()

18) part2-question18.js

19) Because of the setTimeout for 2 and 3, there will be a 1 second delay for 2 causing line 2 to be printed 1 second after everything and line 3 to be print with a 0 second delay. The output is followed as:
  1
  4
  3
  2