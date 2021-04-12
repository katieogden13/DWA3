

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
    
    createCanvas(1200, 400);
    // hue, saturation, and brightness
    colorMode(HSB, 255);
//    background('#6F8695');
  
}

function draw(){
    
// Reference code here
    strokeWeight(1);
    
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
        
        
//        print("x: " + positions[62][0])
//        print("y: " + positions[62][1])
        
        
        var r = map(positions[62][0], 0, width, 0, 255)
        var b = map(positions[62][1], 0, height, 0, 255)
        
        fill(r, 255, b);
        ellipse(360, 200, 200, 200);
        
        
        
        var r = map(positions[7][0], 0, width, 255, 0)
        var b = map(positions[7][1], 0, height, 0, 255)
        
        fill(r, 255, b);
        ellipse(150, 200, 200, 200);
        
        
//        tint(255, 126)
        //VIDEO FEED 
//        image(vidcapture, 0, 0)
        
//        fill('#6F8695');
//        rectangle(100, 100, 100, 100)
      
    }
        
}