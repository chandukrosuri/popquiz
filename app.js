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

question[1]="Which country has the busiest metro system?"
choice1[1]="United States of America"
choice1[2]="Sweden"
choice1[3]="United Kingdom"
choice1[4]="Japan"

question[2]="What is the most streamed song on YouTube?"
choice2[1]="Despacito"
choice2[2]="Gangnam Style"
choice2[3]="Shape of You"
choice2[4]="See you again"

question[3]="When did world war-II end?"
choice3[1]="1947"
choice3[2]="1919"
choice3[3]="1945"
choice3[4]="1947"

question[4]="What is the second most spoken language in Europe"
choice4[1]="Russian"
choice4[2]="French"
choice4[3]="German"
choice4[4]="Italian"

question[5]="Which space craft's booster was captured by SpaceX recently?"
choice5[1]="Tesla Model X"
choice5[2]="Falcon-9 heavy"
choice5[3]="Starlink"
choice5[4]="Starship"

solution[1]="d"
solution[2]="a"
solution[3]="c"
solution[4]="c"
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