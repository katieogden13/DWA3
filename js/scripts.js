

var vidcapture, ctracker, drawcanvas;

function setup(){
   var cnv =    createCanvas(windowWidth,          windowHeight/2) 
    cnv.parent("p5canvas");
//    background(255, 0, 0)
    
    // p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width*3, vidcapture.height*3.4);
    vidcapture.hide()
    
    // start the tracker
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(vidcapture.elt);
    // just for testing
    drawcanvas = document.getElementById('defaultCanvas0');

//Reference Code:     
    
    createCanvas(900, 500);
    // hue, saturation, and brightness
    colorMode(HSB, 255);
    // slider has a range between 0 and 255 with a starting value of 127
//    slider = createSlider(0, 255, 127);
    
    
}

function draw(){
    
// Reference code here
        background(127);
        strokeWeight(2);
    
    // Set the hue according to the slider
        stroke(slider.value(), 255, 255);
        fill(slider.value(), 255, 255, 127);
        ellipse(360, 200, 200, 200);
//
    
    
    
    //background(255,10);
    translate(vidcapture.width, 0);
    scale (-1, 1);
    
    //image(vidcapture, 0, 0)
    
    var positions = ctracker.getCurrentPosition()
    
    //print(positions);
    
    if (positions) {
        
        // all the fun with positions in here!
        // ellipse needs an (x,y,d)
//        fill(0);
//        
//        positions.forEach(function(pos){
//            ellipse(pos[0], pos[1], 2)
//        })
//        
//        line(positions[23][0], positions[23][1], positions[23][0]-30, positions[23][1]-30);
//        
//        line(positions[28][0], positions[28][1], positions[28][0]+30, positions[28][1]+30);
        
        
        print("x: " + positions[62][0])
        print("y: " + positions[62][1])
        
        var r = map(positions[62][0], 250, 300, 0, 255, true)
        var b = map(positions[62][1], 150, 200, 0, 255, true)
        
        background(r, 255, b)
        tint(255, 126)
        image(vidcapture, 0, 0)
        
    }
    
    
    
    
//    translate(mouseX, mouseY);
////    noFill()
//    noStroke();
//    fill(255, 204, 0);
////    circle(mouseX, mouseY, 40)
////    print("x:" + mouseX)
////    print("y:" + mouseY)
//    
//    var xColor = map(mouseX, 0, width, 0, 255)
//    var yColor = map(mouseY, 0, height, 0, 255)
//    
//    stroke(xColor, 0, yColor);
//    
//    var xRotate = map(mouseX, 0, width, 0, 360)
//    print(xRotate)
//    
//    angleMode(DEGREES)
//    rotate(xRotate);
//    line(0, 0, 50, 50)
//      
}