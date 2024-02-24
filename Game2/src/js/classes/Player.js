class Player {
  constructor(props) {
    this.width = props.width;
    this.height = props.height;
    this.speed = props.speed;
    this.image = new Image()
    this.image.src = props.image;
    this.position = {
      x: props.position.x,
      y: props.position.y,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.heightJump = 50;
    this.gravity = 0.5;
  }

  movement(direction) {
    switch (direction) {
      case "ArrowUp":
        this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump);
        break;
      case "ArrowLeft":
        this.velocity.x = -1 * this.speed;

        break;
      case "ArrowRight":
        this.velocity.x = 1 * this.speed;
        break;
      default:
        break;
    }
  }

  update() {
    const ground = canvas.height - this.height;

    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (player.position.y > ground) {
      this.position.y = ground;
    }
  }

  create() {
    board.drawImage(this.image, this.position.x, this.position.y);
  }
}
