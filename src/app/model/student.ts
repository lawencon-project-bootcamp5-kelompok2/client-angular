import { Kelas } from './kelas';

export class Student{
    idStudent;
    npm;
    namaStudent;
    kelas: Kelas[] = [new Kelas()];
    role;
}