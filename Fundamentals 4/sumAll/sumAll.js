const sumAll = function(first, second){
    if (Number.isInteger(first)&&Number.isInteger(second)){
        if(first >= 0 && second >= 0) {
        if(first >= second){
            let summ = 0;
            for (let i = second; i <= first; i++) { 
                summ += i;
            }
            return summ;
        }
        else {
            let summ = 0;
            for (let i = first; i <= second; i++) { 
                summ += i;
            }
            return summ;
        }
        }
    }  
            return 'ERROR';
        
   
}
module.exports = sumAll
