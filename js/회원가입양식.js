
// 아이디 완성
document.getElementById("inputid").addEventListener("keyup", function(){
    const regEx = /^[a-zA-Z0-9!@#$%^&*()_+|]{6,14}$/;
    const inputid = document.getElementById("inputid");
   
    if( regEx.test(this.value) ) {
               
        inputid.classList.add("confirm");
        inputid.classList.remove("error");


    } else {
        
        inputid.classList.add("error");
        inputid.classList.remove("confirm");
    }
})

// 비밀번호 & 확인
document.getElementById("inputpw2").addEventListener("blur", function(){
    const regEx = /^[a-zA-Z0-9!@#$%^&*()_+|]{6,14}$/;

    const inputpw1 = document.getElementById("inputpw1");
    const pwcheck = document.getElementById("pwcheck");
    
    
    
    if(regEx.exec(inputpw1.value)) {
    
    } else {
        alert("비밀번호를 입력하지 않았습니다");
        inputpw1.focus();
    }
})

document.getElementById("inputpw1").addEventListener("keyup", function(){
    const inputpw1 = document.getElementById("inputpw1");
    const inputpw2 = document.getElementById("inputpw2");

    const pwcheck = document.getElementById("pwcheck");
    
    if(inputpw1.value == inputpw2.value) {
        pwcheck.style.color = 'green'
        pwcheck.innerText = '비밀번호 일치'
    } else {
        pwcheck.style.color = 'red'
        pwcheck.innerText = '비밀번호 불일치'
    }
})




// 이름 완성
document.getElementById("inputname").addEventListener("keyup", function(){
    
    const regEx = /^[가-힣]{2,5}$/;

    const inputname = document.getElementById("inputname");
    const namecheck = document.getElementById("namecheck");

    if( regEx.test(this.value) ) {
               
        namecheck.style.color = "green";
        namecheck.innerText = "정상입력";
        

    } else {
        
        namecheck.style.color = "red";
        namecheck.innerText = "한글만 입력하세요";
    }    
})

// 성별


// 전화번호
document.getElementById("callnum").addEventListener("blur", function(){
    
    const regEx = /^[0-9]{3}[-]{1}[0-9]{4}[-]{1}[0-9]{4}/;
    if( regEx.test(this.value) ) {
    
    } else {
        alert("전화번호 형식이 올바르지 않습니다.");
    }
})

// 이메일

