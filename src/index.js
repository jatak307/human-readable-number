module.exports = function toReadable (number) {
    let ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    let tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    let hundred = ' hundred';
    let output = '';
    let numString = number.toString();
  
    if (number == 0) {
        return 'zero';
    }
  
    if (number < 20) {
        output = ones[number];
        return output;
    }
    
    if ( numString.length == 3 ) {
        output  = ones[parseInt(numString.charAt(0))] + hundred;
        number = number % 100 ;
        numString = number.toString() ;
    }
  
    if ( number < 20 ) {
        output += ' ' + ones[number] ;
    } else {
        output += ' ' + tens[parseInt(numString.charAt(0))];
        output += ' ' + ones[parseInt(numString.charAt(1))];
    }
    
    return output.trim();
}
