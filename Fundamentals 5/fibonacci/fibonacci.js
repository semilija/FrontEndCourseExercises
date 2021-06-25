const fibonacci = function($n) {
    //return n < 1 ? 0
        //: n <= 2 ? 1
        //: fibonacci(n - 1) + fibonacci(n - 2);
//}
if(($n == 1) || ($n == -1))
    {
        return 1;
    }   
    if($n == 0)
    {
        return 0;
    }    
    
    if($n < 0)
    { 
        return Math.pow(-1,$n+1) * fibonacci(Math.abs($n));
    } 
    else
    {
        return fibonacci($n - 1) + fibonacci($n - 2);
    }
    

}
module.exports = fibonacci
