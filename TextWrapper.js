function TextWrapper () {
	
}

TextWrapper.prototype.Wrap = function ( text, size, color, lineLength, textHeight, startingX, startingY, startingZ ) {
	var group = new THREE.Object3D();
	
	//Save Starting Positions
	var position = { x: startingX, y: startingY, z: startingZ };

	var cutText = text;

	while( cutText.length > lineLength ) {

		// Grab First part of string and render as new line
		var line = cutText.substring(0, lineLength);
		var textGeometry = new THREE.TextGeometry( line, { size: size, height: textHeight, font: 'helvetiker' } ),
			textMaterial = new THREE.MeshLambertMaterial( { color: color } ),
			textMesh = new THREE.Mesh( textGeometry, textMaterial );

		// Set it's position, then offset y coord for next line
		textMesh.position.set( position.x, position.y, position.z )
		group.add( textMesh );
		position.y -= size*2;

		// Cut out text that was already rendered
		cutText = cutText.slice( lineLength );
	}

	// If text is less than lineLength, just render one text geometry
	var textGeometry = new THREE.TextGeometry( cutText, { size: size, height: textHeight, font: 'helvetiker' } ),
		textMaterial = new THREE.MeshLambertMaterial( { color: color } ),
		textMesh = new THREE.Mesh( textGeometry, textMaterial );
	
	textMesh.position.set( position.x, position.y, position.z )
	group.add( textMesh );

	return group;

}

// trim white space on new lines
//
