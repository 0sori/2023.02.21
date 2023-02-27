// 아이디 
// 영어 대소문자 & 숫자 & 특수문자 -_ 로 6 이상 14 이하 의 조건
document.getElementById("inputId").addEventListener("keyup", function(){
    const regEx = /^[a-zA-Z0-9_-]{6,14}$/;
    
    const inputId = document.getElementById("inputId");

    if( regEx.test(this.value) ) {
        inputId.classList.add("comfirm");
        inputId.classList.remove("error");
    } else {
        inputId.classList.add("error");
        inputId.classList.remove("comfirm");
    }
})

// 비밀번호
// 비밀번호를 안쓰고 비밀번호확인만 쓰면 비밀번호를 기입하지 않았습니다 경고창 후 
// 비밀번호로 포커스 ,
document.getElementById("comfirmPw").addEventListener("keyup", function(){
    const inputPw = document.getElementById("inputPw");
    const comfirmPw = document.getElementById("comfirmPw");

    const regEx = /^[a-zA-Z0-9~!@#$%^&*()_+]{6,14}$/;

    if(!regEx.test(inputPw.value)){
        alert("비밀번호를 설정이 맞지 앉습니다.");
        inputPw.focus();
        comfirmPw.value = "";
    }
})
// 비밀번호 일치,불일치
document.getElementById("inputPw").addEventListener("keyup", function(){
    const inputPw = document.getElementById("inputPw");
    const comfirmPw = document.getElementById("comfirmPw");
    const checkPw = document.getElementById("checkPw");
    if( inputPw.value == comfirmPw.value ) {
        checkPw.style.color = "green";
        checkPw.innerText = "비밀번호 일치";
    } else {
        checkPw.style.color = "red";
        checkPw.innerText = "비밀번호 불일치";
    }
})
document.getElementById("comfirmPw").addEventListener("keyup", function(){
    const inputPw = document.getElementById("inputPw");
    const comfirmPw = document.getElementById("comfirmPw");
    const checkPw = document.getElementById("checkPw");
    if( inputPw.value == comfirmPw.value ) {
        checkPw.style.color = "green";
        checkPw.innerText = "비밀번호 일치";
    } else {
        checkPw.style.color = "red";
        checkPw.innerText = "비밀번호 불일치";
    }
})
// 이름
// 단모음 제외한 한글 2글자 이상 5글자 이하
document.getElementById("inputName").addEventListener("keyup", function(){
    const regEx = /^[가-힣]{2,5}$/;
    const inputName = document.getElementById("inputName");
    const checkName = document.getElementById("checkName");
    
    if(regEx.test(this.value)){
        checkName.style.fontSize = "13px";
        checkName.style.color = 'green';
        checkName.innerText = "정상입력";
    } else {
        checkName.style.fontSize = "13px";
        checkName.style.color = 'red';
        checkName.innerText = "한글만 입력하세요";
    }
})

function vaildate() {
    // 성별이 체크 되지않았을경우 경고창
    const gender = document.querySelector("input[name='gender']:checked")

    if(gender == null) {
        alert("성별을 선택해주세요");
        return false;
    }

    const inputCall = document.getElementById("inputCall");
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/;

    if(!regEx.test(inputCall.value)) {
        alert("전화번호 형식이 올바르지 않습니다");
        return false;
    }

    return true;
}

