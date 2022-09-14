def pyramid(n):
    mid = (2 * n - 1) // 2
    for i in range(n):
        str = ""
        for j in range(2 * n - 1):
            if mid - i <= j <= mid + i:
                str += "*"
            else:
                str += " "
        print(str)
