import { Trainer } from './trainer';

export class Course {
    idCourse;
    trainer : Trainer = new Trainer();
    namaCourse : string;
    waktuMulai;
    waktuSelesai;
    deskripsi;
}