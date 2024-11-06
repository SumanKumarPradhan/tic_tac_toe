//alert("apna college");

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#Reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

       console.log("Button was clicked");

       if(turn0){
        box.innerText="0";
        turn0=false;
       }else{
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;
       checkWinner();

    });
});


const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
};


const showWinner= (Winner) => {
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

 const resetGame= () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
 };

const checkWinner= () =>{
    for(let patterns of winpatterns){
        
        //console.log(patterns[0],patterns[1],patterns[2]);
        /*console.log(
            boxes[patterns[0]].innerText,
            boxes[patterns[1]].innerText,
            boxes[patterns[2]].innerText);*/

            let pos1Val=boxes[patterns[0]].innerText;
            let pos2Val=boxes[patterns[1]].innerText;
            let pos3Val=boxes[patterns[2]].innerText;

            if(pos1Val !="" && pos2Val !="" && pos3Val !="")
            {
                if(pos1Val==pos2Val &&  pos2Val == pos3Val)
                {
                    console.log("winner", pos1Val);
                    showWinner(pos1Val);
                }
            }
        
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame );