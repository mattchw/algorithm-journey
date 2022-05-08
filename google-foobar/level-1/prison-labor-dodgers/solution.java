import java.util.*;

/**
 * given two arrays x and y which contain integers, one of the arrays contains an additional element
 * compare the arrays and return the integer that is not in both arrays
 */
class Solution {
  public static int solution(int[] x, int[] y) {
    if (x.length < y.length) {
      return solution(y, x);
    }

    Set<Integer> set = new HashSet<>();
    for (int i : x) {
      set.add(i);
    }

    for (int i : y) {
      if (set.contains(i)) {
        set.remove(i);
      }
    }

    return set.iterator().next();
  }

  public static void main(String[] args) {
    int[] x = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int[] y = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
    System.out.println(solution(x, y));
  }
}