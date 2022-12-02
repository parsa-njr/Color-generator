let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let body = document.querySelector('body');
let randomBtn = document.querySelector('#random');

function changeBackground () {
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;
    
    body.style.backgroundColor = 'rgb(' + redValue +',' + greenValue + ',' +blueValue +')';
};

function randomColor () {
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3= Math.floor(Math.random() * 255);

    let arraysOfColors = [randomNumber1 , randomNumber2 , randomNumber3 ];

    return arraysOfColors;
}

rRange.addEventListener('input' , function(){
  changeBackground();
});



gRange.addEventListener('input' , function(){
    changeBackground();
});


bRange.addEventListener('input' , function(){
    changeBackground();
});

randomBtn.addEventListener('click' , function() {
   let colors = randomColor();
   console.log(colors);

    rRange.value = colors[0];
    gRange.value= colors[1];
    bRange.value = colors[2];


   changeBackground();

   
})