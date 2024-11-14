import { animate, inView, scroll, cubicBezier } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";
animate("body", { opacity: [0, 1] }, { duration: 1 });

const topHeader = document.querySelector(".top_header");

scroll(animate(topHeader, { opacity: [1, 0] }, { ease: "linear" }), {
  target: topHeader,
  offset: ["start start", "end start"],
});

const allStandardScrollSection = document.querySelectorAll(".standard_scroll_section");

allStandardScrollSection.forEach((eachSection) => {
  scroll(animate(eachSection, { scale: [0, 1, 1, 0] }, { ease: "linear" }), {
    target: eachSection,
    offset: ["start end", "end end", "start start", "end start"],
  });
});
scroll(animate(".ball", { rotate: [0, -180], opacity: [0, 1, 0] }, { ease: "linear" }), {
  target: document.querySelector(".the_odd_one_out"),
  offset: ["end end", "end start"],
});
scroll(
  animate(".horizontal_scroll_inner_container", {
    transform: ["translateX(100vw)", "translateX(calc(-150vw))"],
  }),
  { target: document.querySelector(".horizontal_scroll") }
);
inView(document.querySelector(".mona_video"), ({ target }) => {
  console.log("TARGET", target);
  target.querySelector("video").play();
  return () => {
    target.querySelector("video").pause();

    target.querySelector("video").currentTime = 0;
  };
});
