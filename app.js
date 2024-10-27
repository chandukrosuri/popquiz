var total = 10;
var question = new Array();
for (let i = 1; i <= total + 1; i++) {
    eval("choice" + i + " = new Array()");
}
var solution = new Array();

var compliments = [
    "Excellent!",
    "You're a true Autobot!",
    "You must be Optimus Prime in disguise!",
    "Right on, Cybertronian warrior!",
    "Correct! Roll out!",
    "Great Job!",
    "Good work, hero!"
];

// Define questions and choices
question[1] = "Who is the leader of the Autobots?";
choice1[1] = "Optimus Prime";
choice1[2] = "Megatron";
choice1[3] = "Bumblebee";
choice1[4] = "Starscream";

question[2] = "Which planet is home to the Transformers?";
choice2[1] = "Cybertron";
choice2[2] = "Earth";
choice2[3] = "Jupiter";
choice2[4] = "Krypton";

question[3] = "What is Bumblebee’s alternate mode on Earth?";
choice3[1] = "Motorbike";
choice3[2] = "Jet";
choice3[3] = "Yellow Camaro";
choice3[4] = "Truck";

question[4] = "Which Transformer can combine to form Devastator?";
choice4[1] = "Constructicons";
choice4[2] = "Dinobots";
choice4[3] = "Aerialbots";
choice4[4] = "Insecticons";

question[5] = "Who is the arch-nemesis of Optimus Prime?";
choice5[1] = "Shockwave";
choice5[2] = "Soundwave";
choice5[3] = "Megatron";
choice5[4] = "Galvatron";

// New Questions Added
question[6] = "Which faction does Megatron lead?";
choice6[1] = "Decepticons";
choice6[2] = "Autobots";
choice6[3] = "Maximals";
choice6[4] = "Predacons";

question[7] = "What is the name of Optimus Prime’s brother?";
choice7[1] = "Rodimus";
choice7[2] = "Sentinel Prime";
choice7[3] = "Ultra Magnus";
choice7[4] = "Megatron";

question[8] = "Who transforms into a T-Rex in 'Beast Wars'?";
choice8[1] = "Optimus Primal";
choice8[2] = "Grimlock";
choice8[3] = "Megatron";
choice8[4] = "Dinobot";

question[9] = "Which Transformer can time travel?";
choice9[1] = "Alpha Trion";
choice9[2] = "Vector Prime";
choice9[3] = "Starscream";
choice9[4] = "Shockwave";

question[10] = "What is the Matrix of Leadership?";
choice10[1] = "A source of ultimate power";
choice10[2] = "A powerful weapon";
choice10[3] = "An artifact that grants wisdom";
choice10[4] = "A prison for Megatron";

// Solutions for the new questions
solution[1] = "a";
solution[2] = "a";
solution[3] = "c";
solution[4] = "a";
solution[5] = "c";
solution[6] = "a";
solution[7] = "d";
solution[8] = "c";
solution[9] = "b";
solution[10] = "c";

var whichone = 1;

// Function to generate questions
function generatequestions() {
    const tempmn = document.instantquiz.thequestion;
    const solutionInput = document.instantquiz.thesolution;
    const cmode = document.instantquiz.cmode.checked;

    document.instantquiz.theresponse.selectedIndex = 0;

    if (whichone >= total + 1) {
        tempmn.value = "End of quiz";
        solutionInput.value = '';
        return;
    }

    tempmn.value = whichone + ") " + question[whichone] + "\n\n" +
        "a) " + eval('choice' + whichone + '[1]') + "\n" +
        "b) " + eval('choice' + whichone + '[2]') + "\n" +
        "c) " + eval('choice' + whichone + '[3]') + "\n" +
        "d) " + eval('choice' + whichone + '[4]');

    solutionInput.value = cmode ? solution[whichone] : '';
}

// Function to handle user responses
function responses() {
    const temp2 = document.instantquiz.theresponse;
    const temp3 = temp2.options[temp2.selectedIndex].text;

    if (temp3 != solution[whichone] && temp2.selectedIndex != 0) {
        document.instantquiz.thesolution.value = "Sorry, the correct answer is " + solution[whichone];
    } else if (temp2.selectedIndex != 0) {
        document.instantquiz.thesolution.value = compliments[Math.floor(Math.random() * compliments.length)];
    }
}

// Initial question generation
generatequestions();