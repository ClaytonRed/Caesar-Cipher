// Linking variables to the HTML elements.
    const btnEncrypt = document.querySelector('#encrypt');
    const btnDecrypt = document.querySelector('#decrypt');
    const key = document.querySelector('#key');


// An array containing all of the letters. 
    const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// Initializing 'newText' variable as an empty string.
    let newText = '';


// Adding a function to the 'Encrypt' button.
    btnEncrypt.addEventListener('click', () => {
        const textarea = document.querySelector('#text');
        const keyValue = Number(key.value);
    // For each letter inputted into the text area by the user.
        for (let letter of textarea.value) {
        // Convert each letter into lower case.
            letter = letter.toLowerCase();
        // If the letter array contains an inputted letter, continue to conversion.
            if (!listLetters.includes(letter)) {
                continue
            }

        // Find the inputted letter's place (index) in the letter array.
            const indexLetter = listLetters.findIndex((item) => item === letter)
        // New variable that is the letter's index in the array + the inputted numerical key value.
            let indexNewLetter = indexLetter + keyValue;
        // If the index for the new letter is greater than the amount of letters in the array, then subtract 26 to cycle round to the start of the array.
            if(indexNewLetter > 25) {
                indexNewLetter-= 26;
            }

        // 'newText' variable is populated with the new letters, the loop runs for one letter at a time.
            newText += listLetters[indexNewLetter];
        // The newly created string in 'newText' is displayed in the text area.
            textarea.value = newText;
        }

    // newText variable is reset for the next loop.
        newText = '';
    })

    
// Adding a function to the 'Decrypt' button.
    btnDecrypt.addEventListener('click', () => {
        const textarea = document.querySelector('#text');
        const keyValue = Number(key.value);

        for (const letter of textarea.value) {
            if (!listLetters.includes(letter)) {
                continue
            }
            const indexLetter = listLetters.findIndex((item) => item === letter)
        // New variable that is the letter's index in the array - the inputted numerical key value.
            let indexNewLetter = indexLetter - keyValue;
        // If the index for the new letter is less than the amount of letters in the array, then add 26 to cycle back to the end of the array.
            if(indexNewLetter < 0) {
                indexNewLetter += 26;
            }
            newText += listLetters[indexNewLetter];
            textarea.value = newText;
        }
        newText = '';
    })