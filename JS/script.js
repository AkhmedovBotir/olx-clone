

document.querySelector(".smsprofilcontent").addEventListener('click', () => {
    document.querySelector(".smschat").style.display = "block"
    document.querySelector(".nosmsprofconts").style.display = "none"
})
document.querySelector(".backsms").addEventListener('click', () => {
    document.querySelector(".smschat").style.display = "none"
    document.querySelector(".nosmsprofconts").style.display = "flex"
})

document.querySelector(".noadsp").addEventListener("click", () => {
    document.querySelector(".nosmsprofcont").style.display = "flex"
    document.querySelector(".nosmsprofcont1").style.display = "none"
    document.querySelector(".noadsp").style.fontWeight = 700
    document.querySelector(".noadsp1").style.fontWeight = 400
})
document.querySelector(".noadsp1").addEventListener("click", () => {
    document.querySelector(".nosmsprofcont1").style.display = "flex"
    document.querySelector(".nosmsprofcont").style.display = "none"
    document.querySelector(".noadsp1").style.fontWeight = 700
    document.querySelector(".noadsp").style.fontWeight = 400
})


//Change Image
const input = document.getElementById("file-input");
const image = document.getElementById("img-preview");

input.addEventListener("change", (e) => {
    if (e.target.files.length) {
        const src = URL.createObjectURL(e.target.files[0]);
        image.src = src;
    }
});

//Toast:

function showToast() {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}




let menudr = document.querySelector(".menud")
menudr.addEventListener('mouseover', () => {
    document.querySelector(".menudr").style.display = "block"
})
document.querySelector(".menudr").addEventListener('mouseout', () => {
    document.querySelector(".menudr").style.display = "none"
})

// document.querySelector(".cardpay").addEventListener("click", function () {
//     this.classList.toggle("clicked");
//     // alert('daw')
// });
// document.querySelector(".cardpay2").addEventListener("click", function () {
//     this.classList.toggle("clicked");
//     // alert('daw')
// }); 
// document.querySelector(".cardpay3").addEventListener("click", function () {
//     this.classList.toggle("clicked");
//     // alert('daw')
// });


//script.js 
const cardsPerPage = 4; // Number of cards to show per page 
const dataContainer = document.getElementById('data-container');
const pagination = document.getElementById('pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumbers = document.getElementById('page-numbers');
const pageLinks = document.querySelectorAll('.page-link');

const cards =
    Array.from(dataContainer.getElementsByClassName('card'));

// Calculate the total number of pages 
const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;

// Function to display cards for a specific page 
function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to update pagination buttons and page numbers 
function updatePagination() {
    pageNumbers.textContent =
        `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageLinks.forEach((link) => {
        const page = parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active', page === currentPage);
    });
}

// Event listener for "Previous" button 
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
    }
});

// Event listener for "Next" button 
nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
});

// Event listener for page number buttons 
pageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = parseInt(link.getAttribute('data-page'));
        if (page !== currentPage) {
            currentPage = page;
            displayPage(currentPage);
            updatePagination();
        }
    });
});

// Initial page load 
displayPage(currentPage);
updatePagination();


var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        },
    },
});

let hrefcol1 = document.querySelector(".hrefcol1")
hrefcol1.addEventListener('mouseover', () => {
    document.querySelector(".colspan").style.display = "none"
    document.querySelector(".colspan3").style.display = "none"
    document.querySelector(".colspan2").style.display = "block"
})
hrefcol1.addEventListener('mouseout', () => {
    document.querySelector(".colspan3").style.display = "none"
    document.querySelector(".colspan2").style.display = "none"
    document.querySelector(".colspan").style.display = "block"
})

let hrefcol2 = document.querySelector(".hrefcol2")
hrefcol2.addEventListener('mouseover', () => {
    document.querySelector(".colspan").style.display = "none"
    document.querySelector(".colspan2").style.display = "none"
    document.querySelector(".colspan3").style.display = "block"
})
hrefcol2.addEventListener('mouseout', () => {
    document.querySelector(".colspan3").style.display = "none"
    document.querySelector(".colspan2").style.display = "none"
    document.querySelector(".colspan").style.display = "block"
})

// let menuBos = document.querySelector(".cardserv")
// menuBos.addEventListener("click", ()=>{
// })

function menuBos() {
    document.querySelector(".menu-services").style.display = "block"
}

let callbtn = document.querySelector(".calladsnumbtn")
callbtn.addEventListener('click', () => {
    document.querySelector(".calladsnum").style.display = "none"
    document.querySelector(".calladsnumbtn").style.display = "none"
    document.querySelector(".calladsnum1").style.display = "block"
})

let adscont = document.querySelector(".ads-sub2")
adscont.addEventListener('click', () => {
    document.querySelector(".ads-sub2").style.display = "none"
    document.querySelector(".ads-sub3").style.display = "block"
})

// let profil = document.querySelector(".profile")
// profil.addEventListener('mouseover', () => {
//     document.querySelector(".dropdown-menu").style.display = "flex"
// })

