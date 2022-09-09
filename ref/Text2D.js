import * as THREE from 'three';

function createText( message, height ) {

	const canvas = document.createElement( 'canvas' );
	const context = canvas.getContext( '2d' );
	let metrics = null;
	const textHeight = 100;
	context.font = 'normal ' + textHeight + 'px Arial';
	metrics = context.measureText( message );
	const textWidth = metrics.width + 100;
	canvas.width = textWidth;
	canvas.height = textHeight;
    console.log("Height", textHeight);
	context.font = 'normal ' + textHeight + 'px Arial';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.fillStyle = 'blue';
    context.strokeStyle = "green";
    context.strokeRect(0, 0, textWidth - 2, textHeight);
	context.fillText(message, textWidth / 2, textHeight / 2 );

	const texture = new THREE.Texture( canvas );
	texture.needsUpdate = true;

	const material = new THREE.MeshBasicMaterial( {
		color: '#000',
		side: THREE.DoubleSide,
		map: texture,
		transparent: true,
	} );
	const geometry = new THREE.PlaneGeometry(
		( height * textWidth ) / textHeight,
		height
	);
	const plane = new THREE.Mesh( geometry, material );
	return plane;

}

export { createText };

//# sourceURL=https://threejs.org/examples/jsm/webxr/Text2D.js