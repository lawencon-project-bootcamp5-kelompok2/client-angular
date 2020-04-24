import { Kelas } from './kelas';

export interface Student{
    idStudent;
    npm;
    namaStudent;
    kelas: Kelas[];
    role;
}