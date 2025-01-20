var input = document.getElementById('Answer');

function EnterNumber(value){
    input.value += value;
    console.log(input);
}

function EnterOperator(value){
    input.value += value;
    console.log(input);
}

function EnterEqual(){


    // var res = input.value;
    // input.value = eval(res);
    
    var res = eval(input.value);

    if(isFinite(res)){
        input.value = res;   
    }else{

        input.value = "u can not divided it by 0 "
    }
  
}

function EnterClear(){
    input.value = ""
}

