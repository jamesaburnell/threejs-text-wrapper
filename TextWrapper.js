function TextWrapper () {
	
}

TextWrapper.prototype.Wrap = function ( text, size, color, lineLength, textHeight, startingX, startingY, startingZ ) {
	var group = new THREE.Object3D();
	var multiLineGroup = new THREE.Object3D
	//Save Starting Positions
	var position = { x: startingX, y: startingY, z: startingZ };

	if ( text.length <= lineLength ) {
		console.log(text);

		//If text is less than lineLength, just render one text geometry
		var textGeometry = new THREE.TextGeometry( text, {
			size: size,
			height: textHeight,
			font: 'helvetiker'
		}),
			textMaterial = new THREE.MeshLambertMaterial( {color: color} ),
			textMesh = new THREE.Mesh( textGeometry, textMaterial );
			textMesh.position.set( position.x, position.y, position.z )
			group.add( textMesh );

	} else if ( text.length > lineLength ) {

		//Grab First part of string and render as new line
		var line = text.substring(0, lineLength);
		console.log(line);
		var textGeometry = new THREE.TextGeometry( line, {
			size: size,
			height: textHeight,
			font: 'helvetiker'
		}),
			textMaterial = new THREE.MeshLambertMaterial( {color: color} ),
			textMesh = new THREE.Mesh( textGeometry, textMaterial );

		// Set it's position, then offset y coord for next line
		textMesh.position.set( position.x, position.y, position.z )
		group.add( textMesh );
		position.y -= size*2;

		//Cut out text that was already rendered
		var cutText = text.slice(lineLength);

		// Recursive call untill text length is less than lineLength
		return this.Wrap(cutText, size, color, lineLength, textHeight, position.x, position.y, position.z);

	}
	
	console.log(group);
	return group;

}