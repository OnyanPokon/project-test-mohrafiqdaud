export const DateFormater = (dateString) => {
  // Array nama bulan
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  // Buat objek Date dari string
  const date = new Date(dateString);

  // Ambil bagian hari, bulan, dan tahun
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format tanggal
  return `${day} ${month} ${year}`;
}