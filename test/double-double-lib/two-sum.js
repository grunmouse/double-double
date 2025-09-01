//import { describe } from 'mocha';

import assert from 'assert';

import { twoSum } from 'double-double';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const {arb} = require('@grunmouse/prover');
const prop = require('@grunmouse/prover/mocha_prop.js');

describe('twoSum', function() {
	it('should add two doubles without any error', 
	function() {
		let a = 0.1;
		let b = 0.2;
		assert.deepEqual(twoSum(a,b),[
			-2.7755575615628914e-17,
			0.30000000000000004
		]);
	});
	
	prop('approx sum is a item #1', arb.o_o(-Infinity, Infinity), arb.o_o(-Infinity, Infinity), (a,b)=>{
		let c = twoSum(a,b);
		assert.equal(c[1], a+b);
	});	
	
	prop('a+b == b+a', arb.o_o(-Infinity, Infinity), arb.o_o(-Infinity, Infinity), (a,b)=>{
		let c = twoSum(a,b);
		let c1 = twoSum(b,a);
		assert.deepEqual(c, c1);
	});

	
	prop('a + 0 == a',  arb.o_o(-Infinity, Infinity), (a)=>{
		let c = twoSum(0, a);
		assert.deepEqual(c, [0,a]);
	});

});