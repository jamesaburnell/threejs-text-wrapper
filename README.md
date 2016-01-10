# threejs-text-wrapper
Text geometry wrapping in three.js

Requires the Three.js TextGeometry, FontUtils, and a typeface.js font to work! You can find all these files and some existing typeface fonts at https://github.com/mrdoob/three.js

## Usage

```html
var Wrapper = new TextWrapper(),
		    input = 'On a dark desert highway, cool wind in my hair, Warm smell of colitas, rising up through the air, Up ahead                   in the distance, I saw a shimmering light, My head grew heavy and my sight grew dim, I had to stop for the                   night, There she stood in the doorway; I heard the mission bell, And I was thinking to myself, "This could                   be Heaven or this could be Hell", Then she lit up a candle and she showed me the way, There were voices                      down the corridor, I thought I heard them say...';
		
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
```
