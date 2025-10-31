const guides = [
  { name: "Guide 5", image: "images/guide5.jpg", description: "Mountain trekking expert" },
  { name: "Guide 6", image: "images/guide6.jpg", description: "Cultural tour specialist" }
];

const container = document.querySelector(".categories-grid");

guides.forEach(guide => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
        <div class="category-image-wrapper">
            <img src="${guide.image}" alt="${guide.name}" class="category-image">
            <div class="category-overlay">
                <div class="category-icon-wrapper">
                    <svg class="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 class="category-title">${guide.name}</h3>
                </div>
            </div>
        </div>
        <div class="category-content">
            <p class="category-description">${guide.description}</p>
        </div>
    `;
    container.appendChild(card);
});
