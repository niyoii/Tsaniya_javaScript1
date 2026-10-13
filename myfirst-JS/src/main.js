//JavaScript --> Programiming Language
/*
Programming language 
1. Input & Output
2. Variable and data type
3. Condition (if, else)
4. Looping (perulangan)
5. Function
*/

//Output 
//1. Using console.log()
console.log("hello world");
console.log("My name is Tsaniya Hurin");
console.log(4+5); //keluar di console itu hasilnya

//2. using alert 
alert("Welcome to My Website");

//3. using document write (makenya di dalam index.html)

//4. using inerHTML (untuk mengganti teks)
// ex:  document.getElementByID("id_name").innerHTML="type";
document.getElementById("first").innerHTML="My Name is Tsaniya";

// Input (dia adanya di HTML)

//Variable --> to store data (let, var, const) (untuk menyimpan data)
//let: datanya bisa terubah
//var: datanya bisa di rubah(tapi jarang di gunakan)
//const: datanya tidak  bisa di rubah 

//let 
let name= "Tsaniya"; //variable:name data:tsaniya
name ="Tsaniya Hurin Mukhtar"
console.log(name)// ga pake petik karena bukan string karena dia variable
console.log(name);
let a = 4;
let b = 3;
let c = a+b;
let d = a*b;
console.log(a+b);
console.log(c);
console.log(c+d);
let address ="Solo";
console.log("My name is " + name + " Iam from " + address);

let oke = 8;
let OKE = 7;
console.log(oke);
console.log(OKE);

const school = "SMA ABBS Surakarta";
console.log(school);

/*Operator Aritmatika
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagian (/)
perpangkatan (**)
modulus (%) sisa hasil bagi
*/
let number1 = 100;
let number2 = 250;
console.log(number1 + number2);
console.log(number2 - number1);
console.log(number1 * number2);
console.log(number2 / number1);
console.log(number2 % number1);
console.log(number1 ** 2);

//calculator BMI 
let bb = 57;
let tb = 156;
let bmi= (bb/(tb*tb))*10000;

console.log(bmi);

/* Data type (kotak penyimpanan dan isinya beda beda)
1. String =  Character -->,using "" /''
2. number (integer, float)
    - integer : Bilangan bulat 
    - float : Bilangan pecahan 

3. Boolean : True, False
*/
let data = "SMA ABBS Surakarta"; //string
let data1 = "100"; //string
let data2 = 50; //integer
let data3 = 25.25; //float (pecahan/desimal)
let data4 = false; //boolean

/* Comparison Operator ---> the output of comparison operator are true and false
- equal (==)
- Not equal (!=)
- greather than (>)
- greather than or equal (>=)
- less than (<)
- less than or equal (<=)
*/
let x = 5;
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/*
Logical Operators
- and (&&) jika salah satu kondisi false(0) resultny false
- or (||) jika salah satu kondisi true(1) jadi resultny true
- not (!) kebalikan dari kondisi 
*/

//Condition
/*
1. if (1 condition)
if (condition){
    action;
    }
*/

let time = 6;
if (time <=6){
    console.log("Good Morning");
}

/*
1. if (1 condition)
if (condition){
    action;
    }
    else{
        action 2;
    }
*/

let time1 = 10;
if (time1 <=6){
    console.log("Good Morning");
}
else{
    console.log("Good Bye");
}

/*kondisi 
1. jika hari ini hujan, maka membawa payung
2. jika hari ini tidak hujan, maka tidak membawa payung
 */
let cuaca ="hujan";
if (cuaca == "hujan") {
    console.log("Bawa payung!");
}
else{
    console.log("Tidak bawa payung");
}

//jika nilai lebih dari 75, maaka lulus
//jika nilai kurang dari 75, maka tidak lulus
let nilai = "89"; //buat ngecek dia nilainy lulus apa ngga nya yang di ganti itu variable nya bukan tanda di bagian console.log nya
console.log ("nilai = ", nilai);
if (nilai <=  "75") {
    console.log("Tidak lulus!");
}
else {
    console.log ("lulus");
}

//jika bilangannya itu genap, maka genap 
//jika bilngannya itu ganjil, maka ganjil

//ganjil
let bilangan = "16";
if (bilangan % 2 == "0"){
    console.log(bilangan, "Adalah Bilangan Ganjil");
}
else {
    console.log(bilangan, "Adalah Bilangan Genap");
}

/*3. More than 2 condition
    if (condition1){
     action1;
    }
    else if (condition 2){
        action2;
    }
    else (condition 4){
        action3;
    }
*/

// Calculator BMI 
let BB = 57;
let TB = 156;
let BMI= (BB/(TB*TB))*10000;
console.log("Tinggi Badan = ", TB, "Cm");
console.log("Berat badan = ", BB, "Kg");
console.log("BMI = ", BMI);
//jika BMI < 18.5 , Underweight
//jika BMI 18.5 - 24.9 , Normal weight
//jika BMI 25.0 - 29.9 , Over weight
//jika BMI >= 30.0 , Obese

if(BMI < 18.5){
    console.log("Underweight");
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log("Normal weight");
}
else if(BMI >= 24.9 && BMI <= 29.9){
    console.log("Over height");
}
else{
    console.log("Obese")
}