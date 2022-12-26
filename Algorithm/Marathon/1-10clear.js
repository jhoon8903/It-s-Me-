//문제 설명
//행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

//제한 조건
//행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
//입출력 예
//arr1	arr2	return
//[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
//[[1],[2]]	[[3],[4]]	[[4],[6]]

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  let resultArr = [],
    i;
  for (i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i].map((x, y) => arr1[i][y] + arr2[i][y]));
  }
  return resultArr; // [[3, 6, 8,], [5, 7, 12,]]
}
console.log(solution(arr1, arr2));
//1. new_arr = arr1[1][0],[1][1] + arr2[1][0],[1][1]