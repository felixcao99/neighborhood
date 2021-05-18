# Mr. Roboger's Neighborhood #

By Felix Cao

## Description ##
This is a small practice to process the number and text that the user inputs. It will return the range of number from 0 to the user inputted number with the following exceptions:
1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor, *user's name*?"
The priority is 3>2>1.

## Technologies Used ##
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* MarkDown

## Setup/Installation Requirments ##
* Clone this repository to your desktop.
* Navigate to the top level of the directory
* Open _index.html_ in your browser
* Or use the project webpage [https://felixcao99.github.io/neighborhood/](https://felixcao99.github.io/neighborhood/)

## Specification
Describe: beepBoop()
Test: "It should return a string "0" if number 0 is inputted."
Code: beepBoop("Felix", "0");
Expected Output: "0"

Describe: beepBoop()
Test: "It should return a string "Beep!" if number 1 is inputted."
Code: beepBoop("Felix", "1");
Expected Output: "Beep!"

Describe: beepBoop()
Test: "It should return a string "Boop!" if number 2 is inputted."
Code: beepBoop("Felix", "2");
Expected Output: "Boop!"

Describe: beepBoop()
Test: "It should return a string "Won't you be my neighbor, *name*?" if number 3 and a name is inputted."
Code: beepBoop("Felix", "3");
Expected Output: "Won't you be my neighbor, Felix?"

Describe: beepBoop()
Test: "It should return a string "Boop!" if number 12 and a name is inputted."
Code: beepBoop("Felix", "12");
Expected Output: "Boop!"

Describe: beepBoop()
Test: "It should return a string "Won't you be my neighbor, *name*?" if number 13 and a name is inputted."
Code: beepBoop("Felix", "13");
Expected Output: "Won't you be my neighbor, Felix?"

Describe: beepBoop()
Test: "It should return a string "Won't you be my neighbor, *name*?" if number 32 and a name is inputted."
Code: beepBoop("Felix", "32");
Expected Output: "Won't you be my neighbor, Felix?"

## License ##
[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Felix Cao

## Contact Information ##
_Felix Cao_ [felixcao99@hotmail.com](mailto:felixcao99@hotmail.com)
