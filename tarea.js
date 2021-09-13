'use strict';

class Friend {
    name = '';
    lastname = '';
    _age = '';
    occupation = '';
    hobby = '';
    quote = '';
    _semester = '';

    constructor(name, lastname, age, occupation, hobby, quote, semester) {
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this.occupation = occupation;
        this.hobby = hobby;
        this.quote = quote;
        this._semester = semester;
    }

    Henlo(i) {
        for (i = 0; i < 3; i++) {
            console.log(`Mi nombre es ${this.name} ${this.lastname} tengo ${this._age+i} y voy en el semestre ${this._semester+(i*2)}`);
        }
    }

    Quote() {
        let a = 0;
        do {
            (a === 3) ? console.log(this.quote): console.log('No estas listo aún para conocer la frase');
            a++;
        } while (a < 4)
    }
    Compare() {
        (this._age >= 23) ? console.log('Deberias escuchar esto: https://www.youtube.com/watch?v=r7Q1gmovscE'): console.log('Debedias escuchad edto: https://www.youtube.com/watch?v=wDRfKmThZiE');;
    }
    Reality(c) {
        if (c % 2 == 0) {
            console.log(`Número par ehh? Soy un ${this.occupation}`);
        } else {
            console.log(`Numero impar ehh? Soy un ${this.hobby}`);
        }
    }

};

const Cloud = new Friend('Claudio', 'Romero', 23, 'Estudiante', 'Musico Frustrado', '59', 10);

Cloud.Henlo();
Cloud.Quote();
Cloud.Compare();
Cloud.Reality(3);

Object.freeze(Cloud) // ya se los congele
