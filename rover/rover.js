export class Rover {
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    directions = ['N', 'E', 'S', 'W'];

    move() {
        if (this.direction == 'N'){
            this.y += 1;
        }
        if (this.direction == 'S'){
            this.y -= 1;
        }
        if (this.direction == 'E'){
            this.x += 1;
        }
        if (this.direction == 'W'){
            this.x -= 1;
        }
    }

    turn(side) {
        const index = this.directions.indexOf(this.direction)

        if(side == 'R'){
            if(index == 3){
                this.direction = this.directions[0]
            } else {
                this.direction = this.directions[index + 1]
            }
        }
        if(side == 'L'){
            if(index == 0){
                this.direction = this.directions[3]
            } else {
                this.direction = this.directions[index - 1]
            }
        }
    }
}