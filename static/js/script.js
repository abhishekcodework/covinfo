//1000ms. = 1sec.}

//Modal
localStorage.setItem("score", 50);
var min;
var sec;
var myWindow;
var scorehtml = document.getElementById("score");
var modal = document.getElementById("myModal");

var symptoms=[];
function count() {
    var countdown = 15 * 60 * 1000;

    var timerId = setInterval(function () {
        countdown -= 1000;
        min = Math.floor(countdown / (60 * 1000));

        sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
        sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct
        scorehtml.innerHTML = "SCORE: " + localStorage.getItem("score");
        if (countdown <= 0) {
            alert("Time up!");
            clearInterval(timerId);
            doSomething();
        } else {
            document.getElementById("timer").innerHTML = "TIMER: " + min + " : " + sec;
        }
    }, 1000);
}



var memory_array = ['Itching',  'Skin Rash',    'Nodal Skin Eruptions', 'Continuous Sneezing',  'Shivering',    'Chills',   'Joint Pain',   'Stomach Pain', 'Acidity',  'Ulcers On Tongue', 'Muscle Wasting',   'Vomiting', 'Burning Micturition',  'Spotting Urination',   'Fatigue',  'Weight Gain',  'Anxiety',  'Cold Hands And Feets', 'Mood Swings',  'Weight Loss',  'Restlessness', 'Lethargy', 'Patches In Throat',    'Irregular Sugar Level',    'Cough',    'High Fever',   'Sunken Eyes',  'Breathlessness',   'Sweating', 'Dehydration',  'Indigestion',  'Headache', 'Yellowish Skin',   'Dark Urine', 'Nausea',    'Loss Of Appetite', 'Pain Behind The Eyes', 'Back Pain',    'Constipation', 'Abdominal Pain',   'Diarrhoea',    'Mild Fever',   'Yellow Urine', 'Yellowing Of Eyes',    'Acute Liver Failure',  'Fluid Overload',   'Swelling Of Stomach',  'Swelled Lymph Nodes',  'Malaise',  'Blurred And Distorted Vision', 'Phlegm',   'Throat Irritation',    'Redness Of Eyes',  'Sinus Pressure',   'Runny Nose',   'Congestion',   'Chest Pain',   'Weakness In Limbs',    'Fast Heart Rate',  'Pain During Bowel Movements',  'Pain In Anal Region',  'Bloody Stool', 'Irritation In Anus',   'Neck Pain','Dizziness',    'Cramps',   'Bruising', 'Obesity',  'Swollen Legs', 'Swollen Blood Vessels',    'Puffy Face And Eyes',  'Enlarged Thyroid', 'Brittle Nails',    'Swollen Extremeties',  'Excessive Hunger', 'Extra Marital Contacts',   'Drying And Tingling Lips', 'Slurred Speech',   'Knee Pain',    'Hip Joint Pain',   'Muscle Weakness',  'Stiff Neck',   'Swelling Joints',  'Movement Stiffness',   'Spinning Movements',   'Loss Of Balance',  'Unsteadiness', 'Weakness Of One Body Side',    'Loss Of Smell',    'Bladder Discomfort',   'Foul Smell Of Urine',  'Continuous Feel Of Urine', 'Passage Of Gases', 'Internal Itching', 'Toxic Look (Typhos)',  'Depression',   'Irritability', 'Musclen Pain',  'Altered Sensorium',    'Red Spots Over Body',  'Belly Pain',   'Abnormal Menstruation',    'Dischromic Patches',  'Watering_From_Eyes',   'Increased Appetite',   'Polyuria', 'Family History',   'Mucoid Sputum',    'Rusty Sputum', 'Lack Of Concentration',    'Visual Disturbances',  'Receiving Blood Transfusion',  'Receiving Unsterile Injections',   'Coma', 'Stomach Bleeding', 'Distention Of Abdomen',    'History Of Alcohol Consumption',   'Fluid Overload.1', 'Blood In Sputum',  'Prominent Veins On Calf',  'Palpitations', 'Painful Walking',  'Pus Filled Pimples',   'Blackheads',   'Scurring', 'Skin Peeling', 'Silver Like Dusting',  'Small Dents In Nails', 'Inflammatory Nails',   'Blister',  'Red Sore Around Nose', 'Yellow Crust Ooze'];
var covered_array=[];

for(i=0;i<30;i++){
    covered_array.push(0);
}



var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
var arr=[1,2,3];
var element='<input type="hidden" name="keys" id="h" class="form-control" value="'+ symptoms +'">';
window.onload = function newBoard() {
    var output = '';

    for (var i = 0; i < memory_array.length; i++) {
        document.getElementById('memory_board').innerHTML = memory_array.valueOf();
    }

    tiles_flipped = 0;
    for (var i = 0; i < memory_array.length; i++) {
            output += '<div style="text-size:3px; display: inline; background:blue; color:black; text-align:left;  font-family: Verdana;" id="tile_' + i + '" onclick="tileSelected(this,\'' + (parseInt(i)+1) + '\')"></div>';
       

    }
    document.getElementById('memory_board').innerHTML = output;
    document.getElementById('hidden_element').innerHTML = element;

	memoryFlipEntire();
}


function memoryFlipEntire() {
    for (var i = 0; i < memory_array.length; i++) {
        document.getElementById('tile_' + i + '').style.background = 'white';
        document.getElementById('tile_' + i + '').style.textAlign = "left";

        document.getElementById('tile_' + i + '').innerHTML = memory_array[i];
    }


}


function tileSelected(tile, val){
	index=0
	if(tile.style.background == 'mediumaquamarine'){
	tile.style.background = 'white';
	index=symptoms.indexOf(parseInt(val))
		
    symptoms.splice(index,1)
    document.getElementById('h').value=symptoms;

}else{	tile.style.background = 'mediumaquamarine';
	symptoms.push(parseInt(val))
    document.getElementById('h').value=symptoms;

}

}

function sub(){
	return symptoms;
}

function display(){
}
