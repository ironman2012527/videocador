function preload(){

}



function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
 classifier = ml5.imageClassifier("MobileNet",modelload);
 modelload()
}
function modelload(){
  console.log("modelocargado")
}

function draw(){
image(video,0,0,400,400)
classifier.classify(video,gotResult())


}
previous_results=""
function gotResult(error,results){
  if(error){
    console.log(error)
  }
  else{
    //if((results[0].confidence>0.5)&&(previous_results !=results[0].label))  {
     // console.log(results);
    //}
    console.log(results)
  }
}

 
