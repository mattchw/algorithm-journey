/**
 * Runtime: 76 ms
 * Memory Usage: 41 MB
 */
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
                stack.push(s[i]);
                continue;
            } else {
                return false;
            }

        } else {
            if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
                stack.push(s[i]);
                continue;
            } else {
                const str = stack.pop();
                if (str === '{' && s[i] !== '}') {
                    return false;
                } else if (str === '[' && s[i] !== ']') {
                    return false;
                } else if (str === '(' && s[i] !== ')') {
                    return false;
                }
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};

/**
 * Use hash map to store the pairs of parentheses.
 * 
 * Runtime: 57 ms
 * Memory Usage: 42.2 MB
 */
var isValid = function (s) {
    const stack = [];
    const closingMap = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    for (const c of s) {
        if (closingMap[c]) {
            if (stack.length > 0 && stack[stack.length - 1] === closingMap[c]) {
                stack.pop();
            } else {
                return false
            }
        } else {
            stack.push(c);
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};