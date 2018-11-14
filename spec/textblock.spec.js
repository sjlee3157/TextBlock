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
      const textBlock = new TextBlock('');

      expect(textBlock.isPangram()).toBe(false);
    });

    test('works with a pangram with only lower case', () =>  {
        const textBlock = new TextBlock('the quick brown fox jumps over the lazy dog');
        expect(textBlock.isPangram()).toBe(true);
    });

    test("missing character 'x'",  () =>  {
      const textBlock = new TextBlock('the quick brown fo jumps over the lazy dog');
      expect(textBlock.isPangram()).toBe(false);
    });

    test('pangram with underscores instead of spaces works', function () {
      const textBlock = new TextBlock('the_quick_brown_fox_jumps_over_the_lazy_dog');
      expect(textBlock.isPangram()).toBe(true);
    });

    test('pangram with numbers',  () => {
      const textBlock = new TextBlock('the 1735435quick brown fox jumps over the 98797000laz009y dog');
      expect(textBlock.isPangram()).toBe(true);
    });

    // Write your own test case
    test('is case-insensitive',  () => {
      const textBlock = new TextBlock(' uthe 1735435QUICK brown fox jumps oveR rrthe 98797000laz009y dog ');
      expect(textBlock.isPangram()).toBe(true);
    });

  });

  describe('isPalindrome()', () => {

  });
});
