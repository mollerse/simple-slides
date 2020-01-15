let slides = document.querySelector("#slides");

function slide(content) {
  let s = document.createElement("div");
  s.classList.add("slide");
  s.innerHTML = content;

  let n = slides.querySelectorAll(".slide").length;
  s.id = `slide-${n + 1}`;

  slides.appendChild(s);
}

slide(`
  <h1>Dette er en test</h1>
  <p>lorem ipsum</p>
`);
slide(`
  <p>lorem ipsum</p>
`);
slide(`
  <h2>Sub-sections!</h2>
  <p>lorem ipsum</p>
`);
