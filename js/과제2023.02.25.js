const box2 = document.getElementById("box2")

box2.addEventListener("mouseover", function(){
    
    
    switch(this.innerHTML) {
        case "나에게 마우스를 올려봐" : this.style.backgroundColor = "red", this.style.color = "white", this.innerHTML = "사랑해";
            break;
        case "사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;;
        case "사랑해사랑해사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해사랑해사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;
         case "사랑해사랑해사랑해사랑해사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해" : this.innerHTML += "사랑해";
            break;
        case "사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해" : this.style.backgroundColor="black", this.style.color="white", this.innerHTML = "그만해!!";
            break;

    }
    
})
