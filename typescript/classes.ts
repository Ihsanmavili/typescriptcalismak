class Ev {
    _odaSayisi: number;
    _pencereSayisi: number;
    _kat: number;

    constructor(odaSayisi: number,
        pencereSayisi: number,
        kat: number) {
        this._odaSayisi = odaSayisi,
            this._kat = kat,
        this._pencereSayisi = pencereSayisi
    }


    zilCal() {
        console.log("kapı çalındı");
    }

}

let ev = new Ev(3, 5, 8);
ev._kat = 4;
console.log(ev._odaSayisi);
ev.zilCal();


//--oop nin 4 ilkesi--
//Inheritence (Kalıtım)
//Encapsulation (Kapsülleme)
//Abstraction (Soyutlama)
//Polymorpshim (Çok Biçimlilik)



//Inheritence (Kalıtım)
class Kisi {
    kisiselBilgiler() {
        console.log("kişi bilgileri kaydedildi")
    }
}

class Personel extends Kisi {
    maasAl() {
        console.log("maaş alındı")
    }
}

let kisi = new Kisi();
kisi.kisiselBilgiler();

let personel = new Personel();
personel.kisiselBilgiler();


//eksikler var  get set vs onları yaz

//


