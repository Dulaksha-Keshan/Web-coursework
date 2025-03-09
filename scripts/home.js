document.addEventListener("DOMContentLoaded", () => {
    const facts = document.querySelectorAll(".fact");
    let index = 0; 

    function showFact() {
        facts.forEach(fact => fact.classList.remove("visible")); 
        facts[index].classList.add("visible"); 
        
        index = (index + 1) % facts.length; 
    }

    showFact(); 
    setInterval(showFact, 4000); 

    const videoContainer = document.querySelector(".video-container");
    const videoContainerHeight = videoContainer.offsetHeight;
    let hasScrolled = false; // Flag to ensure the automatic scroll only happens once

    function handleScroll(event) {
        if (!hasScrolled && window.scrollY < videoContainerHeight) {
            window.scrollTo({
                top: (videoContainerHeight + 60),
                behavior: "smooth"
            });
            hasScrolled = true; // Set the flag to true after the automatic scroll
        }
        if(window.scrollY <= 0) {
            hasScrolled = false; 
        }
    }

    window.addEventListener("scroll", handleScroll);
});
