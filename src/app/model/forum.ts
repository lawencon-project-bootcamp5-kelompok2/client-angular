import { Subcourse } from './subcourse';
import { Pertemuan } from './pertemuan';

export class Forum {
    idForum;
    emailSender;
    subjek;
    deskripsi;
    idPertemuan: Pertemuan = new Pertemuan();
}