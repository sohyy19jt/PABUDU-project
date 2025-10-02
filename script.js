// Subscribe Form
// document.getElementById("subscribeForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   if (email) {
//     alert(`Terima kasih! Email ${email} berhasil di subscribe.`);
//     document.getElementById("email").value = "";
//   } else {
//     alert("Harap masukkan email yang valid.");
//   }
// });


  document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    if(email) {
      document.getElementById("popup").style.display = "flex";
      document.getElementById("emailInput").value = "";
    }
  });

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }


  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", revealOnScroll);


  function tampilkanKonten(topik) {
    const konten = {
      apaItuCSS: {
        judul: "Apa itu CSS?",
        isi: "CSS (Cascading Style Sheets) adalah bahasa desain yang digunakan untuk memperindah tampilan HTML dengan warna, layout, font, dan elemen visual lainnya."
      },
      sejarahCSS: {
        judul: "Sejarah CSS",
        isi: "CSS pertama kali dikembangkan oleh Håkon Wium Lie pada tahun 1994. Tujuannya adalah untuk memisahkan konten dari presentasi pada halaman web."
      },
      penggunaanCSS: {
        judul: "Penggunaan CSS",
        isi: "CSS digunakan untuk mengatur tata letak halaman, gaya teks, warna latar belakang, responsivitas, dan animasi pada situs web."
      },
      jenisCSS: {
        judul: "Jenis-Jenis CSS",
        isi: "Ada tiga jenis utama CSS: Inline CSS (langsung di tag HTML), Internal CSS (di dalam tag <style>), dan External CSS (menggunakan file .css terpisah)."
      },
      manfaatCSS: {
        judul: "Manfaat Penguasaan CSS",
        isi: "Menguasai CSS membuat kamu mampu membuat halaman web yang menarik, user-friendly, dan responsive di berbagai perangkat."
      },
      penutup: {
        judul: "Penutup",
        isi: "Dengan memahami CSS, kamu bisa menciptakan website modern dan estetis. Terus eksplorasi dan praktik ya!"
      }
    };

    const boxKanan = document.getElementById("kontenKanan");
    boxKanan.innerHTML = `
      <h3>${konten[topik].judul}</h3>
      <p>${konten[topik].isi}</p>
    `;
  }

