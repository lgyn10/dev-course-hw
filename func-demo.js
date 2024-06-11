// 1. 함수 선언문
function foo1(arg) {
  console.log('foo');
}

// 2. 함수 표현식
const foo2 = function () {
  console.log('foo');
};

// 3. Function 생성자 함수
const foo3 = new Function("console.log('foo')");
foo3(); // foo

// 4. 화살표 함수 표현식
const foo4 = () => {
  console.log('foo');
};
