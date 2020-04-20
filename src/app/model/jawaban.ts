import { Student } from './student';
import { FileJawaban } from './fileJawaban';
import { Test } from './test';

export interface Jawaban {
    idJawaban;
    idTest: Test;
    idStudent: Student;
    fileJawaban: FileJawaban;
    nilai;
}