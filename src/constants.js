import { 
	strToDd,
	ddDivDd,
	ddDivBy2,
	PIDd, eDd, ln2Dd, eulerDd
} from 'double-double';

const ddPI = PIDd;
const ddE = eDd;
const ddLn2 = ln2Dd;
const ddEuler = eulerDd; //число Эйлера–Маскерони (Euler–Mascheroni)

const ddLn10 = strToDd('2.30258509299404568401799145468');
const ddLog2E = ddDivDd([0,1], ddLn2);
const ddLog10E = ddDivDd([0,1], ddLn10);
const ddSQRT2 =   strToDd('1.4142135623730950488016887242097');
const ddSQRT1_2 = strToDd('0.707106781186547524400844362104849');

const ddPI_2 = ddDivBy2(ddPI);
const ddPI_4 = ddDivBy2(ddPI_2);

export {
	ddPI, ddPI_2, ddPI_4,
	ddE
	ddLn2, ddLn10, ddLog10E, ddlog2E
	ddSQRT2, ddSQRT1_2,
	ddEulerMasch
};