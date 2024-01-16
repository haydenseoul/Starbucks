//favicon = 자동으로 도큐먼트 아이콘으로 들어김

const searchEl = document.querySelector('.search');
const searchInputEl =  searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})

searchInputEl.addEventListener('click', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blue', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display:'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x:0 
        })
    } else{
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x:100
        })
    }
}, 300));

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    })
})
// _.throttle(함수, 시간)  (300 millisecond = 0.3 초마다 실행)

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        delay: (index+1)*.7, //.7, 1.4, 2.1,2.8 (지연시간을 다 다르게 줘서, 1.4초, 2.1초 후 등에 나타나게))
        opacity:1
    });
})
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay:  true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    //기본이 horizontal이라 생략 가능 direction: 'hotizontal',
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백 10px
    centeredSlides: true, //1번 슬라이드가 가운데 보인다. 
    loop: true, //반복 재생 여부 
    pagination: {
        el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용사즤 페이지 번호 요소 제어 가능 여부
    },
    navigation:{ //슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', //이전 버튼 선택자
        nextEl: '.promotion .swiper-next' //다음 버튼 선택자
    }
})

const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide')
    }else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
})

//범위 랜덤 함수 (소수점 2자리까지)
function random(min,max){
    // toFixed() : 소수점 몇째 자리까지 반환할지 결정
    // parseFloat() : 소수점을 가지는 숫자 데이터 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(
        selector, //선택자
        random(1.5,2.5), //애니메이션 동작 시간
        { // 옵션
            y: size,
            yoyo: true, //힌번 동작했던 거를 반대로 동작하겠다. 이걸 넣어주면 위로도 올라온다.
            repeat: -1, //-1이 무한반복하겠다는 값
            ease: Power1.easeInOut, //easing
            delay: random(0, delay)
        }
    )
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

// ScrollMagic cdn
//요소가 화면에 보여짐 여부에 따른 요소 관리

//관리할 요소를 검색
const spyEls = document.querySelectorAll('section.scroll-spy');
//요소들 반복 처리
spyEls.forEach(spyEl => {
    new ScrollMagic
        .Scene({ //감시할 장면 (Scene)을 추가
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부를 감시
        })
        .setClassToggle(spyEl, 'show') //요소가 화면에 보이면 show 클래스를 추가한다.
        .addTo(new ScrollMagic.Controller()) //컨트롤러에 장면을 할당 (필수!)
})

//숙제: Swiper 만들어오기

// this year 찾아서 연재 년도 넣어주기 (구글링 활용)
// document.getElementById("currentYear").innerHTML = new Date().getFullYear();
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


new Swiper('.awards .swiper-container', {
    //기본이 horizontal이라 생략 가능 direction: 'hotizontal',
    slidesPerView: 5, //한번에 보여줄 슬라이드 개수
    spaceBetween: 30, //슬라이드 사이 여백 30px
    autoplay: true,
    loop: true, //반복 재생 여부 
    navigation:{ //슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.awards .swiper-prev', //이전 버튼 선택자
        nextEl: '.awards .swiper-next' //다음 버튼 선택자
    }
})

