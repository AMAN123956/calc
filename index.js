let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
let screenValue=" ";
let screenCalc = 0;

for (item of buttons) {
    item.addEventListener('click', (e) => {
     buttonText = e.target.innerHTML;
        if( buttonText == '*'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if( buttonText == 'C'){
            screenValue = " ";
            screen.value = screenValue;
        }
    
        else if( buttonText ==  '='){

            screen.value = eval(screenValue);
            
        }
        else if(buttonText == "sin"){
            screenValue += buttonText;
            screen.value = screenValue;
            let screenNumber=" ";
            for(item of buttons ){
                item.addEventListener('click', (e) => {
                    buttonText1 = e.target.innerHTML;
                
                   
                    if(buttonText1 == "="){
                      
                       
                        screen.value = eval(((Math.sin(screenNumber* 22/(7*180)))));
                       
    
                    }
                 else if(buttonText1 == 'C') {
                        screenNumber = " ";
                        screen.value = screenNumber;
                    }
                    else{
                        screenNumber += buttonText1;
                        screen.value = screenNumber;
                    }
                })
            }
        }
        else if(buttonText == "tan"){
            screenValue += buttonText;
            screen.value = screenValue;
            let screenNumber=" ";
            for(item of buttons ){
                item.addEventListener('click', (e) => {
                    buttonText1 = e.target.innerHTML;
                
                   
                    if(buttonText1 == "="){
                      
                       
                        screen.value = eval(((Math.tan(screenNumber* 22/(7*180)))));
                       
    
                    }
                 else if(buttonText1 == 'C') {
                        screenNumber = " ";
                        screen.value = screenNumber;
                    }
                    else{
                        screenNumber += buttonText1;
                        screen.value = screenNumber;
                    }
                })
            }
        }
        else if(buttonText == "cos"){
            screenValue += buttonText;
            screen.value = screenValue;
            let screenNumber=" ";
            for(item of buttons ){
                item.addEventListener('click', (e) => {
                    buttonText1 = e.target.innerHTML;
                
                   
                    if(buttonText1 == "="){
                      
                       
                        screen.value = eval(((Math.cos(screenNumber* 22/(7*180)))));
                       
    
                    }
                 else if(buttonText1 == 'C') {
                        screenNumber = " ";
                        screen.value = screenNumber;
                    }
                    else{
                        screenNumber += buttonText1;
                        screen.value = screenNumber;
                    }
                })
            }
        }

          else if(buttonText == "ln"){
            screenValue += buttonText;
            screen.value = screenValue;
            let screenNumber=" ";
            for(item of buttons ){
                item.addEventListener('click', (e) => {
                    buttonText1 = e.target.innerHTML;
                
                   
                    if(buttonText1 == "="){
                      
                       
                        screen.value = eval(Math.log(screenNumber));
                       
    
                    }
                 else if(buttonText1 == 'C') {
                        screenNumber = " ";
                        screen.value = screenNumber;
                    }
                    else{
                        screenNumber += buttonText1;
                        screen.value = screenNumber;
                    }
                })
            }
        }
        else if(buttonText == "e"){
            screenValue += buttonText;
            screen.value = screenValue;
            let screenNumber=" ";
            for(item of buttons ){
                item.addEventListener('click', (e) => {
                    buttonText1 = e.target.innerHTML;
                
                   
                    if(buttonText1 == "="){
                      
                       
                        screen.value = eval(((Math.exp(screenNumber))));
                       
    
                    }
                 else if(buttonText1 == 'C') {
                        screenNumber = " ";
                        screen.value = screenNumber;
                    }
                    else{
                        screenNumber += buttonText1;
                        screen.value = screenNumber;
                    }
                })
            }
        }
        
         
        
      
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}