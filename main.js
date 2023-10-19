
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Menghentikan pengiriman formulir

            // Di sini Anda dapat menambahkan kode untuk mengirim data formulir ke server jika diperlukan

            // Menampilkan pesan alert
            alert('Pesan Anda telah terkirim!');

            // Atau Anda juga dapat menggunakan window.alert()
            // window.alert('Pesan Anda telah terkirim!');
        });
    });

