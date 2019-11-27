
//  학생들의 평균 점수를 구하여라
const input = [80, 90, 100];

// 명령형 프로그래밍 컨셉
function averageFunc(arr) {
  let total = 0;
  // 함수의 스코프가 넓다. 그래서 외부 forEach 스코프에는 없는 total이 사용한다. ==> 불순하다.
  arr.forEach(num => total += num);
  return total / arr.length;
}
console.log('명령형 프로그래밍 평균점수: ', averageFunc(input));


//  함수형 프로그래밍 컨셉
const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);
const total = arr => sum(arr);
const size = arr => arr.length;
const device = (a, b) => a / b;
const average = arr => device(total(arr), size(arr));
console.log('함수형 프로그래밍 평균점수:', average(input));

