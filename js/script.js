//BOTAO VOLTAR AO TOPO

// botão
const btnTopo = document.getElementById("btnTopo");

// mostrar botão ao rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// voltar ao topo
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//DARK MODE (Modo Escuro)

const btn = document.getElementById("toggleTheme");
const icon = document.getElementById("themeIcon");

btn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {

    localStorage.setItem("theme","dark");

    icon.className = "bi bi-sun-fill";

  } else {

    localStorage.setItem("theme","light");

    icon.className = "bi bi-moon-stars-fill";
  }

});

window.addEventListener("load",()=>{

  const theme = localStorage.getItem("theme");

  if(theme === "dark") {

    document.body.classList.add("dark-mode");

    icon.className = "bi bi-sun-fill";

  }

});
