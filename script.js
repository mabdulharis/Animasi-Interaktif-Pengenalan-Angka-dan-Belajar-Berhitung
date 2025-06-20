 const numbers = [
            { value: 0, image: 'images/0.svg', sound: 'audio/0.mp3' },
            { value: 1, image: 'images/1.png', sound: 'audio/satu.mp3' },
            { value: 2, image: 'images/2.png', sound: 'audio/dua.mp3' },
            { value: 3, image: 'images/3.png', sound: 'sounds/3.mp3' },
            { value: 4, image: 'images/4.png', sound: 'sounds/4.mp3' },
            { value: 5, image: 'images/5.png', sound: 'sounds/5.mp3' },
            { value: 6, image: 'images/6.png', sound: 'sounds/6.mp3' },
            { value: 7, image: 'images/7.png', sound: 'sounds/7.mp3' },
            { value: 8, image: 'images/8.png', sound: 'sounds/8.mp3' },
            { value: 9, image: 'images/9.png', sound: 'sounds/9.mp3' },
            { value: 10, image: 'images/10.png', sound: 'sounds/10.mp3' }
        ];

        let currentIndex = 0;

        const numberDisplay = document.getElementById('number-display');
        const nextButton = document.getElementById('next-button');
        const prevButton = document.getElementById('prev-button');
        const message = document.getElementById('message');
        const numberImage = document.getElementById('number-image');
        const numberSound = document.getElementById('number-sound');

        // Fungsi untuk memperbarui tampilan angka
        function updateDisplay() {
            const currentNumber = numbers[currentIndex];
            numberDisplay.textContent = currentNumber.value;

            // Mengubah pesan berdasarkan angka
            if (currentNumber.value === 0) {
                message.textContent = "Ini adalah angka 0";
            } else {
                message.textContent = "Yuk kita hitung jumlah buah di bawah ini";
            }

            numberImage.src = currentNumber.image;
            numberImage.alt = `Gambar angka ${currentNumber.value} dengan warna cerah dan desain menarik`;
            numberSound.src = currentNumber.sound;
            numberSound.load();
            numberSound.play();
        }

        // Event listener untuk tombol "Selanjutnya"
        nextButton.addEventListener('click', () => {
            if (currentIndex < numbers.length - 1) {
                currentIndex++;
                updateDisplay();
                prevButton.disabled = false;
            } 
            if (currentIndex === numbers.length - 1) {
                message.textContent = "Selesai! Semua angka telah ditampilkan.";
                nextButton.disabled = true;
            }
        });

        // Event listener untuk tombol "Kembali"
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateDisplay();
                nextButton.disabled = false;
            }
            if (currentIndex === 0) {
                prevButton.disabled = true;
            }
        });

        // Event listener untuk klik gambar agar suara juga muncul
        numberImage.addEventListener('click', () => {
            numberSound.currentTime = 0;
            numberSound.play();
        });

        // Inisialisasi tampilan pertama
        updateDisplay();
        prevButton.disabled = true; // Disable back button at the start
