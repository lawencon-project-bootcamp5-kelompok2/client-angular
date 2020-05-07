import { Student } from './student';
import { FileJawaban } from './fileJawaban';
import { Test } from './test';
import { FileJawabanService } from '../service/file-jawaban.service';

export class Jawaban {
    idJawaban;
    idTest: Test = new Test();
    idStudent: Student = new Student();
    fileJawaban: FileJawaban = new FileJawaban();
    nilai;
}