import { Subcourse } from './subcourse';
import { Materi } from './materi';

export class Pertemuan {
    idPertemuan;
    pertemuan;
    tanggalPertemuan;
    idSubcourse: Subcourse = new Subcourse();
    idMateri: Materi;   
}