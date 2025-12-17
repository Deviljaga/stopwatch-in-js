let s  = 0;
let m = 0;
let h = 0;
let timer = null;

function start() {
    if (timer !== null) {
        return;
    }
    timer = setInterval(run,1000);
}

    function run() {
        s++;

        if (s == 60) {
            s = 0;
            m++;
        }

        if (m == 60) {
            m = 0;
            h++;
        }
        document.getElementById("display").innerText = format(h)+":"+format(m)+":"+format(s);

    }

function stop() {
   clearInterval(timer);
   timer=null; 
}
function reset() {
stop();
s = m = h = 0;
document.getElementById("display").innerText = "00:00:00";
}

function format(time) {
return time < 10 ? "0" + time : time;
}
