


window.addEventListener('scroll', scollHeader)
let scrollCount = 1;

function scollHeader() {
    let headerElement = document.querySelector('.header');
    let scrollY = window.scrollY;
    let scollLock = false;
    if (scrollY >= 200 && scrollCount == 1 ) {
        scollLock = true;
    } else {
        scollLock = false;
    }
    if (scollLock) {
        scrollCount++;
        headerElement.style.position = 'fixed';
        headerElement.style.top = `0`;
        headerElement.style.left = '0';
        headerElement.style.right = '0';
        headerElement.style.boxShadow = '0 10px 15px rgb(25 25 25 / 10%)';
        headerElement.style.zIndex = '9999';

        headerElement.animate([
            // keyframes
            { transform: 'translateY(-80px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: 250
        });
    }

    if (scrollY <= 100) {
        headerElement.style.position = 'relative';
        headerElement.style.top = '0';
        headerElement.style.left = '0';
        headerElement.style.right = '0';
        headerElement.style.boxShadow = 'none';
        scrollCount = 1;
    }
}

