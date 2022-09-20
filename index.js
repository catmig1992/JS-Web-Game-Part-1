function backgroundImage(url, left, bottom, width, height) {
  for (let w = 0; w < width; w++) {
    for (let h = 0; h < height; h++) {
      newImage(url, left + w * 100, bottom + h * 100);
    }
  }
}

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

  imageInput.addEventListener("dblclick", function () {
    imageInput.remove();
  });
}

let horizon = window.innerHeight / 1.45;
let heightOfGrass = horizon;
let heightOfSky = window.innerHeight - horizon;

backgroundImage(
  "assets/grass.png",
  0,
  0,
  window.innerWidth / 100,
  heightOfGrass / 100
);
backgroundImage(
  "assets/sky.png",
  0,
  horizon,
  window.innerWidth / 100,
  heightOfSky / 100
);

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/shield.png", 165, 185);
newItem("assets/staff.png", 600, 100);
