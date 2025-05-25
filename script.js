// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Copy Email to Clipboard
const emailLink = document.querySelector(".contact a");
emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailLink.textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
});

// Simple scroll animation
const sections = document.querySelectorAll("section, article");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
