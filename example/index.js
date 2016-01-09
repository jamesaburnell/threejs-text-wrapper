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
		var Wrapper = new TextWrapper();
		var input = 'How much wood would a wood chuck chuck if a wood chuck could chuck wood. Happy birthday to you, happy birthday to you, happy birthday to you you. happy birthday to you.';
		var text = Wrapper.Wrap({ 
			string: input, 
			size: 10, 
			color: 0x0000FF, 
			lineLength: 50, 
			height: .2, 
			startingX: 0, 
			startingY: 0, 
			startingZ: 0 
		});

		scene.add( text );

		// input, 10, 0x0000FF, 50, .2, 0, 0, 0)


}

function render () {
	requestAnimationFrame( render );
	controls.update;
	renderer.render( scene, camera );

}