(function($) {
	$.hayFlash = function(metodo) {
	
		var hayFlash = false;
		
		// metodos
		var metodos = {
			init : function () {
			
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
						this.hayFlash.version = control.GetVariable('$version').substring(4).split(',');
						this.hayFlash.version = this.hayFlash.version[0] + '.' + this.hayFlash.version[1];
					}
				}
				
				// para los demas navegadores
				else {
					// detecta si el plugin de flash esta instalado
					var flashPlugin = navigator.plugins["Shockwave Flash"];
					
					// si esta instalado, hayFlash es true y guardo la version
					if ( flashPlugin ) {
						hayFlash = true;
						this.hayFlash.version = flashPlugin.description.split(/ +/)[2];
					}
				}
				
				return hayFlash;
			
			},
			// devuelve la version del Flash Player
			getVersion: function () {
				return this.hayFlash.version;
			}
		};
	
		// si el usuario introdujo un metodo llamamos ese 'metodo'
		if ( metodos[metodo] ) {
			return metodos[ metodo ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		// si el usuario no introdujo ningun metodo llamamos a 'init'
		else if ( typeof metodo === 'object' || ! metodo ) {
			return metodos.init.apply( this, arguments );
		}
		// si no existe el metodo introducido devolvemos un error
		else {
			$.error( 'El método ' +  metodo + ' no existe en el plugin "hayFlash"');
		}
	}
})(jQuery);