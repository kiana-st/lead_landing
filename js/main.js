const destinationUrl = "https://api.shadziclub.com/api/class/request/new";


function handleForm(e) {
    e.preventDefault();
    var form_data = new FormData(document.getElementById("form"));
    fetch('https://api.shadziclub.com/api/class/request/new', {
        method: 'POST',
        credentials: undefined,
        body: form_data,
    }).then(function (response) {
        localStorage.setItem("fullname", document.getElementById("inputName").value);
        localStorage.setItem("mobile", document.getElementById("inputPhone").value);
        localStorage.setItem("classname", document.getElementById("inputClass").value);
    }).catch(function (error) {
        console.error(error);
    });

}


function onDocLoad() {
    if (inputName = localStorage.getItem("fullname")) {
        document.getElementById("inputName").value = inputName;
    }
    if (mobile = localStorage.getItem("mobile")) {
        document.getElementById("inputPhone").value = inputPhone;
    }
    if (inputClass = localStorage.getItem("classname")) {
        document.getElementById("inputClass").value = inputClass;
    }
    return true;
}


var janelaPopUp = new Object();
janelaPopUp.abre = function (id, classes, titulo, corpo, functionCancelar, functionEnviar, textoCancelar, textoEnviar, bgcolor) {
    var cancelar = (textoCancelar !== undefined) ? textoCancelar : 'بازگشت';
    var enviar = (textoEnviar !== undefined) ? textoEnviar : 'رفتن به شادزی(4)';
    classes += ' ';
    var classArray = classes.split(' ');
    classes = '';
    classesFundo = '';
    var classBot = '';
    $.each(classArray, function (index, value) {
        switch (value) {
            case 'alert':
                classBot += ' alert ';
                break;
            case 'green':
                classesFundo += this + ' ';
            case 'blue':
                classesFundo += this + ' ';
            case 'red':
                classesFundo += this + ' ';
            case 'white':
                classesFundo += this + ' ';
            case 'orange':
                classesFundo += this + ' ';
            case 'purple':
                classesFundo += this + ' ';
            default:
                classes += this + ' ';
                break;
        }
    });
    var popFundo = '<div id="popFundo_' + id + '" class="popUpFundo ' + classesFundo + '" style="background-color:' + bgcolor + '"></div>'
    var janela = '<div id="' + id + '" class="popUp ' + classes + '"><h1>' + titulo + "</h1><div><span>" + corpo + "</span></div><button class='puCancelar " + classBot + "' id='" + id + "_cancelar' data-parent=" + id + ">" + cancelar + "</button><button class='puEnviar " + classBot + "' data-parent=" + id + " id='" + id + "_enviar'>" + enviar + "</button></div>";
    $("window, body").css('overflow', 'hidden');

    $("body").append(popFundo);
    $("body").append(janela);
    $("body").append(popFundo);
    //alert(janela);
    $("#popFundo_" + id).fadeIn("fast");
    $("#" + id).addClass("popUpEntrada");

    $("#" + id + '_cancelar').on("click", function () {
        if ((functionCancelar !== undefined) && (functionCancelar !== '')) {
            functionCancelar();

        } else {
            janelaPopUp.fecha(id);
        }
    });
    $("#" + id + '_enviar').on("click", function () {
        if ((functionEnviar !== undefined) && (functionEnviar !== '')) {
            functionEnviar();
        } else {
            janelaPopUp.fecha(id);
        }
    });

};
janelaPopUp.fecha = function (id) {
    if (id !== undefined) {
        $("#" + id).removeClass("popUpEntrada").addClass("popUpSaida");

        $("#popFundo_" + id).fadeOut(1000, function () {
            $("#popFundo_" + id).remove();
            $("#" + $(this).attr("id") + ", #" + id).remove();
            if (!($(".popUp")[0])) {
                $("window, body").css('overflow', 'auto');
            }
        });


    } else {
        $(".popUp").removeClass("popUpEntrada").addClass("popUpSaida");

        $(".popUpFundo").fadeOut(1000, function () {
            $(".popUpFundo").remove();
            $(".popUp").remove();
            $("window, body").css('overflow', 'auto');
        });


    }
}
// $("button").on("click", function(){
//     var goToShadzi = function(){
//         setTimeout(()=>{

//         })
//     }


//    let arr = '';
//    if($("#inputName").val()==""){
//        arr+="please fill full name\r\n";
//    } 
//    if($("#inputPhone").val()==""){
//     arr+="please fill Mobile number\r\n";
// } 

//    if (arr !=''){
//     alert(arr);

//     return false;
//    }

$('button').on('click', function () {
    if ($("#inputName").val() == "" || $("#inputPhone").val() == "" || $("#inputClass").val() == "") {
        return true;
    }
    var gotoshadzi = function () {
        window.location.href = "https://shadzi.club/";
    }
    var myid = "aassdd";
    var myColor = $(this).css("background-color");
    janelaPopUp.abre(myid, $("#size").val() + " " + $(this).html() + ' ' + $("#mode").val() + " green", " فرم شما", "درخواست شما ثبت شد <br> تیم شادزی تا 48 ساعت آینده با شما تماس خواهد گرفت", undefined, gotoshadzi, undefined, undefined, myColor);
    var counter = 4;
    var int = setInterval(function () {
        counter--;
        $('#' + myid + '_enviar').text('رفتن به شادزی(' + counter + ')');
        if ($('#' + myid + '_enviar').val() !== undefined) {
            if (counter == 0) {

                clearInterval(int);
                window.location.href = "https://shadzi.club/";
            }
        } else {
            clearInterval(int);

        }
    }, 1000);

});
// janelaPopUp.abre( "example", 'p red',  'Example' ,  'chosse a configuration and click the color!');
// setTimeout(function(){janelaPopUp.fecha('example');}, 2000);


$(document).ready(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("inputPhone"), function (value) {

    var res = value.charCodeAt(0);
    var PersianOrASCII = /^[\u06F0-\u06F90-9]+$/
    if (isNaN(res)) {
        PersianOrASCII = "";
    }

    if (PersianOrASCII !== "")
        return PersianOrASCII.test(value);
    return true;
    /* return /^[۱۲۳۴۵۶۷۸۹۰0-9]+$/.test(value); */

});

setInputFilter(document.getElementById("inputName"), function (value) {
    var res = value.charCodeAt(0);
    var PersianOrASCII = /^[\u0600-\u06FFa-zA-\s]+$/
    if (isNaN(res)) {
        PersianOrASCII = "";
    }

    if (PersianOrASCII !== "")
        return PersianOrASCII.test(value);
    return true;

});

setInputFilter(document.getElementById("inputClass"), function (value) {
    var res = value.charCodeAt(0);
    var PersianOrASCII = /^[\u0600-\u06FFa-zA-Z\s]+$/
    if (isNaN(res)) {
        PersianOrASCII = "";
    }

    if (PersianOrASCII !== "")
        return PersianOrASCII.test(value);
    return true;
});