var delay;
var chorus;
var wahwah;
var overdrive;
var tremolo;
var phaser;
var cabinet;


function tunaDemo(){

		var tuna = new Tuna(context);

		wahwah = new tuna.WahWah({
			automode: true,
			baseFrequency: 0.8,
			excursionOctaves: 1,
			sweep: 0.6,
			resonance: 70,
			sensitivity: 0.5,
			bypass: 1


		});

		delay = new tuna.Delay({
			feedback: 0.78,
			delayTime: 70,
			wetLevel: 0.9,
			dryLevel: 1,
			cutoff: 5000,
			bypass: true

		});

		overdrive = new tuna.Overdrive({
			outputGain: 1,
			drive: 0.7,
			curveAmount: 1,
			algorithmIndex: 4,
			bypass: 1


		});

		tremolo = new tuna.Tremolo({

			intensity: 5,
			rate: 8,
			stereoPhase: 140,
			bypass: 1

		});
	
		
		 chorus = new tuna.Chorus({
    rate: 1.5,         //0.01 to 8+
    feedback: 0.2,     //0 to 1+
    delay: 0.0100,     //0 to 1
    bypass: 1          //the value 1 starts the effect as bypassed, 0 or 1
       });
	   
	   
	   phaser = new tuna.Phaser({
    rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
    depth: 0.3,                    //0 to 1
    feedback: 0.2,                 //0 to 1+
    stereoPhase: 30,               //0 to 180
    baseModulationFrequency: 700,  //500 to 1500
    bypass: 1
       });
	   
	  cabinet = new tuna.Cabinet({
					makeupGain: 1,                                 //0 to 20
					impulsePath: "impulses/impulse_guitar.wav",    //path to your speaker impulse
					bypass: 1
				});
	   

}



var context = new AudioContext;
tunaDemo();
var song = document.querySelector('audio');
var source = context.createMediaElementSource(song);

source.connect(wahwah.input);
source.connect(tremolo.input);
source.connect(overdrive.input);
source.connect(delay.input);
source.connect(chorus.input);
source.connect(phaser.input);
source.connect(cabinet.input);
wahwah.connect(context.destination);
delay.connect(context.destination);
overdrive.connect(context.destination);
tremolo.connect(context.destination);
chorus.connect(context.destination);
phaser.connect(context.destination);
cabinet.connect(context.destination);


var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');
var f = document.querySelector('.f');
var g = document.querySelector('.g');
var h = document.querySelector('.h');

a.addEventListener('click',function(e){
	console.log(this);
	$(this).toggleClass("border");

	if(delay.bypass){

		delay.bypass = false;

	}

	else {
		delay.bypass = true;
	}

});

b.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(wahwah.bypass){

		wahwah.bypass = 0;

	}

	else {
		wahwah.bypass = 1;
	}

});


c.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(overdrive.bypass){

		overdrive.bypass = 0;

	}

	else {
		overdrive.bypass = 1;
	}

});

d.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(tremolo.bypass){

		tremolo.bypass = 0;

	}

	else {
		tremolo.bypass = 1;
	}

});


f.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(chorus.bypass){

		chorus.bypass = 0;

	}

	else {
		chorus.bypass = 1;
	}

});

g.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(phaser.bypass){

		phaser.bypass = 0;

	}

	else {
		phaser.bypass = 1;
	}

});

h.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(cabinet.bypass){

		cabinet.bypass = 0;

	}

	else {
		cabinet.bypass = 1;
	}

});
