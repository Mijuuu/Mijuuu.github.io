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

function d_mix(){
    if($("#d_name0").val() && $("#d_name1").val() && $("#d_name2").val() && $("#d_name3").val() && $("#d_name4").val() && $("#d_name5").val()){
        var shuffledArray = shuffle(classes);

        $("#d_class0").text(shuffledArray[0]);
        $("#d_class1").text(shuffledArray[1]);
        $("#d_class2").text(shuffledArray[2]);
        $("#d_class3").text(shuffledArray[3]);
        $("#d_class4").text(shuffledArray[4]);
        $("#d_class5").text(shuffledArray[5]);
    }
    else{
        $('#notAllNamesEnteredModal').modal();
    }
}

function m_mix(){
    if($("#m_name0").val() && $("#m_name1").val() && $("#m_name2").val() && $("#m_name3").val() && $("#m_name4").val() && $("#m_name5").val()){
        var shuffledArray = shuffle(classes);

        $("#m_class0").text(shuffledArray[0]);
        $("#m_class1").text(shuffledArray[1]);
        $("#m_class2").text(shuffledArray[2]);
        $("#m_class3").text(shuffledArray[3]);
        $("#m_class4").text(shuffledArray[4]);
        $("#m_class5").text(shuffledArray[5]);
    }
    else{
        $('#notAllNamesEnteredModal').modal();
    }
}

function d_openCopyModal(){
    if($("#d_class0").text()){
        $('#copyModal').modal();

        $("#d_copyText").val(
            $("#d_name0").val() + ' will be playing ' + $("#d_class0").text() + "\r" +
            $("#d_name1").val() + ' will be playing ' + $("#d_class1").text() + "\r" +
            $("#d_name2").val() + ' will be playing ' + $("#d_class2").text() + "\r" +
            $("#d_name3").val() + ' will be playing ' + $("#d_class3").text() + "\r" +
            $("#d_name4").val() + ' will be playing ' + $("#d_class4").text() + "\r" +
            $("#d_name5").val() + ' will be playing ' + $("#d_class5").text() + "\r\rBrought to you by mixme.tf on mijuuu.github.io"
        );
    }
    else{
        $('#tableNotFilledModal').modal();
    }
}

function m_openCopyModal(){
    if($("#m_class0").text()){
        $('#copyModal').modal();

        $("#m_copyText").val(
            $("#m_name0").val() + ' will be playing ' + $("#m_class0").text() + "\r" +
            $("#m_name1").val() + ' will be playing ' + $("#m_class1").text() + "\r" +
            $("#m_name2").val() + ' will be playing ' + $("#m_class2").text() + "\r" +
            $("#m_name3").val() + ' will be playing ' + $("#m_class3").text() + "\r" +
            $("#m_name4").val() + ' will be playing ' + $("#m_class4").text() + "\r" +
            $("#m_name5").val() + ' will be playing ' + $("#m_class5").text() + "\r\rBrought to you by mixme.tf on mijuuu.github.io"
        );
    }
    else{
        $('#tableNotFilledModal').modal();
    }
}

function d_copyToClipboard(){
    var copyText = $("#d_copyText");
    copyText.select();
    document.execCommand("Copy");
}

function m_copyToClipboard(){
    var copyText = $("#m_copyText");
    copyText.select();
    document.execCommand("Copy");
}
