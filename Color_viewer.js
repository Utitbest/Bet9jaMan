let time_condition = document.querySelector('#time_condition');
    function comeDown(parma){
        let duraVolt = parma;
        setInterval (function(){
            let minute = Math.floor(duraVolt / 60);
            let sexcon = duraVolt % 60;

            minute = minute < 10 ?  '0' + minute  : minute;
            sexcon = sexcon < 10 ?  '0' + sexcon : sexcon;

            time_condition.innerHTML = minute +':'+sexcon;
            if(--duraVolt < 0){
                duraVolt = parma;
            }
            
            if(duraVolt <= 19){
                time_condition.style.color = 'red'; 
                time_condition.classList.add('fa-fade') ;             
            }else{
                time_condition.style.color = 'rgb(202, 104, 0)'
                time_condition.classList.remove('fa-fade') ;             

            }
        }, 1000);
    }comeDown(300);


    
  

function colorRemover(){
    
        let Arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 
           26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
           40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
        
        let mixer = Math.floor(Math.random() * Arr.length);
        alert(mixer)

}
   
colorRemover()
// setInterval(colorRemover, 1000)
