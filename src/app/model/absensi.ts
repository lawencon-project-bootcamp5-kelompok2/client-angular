import { Student } from './student';
import { Course } from './course';

export interface Absensi{
    idAbsensi;
    idStudent: Student;
    idCourse: Course;
    tanggal;
    status;
}