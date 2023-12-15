AOS.init();
        let nav = document.querySelector('.nav-show-btn');
        let navDepth = document.querySelector('.nav-depth');
        let navLink = document.querySelector('.nav-link');

        nav.addEventListener('click', function (event) {
            event.preventDefault();
            if (nav.classList.contains('active')) {
                // 네비게이션 닫기
                nav.classList.remove('active');
                navDepth.style.display = 'none';
                // 네비게이션 라인 원래대로 돌아오기
                // navLine.style.background = 'rgba(255,255,255,1)';
                // navLine.style.transform = 'translate(0, -50%)';
            } else {
                let currentScrollY = window.scrollY || window.pageYOffset;
                navDepth.style.top = currentScrollY + 'px';
                nav.classList.add('active');
                navDepth.style.display = 'block';
                // 네비게이션 라인 변경
                // navLine.style.background = 'rgba(255,255,255,0)';
                // navLine.style.transform = 'rotate(0deg)';
            }
        });
        window.addEventListener('scroll', function() {
            if (nav.classList.contains('active')) {
                let currentScrollY = window.scrollY || window.pageYOffset;
                navDepth.style.top = currentScrollY + 'px';
            }
        });
        let navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function (navLink) {
                navLink.addEventListener('click', function () {
                    // 네비게이션 닫기
                    nav.classList.remove('active');
                    navDepth.style.display = 'none';
                    // 네비게이션 라인 원래대로 돌아오기
                    // navLine.style.background = 'rgba(255,255,255,1)';
                    // navLine.style.transform = 'translate(0, -50%)';
                });
        });