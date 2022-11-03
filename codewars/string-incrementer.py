"""
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
"""


import re


def increment_string(string):
    regex = re.compile(r"\d+$")
    match = regex.search(string)
    if match:
        num = int(match.group())
        num += 1

        num_digits = len(match.group())
        num = str(num).zfill(num_digits)
        string = regex.sub(num, string)
    else:
        string += "1"
    return string
