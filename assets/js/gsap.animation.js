gsap.from(".gsap_from_animation", {
  opacity: 0,
  x: function (index, target, targets) {
    if (index === 0) {
      return index + 100;
    }
    return index * 100;
  },
  duration: 1,
  scrollTrigger: {
    trigger: ".gsap_from_animation",
    toggleActions: "restart",
  },
});

gsap.from(".gsap_animate_about_1", {
  opacity: 0,
  x: -200,
  duration: 1,
  scrollTrigger: {
    trigger: ".gsap_animate_about_1",
    toggleActions: "restart",
  },
});

gsap.from(".gsap_animate_about_2", {
  opacity: 0,
  x: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".gsap_animate_about_2",
    toggleActions: "restart",
  },
});

gsap.from(".gsap_animate_faq", {
  opacity: 0,
  x: function (index, target, targets) {
    if (index === 0) {
      return index + 100;
    }
    return index * 100;
  },
  duration: 1,
  scrollTrigger: {
    trigger: ".gsap_animate_faq",
    toggleActions: "restart",
  },
});

gsap.from(".gsap_animate_contact", {
  opacity: 0,
  x: function (index, target, targets) {
    if (index === 0) {
      return index + 100;
    }
    return index * 100;
  },
  duration: 1,
  scrollTrigger: {
    trigger: ".gsap_animate_contact",
    toggleActions: "restart",
  },
});

gsap.from(".gsap_animate_contact_form", {
  scale: 0.1,
  opacity: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".gsap_animate_contact_form",
    toggleActions: "restart",
  },
});
