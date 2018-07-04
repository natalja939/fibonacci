//Loop

//  let n = parseFloat(prompt('Enter number'));


//   function fib(n) {
    
//        let fibPrev  = 1,
//            fibPrePrev = 1;
//           for (let i = 1; i <=n; i++) {
//             let fibNext = fibPrev + fibPrePrev;
//                 fibPrePrev = fibPrev;
//                 fibPrev = fibNext;
//           }
//                return fibPrev;
//   }
//  let result = fib(n);
//  alert(result);



//Array

//  let n = parseFloat(prompt('Enter number'));

//  let fibArr = [1,1];
//      for (let i = 1; i <= n; i++) {
//      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
//      }
        
//  let result = fibArr;
//  alert(result);
    
//recursion
    
    
    let n = parseFloat(prompt('Enter number'));
    function fib(n) {
        let fib;
        if (n > 1) {
            return n < 1 ? n : fib(n - 1) + fib(n - 2);
        }else {
		    return fib(n);
	    }
    }
    let result = fib(n);
    alert(result);