"""
Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.

Only consider characters, not spaces or punctuation

Consider capital letters to be the same as lower case

Examples:

anagrams('rail safety', 'fairy tales') === true
anagrams('RAIL! SAFETY!', 'fairy tales') === true
anagrams('Hi there', 'Bye there') === false
"""
import re


def anagram(s1, s2):
    str1 = re.sub("[^\w]", "", s1.lower())
    str2 = re.sub("[^\w]", "", s2.lower())
    return sorted(str1) == sorted(str2)
