function setup(){
    canvas = createCanvas( 300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3k8Ebmrzw/model.json', modelLoaded);
}

function modelLoaded(){
    console.log('your model has been successfully loaded!!!3')
}

function draw(){}