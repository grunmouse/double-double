import assert from 'assert';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const {arb} = require('@grunmouse/prover');
const prop = require('@grunmouse/prover/mocha_prop.js');

function isApprox(dd, d){
	let y = dd[1];
	if(Math.abs(d)>Math.abs(y)){
		[y,d]=[d,y];
	}
	let h = d==0 ? y : (y-d)/d;
	h = Math.abs(h);
	
	return h<2*Number.EPSILON;
}

function assertApproxEqual(actual, expected, message) {
    if (!isApprox(actual, expected)) {
        // Формируем сообщение в стиле assert.equal
        // Можно использовать util.format или просто шаблонную строку
        throw new assert.AssertionError({
            message: message || `expected ${actual} to approximately equal ${expected}`,
            actual:actual[1],
            expected,
            operator: 'approxEqual',
            stackStartFn: assertApproxEqual
        });
    }
}

function assertApprox(dd, d){
	if(isApprox(dd,d)){
		assert.ok(true);
	}
	else{
		assert.equal(dd[1],d);
	}
}

function propApprox(title, arbitrary, actual, expect){
    prop(title, arbitrary, (x) => {
        let dd = actual([0, x]);
        let d = expect(x);
        assertApproxEqual(dd, d);
    });
}
function propApprox2(title, arbitrary0, arbitrary1, actual, expect){
    prop(title, arbitrary, (x,y) => {
        let dd = actual([0, x],[0, y]);
        let d = expect(x,y);
        assertApprox(dd, d);
    });
}

export {
	arb,
	prop,
	assert,
	isApprox,
	assertApprox,
	propApprox,
	propApprox2
};