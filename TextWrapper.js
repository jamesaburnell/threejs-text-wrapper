// ** James Burnell. 2016 ********************************

function TextWrapper () {
	
}
// options: string, size, color, lineLength, height, startingX, startingY, startingZ
TextWrapper.prototype.Wrap = function ( options ) {
	var group = new THREE.Object3D();
	
	// Save Starting Positions
	var position = { x: options.startingX, y: options.startingY, z: options.startingZ };

	var cutText = options.string;

	while( cutText.length > options.lineLength ) {

		// Grab First part of string and render as new line. Make sure string is cut at a space and not mid-word.
		if( cutText.charAt(options.lineLength) === ' ' ) {
			var line = cutText.substring(0, options.lineLength);

		} else {
			var counter = 1;
			while( cutText.charAt(options.lineLength - counter) !== ' ' ) {
				counter++;
			}
			var line = cutText.substring( 0, options.lineLength - counter );
		}
		line = line.trim();

		var textGeometry = new THREE.TextGeometry( line, { size: options.size, height: options.height, font: 'helvetiker' } ),
			textMaterial = new THREE.MeshLambertMaterial( { color: options.color } ),
			textMesh = new THREE.Mesh( textGeometry, textMaterial );

		// Set it's position, then offset y coord for next line
		textMesh.position.set( position.x, position.y, position.z );
		group.add( textMesh );
		position.y -= options.size*2;

		// Cut out text that was already rendered
		cutText = cutText.slice( options.lineLength - counter );
	}

	// If text is less than lineLength, just render one text geometry
	var textGeometry = new THREE.TextGeometry( cutText, { size: options.size, height: options.height, font: 'helvetiker' } ),
		textMaterial = new THREE.MeshLambertMaterial({ color: options.color }),
		textMesh = new THREE.Mesh( textGeometry, textMaterial );
	
	textMesh.position.set( position.x, position.y, position.z )
	group.add( textMesh );

	return group;

}

// trim white space on new lines
// !!!!! Need to check if next char is letter, then retrace back until it is a space, then get substring.

