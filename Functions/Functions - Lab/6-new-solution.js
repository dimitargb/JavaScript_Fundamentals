function check(a, b, c){
       
        if(( a < 0 && b < 0 && c < 0 )||
         ( a < 0 && b >= 0 && c >= 0)  || 
         (a >= 0 && b < 0 && c >= 0) ||
         (a >= 0 && b >= 0 && c < 0))
         {
            console.log('Negative');
        }else{
            console.log('Positive');
        }
    }
    check(-5,
        1,
        1)
  
