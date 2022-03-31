**TITIK COMA OPSIONAL DI JAVA SCRIPT**

- agar kode lebih konsisten lebih baik pilih pakai atau tidak
- Saya merekomendasikan anda mengunakan `;`

- `//comment di javaScript` <= ini adalah inline komen
-

```
/*
  double line comment
  double line comment
*/
```

di atas adalah double line comment

**TIPE DATA NUMBER JAVASCRIPT**

- Javascript hanya mendukung satau tipe data Number berupa bilangan bulat atau bilangan desimal
  - Bilangan bulat ` 10 , 45 ,89` dll
  - Bilangan decimal `10.5 ,7.2 ,4.4 , 3.2` dll
- untuk membuat Number di javacript langsung saja ditulis tampa tanda petik
- contoh:
  - `10 , 10.5 , 100 ` <= adalah NUMBER
  - `"10","10.5","100"` <= ini adalah STRING

**NUMBER NOTATION**

- javascript mendukung number notation, default nya adalah basis 10
- javascript juga mendukung BINARY,HEXADECIMAL dan OCTAL
  - `HEXADESIMAL : 0xFF`
  - `BINARY : 0b10101`
  - `OCTAL :0o10`

**TIPE DATA BOOLEAN**

- TIPE DATA `boolean` adalah tipe data yang berisikan nilai kebenaran
  artinya hanya ada dua nilai `BENAR` atau `SALAH` (`TRUE` atau `FALSE`)
- walau tipe data boolean murapakan tipa data yang sangat sederhana tapi tipe data ini sangat banya di gunakan di bebrapa fitur program

**TIPE DATA STRING**

- tipe data string di tandai dengan tand petik `"PETIK DUA"` dan `'PETIK SATU'`
- nilai nya boleh kosong atau banyak karakter
- `MENAMBAH` atau menggabngkan `STRING` biasanya mengunkan tanda `+`(plus)

**ESCAPE SEQUENCE**

- javascript mendukung `escape sequence` di `string`. escape sequence merupakan karakter
  khusus seperti `TAB`,` ENTER` , `kutip` dua ` dll`

```
  ---------------------------
  |    \n       | ENTER     |
  ---------------------------
  |    \t       | TAB       |
  |    \'       | (kutip ') |
  |    \"       | (kutip ") |
  |    \\       | (sles \)  |
  ---------------------------

```

**_Contoh Pengunaan_**

- `document.writeln("reki \n desma haldi")` <= ENTER

  - reki
  - desma haldi

- `document.writeln("reki\\desma haldi")` <= sles
  - reki\desma haldi
- `document.writeln("reki\" desma haldi") ` <= kutip "
  - reki"desma haldi
- `document.writeln("reki\'desma haldi")` <= kutip '
  - reki'desma haldi

**VARIABEL**

- variabel adalah tempat/wadah untuk menampung nilai
  - PROBLEM KALAU TIDA MENGGUNAKAN VARIABEL
  - coba rubah nilai yang ada `document.writeln("reki \n desma haldi")` menjadi `(" reki desma")`
    hal ini akan menjadi sangat mmerepotkan bukan

```
  document.writeln("reki \n desma haldi")
  document.writeln("reki \n desma haldi")
  document.writeln("reki \n desma haldi")
  document.writeln("reki \n desma haldi")
  document.writeln("reki \n desma haldi")
  document.writeln("reki \n desma haldi") X100

```

- coba kita gunakan variabel

```
  var reki ="reki \n desma haldi"

  document.writeln(reki)
  document.writeln(reki)
  document.writeln(reki)
  document.writeln(reki)
  document.writeln(reki)  // X1001
```

- kalau kita ingin merubah merubah nilai yang kita tulis
  kita cukup merubah `isi` dari `var` nya menjadi `nilai` baru yang kita inginkan
  sekarang kita ingin merubah nilai menjadi `("reki")` kita cukup menuliskan
- `var = " reki "`
- maka nilai yang ada pada `document.writeln(reki) `
- akan berubah semua tampa kita menuliskannya satu per satu

**VARIABEL DI ES5**

- cont & let
  - kenapa?
  - karna desain awal nya var bermasalah mangkanya di perbaiki
  - `let` => di gunakan pada ruang lingkup yang kecil dan nilai di dalam nya sering berubah
  - `const` => di gunakan pada ruang lingkup yang lebih besar dan nilai yang di masukan harus konstan dan tidak boleh berubah-ubah

**OPERATOR MATEMATIKA**

- javascript mendukung banya sekali operator matematika untuk tipe data number
- OPERATOR ARITMATIKA
- OPERATOR AUGMENTED ASSINGMENTS
- OPERATOR UNARY
- DLL

**OPERATOR ARITMATIKA**

```
-----------------------------------
|  Operator    | Keretangan        |
-------------------------------------
|     +        | Pertambahan        |
|     -        | Pengurangan        |
|     *        | Perkalian          |
|     **       | Exponensial 2²     |  <= berarti perkalian berulang / perpangkatan 2²
|     /        | Pembagian          |
|     %        | modulus/ sisa bagi |
------------------------------------
```

- code operator aritmatika

```
let result = 1+2 ;    // 3
document.writeln("<p> 1+2 = "+result+"</p>");
let originalResult= result;

result=result-1;       //<= result ini di dikler lagi menjadi 3-1
document.writeln(`${originalResul}-1=${result}`)
```

**OPERATOR AUGMENTED ASSIGNMENTS**

- Digunakan untuk manipulasi Operasi Untuk diri nya sendri
  atau jika suatu variabel ingin di `*`,`/`,`+`,`-` dan di tampung lagi(atau memasukan ulang nilai nya ke variabel itu maka ini lah jawaban nya)

````
-------------------------------------------------------
|  Operator           | Operator Augmented Assignments |
  --------------------------------------------------------
| result=result +10   |    result += 10                |
| result=result -10   |    result -= 10                |
| result=result *10   |    result *= 10                |
| result=result **10  |    result **= 10               |
| result=result /10   |    result /= 10                |
| result=result %10   |    result %= 10                |
  ------------------------------------------------------```
````

**OPERATOR UNARY**

- ini adalah operator yang biasa nya cukup menerima satu data
  di gunakan untuk operasi satu data saja

```
-----------------------------------------------
|   Operator   |   Keterangan                 |
  -----------------------------------------------
|     +        |   Menandakan nilai positif   |
|     -        |   Menandakan nilai negatif   |
|    ++        |  Increment,menaikan 1 angka  |
|    --        | Decrement,menurunkan 1 angka |
  -----------------------------------------------
```

-

```
let result= +1;
document.writeln("<p>"+result+"</p>");
result--;   //<= result = result-1; atau result -=1; hasil 0

result++; //<= result +1; atau result +=1; hasil 1

result = -result ;  //<= nilai var result di ubah menjadi negatif result
```

**OPERATOR PERBANDINGAN**

- Operator Perbandingan adalah Operator untuk membandingkan dua buah data
  Opersi yang menghasilakan nilai Boolean (benar/salah)

```
---------------------------------------------------------
|   Operator  |   Keterangan                            |
---------------------------------------------------------
|     >       | Lebih dari                              |
|     <       | kecil dari                              |
|     >=      | Lebih dari Sama dengan                  |
|     <=      | Kurang dari Sama dengan                 |
|     ==      | Sama dengan                             |
|    ===      | Sama dengan dan Sama tipe               |
|    !=       | Tidak sama dengan                       |
|    !==      | Tidak sama dengan atua tidak sama tipe  |
---------------------------------------------------------
let angaka5 = 5;
let angka4  = 4;
let hasilBanding=angka5==angka4 ;
hasilBanding //<= nilai nya boolean
```

**OPERATOR LOGIKA**

- operator logika adalah operator untuk `dua buah data boolean`
  hasil dari operator logika adalah `boolean lagi`

```
------------------------------
|   Operator  | Keterangan   |
------------------------------
|     &&      |   DAN / AND  |
|     ||      | ATAU  / OR   |
|     !       | Kebalikan    |
------------------------------

---------------------------------------
| nilai 1 | operator | nilai2 |  hasil |
----------------------------------------
| true   | &&       | true   | true   |
| false  | &&       | true   | false  |
| true   | &&       | false  | false  |
| false  | &&       | false  | false  |
---------------------------------------
| true   |   ||     | true   | true   |
| true   |   ||     | false  | true   |
| false  |   ||     | true   | true   |
| false  |   ||     | false  | false  |
--------------------------------------
```

**OPERATOR TIPE UNARY**

```
------------------------------------------------
| operator  | nilai   | hasil                  |
------------------------------------------------
|   !       |   true  | dibalik menjadi FALSE  |
|   !       |   false | dibalik menjadi TRUE   |
------------------------------------------------
```

- Contoh Penggunaa

```
  const nilaiUjian = 70;
  const nilaiAbsen = 70;

  const lulusUJian = nilaiUjuan > 70;
  const lulusAbsen = nilaiAbsen > 70;

const lulus = lulusUjian && lulusAbsen;
```

**CONSOLE**

- console adalah sebuah fitur javaScript untuk mendebug atau mencari masalah pada program
  console adalah sebauh `metod` atau `function` yang sudah di buatakn oleh javascript
  kita hanya cukup menuliskan `console.metod(variabel);`

```
-----------------------------------------------------------
| console metod     |   keterangan                         |
-----------------------------------------------------------
| console.info(..)  | memberitau informasi                 |
| console.warn(..)  | memberitau peringatan                |
| console.error(..) | informasi error                      |
| console.tabel(..) | memberitau informasi berbentuk tabel |
-----------------------------------------------------------
```

**SRING TEMPLATE**

- javaScript sekaran memiliki yang bernama srting templet ,
  dimana kita bisa mensubtitusi data dari luar string kedalam string
  Untuk pengunaan string template kita mengunakan `backtick`

```
var world="world";
contoh : document.innerHTML=`<p>hello${world}</p>`;

//hal diatas sama saja seperti di bawah ini

document.innerHTML="<p>hello"+world+"</p>"
```

**_STRING TEMPLATE JUGA SUPORT MULTILINE_**

- string temlate biasanya di gunakan untuk substitusi

```
const multiLine= ` Nama saya adalah reki.
saya sangant menyukai dunia programing,
dan saya juga sesing menontont video tutorial programing`;

document.writeln("<pre>");
document.writeln(multiLine);
document.writeln("<pre>");
```

**KONVERSI STING DAN NUMBER**

- Pada saat membuat apikasi terkadang imput pengguna selalau dalam bentuk string
- Sedangkan kita ingin mengelola data dalam bentuk Number
- Maka sangat disarankan untuk melakukan konversi tipe data
- Masalah tampa konversi

```
const value1 = "1";
const value2 = 1;
const sum = value1+value2;
document.writeln(`<p>${sum}</p>`);    // output 11
```

- Cara Untuk Conversi String dan Number

```
------------------------------------------------------------------------------
|   Function         |   Keterangan                                           |
-------------------------------------------------------------------------------
| parseInt(string)   |  Mengkonversi dari sring ke number (bil bulat)         |
| parseFloat(str)    |  Mengkonversi dari sring ke number (bil pecahan)       |
| Number(str)        |  Mengkonversi dari sring ke number (bil bulat/pecahan) |
| nummber.toSting()  | Mengkonversi dari number ke string                     |
-------------------------------------------------------------------------------
```

- contoh kasus:

```
const value1 = "1";
const value2 = 1;

const valueConver= parseInt(value1);

const sum = valueConver+value2;
document.writeln(`<p>${sum}</p>`);    // output 2
```

- dengan gaya penulisan ke 2

```
const value1 = "1";
const value2 = 1;
const sum = value1.parseInt()+value2;
document.writeln(`<p>${sum}</p>`);    // output 11
```

kasus di atas bisa di terapakan ke semua function di atas

**NaN**

- `NaN`adalah `Not a Number` , ini terjadi biasa nya ketika mengkonversi data yang `tidak valid` dan `hasil nya` menjadi `NaN`
- Bagaimana jika ternyata `data string` yang kita `konversi` ke `number` bukanlah data yang valid?
- jika data `string` yang kita cOba lakukan konversi bukan lah data `valid`, maka hasil dari konversi tersebut adalah `NaN`
- Jika `NaN` di operasikan dengan data `Number` lain nya maka hasilnya akan menjadi `NaN`

```
document.writeln(`<p>${parseInt("salah")}</p>);   //NaN
document.writeln(`<p>${parseFloat("1.1text")}</p>);  // 1.1

document.writeln(`<p>${parseFloat("data 1.1text")}</p>);  //Nan
//karna data yang dapat di tolerir jika text nya berada di belakang

//Number() tidak akan mentolerir kesalahan pada data
document.writeln(`<p>${Number("1.1ups")}</p>);  //NaN
document.writeln(`<p>${Number("1x")}</p>); // NaN
document.writeln(`<p>${Number("bukan number")}</p>);  //NaN
```

`isNaN()` Function

- Kadang kita ingin mengecek apakah sebuah `number` itu `NaN` atau bukan
- Untuk melakukan pengecekan tersebut, kita bisa menggunakan function `isNaN(number)`
- Hasil nya adalah berupa `data` `boolean`

**TIPE DATA ARRAY**

- `array` adalah tipe `data`, yang berisi sekumpulan `data`
- `array` di javaScript memiliki `sifat dinamis`,artinya _data bisa bertambah_ dengan sendirinya saat kita memasukan data ke dalam `array`
  - array diagram

```
____________________
| [] [] [] [] [] [] |
____________________
```

- Unutuk membuat array `cek code di bawah` , di dalam array kita bisa memasukan data apa saja bisa `["string",1,true]`
  setiap data di pisakan oleh tanda koma `,`

  - Code membuat array

```
let arrayKosong=[];

let arrayNama=["denki","nami","lala"]
```

- Cara kerja array
  - Setiap data di array akan di simpan dalam posisi berurutan, dimana urutan pertama di mulai dari `0` nol
  - Setiap kita menambahkan data ke array , otomatis data akan di simpan di urutan terakhir
  - Urutan di array kita sebut dengan `index`

```
   0   1   2   3   4  //<= index array
______________________
| [i] [i] [i] [i] [i] |  //<= i adalah isi aray
______________________
^ Panjang nya 5 ^
```

- menghitung index `panjang - 1 `

Menambah Array

```
const nama = [];

nama.push("reki");
nama.push("nama ke dua");

console.table(nama);    // untuk melihat array dalam bentuk tabel
```

- dalam array kita bebas memasukan tipe data apa saja karna javaScript memiliki konsep `Dymanic Typing`

- Operasi di Array

```
_______________________________________________________
|  Operasi          |  Keterangan                      |
_______________________________________________________
| var.push(value)   | Menambahakan data ke array       |
| var.length        | Untuk mendapatkan panjang array  |
| var[index]        | Mendapat data di posisi index    |
| var[index]=value  | Mengubah data di posis index     |
| delete var[index] | Menghapus data di posisi index,  |
|                   | namun index tidak bergeser       |
_______________________________________________________
```

    contoh:

```
const nama = [];

nama.push("reki");
nama.push("nama ke dua");

console.info(nama[0]);    // <= output reki
console.info(nama[1]);    // <= output nama ke dua

nama[0]="dodi";
console.info(nama[0]);  //<= dodi
```

- perlu di perhatikan saat `menghapus data` pada `index` , `data pada index` tersebut memang `hilang` namun panjang `array` nya tidak akan -berkurang* . namun pada suatu saat anda ingin mengisi data pada \*\*\_array index yang di hapus masih bisa*\*\*
  contoh:

```
const nama = [];

nama.push("reki");
nama.push("nama ke dua");
nama.push("dede");
nama.push("oki");

delete nama[3];
console.info(nama[3]);  // undifine

nama[3]= "qory";
console.info(nama[3]);  // qory
```

- _perlu di ingat_
  - Data dalam `array` tidak ada batasan nya _harus data apa_
  - Jadi kita bisa memasukan data apa saja kedalam `array`
  - Bahkan kita juga bisa memasukan `array` ke dalam `array` `multy demention array`

**TIPE DATA OBJECT**

- tipe data object di java script sama hal nya Array Associative pada PHP

- Associative Array

  - Di bahasa PHP kita bisa mengubah index berupa tipe data lain nuber/string
  - fitur ini biasa di sebut Associative Array atau `hash`
  - di javaScript Associative Array tidak di dukung.
  - jika kita memaksakan memasukan data bukan number di index aray , maka javaScript akan merubah tipe data tadi menjadi Object , dan ini bisa berbahaya ,karena beberapa operasi di array tidak bisa di pergunakan

- Tipe data Object

  - tipe data object adalah tipe data yang mirip dengan tipe data array
  - Yang membedakan adalah index pada tipe data object bisa menggunakan string
  - index di object biasanya di sebut `attributes` atau `properti` , bukan index

- Membuat Object kosong

  - `const orang = {};`
  - kalau di array kita menggunkankan `[ ]` , untuk Object kita menggunkan `{ }`

- Bagaimana kalau ingin merubah property / atribut di object kalau di array kita sebut index

  - kalau di array `var[nomor index]` kalau di object `var["nama property/ atribut"]`
  - biasanya properti/atribut menggunakan string
  - contoh:

  ```
  const orang ={};      <= pembutan object

  //menambah atau mengubah
  orang["nama"] = "reki";
  orang["alamat"]= "jln.sudirman";
  orang["umur"]= 26;
  orang["hobi"]= "menonton";

  //menhapus
  delete orang["hobi"];

  console.table(orang);   // propety/index "hobi" telah hilang
  ```

- Pada array kita bisa memasukan isi dari array secara lansung `const angka = [1,2,3,4]` pada object juga bisa dengan urutan `property` `:` `value`

```
const separu = {
  merek : "adidas" ,
  warna : "putih" ,
  ukuran : 32
};
```

- untuk atribut kalau katanya melebihi 1 kata
  bisa mengunakan `" "`
- coba kita bandingkan dengan array di atas .pada array value nya ` 1` index nya `0`, kalau object index nya `merek` value nya `adidas`

- Mengakses property Object
  - `${var.property}`
  - alternatif jika nama property melebihi 1 kata `${var[property]}`

```
const separu = {
  merek : "adidas" ,
  warna : "putih" ,
  ukuran : 32
};

console.info(${sepatu.ukuran})
document.innerHTML=`sepatu saya warna ${sepatu.warna}`;
```

**IF EXPRESION**

- `if` biasanya di gunakan untuk menentukan sebuah kondisi
- dalam javaScript ,`if` adalah satu kata kunci yang di gunakan untuk percapangan
- percabangan artinya kita bisa mengeksekusi kode program tertentu jika suatu kondisi terpenuhi `kondisi biasanya pertipe data bolean`
- hampir semua bahasa pemrograman mendukung `if expression`
- contoh:

```
const satu = 1;
const dua = 2;

if(satu<dua){ //<=kalau benar satu lebeh kecil dari dua
  document.innerHTML= "satu"; //<=baru kode ini di exsekusi
}
```

**ELSE EXPRESION**

- Block `if` akan di exsekusi ketika kondisi `if` bernilai `benar` / `true`
- kadang kita ingin melakukan eksekusi program tertentu jika kondisinya bernilai `false` / `salah`
- hal ini bisa dilakukan menggunakan `else` expresion
- contoh:

```
const nilai = 65;

if (nilai>70){
  document.innerHTML= " selamat nilai kamu BAGUS";
} else {
  document.innerHTML=" maaf nilai kurang";      // kode ini akan di eksekusi jika nilainya kurang dari 70
}
```

**ELSE IF EXPRESION**

- kadang dalam if kita butuh membuat beberapa kondisi
- kasus seperti ini di javascript kita bisa menggunakan els if expresion
- contoh:

```
const nilai = 70;

if (nilai > 80){
  document.innerHTML= " selamat nilai kamu BAGUS";
} else if ( nilai > 70){
  document.innerHTML= " selamat nilai kamu AMAN";
} else if ( nilai > 60){
  document.innerHTML= " tingkatkan nilai kamu";
}else{
  document.innerHTML= " nilai MERAH";
}
```

- note : _else if akan mengeksekusi block program yang pertama di terpenuhi nilai nya_
  - jika `const nilai = 90;` code if yang akan di jalankan tidak peduli jika ada nilai lain yang terpenuhi

**POP UP**

- javaScript memiliki fitur yang bernama `alert`,`prompt`, dan `confirm`
- alert digunakan untuk memberikan peringatan beruapa popup text di broser
  - `alert("tulikan pesan nya");`
- `prompt` di gunakan untuk meminta input `string` dari penguna browser dalam bentuk **_popup input text_**
  - contoh:
  - `const nama = prompt("masukan nama"); // petunjuk untuk user`
  - lalu kita tampung inputan user ke dalam `var` `nama`
  - jika kita ingin menampilkan kita bisa gunakan `alert` atau yang lainnya
  - disini saya beri contoh `alart` saja
  ```
  const nama = prompt( "masukan nama");
  alart(`hallo ${nama}`);
  ```
- sedangkan `confirm` digunakan untuk meminta input `boolean` dari pengguna dalam bentuk `popup` _input pilihan_

  - dengan ini kita bisa mengkonfirmasi apada user apakah `nama` dalam `propt` tadi sudah benar
  - `confirm("`apa yang inggin anda konfirmasi`") ;`
  - contoh kasus:

  ```
  alert("selamat datang");

  const nama = prompt(" siapa nama anda?");
  const namaBenar = confirm("nama anda adalah "+nama+"?");   // jika tidak menggunakan sring template
  if (namaBenar==false){
    nama = prompt(" siapa nama anda?");
  }
  if (namaBenar== true){
    alert(`terimakasi ${nama} telah memasuakan nama`)
  }
  ```

**UNDEFINED**

- undefined adalah sebuah _kata kunci di javascript_
- undefine adalah sebuah `tipe data`
- sebuah variabele yang belum di tampilkan nilai , maka artinya `variabel` tersebut merupakan tipe `undefined`
  - `var nama ;` nama adalah `undefined`
- kadang undefine memang sedikit membingungkan
- `undefined` berbeda dengan `null`
  - Var undefine

```
var name;     // undefined
 if (name === undefined){
   alert("mohon masukan nama anda");
   name= prompt("please input your name");
 }else{
   alert(`hallo ${name}`)
 }
```

- Array Undefined

```
const name = ["eko","dede","abdi"]

document.innerHTML=name[3]; // output UNDEFINE karana [3] belum di buat
```

- Object Undefined

```
let person ={
  alamat : jln.afrika ,
  umur : 26
}

document.innerHTML=person.name;   //output UNDEFINE karana name belum di buat
```

**NULL**

- null merupakan representasi dari data `kosong`
- null dan `undefined` itu _berbeda_
- nul berati variabele sudah di tambahkan falue nya , hanya saja value nya null
- sedang kan undefine variabel belum ditambahkan valu apa pun
  - **object null**

```
const orang= {
  name : "kek",
  alamat: " jln. mada",
  umur : 25,
  tinggi:''

}
console.log(orang.tinggi)   // tinggi NULL
```

- **array null**

```
 const orangg= ["kek"," jln. mada",25,'']
orang[3]==null ? console.log('benar'): console.log('salah')
```

**SWITCH STETMENT**

- kadang kita hanya butuh menggunkan kondisi sederhana di ``if stetment` seperti hanya menggunkan per bandingan `==`
- `Switch` stetmen percabangan yang sama seperti `if` , namun lebih sederhana secara pembuatan
- kadang di `switch stetment` hanya untuk perbandingan `==`
  - contoh
  ```
  switch(nilai){
    case "A":
     document.innerHTML="nilai A";
      break;
    case "B":
    case "C":
    document.innerHTML="nilai C";
     break;
    default :
    document.innerHTML="nilai tidak ada";
  }
  ```
  - jika `nilai = A` case A akan di jalankan sampai menemukan kata `break`

**OPERATOR TYPE OF**

- operator `tipe of` merupakan _operator_ yang bisa kita gunakan untuk melihat `tipe data` sebuah `value` atau `variabel`
- karena javasicript merupakan _dynamic langauge_ jadi kadang kita perlu mengecek `tipe data` sebuah `value` atau `variabel` menguunakan operator `type of`
- hasil dari operator `type of` adalah `srting`

```
 ____________________________________
| type      | hasil operator typeof  |
______________________________________
| Undefine  |  "undefine"            |
| Null      |  "object"              |
| Boolean   | "boolean"              |
| BilInt    | "bilint"               |
| String    | "string"               |
| Symbol    |  "symbol"              |
|  Function | "funtion"              |
| Lainya    | "object"               |
______________________________________
```

- operator typeof

```
let data;

const typeData = typeof data;
console.log(typeData);
```

- anda bisa rubadah `let data` dengan data apa yang mau anda cek

**OPERATOR IN**

- `In operator` adalah _operator_ yang bisa dilakukan untuk mengecek apakah sebuah _property ada di dalam object atau tidak_
- jika property tersebut ada di `object` , maka hasil nya `true` , sedangkan jika tidak , maka hasil nya `flase`
- tidak hanya di `object` , `In` juga bisa di gunakan untuk mengecek `Array`

  - contoh

  ```
  const person ={
    firstName : "reki",
    lastName : "desmahaldi"
  }

  if "firstName" in person){
    alert(`halo ${person.firsName}`);
  }els{
    alert("halo");
  }
  ```

  **_Peringatan_**

  - in operator hanya akan mengecek apakah sebuah property atau index ada atau tidak
  - jadi walaupun nilai nya property atau index nya `undefine` atau `null` maka tetap akan di angap ada

  ```
  const student ={
    firstName : "reki",
    middleName : undefine,
    lastName : "desmahaldi"
  }

  if "firstName" in student){
    alert(`halo ${person.middelName}`);   // hello undefine
  }els{
    alert("halo");
  }
  ```

  ```
  const names=["null","joko","ahmad","null"]

  const result =0 in names;

  document.writeln(`<p>${result}</p>`);
  ```

**TERNARY OPERATOR**

- Ternary operator sederhana dari `if` _statement_
- Ternary operator terdiri dari kondisi yang dievaluasi , jika menghasilkan `true` maka nilai pertama _diambil_, jika `false` ,maka nilai kedua yang di ambil

- _code tampa ternay operator_

```
const nilai = 75 ;
let ucapan ;

if ( nilai>= 75) {
  ucapan = "Selamat Anda Lulus";
}else{
  ucapan = "Silahkan Coba Lagi ";
}
document.writeln(`<p>${ucapan}</p>`)
```

- **Dengan ternary opertaror**

```
ucapan= nilai >= ? "Selamat Anda Lulus": "Silahkan Coba Lagi ";

document.writeln(`<p>${ucapan}</p>`)
```

**NULLSH COALESCING OPERATOR**

- Nullish `value` adalah `null` dan `undefined`
- Nullsh coalecing operator `(??)` adalah operator mirip dengan `ternary operator`, yang membedakan adalah pada kondisi , jika bernilai `null` atau `undefined` , baru `value default` nya di ambil

- code tampa nullish coalescing operator

```
let parameter ;


let data = parameter;
if (data === undeffined || data === nul){
  data = " nilai default";
}
console.log(data);
```

- _nullish coalescing operator_

```
 let parameter ;

let data = parameter ?? "Nilai Default";
console.log(data);
```

**OPTIONAL CHAINING**

- Optional chaining operator `(?)` merupakan `operator` yang digunakan untuk _mengamankan_ ketika kita ingin mengakses `property` dar sebuah `object` dari `data nullish`
- jika kita mencoba mengakses `property` dari sebuah `object` dari `data nullish` tampa menggunakan `optional chaining operator` , maka akan terjadi `error`

- _error code nyllish_

```
let person = { };

alert(person.address.counry);
```

- ini akan keluar `error` bukan `undefined`, karna yang kita coba akses `object person` yang di dalam nya ada alamat & negara namun alamat belum di definisikan / `undefined` lalu kita berusaha masuk.
- pada `{person.address}` hasil nya `undefined` namaun jka kita paksa mengakses leb=ih jauh akan terjadi `error`
- kalau sudah begini bagaimana lagi cara nya?

  - kita harus melakukan pengecekan menggunkan kan `if`
  - contoh

  ```
  let person= { };

  let say ;
  if ( person.address !== undefined && person.address !== null ){
    say = person.address.country;
  }
  alert(say);
  ```

- namun disini kita akan melakukan pengecekan dengan _optional chaining_
- contoh:

```
let person = { };

let country = person?.address?.country

console.log( county );
```

**FALSY & RTUETY**

- **FALSY**
  - Falsy atau kadang di tulis `falsey` , adalah `value` yang ketika dalam konteks `boolean` , dia di anggap `false`
  - ini adalah salah satu fiture unik dari javaScript , yang berguna namun kadang juga sering membinggungkan
  - jadi di javaScript , kondisi itu tidak hanya bisa `boolean` , tapi `diluar boolean` pun bisa , namun kita harus tahu berapa data `falsy` , atau di `anggap false`
  - **_data falsy_**

```
_____________________________________________________________
| data di anggap falsy |   keterangan                       |
_____________________________________________________________
| fase                 | bolean fallse                      |
| 0, -0                |  Number 0 & -0 di anggap false     |
|  "" ,'',``           | semua sring kosong di anggap false |
| null                 | null di anggap false               |
| undefined            | undefined di anggap false          |
| NaN                  | Not a Number di anggap false       |
_____________________________________________________________

```

- **TRUTY**
  - Truty adalah kebalikkan dari `falsy` , dimana `data` nya di anggap bernilai `true`
  - Sederhana sekali sebenarnya untuk mengetahui sebuah data adalah `truty` , ya itu data yang bukan berniali `falsy`
  - atau dalam kata lain semua data di luar tabel di atas adalah `truthy
    _code untuk cek sebuah data ada atau tidak_

```
const data = "";
 if ( data ){
   console.log("true");
 }else{
   console.log("false");
 }

```

**OPERATOR LOGIKA NON BOOLEAN**

- sebelumnya kita tau bahwa operator logika `AND(&&)` _dan_ `OR (||)` digunkan untuk dua data `boolean`
- Namu berbeda di `JavaScript` , kita bisa menggunakan operator **_logika_** `AND` dan `OR` untuk `tipe data non bolean`

- **Operator OR (||) di Non Boolean**

  - Operator logika `OR(||)`, membaca dari kiri kekanan
  - Operator ini akan mengambil `nilai pertama` yang `truty`
  - Jika `tidak ada satupun` yang bernilai `truty` maka yang terakhir `yang akan di ambil/kanan `

  ```
  console.log("hello"||"")            //hello
  console.log(""||[])                 // []
  console.log("0"||"NOL")             // 0
  console.log( 0||"NOL")              // NOL
  console.log(null||"NUL")            // NULL
  console.log(undefined||"UNDEFINED") //UNDEFINED
  console.log(0||false)               // false
  ```

  _contoh kasusu_

```
const person = {
    firstName: "",
    lastName : "Suryo"
};

const name = person.firstName || person.lastName;

console.log(name);      // Suryo

// catatan jika firstName ada dia akan mengambil nilai itu
```

- **Operator AND (&&) di Non Boolean**
  - Operator `logika AND (&&)` , membaca dari kiri ke kanan.
  - Operator ini akan mengambil `nilai` pertama yang `falsy`
  - Jika tidak ada satupun yang bernilai `falsy` yang terakhir yang akan di ambil
  - kode Operator AND(&&)

```
console.log("hello" && ' ')   // ' '
console.log(" " && [])        //""
console.log("0" && "NOL")     //"NOL"
console.log( 0 && "NOL")      // 0
console.log( null && "null")  //"nul"
console.log(undefined && "UNDEFINED") //undefined
console.log("undefined" && "nul")   //"null"
```

**PERULANGAN**

**FOR LOOP**

- for adalah salah satu kata kunci yang bisa digunakan unruk melakukan perulangan
- block kode yang terdapat di dalam for akan selalu di ulangi selama kondisi for terpenuhi

- **sintak perulangan for**

```
for(init statement ; kondisi ; post statement){
  // block perulangan
}
```

- init statement akan dieksekusi sekali di awal sebelum perulangan
- kondisi akan dilakukan pengecekan dalam setiap perulangan , jika `true` perulangan akan di lakukan, jika `false` perulangan akan behenti
- `post statement` akan dieksekusi setiap perulangan
- `init statement` ,`kondisi` dan `post statement` tidak wajib di isi , jika kondisi tidak di isi , berati kondisi selalu `true` yang artinya akan `memasuki infinity loop` yang sebenarnya harus di hindari

**_perulangan tampa henti_**

```
for( ; ; ){
  alert("tidak akan berhenti");
}
```

**_perulangan dengan kondisi_**

- jika teman teman tidak ingin `loop` masuk ke kondisi `infinity loop` pastikan pada suatu saat kondisi bernilai `false`

```
let counter =  1 ;
for ( ; counter<=10;){    //<= condisi
  document.writeln(`<p>perulangan ke ${counter}</p>`)

  counter++     // ingcrement
}
```

**_perulangan dengan init statement_**

```
for (let counter =  1 ; counter<=10; counter++){
  document.writeln(`<p>perulangan ke ${counter}</p>`)
}
```

**WHILE LOOP**

- while loop adalah versi `perulangan` yang `sederhana` di bandingin `for loop`
- whiel loop , hanya terdapat kondisi perulangan , tanpa ada `init statement` dan `post statement`
- **_perulangan while loop_**
  - gunkan `while loop` jika hanya membukukan kondisi nya saja tampa ada `init statement` dan `post statement`

```
let counter =  1 ;
while( counter<=10;counter++){
  document.writeln(`<p>perulangan ke ${counter}</p>`)
  counter++
}
```

**DO WHILE LOOP**

- do while adalah perulangan yang mirip dengan while
- `perbedaannya` hanya ada pada pengecekan kondisi
- pengecekan kondisi di `while loop` di lakukan di awal sebelum perulangan di lakukan , sedankan di `do while loop` di lakukan setelah perulangan di lakukan
- oleh karena itu dalam `do while loop` , `minimal` sekali perlangan pasti di lakukan walaupun kondisi nya tidak bernilai `true`
- apaka ada kondi yang seperti ini? tentu ada semisal `menu` , sebelum `user` memilih menu apa yang akan di tampikan menu utama akan tampil terlebih dahulu

- **_Do while loop Code_**

```
let counter = 1 ;     // counter nya

do {      //<= perulangan nya
  document.writeln(`<p>perulangan ke ${counter}</p>`)
}

while( counter <= 10 )    // kondisi nya
```

**BREAK DAN CONTINUE**

- pada switch statement , kita sudah mengenal kata kunci break, ya itu untuk menghentikan case dalam switch
- sama dengan pada peerulangan , break juga di gunkan untuk menghentikan seluruh perulangan
- namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini lalu melanjukan ke perulangna berikutnya
- **_Break Code_**

```
let counter = 1 ;

while(true){
  document.writeln(`<p>perulangan ke ${counter}</p>`)
  counter++;

  if(counter>10){
    break;
  }
}

```

- **_Continue Code_**

```
for(leti=1;i<=100; i++){

  if(i%2==0){
    continue;
  }

  doncument.writeln(`<p>perulangan ganjil ${i}</p>`)
}

```

**LABEL**

- label merupakan penanda yang bisa di gunakan dengan kata kunci break dan countinue
- secara defautl saat kita melakukan brak atau continue, dia akan melakukan terhadap perulangan dimana kode break dan countinue itu di gunakan
- dengan menggunkan label kita bisa melakaukan break dan countinue terhadap perulangan yang kita ingin kan, asalakan pada perulangan nya kita gunakan label
- untuk membuat label , kita bisa menggunkan nama label lalu di ikuti dengan : (titik dua)
- **_label code_**

```
loopPertama:
for(let i = 0: i<100; i++){

  loopKedua:
  for(let j = 0; j <10;j++){
    console.log(`${i}-${j}`);
  }

}
```

- **_countinue atau break di label_**

```
loopPertama:
for(let i = 0: i<10; i++){

  loopKedua:
    for(let j = 0; j <100;j++){

      if(j>10){
        countinue loopPertama;
      }

        console.log(`${i}-${j}`);
    }

}
```

**FOR IN**

- `For In` merupakan perulangan `for` yang di gunkan untuk mengiterasi seluruh `data proprty di object` atau `index array`
- walaupun `for in` bisa di gunkan untuk `array` , namun tidak di recomendasikan untuk `array` , karena biasanya kita jarang sekali biat `data index` untuk `array` , kita bisa menggunkan `for of`

- **_for in di object_**

```
const person ={
  firstName: " dayat",
  middleName:"cahyo",
  lastName:" gumalan"
};

for(const property in person){
  document.writln(`<p>Property ${property} : ${person[property]}</p>`)
}

```

- **_for in di array_**

```
const names =[" dayat","cahyo"," gumalan"]

for(const index in name){
  document.writln(`<p>${index} : ${names[index]}</p>`)
}

```
