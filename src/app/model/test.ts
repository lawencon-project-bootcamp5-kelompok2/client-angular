import { Subcourse } from './subcourse';
import { Soal } from './soal';

export interface Test {
    idTest;
    idSubcourse: Subcourse;
    fileSoal: Soal;
    waktuMulai;
    waktuSelesai;
}