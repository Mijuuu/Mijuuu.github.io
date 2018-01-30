//@ts-check

var classes = ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"];

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
    if($("#name0").val() && $("#name1").val() && $("#name2").val() && $("#name3").val() && $("#name4").val() && $("#name5").val() && $("#name6").val() && $("#name7").val() && $("#name8").val()){
        var shuffledArray = shuffle(classes);

        $("#class0").text(shuffledArray[0]);
        $("#class1").text(shuffledArray[1]);
        $("#class2").text(shuffledArray[2]);
        $("#class3").text(shuffledArray[3]);
        $("#class4").text(shuffledArray[4]);
        $("#class5").text(shuffledArray[5]);
        $("#class6").text(shuffledArray[6]);
        $("#class7").text(shuffledArray[7]);
        $("#class8").text(shuffledArray[8]);
    }
    else{
        $('#notAllNamesEnteredModal').modal();
    }
}

function openCopyModal(){
    if($("#class0").text()){
        $('#copyModal').modal();

        $("#copyText").val(
            $("#name0").val() + ' will be playing ' + $("#class0").text() + "\r" +
            $("#name1").val() + ' will be playing ' + $("#class1").text() + "\r" +
            $("#name2").val() + ' will be playing ' + $("#class2").text() + "\r" +
            $("#name3").val() + ' will be playing ' + $("#class3").text() + "\r" +
            $("#name4").val() + ' will be playing ' + $("#class4").text() + "\r" +
            $("#name5").val() + ' will be playing ' + $("#class5").text() + "\r" +
            $("#name6").val() + ' will be playing ' + $("#class6").text() + "\r" +
            $("#name7").val() + ' will be playing ' + $("#class7").text() + "\r" +
            $("#name8").val() + ' will be playing ' + $("#class8").text() + "\r\rBrought to you by mixmehl.tf on mijuuu.github.io"
        );
    }
    else{
        $('#tableNotFilledModal').modal();
    }
}

function copyToClipboard(){
    var copyText = $("#copyText");
    copyText.select();
    document.execCommand("Copy");
}
