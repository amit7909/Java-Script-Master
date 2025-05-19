/*There are two scope 
1.Global/ Context scope 
2.Local scope 
     a.Function scope
     b.Block Scope
*/

//Global Variable

//Closure
function counter(){
    let count = 0;

    return function(){
        count++
        console.log(count);
        
    }
}
const counterFn = counter ()

counterFn()
counterFn()
counterFn()
counterFn()
counterFn()
