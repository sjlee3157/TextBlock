

const textBlock = {
  setup(text) {
    this.text = text.toLocaleLowerCase();
  },
  isPangram() {
// assume it's a string
// assume no non number/ws/letters
    for (let character in text) {
      console.log(text[character])
    }
  }


}

module.exports = textBlock;


// const test = new TextBlock('not a pangram');
// const pangram = text.isPangram();

// const textBlock = new TextBlock('the_quick_brown_fox_jumps_over_the_lazy_dog');
// expect(textBlock.isPangram()).toBe(true);
