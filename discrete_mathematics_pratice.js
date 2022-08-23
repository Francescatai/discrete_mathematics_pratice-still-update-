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

console.log(ticket(15,200))