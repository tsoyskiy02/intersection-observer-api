"use strict";

/* const d3 = document.querySelector(".d--3");

function fn1(entries) {
    entries.forEach((el) => {
        console.log(el)
    })
}

const options = {
    threshold: 0.2,
};

const a1 = new IntersectionObserver(fn1, options);

a1.observe(d3); */

console.log("--------------------------------------");

const d5 = document.querySelector(".d--5");

const header = document.querySelector("header");

const headerObserver = new IntersectionObserver(
    function (e) {
        e.forEach((el) => {
            if (el.isIntersecting) {
                header.classList.add("k2");
            } else {
                header.classList.remove("k2");
            }
        });
    },
    {
        threshold: 0.5,
    }
);

headerObserver.observe(d5);



const block = document.querySelectorAll(".block");

function fn2(etries, obs) {
    const sec = etries[0];

    if (sec.isIntersecting) {
        sec.target.classList.add("l8");
    }
    obs.unobserve(sec.target)
}

const sectionObserver = new IntersectionObserver(fn2, {threshold: 0.2});

block.forEach((el) => {
    sectionObserver.observe(el);
});
