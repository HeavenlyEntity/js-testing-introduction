const { generateText } = require('./util');

// Unit Test Example
test('should output name and age', () => {
    const text = generateText('Alec', 22);
    expect(text).toBe('Alec (22 years old)');
});

// Checking for false positives
test('should output name and age', () => {
    const text = generateText('', null);
    expect(text).toBe(' (`null years old)');
});