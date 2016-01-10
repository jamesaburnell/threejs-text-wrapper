# threejs-text-wrapper
Text geometry wrapping in three.js

Requires the Three.js TextGeometry, FontUtils, and a typeface.js font to work! You can find all these files and some existing typeface fonts at https://github.com/mrdoob/three.js

## Usage

```html
var Wrapper = new TextWrapper(),

var input = 'some super long text that needs to wrap';
		
var text = Wrapper.Wrap({ 
	string: input, 
	size: 5, 
	color: 0x0000FF, 
	lineLength: 50, 
	height: .2, 
	startingX: 0, 
	startingY: 0, 
	startingZ: 0 
});

	scene.add( text );
```
