class Game {
    constructor() {
        this.bird = new Bird(WIDTH / 2, HEIGHT / 2, 120, 100, birdImg);
        this.score = 0;
        this.lost = false;
        this.activeBars = [new Bar()];
        this.restBars = [];

        this.rewinding = false;

        this.route = [];
        this.routeLength = 0;
    }

    flap() {
        this.bird.flap();
    }

    update() {
        this.bird.update();

        if (this.bird.y < HEIGHT) {
            this.route.push({
                y: this.bird.y,
                theta: this.bird.theta
            });

            this.routeLength++;
        }

        if (!this.lost) {
            for (let b of this.restBars) {
                b.update();
            }

            for (let b of this.activeBars) {
                b.update();

                if (b.rightX < this.bird.leftX) {
                    this.restBars.push(this.activeBars.splice(b, 1)[0]);
                    this.activeBars.push(new Bar());
                    this.score++;

                    playSound();
                }

                if (!this.rewinding &&
                    this.bird.box.intersects(b.boxes[0]) ||
                    this.bird.box.intersects(b.boxes[1]) ||
                    this.bird.box.v3.y >= HEIGHT) {
                    this.lost = true;
                    THATSHOT.play();
                }
            }
        }
    }

    rewind() {
        let m = ceil(this.routeLength / 180);
        let l = ceil(this.routeLength / 30);
        let a = -4 * m / Math.pow(l, 2);
        let b = 4 * m / l;

        let x = ceil(this.route.length / 30);

        let times = Math.max(1, ceil(a * pow(x, 2) + b * x));

        for (let i = 0; i < times; i++) {
            if (this.lost) {
                this.lost = false;
                this.bird.vel = 0;
            }

            if (this.restBars.length > 0) {
                this.rewinding = this.restBars[0].leftX < WIDTH;
            }
            else {
                this.rewinding = this.activeBars[0].leftX < WIDTH;
            }

            if (this.rewinding) {
                for (let b of this.restBars) {
                    b.update(true);
                }

                for (let b of this.activeBars) {
                    b.update(true);
                }

                let p = this.route.pop();

                this.bird.y = p.y
                this.bird.box.theta = p.theta;
            } else {
                this.route = [];
                this.restBars = [];
                this.activeBars = [new Bar()];
                this.score = 0;

                this.routeLength = 0;
            }
        }
        
        return this.rewinding;
    }

    show() {
        for (let b of this.restBars) {
            if (b.rightX >= 0) {
                b.show();
            }
        }

        for (let b of this.activeBars) {
            b.show();
        }

        this.bird.show();
    }
}