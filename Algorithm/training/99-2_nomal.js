/* <aside>
π μ€. **Triangular Output**

</aside>

μ²«μ§Έ μ€μ μ μ nμ΄ μ£Όμ΄μ§λ€. (0β€nβ€100)

### μΆλ ₯

λ€μ μμ μ κ°μ΄ μΌκ°ν λͺ¨μμΌλ‘ β*βμ μΆλ ₯νμΈμ.
(κ³΅λ°±μ κ°μμ λ³μ κ°μλ₯Ό μ ννκ² νμΈν΄μ£ΌμκΈΈ λ°λλλ€. ππ»ββοΈ)

### TIP. κ·Έλ¦Όμ ν΄λ¦­νλ©΄ ν¬κ² λ³΄μλλ€!




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