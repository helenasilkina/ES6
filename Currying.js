/*
* Tests with:
* let curry1 = f => (a) => f(a);
* let curry2 = f => (...a) => (...b) => f(...a, ...b);
* var curry = (fn) => nCurry(fn.length)(fn);
*/

let nCurry = n =>
  (f, ...args) =>  {
        return function(...nargs) {
            let combinedArgs = args.concat(nargs);
            if (combinedArgs.length < n) {
              combinedArgs.unshift(f);
              return _curry.apply(null, largs);
            } else {
              return f.apply(null, largs);
            }
        };
  };
