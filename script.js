// FRONT ************************
const controlsFront = document.querySelectorAll(".control-front");
let currentItemFront = 0;
const itemsFront = document.querySelectorAll(".front");
const maxitemsFront = itemsFront.length;

controlsFront.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        
        if(isLeft){
            if(currentItemFront == maxitemsFront - 1 ){
                currentItemFront -=1;
            }else{
                currentItemFront -=1;
            }
            
        }else{
            currentItemFront +=1;
        }

        if(currentItemFront >= maxitemsFront){
            currentItemFront = 0;
        }

        if(currentItemFront < 0){
            currentItemFront = maxitemsFront - 1;
        }

        itemsFront.forEach(item => item.classList.remove("current-item"));

        itemsFront[currentItemFront].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        itemsFront[currentItemFront].classList.add("current-item");

        // console.log("control clicked", isLeft, currentItemFront);
    })
});


// BACK******************
const controlsBack = document.querySelectorAll(".control-back");
let currentItemBack = 0;
const itemsBack = document.querySelectorAll(".back");
const maxitemsBack = itemsBack.length;

controlsBack.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        
        if(isLeft){
            if(currentItemBack == maxitemsBack - 1 ){
                currentItemBack -=1;
            }else{
                currentItemBack -=1;
            }
            
        }else{
            currentItemBack +=1;
        }

        if(currentItemBack >= maxitemsBack){
            currentItemBack = 0;
        }

        if(currentItemBack < 0){
            currentItemBack = maxitemsBack - 1;
        }

        itemsBack.forEach(item => item.classList.remove("current-item"));

        itemsBack[currentItemBack].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        itemsBack[currentItemBack].classList.add("current-item");

        // console.log("control clicked", isLeft, currentItemBack);
    })
});

