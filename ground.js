class Ground {
    constructor(x, y, width, height) {
        var still= {isStatic: true};

        this.body = Bodies.rectangle(x, y, width, height, still);
        World.add(world, this.body);

        this.width = width;
        this.height = height;

        this.color = "gray";
    }
    display() {
        rectMode(CENTER)
        fill(this.color);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}