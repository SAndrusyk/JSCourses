function sum(a,b){
    return(a+b);
}
function checkPrime(n){
    var i;
    if (n===1) return false;

    for (i=n-1; i>1; i--){
        if (n % i === 0) return false;

    }
    return true;
}

function checkPhonenumber(num) {

    var numClear = numberClearing(num), numCode;
//    num = prompt ('??????? ????? ???????? ????????');
//    num = '38(091)-123-45-67';
//    document.write('????????? ????? ???????? : ' + num + "<br/>");

     //

    if (numClear.substr(0, 3) === '380') {
        numClear = numClear.substr(3);
    }
    numCode = numClear.substr(0, 2);


    switch (numCode){
        case   '91':
            return 'UTEL';
            break;

        case   '92':
            return 'PeopleNet';
            break;

        case   '94':
            return 'InterTelecom';
            break;

        case   '63':
        case   '93':
        case   '73':
            return 'Life';
            break;

        case   '39':
            return 'GoldenTelecom';
            break;

        case   '50':
        case   '66':
        case   '95':
        case   '99':
            return 'MTS';
            break;

        case   '67':
        case   '68':
        case   '96':
        case   '97':
        case   '98':
            return 'Kyivstar';
            break;

    }



    function numberClearing(numIn) {
        // Remove all symbols except numbers from string
        var numOut = '';
        for (var i = 0; i < numIn.length; i++) {
            if (isNumber09(numIn.charAt(i))) {
                numOut += numIn.charAt(i);
            }
        }
        return numOut;
    }

    function isNumber09(oneChar) {
        // Is this symbol a number?
        return (oneChar.charCodeAt(0) > 47 && oneChar.charCodeAt(0) < 58);
    }

}