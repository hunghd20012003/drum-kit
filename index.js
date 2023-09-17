
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
document.addEventListener("keypress",function (event){
    var a=event.key;
    document.querySelector("."+a).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+a).classList.remove("pressed")},100);
    switch(a){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
           
           break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break
       
       case "s":
        var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
       
       case "d":
        var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            alert("Đã nhập sai ký tự");
            break;
       }
})
function handleClick(){
       var buttonInnerHTML=this.innerHTML;
      document.querySelector("."+buttonInnerHTML).classList.add("pressed");
     setTimeout(function(){document.querySelector("."+buttonInnerHTML).classList.remove("pressed")},100);
   switch(buttonInnerHTML){
    case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        
       break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break
   
   case "s":
    var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
   
   case "d":
    var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break
    case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    default:
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
   }

}
