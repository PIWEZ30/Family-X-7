function showPopup(){

    const popup = document.createElement("div");

    popup.innerHTML = "X-7 Forever Together ❤️";

    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%,-50%)";
    popup.style.background = "#0f172a";
    popup.style.padding = "25px 40px";
    popup.style.borderRadius = "20px";
    popup.style.boxShadow = "0 0 20px #38bdf8";
    popup.style.fontSize = "24px";
    popup.style.zIndex = "999";

    document.body.appendChild(popup);

    setTimeout(()=>{
        popup.remove();
    },2000);

}

/* MUSIC */

function toggleMusic(){

    const music = document.getElementById("music");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }

}