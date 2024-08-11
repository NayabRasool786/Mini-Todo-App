let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
console.dir(ul);
btn.addEventListener("click",function(){
    console.log(inp.value);
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    // let delbtn=document.querySelector(".delete");
     let delBtn=document.createElement("button");
     delBtn.innerText="x";
     delBtn.classList.add("delete");
     item.appendChild(delBtn);
    inp.value="";


    
     
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName="BUTTON"){
        let liItem=event.target.parentElement;
        liItem.remove();
        console.log("deleted item");
    }
}
) 








// let delBtns=document.querySelectorAll(".delete");

// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function(){
//         let par=delBtn.parentElement;
//         console.log(par);
//         parremove();
//     });
// }