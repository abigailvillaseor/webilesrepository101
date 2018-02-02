var osc, env, slider;

function setup(){
    
    createCanvas(windowWidth-20, 200);
    background(70);
    fill(200, 0, 0);
    
    env = new p5.Env();
    env.setADSR(0.2, 0.3, 0.5, 1.0);
    
    slider = createSlider(0, env, 0.5, 0.1);
    slider.position(windowWidth/3, 300);
    slider.style('width', '400px');
        
    osc = new p5.Oscillator();
    osc.amp(env);
    osc.setType('triangle');
    osc.start();
    
}

function draw(){
    
    var sld = slider.value();
    env.setRange(slider.value(), 0);

}

function keyPressed(){
    console.log("Pressed" + key);
    var fr = 0;
    ellipse(windowWidth/2, 100, 70, 70);
    fill(200, 0, 0);
    
    switch (key) {
        case "Q": //C5
        fr = 523.3;
            break;
        case "2": //C#
        fr = 554.4;
            break;
        case "W": //D
        fr = 587.3;
            break;
        case "3"://D#
        fr = 622.3;
            break;
        case "E"://E
        fr = 659.3;
            break;
        case "R"://F
        fr = 698.5;
            break;
        case "5"://F#
        fr = 740;
            break;
        case "T"://G
        fr = 784;
            break;
        case "6"://G#
        fr = 830.6;
            break;
        case "Y"://A
        fr = 880;
            break;
        case "7"://A#
        fr = 932.3;
            break;
        case "U"://B
        fr = 987.8;
            break;
        case "I"://C6
        fr = 1046.5;
            break;
        case "9"://C#
        fr = 1108.7;
            break;
        case "O"://D
        fr = 1174.7;
            break;
        case "0"://D#
        fr = 1244.5
            break;
        case "P"://E
        fr = 1318.5;
            break;
            //-------------------------
        case "Z": //C4
        fr = 261.6;
            break;
        case "S": //C#
        fr = 277.2;
            break;
        case "X": //D
        fr = 293.7;
            break;
        case "D"://D#
        fr = 311.1;
            break;
        case "C"://E
        fr = 329.6;
            break;
        case "V"://F
        fr = 349.2;
            break;
        case "G"://F#
        fr = 370;
            break;
        case "B"://G
        fr = 392;
            break;
        case "H"://G#
        fr = 415.3
            break;
        case "N"://A
        fr = 440;
            break;
        case "J"://A#
        fr = 466.2;
            break;
        case "M"://B
        fr = 493.9;
            break;
        case ","://C5
        fr = 523.3;
            break;
        case "L"://C#
        fr = 554.4;
            break;
        case "."://D
        fr = 587.3;
            break;
        case "Ñ"://D#
        fr = 622.3;
            break;
        case "-"://E
        fr = 659.3;
            break;
            
    }
    osc.freq(fr);
    env.triggerAttack();
}

function keyReleased(){
    console.log("Released" + key);
    background(70);
    env.triggerRelease();
}

