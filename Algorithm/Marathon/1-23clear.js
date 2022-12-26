//문제 설명
//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

//제한 조건
//n은 10,000,000,000이하인 자연수입니다.
//입출력 예
//n	return
//12345	[5,4,3,2,1]

let n = 12345; ///typeof number
function solution(n) {
  json = JSON.stringify(n); //12345 type of string
  arr = [...json]; ///['1','2','3','4','5'] type of object
  //aRR = arr.sort((a, b) => b - a); //[ '5', '4', '3', '2', '1' ] type of object
  //result = aRR.join(); /// 5,4,3,2,1 type of string
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]));
  }
  let answer1 = [];
  for (let i = answer.length - 1; i >= 0; i--) {
    answer1.push(answer[i]);
  }
  return answer1;
}
//  reArr = arr. //// '' 제거 필요

//  result = JSON.stringify(n); /// 12345 type of string
//  str = result.split(""); //// ['1', '2', '3', '4', '5] type of object
//  arrStr = str.replace('"', "");
//  console.log(arrStr);
//  //  tostr = str.toString(str); ///1,2,3,4,5 type of string
console.log(solution(n));
