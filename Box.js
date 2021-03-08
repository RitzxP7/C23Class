class Box{
    constructor(x, y, width, height) {
        var option = { restitution: 1, density: 1, friction: 1, mass: 500}

        this.body = Bodies.rectangle(x, y, width, height, option);
        World.add(world, this.body);
        this.width = width;
        this.height = height;

        this.color = "white";
    } 

    display() {
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);

        pop();
        
    }
    
}