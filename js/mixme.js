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
    if($(".name0").val() != ''){
        var shuffledArray = shuffle(classes);

        $(".class0").text(shuffledArray[0]);
        $(".class1").text(shuffledArray[1]);
        $(".class2").text(shuffledArray[2]);
        $(".class3").text(shuffledArray[3]);
        $(".class4").text(shuffledArray[4]);
        $(".class5").text(shuffledArray[5]);
    }
    else{
        $('#notAllNamesEnteredModal').modal();
    }
}

function openCopyModal(){
    if($(".class0").text().length){
        $('#copyModal').modal();

        $("#copyText").val(
            $(".name0").val() + ' will be playing ' + $(".class0").text() + "\r" +
            $(".name1").val() + ' will be playing ' + $(".class1").text() + "\r" +
            $(".name2").val() + ' will be playing ' + $(".class2").text() + "\r" +
            $(".name3").val() + ' will be playing ' + $(".class3").text() + "\r" +
            $(".name4").val() + ' will be playing ' + $(".class4").text() + "\r" +
            $(".name5").val() + ' will be playing ' + $(".class5").text() + "\r\rBrought to you by mixme.tf on mijuuu.github.io"
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
