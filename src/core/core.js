/**
 * Project          : JavaScript 2D Game Engine
 * Module           : Engine Core
 * Source filename  : core.js
 * Description      : Engine entry point for configurations & settings.
 * Author           : Ashish Yadav<contact@ashiish.me>
 * Copyright        : Copyright © 2020, www.ashiish.me
 *                    This software is free to use but please provide attribution to me if possible.
 *
 * @package game-engine               
 */

// Game Engine
let Engine = {};

/**
 * Engine core configuration
 * @param {object} args - canvas configuration
 */
Engine.config = function(args) {
	// Default H & W
	let PANEL_HEIGHT = PANEL_WIDTH = 500;
	let canvas = document.getElementById(args.canvas);
	let context = canvas.getContext('2d');
	let height = canvas.height = ((args.height) ? args.height : PANEL_HEIGHT);
	let width = canvas.width = ((args.width) ? args.width : PANEL_WIDTH);

	return {
		width: width,
		height: height,
		context: context
	};

}

/**
 * Initialize our game engine
 * @param {object} args - canvas configuration
 */

Engine.init = function(args) {
	Engine.config(args);
}
