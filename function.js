function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
console.log(cekGanjilGenap(4));
console.log(cekGanjilGenap(7));

// 2. function menerima nilai ujian

function cekKelulusan(nilai) {
  const ambangKelulusan = 60;
  if (nilai >= ambangKelulusan) {
    return "lulus";
  } else {
    return "tidak lulus";
  }
}
console.log(cekKelulusan(75));
console.log(cekKelulusan(45));

// 3. function cek usia

function kategoriUsia(usia) {
  if (usia >= 0 && usia <= 12) {
    return "anak-anak";
  } else if (usia >= 13 && usia <= 17) {
    return "remaja";
  } else if (usia >= 18 && usia <= 55) {
    return "dewasa";
  } else if (usia > 55) {
    return "lansia";
  } else {
    return "usia tidak valid";
  }
}

console.log(kategoriUsia(10));
console.log(kategoriUsia(15));
console.log(kategoriUsia(30));
console.log(kategoriUsia(60));
console.log(kategoriUsia(-5));

// 4. function menereima sebuah array

function jumlahArray(angkaArray) {
  return angkaArray;
}

const hp = [1, 2, 3, 4, 5];
console.log(jumlahArray(hp));

// 5. function nilai tertinggi array

function cariNilaiTertinggi(arrayAngka) {
  let nilaiTertinggi = arrayAngka[0];

  for (let i = 1; i < arrayAngka.length; i++) {
    if (arrayAngka[i] > nilaiTertinggi) {
      nilaiTertinggi = arrayAngka[i];
    }
  }

  return nilaiTertinggi;
}

const arrayAngka = [3, 7, 2, 9, 5];
console.log(cariNilaiTertinggi(arrayAngka));

console.log("============SOAL 6============");

// 6. reverse nilai array

function nilaiBalik(params) {
  return params.reverse();
}

const balik = [1, 2, 3, 4, 5];
console.log(nilaiBalik(balik));

console.log("============SOAL 7============");

// 7. Function Memisahkan Ganjil Dan Genap
function pisahGanjilGenap(ganjilGenap) {
  const arrayGanjil = [];
  const arrayGenap = [];

  ganjilGenap.forEach((paramsAngka) => {
    if (paramsAngka % 2 === 0) {
      arrayGenap.push(paramsAngka);
    } else {
      arrayGanjil.push(paramsAngka);
    }
  });

  return { arrayGanjil, arrayGenap };
}

const paramsAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = pisahGanjilGenap(paramsAngka);

console.log(hasil.arrayGanjil);
console.log(hasil.arrayGenap);

console.log("============SOAL 8============");
// 8. Function Mengurutkan Angka

const toko = {
  daftarProduk: [],
  tambahProduk: function (produk) {
    this.daftarProduk.push(produk);
  },

  hitungTotalProduk: function () {
    return this.daftarProduk.length;
  },
  hitungTotalHarga: function () {
    let totalHarga = 0;

    this.daftarProduk.forEach(function (produk) {
      totalHarga += produk.harga; // Tambahkan harga produk ke total
    });

    return totalHarga;
  },
};

toko.tambahProduk({ nama: "lampu", harga: 25000 });
toko.tambahProduk({ nama: "saklar", harga: 10000 });
toko.tambahProduk({ nama: "lakban", harga: 750000 });

console.log("Daftar Produk:", toko.daftarProduk);

console.log("Total Produk:", toko.hitungTotalProduk());
console.log("Total Harga:", toko.hitungTotalHarga());
