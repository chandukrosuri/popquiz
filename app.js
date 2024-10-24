//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is the difference between a jungle and a rain forest?"
choice1[1]="No difference. Simply two different ways in referring to the same thing."
choice1[2]="A jungle in general receives less rain than a rain forest."
choice1[3]="A jungle refers to the thickest area of a rain forest"
choice1[4]="A jungle and a rain forest each contain their own group of distinct plants and animals."

question[2]="What is the world's most common religion?"
choice2[1]="Christianity"
choice2[2]="Buddhism"
choice2[3]="Hinduism"
choice2[4]="Muslim"

question[3]="Which city ranks as the world\'s most populous city?"
choice3[1]="New York (US)"
choice3[2]="Mexico City (Mexico)"
choice3[3]="Tokyo (Japan)"
choice3[4]="Shanghai (China)"

question[4]="According to statistics, what kind of sites on the net are the most popular?"
choice4[1]="Adult content sites"
choice4[2]="Portal sites"
choice4[3]="Chat sites"
choice4[4]="News sites"

question[5]="As of June 1998, how much is Microsoft Chairman Bill Gates's net worth?"
choice5[1]="10 million US"
choice5[2]="10 billion US"
choice5[3]="35 billion US"
choice5[4]="50 billion US"

solution[1]="c"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="d"

var whichone = 1;
var tempmn = document.instantquiz.thequestion;

function generatequestions() {
    document.instantquiz.theresponse.selectedIndex = 0;
    if (!document.instantquiz.cmode.checked || whichone >= total + 1 || whichone <= 0) {
        document.instantquiz.thesolution.value = '';
    }
    if (whichone >= total + 1) {
        tempmn.value = "End of quiz";
    } else {
        tempmn.value = whichone + ") " + question[whichone] + "\n\n" +
            "a) " + eval('choice' + whichone + '[1]') + "\n" +
            "b) " + eval('choice' + whichone + '[2]') + "\n" +
            "c) " + eval('choice' + whichone + '[3]') + "\n" +
            "d) " + eval('choice' + whichone + '[4]');
        if (document.instantquiz.cmode.checked) {
            document.instantquiz.thesolution.value = solution[whichone];
        }
    }
}

function responses() {
    var temp2 = document.instantquiz.theresponse;
    var temp3 = temp2.options[temp2.selectedIndex].text;
    if (temp3 != solution[whichone] && temp2.selectedIndex != 0) {
        document.instantquiz.thesolution.value = "Sorry, the correct answer is " + solution[whichone];
    } else if (temp2.selectedIndex != 0) {
        document.instantquiz.thesolution.value =
            compliments[Math.round(Math.random() * compliments.length - 1)];
    }
}

generatequestions();