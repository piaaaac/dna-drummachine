import {Constants} from '../constants';
import {Utils} from '../utils';

/**
 * Object representation of a key signature meta event.
 * @return {KeySignatureEvent}
 */
class KeySignatureEvent {
	constructor(sf, mi) {
		this.type = 'key-signature';

		var mode = mi || 0;
		sf = sf || 0;

		//	Function called with string notation
		if (typeof mi === 'undefined') {
			var fifths = [
				['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'],
				['ab', 'eb', 'bb', 'f', 'c', 'g', 'd', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#', 'a#']
			];
			var _sflen = sf.length;
			var note = sf || 'C';

			if (sf[0] === sf[0].toLowerCase()) mode = 1

			if (_sflen > 1) {
				switch (sf.charAt(_sflen - 1)) {
					case 'm':
						mode = 1;
						note = sf.charAt(0).toLowerCase();
						note = note.concat(sf.substring(1, _sflen - 1));
						break;
					case '-':
						mode = 1;
						note = sf.charAt(0).toLowerCase();
						note = note.concat(sf.substring(1, _sflen - 1));
						break;
					case 'M':
						mode = 0;
						note = sf.charAt(0).toUpperCase();
						note = note.concat(sf.substring(1, _sflen - 1));
						break;
					case '+':
						mode = 0;
						note = sf.charAt(0).toUpperCase();
						note = note.concat(sf.substring(1, _sflen - 1));
						break;
				}
			}

			var fifthindex = fifths[mode].indexOf(note);
			sf = fifthindex === -1 ? 0 : fifthindex - 7;
		}

		// Start with zero time delta
		this.data = Utils.numberToVariableLength(0x00).concat(
			Constants.META_EVENT_ID,
			Constants.META_KEY_SIGNATURE_ID,
			[0x02], // Size
			Utils.numberToBytes(sf, 1), // Number of sharp or flats ( < 0 flat; > 0 sharp)
			Utils.numberToBytes(mode, 1), // Mode: 0 major, 1 minor
		);
	}
}

export {KeySignatureEvent};
