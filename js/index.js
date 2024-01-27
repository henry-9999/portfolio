const cursor = document.querySelector(".cursor");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec2Cover = sec2.querySelector(".sec2Cover");
const cheProjButt = document.querySelector(".cheProj");
const webPortfName = document.querySelector(".webPortfName");
const groww = document.querySelector(".groww");
const growwChildren = groww.children;
const homeLink = document.querySelector(".home");
const creWebLink = document.querySelector(".creWeb");
const abtMeLink = document.querySelector(".abtMe");
const conMeLink = document.querySelector(".conMe");
const abtMe = document.querySelector(".aboutMe");
const contactMesec1Butt = document.querySelector(".contactMesec1Butt");
let growwChildrenChange = false;


const sec2Ele = sec2.children;
let transparent = true;


conMeLink.addEventListener("click",() => {
    const contactUs = document.querySelector(".contactUs");
    for(let i = 0;i < 2;i++){
        
        setTimeout(() => {
    
            contactUs.style.background = "rgb(107, 96, 96)";

        },(i+1) * 700);
        setTimeout(() => {
    
            contactUs.style.background = "transparent";
        },(i+1) * 900);
    }
    
});

abtMeLink.addEventListener("click",() => {
    const abtMeDiv = abtMe.querySelector("div");
        
        setTimeout(() => {
    
            abtMeDiv.style.color = "red";
        },700);
        setTimeout(() => {
            abtMeDiv.style.color = "white";
    
        },1700);

});



contactMesec1Butt.addEventListener("click",() => {
    conMeLink.click();
});


const arrayOfBack = [
    "proj1",
    "proj2",
    "proj3"
];
const description = [
    "sales web 1",
    "sales web 2",
    "color generator"
];
let picIndex = 0;
slide();
setInterval(() => {

    slide();
},5000);
cheProjButt.addEventListener("click",() => {
    console.log("brah");
})

//artificial cursor to track mouse
document.addEventListener("mousemove",(event) => {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
});
document.addEventListener("mousedown",(event) => {
    cursor.style.display = "none";
});
document.addEventListener("mouseup",(event) => {
    cursor.style.display = "block";
});

const divSec1 = sec1.querySelectorAll("div");
const imgSec1 = sec1.querySelectorAll("img");
const buttonSec1 = sec1.querySelectorAll("button");
const nav = document.querySelector(".navEleCon");

sec2.addEventListener("mouseover",() => {
    if(transparent == true){
        togDark();
        transparent = false;
    }
});
sec2.addEventListener("mouseout",() => {
    if(transparent == false){

        togTrans()
        transparent = true;
    }
});
nav.addEventListener("mouseover",() => {
    inCur();
});
nav.addEventListener("mouseout",() => {
    redCur();
});

divSec1.forEach(element => {
    element.addEventListener("mouseover",() => {
        inCur();
    });
    element.addEventListener("mouseout",() => {
        redCur();
    });
});
buttonSec1.forEach(element => {
    element.addEventListener("mouseover",() => {
        inCur();
    });
    element.addEventListener("mouseout",() => {
        redCur();
    });
});
imgSec1.forEach(element => {
    element.addEventListener("mouseover",() => {
        togDark();
    });
    element.addEventListener("mouseout",() => {
        togTrans();
    });
});

function slide(){

    console.log(picIndex);
    console.log(arrayOfBack[picIndex]);
    console.log(growwChildren);
    //sec2Cover.classList.add("sec2CoverAni");
    for(let i = 0;i < growwChildren.length;i++){
        let element = growwChildren[i];
        element.style.background = "white";
    }


        
    webPortfName.textContent = description[picIndex];
    sec2.style.background = `url(../icons/${arrayOfBack[picIndex]}.png)`;
    sec2.style.backgroundRepeat = `no-repeat`;
    sec2.style.backgroundPosition = "0";
    sec2.style.backgroundSize = "cover";
    let growChild = growwChildren[picIndex];
    growChild.style.background = "black";
    if(picIndex == (arrayOfBack.length - 1)){
        picIndex = 0;
        console.log("it is")
    }
    else{

        picIndex++;
    }

    /* setTimeout(() => {
        sec2Cover.classList.remove("sec2CoverAni");
        
    },500); */


}

function togDark(){
    
    cursor.classList.add("cursorImgHover");
}
function togTrans(){
    cursor.classList.remove("cursorImgHover");
    
}
//increase cursor size after mouse hover
function inCur(){
    cursor.style.width = "40px";
}
//reduce cursor size after mouse out
function redCur(){
    cursor.style.width = "30px";
}