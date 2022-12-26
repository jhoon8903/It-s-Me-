// N부터 M까지 홀수를 출력하는 프로그램을 작성해보자.

// - 첫째 줄에 자연수 N과 자연수 M이 공백을 가지고 주어진다. (N ≤ M ≤ 1,000)
// - 첫째 줄에 N부터 M까지의 홀수를 공백을 사이에 두고 차례대로 출력한다.
// **(단, 한 줄에 최대 4개씩 출력해야 한다.)**

// 입출력 예
// N   M           result
// 1   7           1 3 5 7
// 10  22          11 13 15 17
//                 19 21

let I = 10;
let M = 22;
function solution(I, M) {
  let result = '';
  let answer = '';

  for (let i = I; i < M; i++) {
    if (i % 2 !== 0) {
      result += i + ' ';
    }
  }
  return result;
}

console.log(solution(I, M));
