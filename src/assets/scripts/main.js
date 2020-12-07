import "normalize.css";
import "aos/dist/aos.css";
import "../styles/main.scss";

import $ from "jquery";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";
import "@fortawesome/fontawesome-free/js/regular.min.js";


import AOS from "aos";
import TypeIt from "typeIt";

var currentMousePos = { x: -1, y: -1 };
$(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
});

$('section.hero > .info').on('mouseenter', function() {
    this.iid = setInterval(function() {
        var shift = -window.innerWidth / 25 * (currentMousePos.x / window.innerWidth - 0.5);
        var shiftY = -window.innerWidth / 30 * (currentMousePos.y / window.innerHeight - 0.5);
        $('section.hero > .info').css("transform", `translateX(${shift}px) translateY(${shiftY}px)`);
    }, 25);
}).on('mouseleave', function() {
    $('section.hero > .info').css("transform", "initial");
    this.iid && clearInterval(this.iid);
});

// Custom Smooth Scroll
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(t) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    var e = $(this.hash);
    (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), $("html, body").stop(!0, !1).animate({ scrollTop: e.offset().top }, 1e3, "easeInOutCubic", (function() {
        var t = $(e);
        if (t.focus(), t.is(":focus")) return !1;
        t.attr("tabindex", "-1"), t.focus();
    })));
}
}));

new TypeIt("#type-text", {
    strings: ["Hello,", "I'm <span style='-webkit-text-fill-color: var(--blue);'>Nathan Choi</span>."],
    speed: 90,
    startDelay: 1000,
    cursor: true
})
.pause(1000)
.delete(1)
.pause(500)
.type(" :)")
.go();

for (let i = 0; i < 4; i++) {
    new TypeIt(".type" + (i + 1), {
        speed: 90,
        startDelay: i % 2 == 0 ? 0 : 1500,
    })
    .go();
}

AOS.init({
    duration: 1000,
    delay: 0
});