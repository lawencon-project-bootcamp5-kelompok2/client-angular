import { Student } from './student';
import { Course } from './course';
import { Pertemuan } from './pertemuan';
import { Subcourse } from './subcourse';

export class Absensi{
    idAbsensi;
    idStudent: Student
    idSubcourse: Subcourse
    tanggal;
    status;
    pertemuan: Pertemuan
}