'''
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
'''

def valid_braces(string):
    stack = []
    for i in string:
        if i in '([{':
            stack.append(i)
        elif i in ')]}':
            if len(stack) == 0:
                return False
            if stack[-1] == '(' and i != ')':
                return False
            if stack[-1] == '[' and i != ']':
                return False
            if stack[-1] == '{' and i != '}':
                return False
            stack.pop()
    return len(stack) == 0