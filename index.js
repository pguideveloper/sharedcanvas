function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);

    socket.connect('http://localhost:3000');
    socket.on('paths', reDraw);
    strokeWeight(4);
}

function reDraw(data) {
    stroke(255, 0, 50); 
    line(data.x, data.y, data.px, data.py);
}


function mouseDragged() {
	let data = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY
	}
	socket.emit('paths', data);
	stroke(255);
    line(data.x, data.y, data.px, data.py);
}


function draw() {

}

