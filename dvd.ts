const canvas = document.getElementById("c") as HTMLCanvasElement;
const spawn_cube = document.getElementById("spawn_cube") as HTMLButtonElement;
const ctx = canvas.getContext("2d")!;

type cube = {
  colour: string;
  x: number;
  y: number;
  changeX: number;
  changeY: number;
};
let cubes: cube[] = [];

spawn_cube.addEventListener("click", () => {
  const colors = ["red", "green", "blue"];
  const options = [-1, 1];

  let x = Math.floor(Math.random() * (canvas.width - 20));
  let y = Math.floor(Math.random() * (canvas.height - 20));

  const pick = colors[Math.floor(Math.random() * colors.length)];
  cubes.push({
    colour: pick,
    x: x,
    y: y,
    changeX: options[Math.floor(Math.random() * options.length)],
    changeY: options[Math.floor(Math.random() * options.length)],
  });
});

function render(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cubes.forEach((element) => {
    ctx.fillStyle = element.colour;
    ctx.fillRect(element.x, element.y, 20, 20);
    element.x += element.changeX;
    element.y += element.changeY;
    if (element.x + 20 >= canvas.width) {
      element.changeX = -1;
    }

    if (element.x <= 0) {
      element.changeX = 1;
    }

    if (element.y + 20 >= canvas.height) {
      element.changeY = -1;
    }

    if (element.y <= 0) {
      element.changeY = 1;
    }
  });

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
