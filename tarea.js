'use strict';

class Friend {
    name = '';
    lastname = '';
    _age = '';
    occupation = '';
    hobby = '';
    quote = '';
    _semester = '';

    //Atributos de Mickey
    _height = 0;
    _weight = 0;
    nick = '';
    //Fin atributos de Mickey

    //Setters
    setAge(age){
      this._age = age;
    }

    setSemester(semester){
      this._semester = semester;
    }

    setHeight(height){
      this._height = height;
    }

    setWeight(weight){
      this._weight
    }

    //Getters

    getName(){
      return this.name;
    }

    getLastname(){
      return this.lastname;
    }

    getAge(){
      return this._age;
    }

    getOccupation(){
      return this.occupation;
    }

    getHobby(){
      return this.hobby;
    }

    getQuote(){
      return this.quote;
    }

    getSemester(){
      return this._semester;
    }

    getHeight(){
      return this._height;
    }

    getWeight(){
      return this._weight;
    }

    getNick(){
      return this.nick;
    }




    constructor(name, lastname, age, occupation, hobby, quote, semester, height, weight, nick) {
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this.occupation = occupation;
        this.hobby = hobby;
        this.quote = quote;
        this._semester = semester;

        this._height = height;
        this._weight = weight;
        this.nick = nick;
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

    //Metodos de Mickey
    Altura(){
      console.log((this._height < 1.58)?`¡${this.nick}, eres muy bajito!`:((this._height < 1.72)?`${this.nick}, eres más o menos promedio`:`${this.nick}, ¿Qué tal el clima allá arriba?`));
    }

    Peso(){
      console.log((this._weight < 55)?`Mejor ponte piedras en los zapatos ${this.nick} xD`:((this._height < 80)?`Tranquilo ${this.nick} puedes subir al elevador con calma :3`:`Hmm... Yo creo que mejor usas las escaleras ${this.nick}`));
    }
    CMI(){
      console.log(`Su IMC es de ${this._height-(this._weight/100)}.`);
      console.log((this._height-(this._weight/100) < .8)?`¡¡¡Alguien dele un sandwich a ${this.nick}!!!`:((this._height-(this._weight/100) < 1.2)?`Otro tamalito, ${this.nick}? :3`:`Dieta y ejercicio para usted, ${this.nick} ¬¬`));
    }
    nickname(){
      console.log(`Hmm... Tu apodo es muy ${(this.nick.length<5)?'corto':'largo'}, ${this.nick}...`);
    }
    //Fin de Métodos de Mickey
};

const Cloud = new Friend('Claudio', 'Romero', 23, 'Estudiante', 'Musico Frustrado', '59', 10, 1.71,61,'El Furry');

Cloud.Henlo();
Cloud.Quote();
Cloud.Compare();
Cloud.Reality(3);

console.log("\n");
Cloud.Altura();
Cloud.Peso();
Cloud.CMI();
Cloud.nickname();

console.log(`¡Buenas! Mi nombre es ${Cloud.getName()}, pero me dicen ${Cloud.getNick()}, y tengo ${Cloud.getAge()} años de edad.`);

Object.freeze(Cloud) // ya se los congele
