const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    
    // css top and left property
  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
});
