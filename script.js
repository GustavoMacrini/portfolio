let currentItem = 0;
function mudarCertificado(type, direction){
    let controlType;
    let classType;

    switch(type){
        case 'front':
            controlType =".control-front";
            classType = ".front";
        break;
        case 'back':
            controlType = ".control-back";
            classType = ".back";
        break;
        default:
            console.log('parametro(s) errado(s)');
    };

    let controls = document.querySelectorAll(controlType);;
    let items = document.querySelectorAll(classType);
    let maxitems = items.length;    

    if(direction == 'left'){
        currentItem -=1;
    }else{
        currentItem +=1;
    }

    if(currentItem >= maxitems){
        currentItem = 0;
    }
    
    if(currentItem < 0){
        currentItem = maxitems - 1;
    }
            
    items.forEach(item => item.classList.remove("current-item"));
    
    items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    });
    
    items[currentItem].classList.add("current-item"); 
};
