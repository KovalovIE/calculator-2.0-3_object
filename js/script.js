window.onload = init;
function init() {
    var td = document.getElementsByTagName('td');
    for (var i = 0; i < td.length; i++) {
        td[i].addEventListener('click', addValue)
    }
    function addValue(eventObj) {
        var input = eventObj.target;
        console.log(input)
        var name = input.id;
        console.log(name)
        var numberId = document.getElementById(name)
        if (numberId !== null) {
            var valueScoreboard = document.getElementById('scoreboard').value += numberId.value;
        }
    }

    var btnResult = document.querySelector('.result');
    var btnClear = document.querySelector('.clear');
    var x2 = document.querySelector('.x2');
    var xy = document.getElementById('xy');
    var x3 = document.querySelector('.x3');
    var x10 = document.querySelector('.x10');
    var x1Division = document.querySelector('.x1-division');
    var factorial = document.querySelector('.factorial');
    var sin = document.querySelector('.sin');
    var cos = document.querySelector('.cos');
    var tan = document.querySelector('.tan');
    var asin = document.querySelector('.asin');
    var acos = document.querySelector('.acos');
    var atan = document.querySelector('.atan');
    var sqrt = document.querySelector('.square-root');
    var deleteSymbol = document.querySelector('.delete-symbol');
    var changeSign = document.querySelector('.change-sign');

    btnResult.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        console.log(inputResult);
        if (inputResult.split('+').length == 2) {
            var rr = parseFloat(inputResult.split('+')[0]) + parseFloat(inputResult.split('+')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('/').length == 2) {
            var rr = parseFloat(inputResult.split('/')[0]) / parseFloat(inputResult.split('/')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('-').length == 2) {
            var rr = parseFloat(inputResult.split('-')[0]) - parseFloat(inputResult.split('-')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('*').length == 2) {
            var rr = parseFloat(inputResult.split('*')[0]) * parseFloat(inputResult.split('*')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('^').length == 2) {
            var rr = parseFloat(inputResult.split('^')[0]);
            var result = 1;
            for (var i = 0; i < parseFloat(inputResult.split('^')[1]); i++) {
                result = result * rr
            }
            val.value = '';
            val.value = result;
        }
    });

    btnClear.addEventListener('click', function() {
        document.getElementById('scoreboard').value = ''
    });

    x2.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = parseFloat(inputResult) * parseFloat(inputResult)
    });

    x3.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = parseFloat(inputResult) * parseFloat(inputResult) * parseFloat(inputResult)
    });

    x10.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        var rr = 10;
        var result = 1;
        for (var i = 0; i < inputResult; i++) {
            result = result * rr
        }
        val.value = '';
        val.value = result;
    });

    x1Division.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        console.log(inputResult)
        val.value = '';
        val.value = 1/inputResult;
    });

    factorial.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        var j = 1;
        for (var i = 1; i <= inputResult; i++) {
            j = j * i
        }
        val.value = '';
        val.value = j;
    });

    sin.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.sin(inputResult * (Math.PI / 180));
    });

    cos.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.cos(inputResult * (Math.PI / 180));
    });

    tan.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.tan(inputResult * (Math.PI / 180));
    });
    asin.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.asin(inputResult * (Math.PI / 180));
    });

    acos.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.acos(inputResult * (Math.PI / 180));
    });

    atan.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.atan(inputResult * (Math.PI / 180));
    });

    sqrt.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = Math.sqrt(inputResult)
    });

    deleteSymbol.addEventListener('click', function () {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        val.value = '';
        val.value = inputResult.substring(0, inputResult.length - 1);
    });

    changeSign.addEventListener('click', function () {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        console.log(inputResult.charAt(0));
        val.value = '';
        if (inputResult.charAt(0) == '-') {
            val.value = inputResult.substring(1);
        } else {
            val.value = '-' + inputResult;
        }
    });

}

