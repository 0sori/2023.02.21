var str = "JS 코드는 함수가 아닌 JS 파일 또는 script 태그 내부에 바로작성시"
            + "HTML 랜더링 시 바로 수행된다.";

console.log(str);          

var num1 = 100;
num2 = 200;

console.log(num1);
console.log(num2);


function test() {
    var num3 = 300;
    num4 = 400;

    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num3 : " + num4);

    if(true) {
        var num5 = 500;  // function 지역변수
        num6 = 600; // 전역변수
    }

    console.log("if문 종료 후  num5 : " + num5);
    console.log("if문 종료 후  num6 : " + num6);
    

}

test();

// ** script 언어는 중간에 에러 발생시 해석을 멈춤 **
// console.log("함수 밖 num3 : " + num3)
console.log("함수 밖 num4 : " + num4)


// 자료형 확인 ( + 변수 선언 방법)
function typeTest() {

    let temp1 = 100;
    // let temp1 = 200;
    // 블록 범위 변수 'temp1'을(를) 다시 선언할 수 없습니다.

    if(true) {
        // 블록 범위 확인
        let temp2 = 200;
        const temp3 = 300;
        // temp3 = 400; // Assignment to constant variable.
    }

    console.log(temp1);
    // console.log(temp2);
    // console.log(temp3);

    //---------------------------------------------------------------

    // 자료형 확인
    const typeBox = document.getElementById("typeBox");

    typeBox.innerHTML = "";

    // const name2; 상수는 선언과 동시에 초기화가 필수

    let name; // undifined
    typeBox.innerHTML += "name : " + name + " / " + typeof name;
    // typeof 변수명 : 해당 변수의 자료형을 반환하는 연산자

    name = "홍길동";

    typeBox.innerHTML += "<br><br>name : " + name + " / " + typeof name;

    // number
    const age = 20;
    const height = 178.9;
    typeBox.innerHTML += "<br><br>age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br><br>height : " + height + " / " + typeof height;

    // boolean
    const isTrue = true;
    typeBox.innerHTML += "<br><br>isTrue : " + isTrue + " / " + typeof isTrue;

    // object(배열, JS 객체)
    // 배열 선언과 동시에 초기화
    // (Java)
    // int[] arr = {10, 20, 30, 40, 50};

    // JS ([] 사용)
    const arr = [10,20,30,40,50];
    typeBox.innerHTML += "<br><br>arr : " + arr + " / " + typeof arr;

    for(let i=0; i<arr.length; i++) {
        typeBox.innerHTML += "<br><br>arr["+i+"] : " + arr[i] + " / " + typeof arr[i];
    }

    // ** JS 객체 **
    // - K:V 쌍으로 이루어짐 (Map 형태)
    // - Key는 무조건 string
    // - 리터럴 표기법 : {}

    const user = { "id" : "user01", "pw" : "pass01", "age" : 20, "test" : arr };
    typeBox.innerHTML += "<br><br>user : " + user + " / " + user;
    console.log(user.pw);

    // 객체에 저장된 값 출력
    typeBox.innerHTML += "<br><br>user.id : " + user.id;
    typeBox.innerHTML += "<br><br>user.pw : " + user.pw;
    typeBox.innerHTML += "<br><br>user.age : " + user.age;
    typeBox.innerHTML += "<br><br>user.test : " + user.test;
    typeBox.innerHTML += "<br><br>user.test[2] : " + user.test[2];

    // function
    // 1) 변수명 == 함수명
    const fnSum = function(n1, n2) { // 익명함수
        return n1 + n2;
    }

    // 함수명만 작성하는 경우 -> 함수에 작성된 코드 자체가 반환
    typeBox.innerHTML += "<br><br>fnSum : " + fnSum + " / " + typeof fnSum;

    // 함수명(매개변수) == 함수 호출 (함수 코드 수행됨)
    typeBox.innerHTML += "<br><br>fnSum(1,2) : " + fnSum(1,2) + " / " + typeof fnSum(1,2);

    // 2) 함수를 매개변수로 전달하는 형태

    function plusfn(num, fn) {
        return num + fn();
    }

    const result = plusfn(100, function() {
        return 30 - 10;
    })

    typeBox.innerHTMl += "<br><br> : " + result;





}


