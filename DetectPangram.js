function isPangram(input) {
    let lowerInput = input.toLowerCase();

    let charCode = 97;
    let testLetter = String.fromCharCode(charCode);
    while (lowerInput.includes(testLetter)) {

        charCode++;
        testLetter = String.fromCharCode(charCode);
        if (charCode > 122) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

isPangram('quick foxYtRe');
isPangram('The quick brown fox jumps over the lazy dog');
isPangram('This isn\'t a pangram!');