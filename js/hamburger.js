

        // const mainMenu = document.querySelector('.mainMenu');
        // const openMenu = document.querySelector('.openMenu');
        // const closeMenu = document.querySelector('.closeMenu');

        // openMenu.addEventListener('click', show);
        // closeMenu.addEventListener('click', function(){
        //     mainMenu.style.top = '-100%';
        //     mainMenu.style.display = 'none';
        // });

        
        // function show(){
        //     mainMenu.style.display = 'flex';
        //     mainMenu.style.top = '0';
        // }

        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;
            }

            else {
                menuBtn.classList.remove('open')
            }
        });

        
        
