class ReadMoreController extends Stimulus.Controller {
    static get targets() {
      return ["content", "moreButton", "lessButton"]
    }
  
    static get classes() {
      return ["hide"]
    }
  
    static get values() {
      return { lines: Number }
    }
  
    connect() {
      this.content = this.contentTarget.textContent;
      this.render()
    }
  
    render() {
      this.showAllContent()
  
      if (this.height() > this.expectedHeight()) {
        this.showLess()
      } else {
        this.showAllContent()
        this.hide(this.moreButtonTarget);
        this.hide(this.lessButtonTarget);
      }
    }
  
    showMore() {
      this.showAllContent();
      this.hide(this.moreButtonTarget);
      this.show(this.lessButtonTarget);
    }
  
    showLess() {
      this.truncateContent();
      this.hide(this.lessButtonTarget);
      this.show(this.moreButtonTarget);
    }
  
    showAllContent() {
      this.removeContent();
      this.wordsList().forEach((word) => this.addWordToContent(word))
    }
  
    truncateContent() {
      this.calculateWordsToDisplayWhenTruncated();
      this.renderTrucatedContentWithEllipsis();
    }
  
    calculateWordsToDisplayWhenTruncated() {
      this.wordsToDisplayWhenTrucated = [];
      this.removeContent();
      this.wordsList().forEach((word) => {
        if (this.height() < this.expectedHeight()) {
          this.wordsToDisplayWhenTrucated.push(word)
          this.addWordToContent(word)
        }
      })
    }
  
    renderTrucatedContentWithEllipsis() {
      this.wordsToDisplayWhenTrucated.pop()
      this.removeContent();
      this.wordsToDisplayWhenTrucated.forEach((word) => this.addWordToContent(word))
      this.addToContent("...")
  
      if (this.height() > this.expectedHeight()) {
        this.renderTrucatedContentWithEllipsis()
      }
    }
  
    show(target) {
      target.classList.remove(this.hideClass)
    }
  
    hide(target) {
      target.classList.add(this.hideClass)
    }
  
    removeContent() {
      this.contentTarget.textContent = "";
    }
  
    addWordToContent(word) {
      this.addToContent(" " + word);
    }
  
    addToContent(text) {
      this.contentTarget.textContent += text
    }
  
    lineHeight() {
      let style = window.getComputedStyle(this.contentTarget)
      return parseFloat(style.lineHeight, 10);
    }
  
    height() {
      return this.contentTarget.offsetHeight;
    }
  
    expectedHeight() {
      return this.linesValue * this.lineHeight();
    }
  
    wordsList() {
      return this.content.split(" ")
    }
  }