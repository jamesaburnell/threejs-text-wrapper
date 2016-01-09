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
		var input = 'Hey whats up! hows it going? this text is gonna wrap real nice. swag swag. while loop is working but it wont recursively do it yet :( hey hey hey hey hey hey hey hey';
		var text = Wrapper.Wrap(input, 10, 0x0000FF, 50, .2, 0, 0, 0);
		scene.add( text );


}

function render () {
	requestAnimationFrame( render );
	controls.update;
	renderer.render( scene, camera );

}