function newImage(url, left, bottom) {
  let imageInput = document.createElement("img");
  imageInput.src = url;
  imageInput.style.position = "fixed";
  imageInput.style.left = left + "px";
  imageInput.style.bottom = bottom + "px";
  document.body.append(imageInput);
  return imageInput;
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
