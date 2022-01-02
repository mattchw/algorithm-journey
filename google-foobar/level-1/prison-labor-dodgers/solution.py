# given two arrays x and y which contain integers, one of the arrays contains an additional element
# compare the arrays and return the integer that is not in both arrays
def answer(x, y):
    # create a set to store the elements in x
    x_set = set(x)
    # create a set to store the elements in y
    y_set = set(y)
    # create a set to store the elements in x and y
    xy_set = x_set.union(y_set)
    # create a set to store the elements in x and y that are not in both x and y
    xy_set_diff = xy_set.difference(x_set.intersection(y_set))
    # return the first element in the set
    return list(xy_set_diff)[0]

if __name__ == "__main__":
  x1, y1 = [1, 2, 3, 4, 5, 6, 7], [3, 7, 2, 1, 4, 6]
  print(answer(x1, y1))