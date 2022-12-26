
let star = 7
function solution(star){
    let s = star
    result = ''
    
    for(let j = s; j > 1; j--){
        result += ' '.repeat(s-j+1)+'*'.repeat(j*2-1)+'\n'.repeat(1)
    }
    
    for(let i = 0; i < s; i++){
        result += ' '.repeat(s-i)+'*'.repeat(i*2+1)+'\n'.repeat(1)

    }
    
}return result.slice(0,-1)
console.log(solution(7))
