function toggleMode() {
  const html = document.documentElement

  //pegar imagem

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/av-teste.png")
  } else {
    img.setAttribute("src", "./assets/av-teste.png")
  }

  /*
  
  */
  html.classList.toggle("light")
}
