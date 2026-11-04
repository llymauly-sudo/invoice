
// Menyimpan nama pembeli
let namaPembeli = "Budi";

// Menyimpan harga barang
let hargaNasiGoreng = 15000;
let hargaEsTeh = 5000;
let hargaRoti = 7000;

// Menyimpan jumlah barang
let jumlahNasiGoreng = 2;
let jumlahEsTeh = 1;
let jumlahRoti = 3;

// Menghitung subtotal setiap barang
let subtotalNasiGoreng = hargaNasiGoreng * jumlahNasiGoreng;
let subtotalEsTeh = hargaEsTeh * jumlahEsTeh;
let subtotalRoti = hargaRoti * jumlahRoti;

// Menghitung total belanja
let totalBelanja = subtotalNasiGoreng + subtotalEsTeh + subtotalRoti;

// Menghitung diskon
let diskon = 0;

if (totalBelanja >= 50000) {
    diskon = totalBelanja * 10 / 100;
}

// Menghitung total pembayaran
let totalBayar = totalBelanja - diskon;

// Membuat format rupiah
function rupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Menampilkan hasil di Console
console.log("Pembeli: " + namaPembeli);
console.log("Total Belanja: " + rupiah(totalBelanja));
console.log("Diskon: " + rupiah(diskon));
console.log("Total Bayar: " + rupiah(totalBayar));

// Menampilkan hasil di halaman web
document.getElementById("hasil").innerHTML = `
    <p>Pembeli: ${namaPembeli}</p>
    <p>Nasi Goreng: ${rupiah(subtotalNasiGoreng)}</p>
    <p>Es Teh: ${rupiah(subtotalEsTeh)}</p>
    <p>Roti: ${rupiah(subtotalRoti)}</p>
    <hr>
    <p>Total Belanja: ${rupiah(totalBelanja)}</p>
    <p>Diskon: ${rupiah(diskon)}</p>
    <h3>Total Bayar: ${rupiah(totalBayar)}</h3>
`;
