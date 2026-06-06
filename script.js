// التحكم في السكرول والناف بار
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.ultra-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // تحديث السكشن النشط (Scrollspy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// التحكم في السايد منيو للموبايل
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.style.display = 'block';
    setTimeout(() => overlay.style.opacity = '1', 10);
});

const hideSidebar = () => {
    sidebar.classList.remove('active');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 500);
};

closeBtn.addEventListener('click', hideSidebar);
overlay.addEventListener('click', hideSidebar);

// إغلاق المنيو عند الضغط على أي رابط
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', hideSidebar);
});
// تأثير Parallax للصور عند تحريك الماوس
document.addEventListener('mousemove', (e) => {
    const items = document.querySelectorAll('.mosaic-item');
    const x = (window.innerWidth - e.pageX * 2) / 50;
    const y = (window.innerHeight - e.pageY * 2) / 50;

    items.forEach(item => {
        const speed = item.getAttribute('data-speed') || 1;
        item.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x/5}deg)`;
    });
});

// تأثير "ظهور الحروف" للعنوان عند الوصول للسكشن
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.5 });

const content = document.querySelector('.content-luxury');
content.style.opacity = "0";
content.style.transform = "translateY(50px)";
content.style.transition = "1s ease-out";
observer.observe(content);
// نظام الفلترة
const filterBtns = document.querySelectorAll('.f-btn');
const gridItems = document.querySelectorAll('.grid-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active Toggle
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        gridItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});
// أنميشن بسيط عند السكرول لظهور المقالات
const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.blog-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease-out";
    blogObserver.observe(card);
});
// أنميشن السكرول للخدمات الملكية
const servicesReveal = () => {
    const cards = document.querySelectorAll('.royal-card');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 100);
        }
    });
};

// تهيئة الكروت للظهور
document.querySelectorAll('.royal-card').forEach(c => {
    c.style.opacity = "0";
    c.style.transform = "translateY(50px)";
    c.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
});

window.addEventListener('scroll', servicesReveal);