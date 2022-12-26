/* <aside>
📃 중. **Triangular Output**

</aside>

첫째 줄에 정수 n이 주어진다. (0≤n≤100)

### 출력

다음 예제와 같이 삼각형 모양으로 ‘*’을 출력하세요.
(공백의 개수와 별의 개수를 정확하게 확인해주시길 바랍니다. 🙆🏻‍♂️)

### TIP. 그림을 클릭하면 크게 보입니다!




3            *
            ***
           *****


             *
            ***
           *****
 6        *******
         *********
        ***********




 9              *
               ***
              *****
             *******
            *********
           ***********
          *************
         ***************
        *****************/





let star= 9;

function solution(star){
result = ''
    for (let i =0; i <star; i++){
        for (let k = star; k > i; k--){
            result += ' '
        }
        for (let j = 0; j-i<=i; j++){
            result += '*'
        }
        result += '\n'

    }

    return result.slice(0,-1)
}
console.log (solution(star))