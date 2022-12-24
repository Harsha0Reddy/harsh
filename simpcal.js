let screen=document.getElementById('first');
let buttons=document.querySelectorAll('button');
let screenValue="";
let answer='';
for(item of buttons){
    item.addEventListener('click',(harsha)=>{
        buttonText=harsha.target.innerText;
      
        if(buttonText=="*/-+"){
            screenValue+=buttonText;
           screen.value=screenValue;
        }
        else if(buttonText=="C"){
            screenValue=" ";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            answer=eval(screenValue);
            screen.value=answer;
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        } 
        
    })
   
}
