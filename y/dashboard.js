businessForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const type = document.getElementById('type').value;
  const contact = document.getElementById('contact').value;
  const description = document.getElementById('description').value;
  const file = document.getElementById('businessImage').files[0];

  try {
    const user = auth.currentUser;

    let imageUrl = "";

    // ✅ Upload image if selected
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, "businessImages/" + file.name);
      await uploadBytes(storageRef, file);
      imageUrl = await getDownloadURL(storageRef);
    }

    // ✅ Save to Firestore with the REAL image URL
    await addDoc(collection(db, "businesses"), {
      ownerUid: user.uid,
      title,
      type,
      contact,
      description,
      businessurl: imageUrl,  // ✅ correct URL
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
