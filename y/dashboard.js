businessForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const type = document.getElementById('type').value;
  const contact = document.getElementById('contact').value;
  const description = document.getElementById('description').value;
  const location = document.getElementById('location').value;

  try {
    const user = auth.currentUser;

    await addDoc(collection(db, "businesses"), {
      ownerUid: user.uid,
      title,
      type,
      contact,
      description,
      location,
      createdAt: new Date(),
      ratingAverage: 0
    });

    msg.style.color = "green";
    msg.textContent = "✅ Business published successfully!";
    businessForm.reset();

  } catch (err) {
    msg.style.color = "red";
    msg.textContent = err.message;
  }
});
