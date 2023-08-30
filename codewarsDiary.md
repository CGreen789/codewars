# Codewars

Diary to keep track of Codewars and solutions:

## 30/08/23

Wonderful couple of weeks off with my two boys! Back to it...
- Simple Fun #10: Range Bit Counting: 7kyu
  - Enjoyed this first one back. Got a plan in place, had to remind myself how to convert to binary (toString(2))
  - Also used .flat() to remove the nested arrays I had created. Most of the other solutions are much more succinct than mine!
## 15/08/23

- Find the odd int: 6 kyu
  - Used forEach to create an object to count the number of occurences of each number in an array
  - Turned the object into an array using Object.keys(object)
  - Used forEach((key, index) => if...) to check which key had an odd number
  - assigned the integer appearing an odd amount of times to a variable (which was originally null)
  - returned +answer to turn it back to a number
- Find the smallest integer: 8 kyu
  - .sort((a, b) => a - b) to organise the array
  - Looking at other solutions, could have used Math.min(...args) to find the lowest.
## 05/08/23

- Printer Errors: 7 kyu
  - Used regex to check for the incorrect characters
  - Haven't used .test before [w3schools on .test](https://www.w3schools.com/jsref/jsref_regexp_test.asp)

## 04/08/23

- Transportation on Vacation: 8 kyu
  - Easy forumla this time

## 03/08/23

- Find the first non-consecutive number: 8 kyu
  - I think some sneaky brackets slowed me down 🙄.
- Reversed Sequence: 8 kyu
  - While loop, kept decreasing n by 1 and pushing to a new array.
- Detect Pangram: 6 kyu
  - Used .every to check each item in the array is included in the string.

## 28/07/23

- Removing Elements: 8 kyu
  - I tried to make this one more complicated than it needed to be!

## 27/07/23

- Finding the next perfect square: 7 kyu
  - Used Number.isInteger and Math.sqrt()
- Convert number to reversed array of digits: 8 kyu
  - Array.from(String(n), Number) - as I needed to convert the number to strings to push them into the array.

## 24/07/23

- Square every digit: 7 kyu
  - Array.from(String(num), Number) and the + method to convert it a number at the end.
- Disemvowel Trolls: 7 kyu
  - I did this one a long time ago, but was more comfortable using regex here

## 23/07/23

- Count of positives, sum of negatives: 8 kyu
  - Always remember to read the instructions carefully! I totally found the sum for both first...
- Sum of two lowest positive integers: 7 kyu
  - Used .sort((a, b) => a - b) to order them
