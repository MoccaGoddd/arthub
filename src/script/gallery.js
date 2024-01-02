// Data foto
const photos = [
  {
    title: "Sunset",
    category: "Nature",
    imgUrl: "https://cdn.pixabay.com/photo/2013/01/05/21/02/art-74050_640.jpg",
  },
  {
    title: "Cityscape",
    category: "Urban",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039_640.jpg",
  },
  // Tambahkan data foto lainnya di sini
];

// Fungsi untuk menampilkan galeri berdasarkan hasil pencarian
function search() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const gallery = document.getElementById("gallery");
    
  gallery.innerHTML = "";

  photos.forEach((photo) => {
    if (
      photo.title.toLowerCase().includes(searchTerm) ||
      photo.category.toLowerCase().includes(searchTerm)
    ) {
      const photoElement = document.createElement("div");
      photoElement.innerHTML = `
      
        `;
      gallery.appendChild(photoElement);
    }
  });
}

// Tampilkan semua foto saat halaman dimuat
window.onload = function () {
  search();
};
