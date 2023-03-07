// Onscroll navbar funcion start
let myNave = document.getElementById('myNav');
let innerWidth = window.innerWidth;
window.onscroll = () => {
    if (window.pageYOffset >= 100) {
        myNave.classList.add('activeBg');
    } else {
        myNave.classList.remove('activeBg');
    }
}


// onscroll navbar function end

//about section progress bar function start

window.addEventListener('click', function() {
    let progressDiv = document.getElementById('progressBar');
    let progNumA = document.getElementById("progNumA");
    let width = 1;
    let id = setInterval(setTime, 10);

    function setTime() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            progressDiv.style.width = width + "%";
            progNumA.innerHTML = width + "%";
        }
    }
})

//about section progress bar function end
// skill section start
// html
window.addEventListener("click", function() {
        let htmlProg = document.querySelector(".pogress-item");
        let progNum = document.getElementById("progNum1")
        let width = 1;
        let widInt = setInterval(htmlFunPro, 10);

        function htmlFunPro() {
            if (width >= 90) {
                clearInterval(widInt);
            } else {
                width++;
                htmlProg.style.width = width + "%";
                progNum.innerHTML = width + "%";
            }
        }
    })
    // css

window.addEventListener("click", function() {
    let htmlProg = document.getElementById("progress-item-2");
    let progressNumber = document.getElementById("progNum");
    let width = 1;
    let widInt = setInterval(cssFun, 10);

    function cssFun() {
        if (width >= 80) {
            clearInterval(widInt);
        } else {
            width++;
            htmlProg.style.width = width + "%";
            progressNumber.innerHTML = width + "%";
        }
    }
});
//  javascript

window.addEventListener("click", function() {
    let htmlProg = document.getElementById("porgress-item-3");
    let progressNumber = document.getElementById("progNum3");
    let width = 1;
    let widInt = setInterval(cssFun, 10);

    function cssFun() {
        if (width >= 50) {
            clearInterval(widInt);
        } else {
            width++;
            htmlProg.style.width = width + "%";
            progressNumber.innerHTML = width + "%";
        }
    }
});
// react js
window.addEventListener("click", function() {
    let htmlProg = document.getElementById("porgress-item-4");
    let progressNumber = document.getElementById("progNum4");
    let width = 1;
    let widInt = setInterval(cssFun, 10);

    function cssFun() {
        if (width >= 40) {
            clearInterval(widInt);
        } else {
            width++;
            htmlProg.style.width = width + "%";
            progressNumber.innerHTML = width + "%";
        }
    }
});


// contact form validation