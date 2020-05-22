

var fac = function factorial(n){
    if(!this.cache){
        this.cache= {};
    }

    if(this.cache[n]){
        return this.cache[n];
    }
    
    if(n ===1){
        return 1;
    }

    this.cache[n] = n * (factorial(n - 1));
    return this.cache[n];
};