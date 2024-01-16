const btn_start = document.querySelector('.start');
const btn_stop = document.querySelector('.stop');
const btn_reset = document.querySelector('.reset');

let hrs=mins=sec=ms=0, start_timer;

btn_start.addEventListener('click',()=>{
    btn_start.classList.add('start-active');
    btn_stop.classList.remove('stop-active');
    start_timer = setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            mins++;
            sec=0;
        }
        if(mins==60){
            hrs++;
            mins=0;
        }
        update();
    },10);
});

btn_stop.addEventListener('click',()=>{
    clearInterval(start_timer);
    btn_start.classList.remove('start-active');
    btn_stop.classList.add('stop-active');
});

btn_reset.addEventListener('click',()=>{
    hrs=mins=sec=ms=0;
    clearInterval(start_timer);
    update();
    btn_start.classList.remove('start-active');
    btn_stop.classList.remove('stop-active');
});

function update(){
    phour=hrs<10?'0'+hrs:hrs;
    pmins=mins<10?'0'+mins:mins;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
    document.querySelector('.hrs').innerText = phour;
    document.querySelector('.mins').innerText = pmins;
    document.querySelector('.sec').innerText = psec;
    document.querySelector('.ms').innerText = pms;
};