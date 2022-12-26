let n = 4;
function solution(n) {
  result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result += "수";
    } else {
      result += "박";
    }
  }
  return result;
}

console.log(solution(n));
