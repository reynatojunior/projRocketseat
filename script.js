function toggleMode() {
  const html = document.documentElement

  //pegar imagem

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  /*
  
  */
  html.classList.toggle("light")
}
