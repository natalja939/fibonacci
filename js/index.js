//Loop

  const n = parseInt(prompt('Enter number'));

  function fib(n) {
    
       let fibPrev  = 1,
           fibPrePrev = 1;
          for (let i = 3; i <=n; i++) {
             let fibNext = fibPrev + fibPrePrev;
                 fibPrePrev = fibPrev;
                 fibPrev = fibNext;
           }
                return fibPrev;
   }
 let result = fib(n);
  alert(result);



//Array

//  const n = parseInt(prompt('Enter number'));

//  let fibArr = [1,1];
//      for (let i = 3; i <= n; i++) {
//      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
//      }
        
//  let result = fibArr.pop();
//  alert(result);
    
//recursion
//   const n = parseInt(prompt('Enter number'));
//    function fib(n) {
//        if (n > 1) {
//            return fib(n - 1) + fib(n - 2);
//        }else {
//		    return 1;
//	    }
//    }
//    let result = fib(n);
//    alert(result);