import { Course } from './course';

export interface Kelas {
    idKelas;
    kodeKelas;
    openKelas;
    course: Course;
    deskripsi;
}