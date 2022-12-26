{
  /* <aside>
📃 3. 중. 맥주

</aside>

항해 선술집에는 맥주를 시키면 1병 당 도장을 하나 찍어드립니다.  
도장이 10개가 되면 **서비스맥주** 1병으로 바꿀 수 있고, 
바꾼 맥주에도 도장을 하나 찍어드립니다. 
주문한 맥주병 수 `beer` 가 주어질 때 마실 수 있는 최대 서비스 맥주병 수를 
return 하도록 하는 solution 함수를 작성하세요.

- `beer` 는 정수입니다
- • 0 ≤ `beer` ≤ 10,000


50	5
100	11
1091	121


9911	1101 */
}

let beer = 9911;
function solution(beer) {
  let serviceCount = 0;
  let b = beer;

  for (let i = 0; i < b; i++) {
    if (i % 9 === 0) {
      serviceCount += 1;
    }
  }

  return serviceCount - 1;
}

console.log(solution(beer));
