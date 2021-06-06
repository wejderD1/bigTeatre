class Slider {
    constructor({
        main,
        field,
        track,
        position = 0,
        next,
        prev
    }) {
        this.main = document.querySelector(main),
            this.track = document.querySelector(track),
            this.field = document.querySelector(field),
            this.next = document.querySelector(next),
            this.prev = document.querySelector(prev),
            this.slides = document.querySelector(track).children,
            this.options = {
                position,
                widthField: 100 * this.slides.length,
            },
            this.width = window.getComputedStyle(this.main).width,
            this.offset = 0 //контролирующаю переменная
    }

    // выбираю только цифровое значение, без "px"
    getNumber = (value) => {
        const reg = /[\d.]/g
        const width = value.match(reg).join("");
        return +width
    }

    // initialization components
    init = () => {
        //длина контейнера 100 * количество елементов
        this.field.style.cssText = `width: ${this.options.widthField}%`;


        for (const elem of this.slides) {
            elem.style.cssText = `
                height: auto;`
        }
        this.controlSlides();
    }

    getAndPasteNext = () => {
        const b = this.track.firstElementChild;
        this.track.firstElementChild.remove();
        this.track.append(b);
    }

    getAndPastePrev = () => {
        const b = this.track.lastElementChild;
        this.track.lastElementChild.remove();
        this.track.prepend(b);
    }

    // prev button listener
    prevSlider = () => {
        this.options.position--;
        this.offset += this.slides[0].clientWidth;
        this.getAndPastePrev();
        // this.track.style.transform = `translateX(${this.offset}px)`;
    }

    // next button listener
    nextSlider = () => {
        this.options.position++;
        this.offset -= this.slides[0].clientWidth;
        // this.track.style.transform = `translateX(${this.offset}px)`;
        this.getAndPasteNext();
    }

    controlSlides = () => {
        this.next.addEventListener("click", this.nextSlider);
        this.prev.addEventListener("click", this.prevSlider);
    }
}


        // for (const elem of this.slides) {
        //     // устанавливаю длину каждого елемента равной длине контейнера / требуемое число видимых елементов
        //     elem.style.cssText = `
        //         width: ${this.getNumber(this.width) / 4}px; 
        //         height: auto;`
        // }

        // add event listener