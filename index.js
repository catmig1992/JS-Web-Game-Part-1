function newImage(url, left, bottom) {
  let imageInput = document.createElement("img");
  imageInput.src = url;
  imageInput.style.position = "fixed";
  imageInput.style.left = left + "px";
  imageInput.style.bottom = bottom + "px";
  document.body.append(imageInput);
  return imageInput;
}

function newItem(url, left, bottom) {
  let imageInput = newImage(url, left, bottom);

  imageInput.addEventListener("click", function () {
    imageInput.remove();
  });
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
