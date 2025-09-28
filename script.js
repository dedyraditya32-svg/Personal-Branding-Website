document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = {
        sertifikat: [
            { id: 'sert-1', title: 'Belajar Dasar Manajemen Proyek', img: 'assets/sertifikat-1.png', description: 'Sertifikat mendapatkan sertifikat ini ketika sedang mempelajari dasar manajemen proyek di website dicoding. Dalam mempelajari dasar-dasar manajemen proyek ini saya belajar banyak hal terkait manajemen proyek, mulai dari apa itu manajemen proyek, project live cycle, elemen utama, dan teknik yang digunakan dalam manajemen proyek, dengan mempelajari semua hal ini saya mendapatkan bonus Sertifikat terkait Dasar Manajemen Proyek dari dicoding.' },
            { id: 'sert-2', title: 'Memulai Pemrograman Dengan Java', img: 'assets/sertifikat-2.png', description: 'Saya mengambil sertifikat ini di website dicoding, selain ingin mengambil sertifikat terkait keahlian dalam pemrograman java dasar saya mengambil kelas ini dikarenakan ingin belajar lebih dalam terkait dasar pemrograman dalam bahasa java selain mendapatkan keahlian dasar pemrograman java saya juga mendapatkan sertifikat ini.' },
            { id: 'sert-3', title: 'Memulai Pemrograman Dengan C', img: 'assets/sertifikat-3.png', description: 'Dengan mempelajari kelas Dasar pemrograman dalam bahasa C di dicoding saya mendapatkan ilmu mengenaii dasar dasar yang harus diketahui dalam bahasa C mulai dari syntax, bentuk, dan apa saja yang harus diperhatikan dalam bahasa C, selain mendapatkan ilmu saya juga memperoleh Sertifikat mengenai Memulai Pemrograman Dengan C.' },
            { id: 'sert-4', title: 'JavaScript Dasar (Gold)', img: 'assets/sertifikat-4.png', description: 'Sertifikat ini merupakan bonuss dari hasil pembelajaran di website Skilvul, mengenai kelas Javascrip Dasar dalam kelas ini saya mempelajari banyak hal mengenai Javascrip mulai dari bagaimana syntax nya bekerja dan bagaimana cara menghubungkannya dengan HTML dan CSS.' },
            { id: 'sert-5', title: 'HTML Dasar (Gold)', img: 'assets/sertifikat-5.png', description: 'Sertifikat ini merupakan bonus dari hasil pembelajaran di website Skilvul, mengenai kelas HTML dasar dalam kelas ini saya mempelajari banyak hal mengenai pembuatan kerangka website dengan HTML mulai dari cara pembuatan header, title, dan bentuk website sederhana.' },
            { id: 'sert-6', title: 'CSS Dasar (Gold)', img: 'assets/sertifikat-6.png', description: 'Sertifikat ini merupakan bonus dari pembelajaran mengenia dasar CSS di website  Skilvul, dalam kelas ini saya mempelajari banyak hal mengenai dasar CSS mulai dari bagaimana cara membuat tampilan website dengan CSS dan bagaimana cara menghubungkan CSS dengan HTML untuk membentuk suatu website.' },
        ],
        
        skill: [
            { id: 'skill-1', title: 'JavaScript', img: 'assets/skill-1.png', description: 'Saya mampu mengaplikasikan JavaScript dasar untuk membuat suatu website interaktif.' },
            { id: 'skill-2', title: 'HTML', img: 'assets/skill-2.png', description: 'Saya mampu mengaplikasikan HTML dasar untukpembuatan website simple.' },
            { id: 'skill-3', title: 'CSS', img: 'assets/skill-3.png', description: 'Saya mampu mengimplementasikan CSS dasar untuk membuat tampilan suatu website.' },
            { id: 'skill-4', title: 'Python', img: 'assets/skill-4.png', description: 'Saya mempelajari bahasa pemrograman Python pada awal masa perkuliahan pada sepester 1 dan 2 dengan mengikuti pembeajaran ini saya mampu mengimplementasikan syntax-syntax dasar dari bahasa pemrograman Python.' },
            { id: 'skill-5', title: 'Jaringan', img: 'assets/skill-5.png', description: 'Saya mempelajari mengenai jaringan pada Semester 2 dan 3 perkuliahan dengan meeengikuti pembelajaran ini saya mampu menyambungkan kabel LAN dan Optik lalu mampu memahami terkait konfigurasi alamat IP' },
        ],
        
        galery: [
        { 
            id: 'gal-1', 
            title: 'Museum Buleleng Digital Dengan Artsteps', 
            img: 'assets/galeri-1.jpg',
            description: 'Saya membuat Museum Buleleng Digital pada Semester 2 perkuliahan untuk memenuhi tugas UAS mata kuliah Basis Data agar dapat mendapatkan nilai A-, pembuatan museum buleleng digital ini di mulai dengan mencari data kelapangan dengan cara memfoto, mencatat, dan bertanya kepada pengurus museum kemudia dilanjutkan dengan pembuatan basis data dengan mysql lalu pembuatan Museum Buleleng Digital itu sendiri menggunakan artsteps. Museum Buleleng Digital dapat anda lihat melalui kanal : https://www.artsteps.com/view/684f84fc5ea40195d945c9d7'
        },
        { 
            id: 'gal-2', 
            title: 'Cloud Solution Dengan Nextcloud', 
            img: 'assets/galeri-2.jpg',
            description: 'Pembuatan Cloud Solution Dengan NextCloud ini saya lakukan dengan menggunakan software VirtualBox dengan OS Ubuntu Server dan Docker. Instalasi NextCloud ini dilakukan pada VirtualBox sebagai server lalu Docker sebagai server untu dapat mengakses Cloudflare tunnel dengan integrasi dengan cloudflare tunnel dan domain yang dibeli dengan harga 25 RIBU RUPIAH sistem cloud ini dapat diakses melalui jaringan internet public yang dapat diakses dengan : dedy.dedycloud.my.id / one.dedycloud.my.id (jika server aktif)'
        },
                { 
            id: 'gal-3', 
            title: 'Personal Branding Website', 
            img: 'assets/galeri-3.jpg',
            description: 'Pembuatan website personal branding ini dilakukan atas dasar memenuhi tugas untuk mata perkuliahan Pemrograman Web selain itu website ini dapat saya gunakan untuk memperlihatkan diri saya kepada publik untuk mempersiapkan diri saya pada dunia kerja dimasa depan nanti'
        },
    ]
    };

    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.querySelector('.nav-indicator');
    const dynamicText = document.getElementById('dynamic-text');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const modal = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('modal-close');

    function moveIndicator(element) {
        navIndicator.style.width = `${element.offsetWidth}px`;
        navIndicator.style.left = `${element.offsetLeft}px`;
        navLinks.forEach(link => link.classList.remove('active'));
        element.classList.add('active');
    }

    function initDynamicText() {
        const dynamicTextElement = document.getElementById('dynamic-text');
        const sentences = [
            "Selamat datang di website Dedy Raditya",
            "Seorang Newbie dalam dunia IT",
            "Mahasiswa Sistem Informasi"
        ];
        
        let sentenceIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            if (!dynamicTextElement) return;

            const currentSentence = sentences[sentenceIndex];
            let displayText = '';

            if (isDeleting) {
                displayText = currentSentence.substring(0, charIndex--);
            } else {
                displayText = currentSentence.substring(0, charIndex++);
            }
            
            dynamicTextElement.textContent = displayText;
            dynamicTextElement.style.minHeight = '3.5rem';

            let typeSpeed = isDeleting ? 75 : 100;

            if (!isDeleting && charIndex === currentSentence.length + 1) {
                typeSpeed = 1000;
                isDeleting = true;
            } else if (isDeleting && charIndex === -1) {
                isDeleting = false;
                sentenceIndex = (sentenceIndex + 1) % sentences.length;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    function initTabs() {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tabId = btn.dataset.tab;
                tabContents.forEach(content => {
                    content.classList.toggle('active', content.id === tabId);
                });
            });
        });
    }

    function populatePortfolio() {
        for (const category in portfolioData) {
            const container = document.querySelector(`#${category} .grid-container`);
            if (!container) continue;
            portfolioData[category].forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'grid-item';
                itemEl.dataset.id = item.id;
                
                let innerHTML = `<img src="${item.img}" alt="${item.title || ''}">`;
                if (item.title) {
                    innerHTML += `<div class="grid-item-title"><h4>${item.title}</h4></div>`;
                }
                itemEl.innerHTML = innerHTML;

                itemEl.addEventListener('click', () => openModal(category, item.id));
                container.appendChild(itemEl);
            });
        }
    }

    function openModal(category, id) {
        const item = portfolioData[category].find(d => d.id === id);
        if (!item) return;
        document.getElementById('modal-img').src = item.img;
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-description').textContent = item.description;
        modal.classList.add('visible');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => moveIndicator(e.target));
    });
    moveIndicator(document.querySelector('.nav-link.active'));

    initDynamicText();
    initTabs();
    populatePortfolio();
    
    modalCloseBtn.addEventListener('click', () => modal.classList.remove('visible'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('visible');
    });

});