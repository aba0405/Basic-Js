function brickCalculator(n){
    for(var i = 0; i <= n; i++){
        if(n<=10 && n>=1){
            var brick = n*15000;
            return brick;
        }
        else if(n<=20 && n>=11){
            var brick = ((12000*(n-10))+150000);
            return brick;
        }
        else{
            var brick = ((10000*(n-20)) + 270000);
            return brick;
        }
    }
}

console.log(brickCalculator(25));