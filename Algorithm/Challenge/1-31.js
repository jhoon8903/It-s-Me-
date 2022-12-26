let arr = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
  arr = arr.filter((element, index) => {
    return arr.indexOf(element) == index;
  });
}
console.log(solution(arr));
