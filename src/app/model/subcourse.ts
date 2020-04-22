import { Course } from './course';
import { Materi } from './materi';
import { Forum } from './forum';

export interface Subcourse{
    idSubcourse;
    idCourse : Course;
    namaSubcourse;
    tanggalMulai;
    tanggalSelesai;
    materi: Materi;
    idForum: Forum;
}