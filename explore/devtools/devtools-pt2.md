1) The bug was that the output was the inputs concatenated each other because they were treated as strings instead of two integers.
2) It could be fix by converting the inputs from string to integers by using `parseInt()` so our ouput will be added instead of concatenated.
