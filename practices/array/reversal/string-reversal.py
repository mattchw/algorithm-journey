"""
Given a string, return a new string with the reversed order of characters.

Examples:

reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'

"""


def reverseStr(string):
    return "".join(reversed(string))


print(reverseStr("apple"))  # 'leppa'
