const navLinkEls = document.querySelectorAll('.nav-link');

navLinkEls.forEach(navLinkEl => {
 navLinkEl.addEventListener("click", ()=> {
     document.querySelector('.active')?.classList.remove('active');
     navLinkEl.classList.add('active');
 });
});


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }

    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));