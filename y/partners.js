const typeFilter = document.getElementById('typeFilter');
const ratingFilter = document.getElementById('ratingFilter');
const applyFiltersBtn = document.getElementById('applyFilters');

let allBusinesses = []; // store all docs locally

async function loadBusinesses() {
  const querySnapshot = await getDocs(collection(db, "businesses"));
  allBusinesses = querySnapshot.docs.map(docSnap => ({
    id: docSnap.id,
    ...docSnap.data()
  }));
  renderBusinesses(allBusinesses);
}

function renderBusinesses(dataArray) {
  businessGrid.innerHTML = "";
  dataArray.forEach(data => {
    const card = document.createElement('div');
    card.className = "business-card";
    card.innerHTML = `
      <div class="card-content">
        <h3>${data.title}</h3>
        <p><strong>Description:</strong> ${data.description || "-"}</p>
        <p><strong>Type:</strong> ${data.type || "-"}</p>
        <p><strong>Contact:</strong> ${data.contact || "-"}</p>
        <div class="rating" data-id="${data.id}">
          ${renderStars(data.ratingAverage || 0)}
        </div>
      </div>
    `;
    businessGrid.appendChild(card);

    // rating click event
    const stars = card.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.addEventListener('click', async () => {
        await updateDoc(doc(db, "businesses", data.id), { Rating: index + 1 });
        msg.textContent = `You rated ${data.title} ${index+1} star(s)!`;
        loadBusinesses();
      });
    });
  });
}

// filter logic
applyFiltersBtn.addEventListener('click', () => {
  const typeVal = typeFilter.value;
  const ratingVal = parseInt(ratingFilter.value);

  const filtered = allBusinesses.filter(b => {
    return (
      (typeVal === "" || b.type === typeVal) &&
      (b.ratingAverage || 0) >= ratingVal
    );
  });

  renderBusinesses(filtered);
});

loadBusinesses();