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
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

let sword = document.createElement("img");
sword.src = "assets/sword.png";
sword.position = "fixed";
sword.left = "500px";
sword.bottom = "405px";
document.body.append(sword);

sword.addEventListener("click", function () {
  sword.remove();
});
