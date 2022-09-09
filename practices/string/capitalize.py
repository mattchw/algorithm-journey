"""
Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.

Examples:

capitalize('a short sentence') --> 'A Short Sentence'
capitalize('a lazy fox') --> 'A Lazy Fox'
capitalize('look, it is working!') --> 'Look, It Is Working!'
"""


def capitalize(s):
    return " ".join(word.capitalize() for word in s.split())
