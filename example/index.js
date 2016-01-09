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

		//Set up Text Wrapper
		var Wrapper = new TextWrapper();
		
		var text = Wrapper.Wrap('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 2, 0x0000FF, 30, 0.2, 0, 0, 0);
		scene.add( text );


}

function render () {
	requestAnimationFrame( render );
	controls.update;
	renderer.render( scene, camera );

}