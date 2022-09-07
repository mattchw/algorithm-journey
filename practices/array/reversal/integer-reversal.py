"""
Given an integer, return an integer that is the reverse ordering of numbers.

Examples:

reverseInt(15) === 51;
reverseInt(981) === 189;
reverseInt(500) === 5;
reverseInt(-15) === -51;
reverseInt(-90) === -9;

"""


def reverseInt(integer):
    return int(str(integer)[::-1]) if integer >= 0 else -int(str(integer)[1:][::-1])
