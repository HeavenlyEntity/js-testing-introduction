const { generateText, checkAndGenerate } = require('./util');

// Unit Test Example
test('should output name and age', () => {
    const text = generateText('Alec', 22);
    expect(text).toBe('Alec (22 years old)');
    // Can have multiple tests cases inside a suite
    /*
        const text2 =  generateText('Jake', 24)
        expect(text2).toBe('Jake (24 years old)');
    */
});

// Checking for false positives
test('should output dataless string', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
    // Checking if nothing is passed into generateText
    /*
        const text2 = generateText();
        expect(text2).toBe('undefined (undefined years old)');
    */
});

// Integgration Test

test('Should generate a valid text output', () => {
    const text = checkAndGenerate('Alec', 22);
    expect(text).toBe('Alec (22 years old)');
})


