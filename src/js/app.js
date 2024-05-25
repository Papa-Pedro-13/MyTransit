/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

window.onload = function () {
	let serviceTransY = '-80%', serviceTransVw = '50vw', serviceTransPX = '90px', officesImages = '600%', transIconBig = '150px';
	if (document.documentElement.clientWidth >= 960) {
		serviceTransY = '-85%';
		serviceTransVw = '25vw'
		serviceTransPX = '180px';

	}

	if (document.documentElement.clientWidth >= 1440) {
		document.querySelectorAll('.cards-item').forEach(item => {
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "100 bottom", // when the top of the trigger hits the top of the viewport
					end: "+=200",
					scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

				},
			}).to(item, {
				x: 0,
				ease: 'linear'
			});
		})
	}
	let serviceBlock = gsap.timeline({
		scrollTrigger: {
			trigger: ".services-bl__inner",
			pin: true, // pin the trigger element while active
			start: "top top", // when the top of the trigger hits the top of the viewport
			end: "+=2000",
			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		},
	}).to(".services-bl__inner", {
		'--transVw': serviceTransVw,
		'--transPX': serviceTransPX,
		'--transIconBig': transIconBig,
		'--transY': serviceTransY, ease: 'linear'
	});
	let stepsMainPage = gsap.timeline({
		scrollTrigger: {
			trigger: ".steps",
			start: "center bottom", // when the top of the trigger hits the top of the viewport
			end: "120% bottom",
			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

		},
	}).to(".portal__step-item", {
		x: 0
	});
	document.querySelector(".header-mobile__dropdown-header").addEventListener("click", () => {
		document.querySelector(".header-mobile__dropdown").classList.toggle("header-mobile__dropdown--open")
	})
	document.querySelectorAll('.reviews-item').forEach(item => {
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "bottom bottom", // when the top of the trigger hits the top of the viewport
				end: "+=100",
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		}).to(item, {
			x: 0
		});
	})
	let officeBlock = gsap.timeline({
		scrollTrigger: {
			trigger: ".offices",
			pin: true, // pin the trigger element while active
			start: "100px  top", // when the top of the trigger hits the top of the viewport
			end: "+=1500",
			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		},
	}).to(".offices__inner", {
		'--transTop': '0',
		'--transImages': officesImages,
		ease: 'linear'
	});
	let advantagesBlock = gsap.timeline({
		scrollTrigger: {
			trigger: ".advantages__inner",
			pin: true, // pin the trigger element while active
			start: "top top", // when the top of the trigger hits the top of the viewport
			end: "+=2000",
			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		},
	}).to(".advantages__inner", {
		'--transX': '0%',
		'--transY': '0%',
		ease: 'linear'
	});
	document.querySelectorAll('.custom__step-item').forEach(item => {
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "bottom bottom", // when the top of the trigger hits the top of the viewport
				end: "+=200",
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		}).to(item, {
			x: 0
		});
	})
	document.querySelectorAll('.description-block__item').forEach(item => {
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "bottom bottom", // when the top of the trigger hits the top of the viewport
				end: "+=200",
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		}).to(item, {
			x: 0
		});
	})
	document.querySelectorAll('.team__card').forEach(item => {
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "0 bottom", // when the top of the trigger hits the top of the viewport
				end: "+=150",
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

			},
		}).to(item, {
			y: 0
		});
	})
	document.querySelector(".scrollTop").addEventListener('click', () => {
		window.scrollTo(0, 0);
	})
	document.addEventListener('scroll', () => {
		if (window.scrollY > 1000) {
			document.querySelector(".scrollTop").style.display = 'block';
		}
		else {
			document.querySelector(".scrollTop").style.display = 'none';
		}
	})
	document.querySelector(".dropdown__link--last").addEventListener("mouseenter", () => {
		document.querySelector(".header-dropdown__right").style.transform = "none";
	})
	document.querySelector(".dropdown__link--last").addEventListener("mouseleave", () => {
		document.querySelector(".header-dropdown__right").style.transform = "translateX(-100%)", 100;
	})
	document.querySelector(".header-dropdown__right").addEventListener("mouseenter", () => {
		document.querySelector(".header-dropdown__right").style.transform = "none";
	})
	document.querySelector(".header-dropdown__right").addEventListener("mouseleave", () => {
		document.querySelector(".header-dropdown__right").style.transform = "translateX(-100%)";

	})
}