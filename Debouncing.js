let counter=0;

function getData(){
    console.log("Fetching data..",++counter);
}

function Debounce(fn,delay){
    let timer;
    return function(){
        let context=this;
        let args=arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },delay)
    }
}

const betterFunction=Debounce(getData,300);