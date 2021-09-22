let i, text;
i = 0;
text =
  "Tengo 22 años. Vivo en La Plata, Buenos Aires. Soy una persona proactiva y autodidacta.";

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();
