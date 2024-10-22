module.exports = function toReadable (number) {
        const ones = [
            '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
            'seventeen', 'eighteen', 'nineteen'
        ];
        
        const tens = [
            '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 
            'ninety'
        ];
        
        const thousands = [
            '', 'one thousand'
        ];
        
        if (number === 0) return 'zero';
        if (number < 0 || number > 9999) return '';
        
        let result = '';
        
        if (number >= 1000) {
            result += thousands[Math.floor(number / 1000)];
            number %= 1000;
            if (number > 0) result += ' ';
        }
        
        if (number >= 100) {
            result += ones[Math.floor(number / 100)] + ' hundred';
            number %= 100;
            if (number > 0) result += ' ';
        }
        
        if (number < 20) {
            result += ones[number];
        } else {
            result += tens[Math.floor(number / 10)];
            if (number % 10 > 0) {
                result += ' ' + ones[number % 10];
            }
        }
        
        return result.trim();
}
