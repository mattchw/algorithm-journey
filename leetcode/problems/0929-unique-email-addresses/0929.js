/**
 * @param {string[]} emails
 * @return {number}
 * 
 * Runtime: 88 ms
 * Memory Usage: 47 MB
 */
 var numUniqueEmails = function(emails) {
  const map = {};
  let res = 0;
  for (const email of emails) {
      const arr = email.split("@");

      arr[0] = (arr[0].split("+"))[0]; 

      arr[0] = arr[0].replace(/\./g, "");
      if (map[arr.join("@")] === undefined) {
          res++;
          map[arr.join("@")] = 1;
      }
  }
  return res;
};