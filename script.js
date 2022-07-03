new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 10,

  breakpoints: {
    320: {
      centeredSlides: true,
    },
    768: {
      slidesPerView: false,
    },
    1200: {
      slidesPerView: true,
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('activeone');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('activeone');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();


$('.mobile-tab').hide();
$('.blure').hide();
$('.overflow').hide();

$('#burg').on('click', function(){
  $('.mobile-tab').slideToggle();
  $('.blure').slideToggle();
  $(this).closest('body').toggleClass('active')
})


$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
