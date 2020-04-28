import { Subcourse } from './subcourse';
import { Soal } from './soal';

export class Test {
    idTest;
    idSubcourse: Subcourse = new Subcourse();
    fileSoal: Soal = new Soal();
    waktuMulai;
    waktuSelesai;
}