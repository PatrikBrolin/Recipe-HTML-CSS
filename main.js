const tacopaj = document.querySelector(".tacopaj");
const aglioEOlio = document.querySelector(".aglio-e-olio");
const carbonara = document.querySelector(".carbonara");

tacopaj.addEventListener("dblclick", () =>{
  tacopaj.classList.toggle("active")
})

aglioEOlio.addEventListener("dblclick", () =>{
  aglioEOlio.classList.toggle("active")
})

carbonara.addEventListener("dblclick", () =>{
  carbonara.classList.toggle("active")
})