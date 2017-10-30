var classes = ["Scout", "Scout", "Roaming Soldier", "Pocket Soldier", "Demoman", "Medic"];

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

    var name0 = document.getElementById('name0').value;
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var name4 = document.getElementById('name4').value;
    var name5 = document.getElementById('name5').value;

    document.getElementById("copyContent").innerHTML =
       name0 + ' will be playing ' + shuffledArray[0] + "<br/>" + 
       name1 + ' will be playing ' + shuffledArray[1] + "<br/>" +
       name2 + ' will be playing ' + shuffledArray[2] + "<br/>" + 
       name3 + ' will be playing ' + shuffledArray[3] + "<br/>" + 
       name4 + ' will be playing ' + shuffledArray[4] + "<br/>" + 
       name5 + ' will be playing ' + shuffledArray[5] + "<br/>";
}