import { Course } from './course';
import { Materi } from './materi';
import { Forum } from './forum';

export class Subcourse{
    idSubcourse;
    idCourse : Course;
    namaSubcourse;
    tanggalMulai;
    tanggalSelesai;
    materi: Materi = new Materi();
    idForum: Forum;
}