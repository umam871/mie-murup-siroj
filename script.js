let keranjang = [];
let hargaTotal = 0;

// Daftar User
function daftar() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;

  if (nama && email) {
    document.getElementById("halamanDaftar").style.display = "none";
    document.getElementById("halamanMenu").style.display = "block";
    tampilkanMenu();
  } else {
    alert("Silakan isi nama dan email.");
  }
}

// Menu MieMurup (10 varian)
const menuMie = [
  { nama: "Mie Murup Ori", harga: 10000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Udang Keju", harga: 12000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Udang Rambutan", harga: 14000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Katsu", harga: 16000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Somay", harga: 18000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Sosis", harga: 20000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Lumpia Udang", harga: 22000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Usus", harga: 24000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Bakso", harga: 26000, gambar: "mie pedas.jpg" },
  { nama: "Mie Murup Telurr", harga: 28000, gambar: "mie pedas.jpg" },
];

function tampilkanMenu() {
  const daftarMenu = document.getElementById("daftarMenu");
  daftarMenu.innerHTML = "";

  menuMie.forEach((mie, index) => {
    daftarMenu.innerHTML += `
            <div class="menu-item">
                <img src="${mie.gambar}" alt="${mie.nama}">
                <h4>${mie.nama}</h4>
                <p>Rp ${mie.harga}</p>
                <button onclick="tambahKeranjang(${index})">Tambah</button>
            </div>
        `;
  });
}

// Tambah ke Keranjang
function tambahKeranjang(index) {
    keranjang.push(menuMie[index]);
    alert(menuMie[index].nama + " ditambahkan ke keranjang!");
  }
  
// Buka Keranjang
function bukaKeranjang() {
  document.getElementById("halamanMenu").style.display = "none";
  document.getElementById("halamanKeranjang").style.display = "block";

  const listKeranjang = document.getElementById("listKeranjang");
  listKeranjang.innerHTML = "";

  hargaTotal = 0;

  keranjang.forEach((item) => {
    listKeranjang.innerHTML += `<li>${item.nama} - Rp ${item.harga}</li>`;
    hargaTotal += item.harga;
  });

  document.getElementById("totalHarga").innerText = hargaTotal;
}

function kembaliMenu() {
  document.getElementById("halamanKeranjang").style.display = "none";
  document.getElementById("halamanMenu").style.display = "block";
}

// Checkout
function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang Anda kosong!");
    return;
  }

  document.getElementById("halamanKeranjang").style.display = "none";
  document.getElementById("halamanPembayaran").style.display = "block";

  document.getElementById("totalBayar").innerText = hargaTotal;
}

// Pilih Pembayaran
function pembayaran(metode) {
  document.getElementById("hasilPembayaran").innerHTML = `
        <h2>Pembayaran Berhasil!</h2>
        <p>Metode: ${metode}</p>
        <p>Total Dibayar: Rp ${hargaTotal}</p>
        <button onclick="selesai()">Kembali ke Menu Awal</button>
    `;
}

// Selesai
function selesai() {
  keranjang = [];
  hargaTotal = 0;

  document.getElementById("halamanPembayaran").style.display = "none";
  document.getElementById("halamanMenu").style.display = "block";
}
