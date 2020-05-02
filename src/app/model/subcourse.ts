import { Course } from './course';
import { Materi } from './materi';
import { Forum } from './forum';

export class Subcourse{
    idSubcourse;
    idCourse : Course = new Course();
    namaSubcourse;
    tanggalMulai;
    tanggalSelesai : Date;
    idMateri: Materi = new Materi();
    idForum: Forum;
}