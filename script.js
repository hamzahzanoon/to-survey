const label = document.querySelectorAll("label");

for (let i = 0; i < label.length; i++) {
    label[i].addEventListener("click" , () => {
        
        for (let k = 0; k < label.length; k++) {
            if(label[k].classList.contains("selected"))
            label[k].classList.remove("selected");
        } 
        
        label[i].classList.add("selected");
for (let j = 0; j < label.length; j++) {
         label[j].classList.add("selectell");
}    
    });
    
} 