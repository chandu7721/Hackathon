const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
const text=document.getElementById('myText');

canvas.height = 200;
canvas.width = 200;



function dice(number){
ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(number===1){
        ctx.beginPath();
        ctx.arc(100,100,10,0,Math.PI*2);
        ctx.fillStyle='#E1AFD1';
        ctx.fill();
        
    }
    else if(number==2){
        ctx.beginPath();
        ctx.arc(60,60,10,0,Math.PI*2);
        ctx.arc(140,140,10,0,Math.PI*2);
        ctx.fillStyle='#E1AFD1';
        ctx.fill();
    }
    else if(number==3){
        ctx.beginPath();
        ctx.arc(60,60,10,0,Math.PI*2);
        ctx.arc(100,100,10,0,Math.PI*2);
        ctx.arc(140,140,10,0,Math.PI*2);
        ctx.fillStyle='#E1AFD1';
        ctx.fill();
    }
    else if(number==4){
        ctx.beginPath();
        ctx.arc(60,60,10,0,Math.PI*2);
        ctx.fillStyle='#E1AFD1';
        ctx.fill();


        ctx.beginPath()
        ctx.arc(140,60,10,0,Math.PI*2);
        ctx.fill();


        ctx.beginPath()
        ctx.arc(60,140,10,0,Math.PI*2);
        ctx.fill();


        ctx.beginPath()
        ctx.arc(140,140,10,0,Math.PI*2);
        ctx.fill();
    }
    else if(number==5){

        ctx.beginPath();
        ctx.arc(60,60,10,0,Math.PI*2);
        ctx.fillStyle='#E1AFD1';
        ctx.fill();


        ctx.beginPath()
        ctx.arc(140,60,10,0,Math.PI*2);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(100,100,10,0,Math.PI*2);
        ctx.fill();


        ctx.beginPath()
        ctx.arc(60,140,10,0,Math.PI*2);
        ctx.fill();


        ctx.beginPath()
        ctx.arc(140,140,10,0,Math.PI*2);
        ctx.fill();

    }
    else if(number==6){

        ctx.beginPath();
        ctx.arc(60,60,10,0,Math.PI*2);
        ctx.fillStyle='#E1AFD1';
        ctx.fill();


        ctx.beginPath()
        ctx.arc(140,60,10,0,Math.PI*2);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(60,100,10,0,Math.PI*2);
        ctx.fill();

        ctx.beginPath()
        ctx.arc(140,100,10,0,Math.PI*2);
        ctx.fill();


        ctx.beginPath()
        ctx.arc(60,140,10,0,Math.PI*2);
        ctx.fill();


        ctx.beginPath()
        ctx.arc(140,140,10,0,Math.PI*2);
        ctx.fill();

    }

    }
    document.addEventListener('keydown', function(event) {
        if (event.code == 'Space') {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            dice(randomNumber);
            text.innerText=randomNumber;
        }
    });



    dice(1);