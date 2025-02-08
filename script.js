// Create video element
const video = document.createElement("video");
video.src = "./assets/video.mp4"; // Replace with your video file
video.controls = true;
video.width = 600; // Set width

// Append video to the div
document.getElementById("video-container").appendChild(video);


const scrollContainer = document.getElementById("scrollContainer");
const dots = document.querySelectorAll(".dot");

scrollContainer.addEventListener("scroll", () => {
    let scrollPosition = scrollContainer.scrollLeft;
    let containerWidth = scrollContainer.offsetWidth;
    let index = Math.round(scrollPosition / containerWidth);

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
});


document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});