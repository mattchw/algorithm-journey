"""
Given a string, return the character that is most commonly used in the string.

Examples:

maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
"""


def maxChar(string):
    map = {}
    for char in string:
        if char in map:
            map[char] += 1
        else:
            map[char] = 1

    max_char = ""
    max = 0

    for char in map:
        if map[char] > max:
            max = map[char]
            max_char = char

    return max_char
