'''
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
'''

def is_valid_IP(string):
    ip_list = string.split('.')
    if len(ip_list) != 4:
        return False
    for i in ip_list:
        if not i.isdigit() or int(i) < 0 or int(i) > 255 or (i[0] == '0' and len(i) > 1):
            return False
    return True