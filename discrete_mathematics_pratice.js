// 售票亭
// 0-11:free
// 12-18 or welfare:75%
// 19-120:100%
// else:error
function ticket(age, price, weifare=false){
    if(0<=age && age<=11){
        return 0;
    }else if((12<=age&& age<=18) || welfare){
        return price*75;
    }else if(19<=age&&age<=120){
        return price;
    }else{
        return "請輸入正確的年齡"
    }
}

// console.log(ticket(15,200))

// sum_arithmetic_sequence
// for loop
function add(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    console.log(sum);
    return sum;
}

// add(10);

// recursion
function add2(n){
    if(n==0){
        return 0;
    }else{
        return n+add2(n-1);
    }
}

// console.log(add2(10));

// formula
function add3(n){
    console.log(((1+n)*n)/2)
    return (((1+n)*n)/2);
}

add3(10);