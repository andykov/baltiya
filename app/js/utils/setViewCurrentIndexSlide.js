export default (Splide, Components) => {
  let elm;

  return {
    mount() {
      elm = document.createElement('span');

      const track = Components.Elements.track;
      const customArrows = Components.Elements.arrows;
      const nativeArrows = Components.Arrows.arrows;
      const prevArrow = nativeArrows.prev
        ? nativeArrows.prev
        : customArrows.prev;
      const arrowsParent = prevArrow.parentNode;

      arrowsParent.insertBefore(elm, prevArrow.nextSibling);

      this.setNumber(Splide.index + 1);

      this.bind();
    },

    bind() {
      Splide.on('move', (newIndex) => {
        this.setNumber(newIndex + 1);
      });
    },

    setNumber(number) {
      const content = `${number}/${Splide.length}`;

      if (elm.textContent !== undefined) {
        elm.textContent = content;
      } else {
        elm.innerText = content;
      }
    },
  };
};
