let month = 1;
let day = 18;

function solution(month, day) {
  let Day = new Date(2024, month, day + 98);
  return Day.getMonth() + "월" + " " + Day.getDate() + "일";
}
console.log(solution(month, day));
