var MidiWriter = require('..');
var tracks = [];

// Lead Instrument
tracks[0] = new MidiWriter.Track();
tracks[0].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

// Bass
tracks[1] = new MidiWriter.Track();
tracks[1].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

// Intro
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab4'], duration: 'd2', velocity:100}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: 'd4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '1', wait:'2', velocity:1}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

// Main theme part 1
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', wait:'1', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: 'd4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'C5', 'D5', 'Eb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'F5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5', 'Ab5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5', 'Bb5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab5', 'Gb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab5'], duration: 'd8', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'Eb5'], duration: '8', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5', 'Db5'], duration: '8', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));

// Main theme part 2
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: 'd4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'C5', 'D5', 'Eb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'F5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5', 'Ab5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db6'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C6'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));

var write = new MidiWriter.Writer(tracks);

console.log(write.dataUri());
module.exports = write;
