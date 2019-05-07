const card_no = document.getElementById('card_no');
const expDate = document.getElementById('expDate');
const cvv = document.getElementById('cvv');
const pin = document.getElementById('pin');
 
//accept input from numeric keys only 
const numeric_filter = function(){
    const kcode = event.keyCode;
    if (!(kcode == 12 ||
        kcode == 45 ||
        kcode == 95 ||
        (kcode > 47 && kcode < 58) ||
        (kcode > 32 && kcode < 41) ))
    {
        event.preventDefault();
    }
    
}
//add a foward slash after the first two digits
const add_slash = function(){
    if (this.value.length == 2){
        this.value += '/';
    }
}

card_no.addEventListener('keypress', numeric_filter);
expDate.addEventListener('keypress', numeric_filter);
expDate.addEventListener('keypress', add_slash);
cvv.addEventListener('keypress', numeric_filter);
pin.addEventListener('keypress', numeric_filter);

