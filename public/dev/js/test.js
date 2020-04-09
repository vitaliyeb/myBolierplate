(function () {
    const AllItems = Array.from(document.querySelectorAll('.services__item'));
    AllItems.map((el)=>{
        el.addEventListener('click', (e)=>{
            e.currentTarget.classList.toggle('services__item_active')
        })
    });

    let AllLink = document.querySelectorAll('.header__link');
    let oldIndex = 0;

    (()=>{
        const hash = window.location.hash;
        let arrHash = [
            '#consultation',
            '#services',
            '#price',
            '#contact'
        ];
        let activeIndex = arrHash.indexOf(hash);
        if(activeIndex === -1) return setNavigate(0);
        if(activeIndex !== undefined) return setNavigate(activeIndex);
    })();


    function setNavigate(index){
        AllLink[oldIndex].classList.remove('header__link_active');
        AllLink[index].classList.add('header__link_active');
        oldIndex = index;
    }

    let consultation = document.getElementById('consultation');
    let services = document.getElementById('services');
    let price = document.getElementById('price');
    let contact = document.getElementById('contact');
    let steepScroll = 0;
    window.addEventListener('scroll', (e)=>{
        if (steepScroll < 10) return steepScroll++;
        steepScroll = 0;
        let topScroll = window.pageYOffset + window.innerHeight;
        let consultationTop = consultation.offsetTop;
        let servicesTop = services.offsetTop;
        if(topScroll < servicesTop) return setNavigate(0);
        let priceTop = price.offsetTop;
        if(topScroll < priceTop) return setNavigate(1);
        let contactTop = contact.offsetTop;
        if(topScroll < contactTop) return setNavigate(2);
        if (topScroll => contactTop) return setNavigate(3);
    });

    const allLinks = Array.from(document.querySelectorAll('.header__link'));

    allLinks.map((el)=>{
        el.addEventListener('click', (e)=>{
            setNavigate(e.currentTarget.getAttribute('data-index'));
        })
    })


})();