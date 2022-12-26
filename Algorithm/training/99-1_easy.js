// 중. 배달의 민족


// 응수는 요즘 쌀 배달을 하고 있습니다. 쌀 가게에 정확하게 N 킬로그램 배달해야 합니다.

// 응수가 가진 쌀 포대는 3킬로와 5킬로 포대가 있다.

// 최대한 적은 봉지 개수로 배달을 하려합니다. 예를 들면, 21킬로그램 쌀은, 3킬로 포대 7개로 배달 가능 하지만, 

// 5킬로 3포대와 3킬로 2포대로 배달하면 총 5포대로 더 적은 개수로 배달할 수 있다.

// 응수가 쌀을 N킬로그램 배달할 때, 가장 적은 쌀 포대의 개수를 구하는 프로그램을 작성하세요.

// - 정수 N이 주어진다. (3 ≤ N ≤ 1,000)
// - 정확하게 N킬로그램을 만들 수 없다면 -1을 출력

// 입출력 예
// N       result
// 18        4             Array [3,5,5,5]  [3,3,3,3,3,3 ] 
// 4        -1                   [-1]
// 11        3                   [3,3,5]
// 21        5                   [3,3,5,5,5] [3,3,3,3,3,3,3]

// 지정 입력값
// N           result          
// 57          13                 [3,3,3,3,5,5,5,5,5,5,5,5,5] []
// 2           -1                 [-1]


// 1. N = [(5*a) + (3*b) ] 
// 2. N%5 ===0 || N%3 === 0 || N%[(5*a)+(3*b)] (단, a>b) 
//    - 5로 나누어 떨어지지 않은면 3씩 + = 3의 포대 1씩 증가
    // 3. 그중 result 는 array.length가 min 것 (min.length)
//    - 조건이 필요 없어짐
// 4. 모두 해당 없으면 return -1




let N = 123123
function solution(N){
let fiveCount = 0
let threeCount = 0
let rice = N

if (rice == 4 || rice == 7){
    return -1
}


for (let i = 0 ; i < rice; i++) {
    if (rice % 5 === 0){
        fiveCount += rice/5
    } else {
        rice -= 3
        threeCount +=1
    }
}if (fiveCount == 0 ){
    threeCount += rice /3}  

    return fiveCount + threeCount 
}

console.log (solution(N))