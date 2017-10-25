//Henry's javascript
var classes = ["Pocket Scout", "Aggressive Scout", "Roaming Soldier", "Pocket Soldier", "Demoman", "Medic"];

function shuffle(array){
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function mix(){
    var shuffledArray = shuffle(classes);
    document.getElementById("class0").innerHTML = shuffledArray[0];
    document.getElementById("class1").innerHTML = shuffledArray[1];
    document.getElementById("class2").innerHTML = shuffledArray[2];
    document.getElementById("class3").innerHTML = shuffledArray[3];
    document.getElementById("class4").innerHTML = shuffledArray[4];
    document.getElementById("class5").innerHTML = shuffledArray[5];
}