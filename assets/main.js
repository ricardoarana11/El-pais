document.addEventListener( 'DOMContentLoaded', function () {
	
	new Splide( '#splide', {
		// type      : 'loop',
		perPage   : 1,
		width			:	'80%',
		height    : '9rem',
		arrows		: false,
		breakpoins: {
			640: {
				height: '6rem',
			}
		}
	} ).mount();

	new Splide( '#splide__gallery', {
		type      : 'loop',
		perPage   : 1,
		width			:	'80%',
		height    : '9rem',
		arrows		: true,
		pagination: false,
		breakpoins: {
			640: {
				height: '6rem',
			}
		}
	} ).mount();
	
} );

