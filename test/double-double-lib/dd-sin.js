//import { describe } from 'mocha';

import assert from 'assert';

import { ddSin } from 'double-double';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const {arb} = require('@grunmouse/prover');
const prop = require('@grunmouse/prover/mocha_prop.js');

describe('ddSin', ()=>{
	prop('approx in item #1', arb.i_o(0, Math.PI), (x)=>{
		let dd = ddSin([0,x]);
		let d = Math.sin(x);
		assert.equal(dd[1], d);
	});

	prop('over PI', arb.i_i(Math.PI, 2*Math.PI), (x)=>{
		let dd = ddSin([0,x]);
		let d = Math.sin(x);
		assert.ok((dd[1]-d)/dd[1]<2*Number.EPSILON);
		assert.ok(!isNaN(dd[1]));
	});

	prop('negate', arb.i_i(-Math.PI, 0), (x)=>{
		let dd = ddSin([0,x]);
		let d = Math.sin(x);
		assert.ok((dd[1]-d)/dd[1]<2*Number.EPSILON);
		assert.ok(!isNaN(dd[1]));
	});
});