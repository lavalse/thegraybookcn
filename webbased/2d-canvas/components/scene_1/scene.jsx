import React from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;

export default function Scene(){

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(0, 0, 0, 0);
		p5.ellipse(x, y, 70, 70);
		p5.ellipse(80, 80, 70, 70);
		p5.ellipse(130, 130, 70, 70);
	};

	return <Sketch setup={setup} draw={draw} />;
};