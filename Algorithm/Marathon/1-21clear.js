//문제 설명
//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

//제한 사항
//문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
//첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
//입출력 예
////s	return
////"try hello world"	"TrY HeLlO WoRlD"
//1. 공백 제거 후 각 단어 split
//2. 단어 만 홀짝판별
let s = "  try  hello   world";
function solution(s) {
  result = "";
  j = 1;
  for (let i = 0; i < s.length; i++) {if (s[i] !== " ") 
  {if (j % 2 !== 0) {j += 1; result += s[i].toUpperCase();} 
   else {j += 1; result += s[i].toLowerCase();}
  } else { j = 1; result += " ";}
  }return result;
}
console.log(solution(s));
