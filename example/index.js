var camera, scene, renderer, controls;

init();
render();

function init () {

	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight,
		ASPECT = WIDTH / HEIGHT;

		// Set up camera and scene
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera( 75, ASPECT, 0.1, 20000 );
		camera.position.set( 10, 0, 10 );
		scene.add( camera );

		// Set up WebGL Renderer
		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		renderer.setSize( WIDTH, HEIGHT );
		renderer.setPixelRatio( window.devicePixelRatio );
		document.body.appendChild( renderer.domElement );

		// Set up Orbit Controls
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.maxDistance = 300;
		controls.minDistance = 15;
		controls.zoomSpeed = 0.8;

		//Set up Text Wrapper!!
		var Wrapper = new TextWrapper(),
		    input = 'On a dark desert highway, cool wind in my hair, Warm smell of colitas, rising up through the air, Up ahead in the distance, I saw a shimmering light, My head grew heavy and my sight grew dim, I had to stop for the night, There she stood in the doorway; I heard the mission bell, And I was thinking to myself, "This could be Heaven or this could be Hell", Then she lit up a candle and she showed me the way, There were voices down the corridor, I thought I heard them say...';
		
		// Wrap that shit
		var text = Wrapper.Wrap({ 
			string: input, 
			size: 5, 
			color: 0x0000FF, 
			lineLength: 100, 
			height: .2, 
			startingX: 0, 
			startingY: 0, 
			startingZ: 0 
		});

		scene.add( text );

}

function render () {
	requestAnimationFrame( render );
	controls.update;
	renderer.render( scene, camera );

}