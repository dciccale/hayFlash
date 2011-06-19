/* jQuery hayFlash
* ----------------------------------------------------------
* Author: Denis Ciccale (dciccale@gmail.com)
*
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/ 
var $hayFlash = (function() {
	var hayFlash = false, version;
			
	// para internet explorer
	if (window.ActiveXObject) {
		var control = null;
		
		// intento crear el objeto ActiveX
		try {
			control = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		} catch ( e ) {
			return;
		}
		
		// si esta instalado, hayFlash es true y guardo la version
		if (control) {
			hayFlash = true;
			version = control.GetVariable('$version').substring(4).split(',');
			version = version[0] + '.' + version[1];
		}
	}
		
	// para los demas navegadores
	else {
		// detecta si el plugin de flash esta instalado
		var flashPlugin = navigator.plugins["Shockwave Flash"];
		
		// si esta instalado, hayFlash es true y guardo la version
		if ( flashPlugin ) {
			hayFlash = true;
			version = flashPlugin.description.split(/ +/)[2];
		}
	}

	// devuelvo algunos metodos
	return function(metodo) {
		
			metodos = {
				getVersion: function () {
					return version;
				}
			};
		
			// si el usuario introdujo un metodo llamamos ese 'metodo'
			if ( metodos[metodo] ) {
				return metodos[ metodo ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} 
			// si el usuario no introdujo ningun metodo llamamos a 'init'
			else if ( typeof metodo === 'object' || ! metodo ) {
				return hayFlash;
			}
			// si no existe el metodo introducido devolvemos un error
			else {
				return 'El m�todo ' +  metodo + ' no existe';
			}
			
		};
	
})();