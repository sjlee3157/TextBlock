const textBlock = require('../src/textblock');

describe('TextBlock class',  () =>  {

  test('TextBlock is defined', function() {
    expect(textBlock).toBeDefined();
  });

  describe('isPangram()', () => {
    test('isPangram() is defined', () => {
      expect(textBlock.isPangram).toBeDefined();
    });

    test('empty sentence',  () => {
      // const textBlock = new TextBlock('');
      textBlock.setup('');
      expect(textBlock.isPangram()).toBe(false);
    });

    test('works with a pangram with only lower case', () =>  {
        textBlock.setup('the quick brown fox jumps over the lazy dog');
        expect(textBlock.isPangram()).toBe(true);
    });

    test("missing character 'x'",  () =>  {
      textBlock.setup('the quick brown fo jumps over the lazy dog');
      expect(textBlock.isPangram()).toBe(false);
    });

    test('pangram with underscores instead of spaces works', function () {
      textBlock.setup('the_quick_brown_fox_jumps_over_the_lazy_dog');
      expect(textBlock.isPangram()).toBe(true);
    });

    test('pangram with numbers',  () => {
      textBlock.setup('the 1735435quick brown fox jumps over the 98797000laz009y dog');
      expect(textBlock.isPangram()).toBe(true);
    });

    // Write your own test case
    test('is case-insensitive',  () => {
      textBlock.setup(' uthe 1735435QUICK brown fox jumps oveR rrthe 98797000laz009y dog ');
      expect(textBlock.isPangram()).toBe(true);
    });

  });

  describe('isPalindrome()', () => {

    test('isPangram() is defined', () => {
      expect(textBlock.isPalindrome).toBeDefined();
    });

    test('empty sentence',  () => {
      textBlock.setup('');
      expect(textBlock.isPalindrome()).toBe(false);
    });

    test('works with a palindrome with only lower case', () =>  {
        textBlock.setup('racecar');
        expect(textBlock.isPalindrome()).toBe(true);
    });

    test('works with an odd number of letters', () =>  {
        textBlock.setup('o');
        expect(textBlock.isPalindrome()).toBe(true);
    });

    test('works with an even number of letters', () =>  {
        textBlock.setup('oo');
        expect(textBlock.isPalindrome()).toBe(true);
    });

    test('not a palindrome', () =>  {
        textBlock.setup('rahr rah har har');
        expect(textBlock.isPalindrome()).toBe(false);
    });

    test('palindrome with numbers, whitespace, and symbols', function () {
      textBlock.setup('#9h23 h 0!');
      expect(textBlock.isPalindrome()).toBe(true);
    });

    test('is case-insensitive',  () => {
      textBlock.setup('Too hot to hoot.');
      expect(textBlock.isPalindrome()).toBe(true);
    });
  });
});
