var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi,
            this._kat = kat,
            this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.zilCal = function () {
        console.log("kapı çalındı");
    };
    return Ev;
}());
var ev = new Ev(3, 5, 8);
ev._kat = 4;
console.log(ev._odaSayisi);
ev.zilCal();
