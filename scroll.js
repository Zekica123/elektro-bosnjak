const navigacija=
document.querySelector('.fixed');

const visinaNave=navigacija.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
     visinaNave + "px"
);

