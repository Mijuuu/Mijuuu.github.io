//@ts-check

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
    if(document.getElementById('name0').value !== "" && document.getElementById('name1').value !== "" && document.getElementById('name2').value !== "" && document.getElementById('name3').value !== "" && document.getElementById('name4').value !== "" && document.getElementById('name5').value !== ""){
        var shuffledArray = shuffle(classes);
        
        if(document.getElementById("class0").innerHTML === ""){
            document.getElementById("class0").innerHTML = shuffledArray[0];
        }
        if(document.getElementById("class1").innerHTML === ""){
            document.getElementById("class1").innerHTML = shuffledArray[1];
        }
        if(document.getElementById("class2").innerHTML === ""){
            document.getElementById("class2").innerHTML = shuffledArray[2];
        }
        if(document.getElementById("class3").innerHTML === ""){
            document.getElementById("class3").innerHTML = shuffledArray[3];
        }
        if(document.getElementById("class4").innerHTML === ""){
            document.getElementById("class4").innerHTML = shuffledArray[4];
        }
        if(document.getElementById("class5").innerHTML === ""){
            document.getElementById("class5").innerHTML = shuffledArray[5];
        }
    }
    else{
        $('#notAllNamesEnteredModal').modal();
    }
}

function openCopyModal(){
    if(document.getElementById('class0').textContent !== ""){
        $('#copyModal').modal();
        
        var name0 = document.getElementById('name0').value;
        var name1 = document.getElementById('name1').value;
        var name2 = document.getElementById('name2').value;
        var name3 = document.getElementById('name3').value;
        var name4 = document.getElementById('name4').value;
        var name5 = document.getElementById('name5').value;
        
        var shuffledClass0 = document.getElementById("class0").innerHTML;
        var shuffledClass1 = document.getElementById("class1").innerHTML;
        var shuffledClass2 = document.getElementById("class2").innerHTML;
        var shuffledClass3 = document.getElementById("class3").innerHTML;
        var shuffledClass4 = document.getElementById("class4").innerHTML;
        var shuffledClass5 = document.getElementById("class5").innerHTML;
        
        document.getElementById("copyText").innerHTML = 
        name0 + ' will be playing ' + shuffledClass0 + "\r" + 
        name1 + ' will be playing ' + shuffledClass1 + "\r" +
        name2 + ' will be playing ' + shuffledClass2 + "\r" + 
        name3 + ' will be playing ' + shuffledClass3 + "\r" + 
        name4 + ' will be playing ' + shuffledClass4 + "\r" + 
        name5 + ' will be playing ' + shuffledClass5 + "\r\rBrought to you by mixme.tf on mijuuu.github.io";
    }
    else{
        $('#tableNotFilledModal').modal();
    }
}

function copyToClipboard(){
    var copyText = document.getElementById("copyText");
    copyText.select();
    document.execCommand("Copy");
}

function fixingClassesModal(){
    $('#chooseClassModal').modal();
}

function classChosen(classString){
    if(document.getElementById("class0").innerHTML === ""){
        document.getElementById("class0").innerHTML = classString;
    }
    else if(document.getElementById("class1").innerHTML === ""){
        document.getElementById("class1").innerHTML = classString;
    }
    else if(document.getElementById("class2").innerHTML === ""){
        document.getElementById("class2").innerHTML = classString;
    }
    else if(document.getElementById("class3").innerHTML === ""){
        document.getElementById("class3").innerHTML = classString;
    }
    else if(document.getElementById("class4").innerHTML === ""){
        document.getElementById("class4").innerHTML = classString;
    }
    else if(document.getElementById("class5").innerHTML === ""){
        document.getElementById("class5").innerHTML = classString;
    }
}

function popArray(classString){
    
}