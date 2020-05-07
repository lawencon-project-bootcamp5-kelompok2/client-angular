import { Student } from './student';
import { Course } from './course';
import { Pertemuan } from './pertemuan';
import { Subcourse } from './subcourse';

export class Absensi{
    idAbsensi;
    idStudent: Student = new Student();
    idSubcourse: Subcourse = new Subcourse();
    tanggal;
    status;
    pertemuan: Pertemuan = new Pertemuan();
}