let navLinks = document.querySelectorAll('.carousel .nav-link'); //Link
let items = document.querySelectorAll('.carosel .slides img'); //img
let overlays = document.querySelectorAll('carousel .bar'); //background-color
let maxZIndex = navLinks.length;
let easeInOutQuart = 'cubic-bezier(0.77, 0, 0.175, 1)';

items[0].classList.add('active');
navLinks[0].classList.add('active');

navLinks.forEach((value, key) => {
    (overlays[key]).style.zIndex = `${navLinks.length - key}`

    value.addEventListener('click', () => {
        navLinks.forEach(x => x.classList.remove('active'));
        value.classList.add('active');

        let currentItem = document.querySelectorAll(".carousel .slides img.active");
        let itemFadeOut = currentItem.animate(
            [
                {},
                {}
            ], {

        }
        );
        itemFadeOut.onfinish = () => {
            items.forEach(x => x.classList.remove('active'));
            let activeItem = items[key];
            activeItem.classList.add('active');
            activeItem.animate(
                [
                    {},
                    {}
                ],
                {}
            );
        }
        maxZIndex++;
        let activeBackgroundColor = overlays[key];
        activeBackgroundColor.style.zIndex = `${maxZIndex}`;
        activeBackgroundColor.animate(
            [
                {},
                {}
            ],
            {}
        );
    });
});
