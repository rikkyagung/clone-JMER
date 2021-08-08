// Show hide button scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
};

// Scroll top when click
const scrollToTop = document.getElementById('scrollTop');
scrollToTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Tooltip
$(function () {
    $('[data-tooltip="tooltip"]').tooltip()
});