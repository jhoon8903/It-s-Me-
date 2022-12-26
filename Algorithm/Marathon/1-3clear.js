//가운데 글자 가져오기
//문제 설명
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

//재한사항
//s는 길이가 1 이상, 100이하인 스트링입니다.
//입출력 예
//s	return
//"abcde"	"c"
////"qwer"	"we"
// 1. 글자마다 , 로 배열의 길이를 만들고
// 2. 배열의 총길이에서 가운데 [i] 찾기 (i.length % 2)
// 3. if (i.length % 2 !== 0){
//        return [ i.length % 2의 문자열을 출력]{
// } else {
//      return [ [i]=i.length % 2를 문자열 출력, [i+1] 문자열출력
//}

let s = "qwer";
function solution(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}
console.log(solution(s));

//1. string의 길이 측정
//2. 측정 후 가운데 (s/2) 찾기
//3. 가운데 값을 표기
//3-2 가운데값중 짝수의 경우 [0]  '[1][2]'  [3] 사용/
//3-3 가운데값중 홀수의 경우 [0] [1] [2]
