let n = 45;

function solution(n) {
  rNumber = "";
  trN = 0;
  thirdN = n.toString(3); // 1200

  arrN = Array.from(thirdN);

  reverseN = arrN.reverse(); // ['0','0','2','1']  type of object
  for (let i = 0; i < reverseN.length; i++) {
    rNumber += reverseN[i];
  }
  console.log(typeof rNumber); /// 0021 type of string
  return parseInt(rNumber, 3);
}
console.log(solution(n));
