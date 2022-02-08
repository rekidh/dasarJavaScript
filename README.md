 TITIK COMA OPSIONAL DI JAVA SCRIPT
- agar kode lebih konsisten lebih baik pilih pakai atau tidak
- Saya merekomendasikan anda mengunakan `;`

- `//comment di javaScript`   <=  ini adlah inline komen
- `/*
  double line comment
*/`


TIPE DATA NUMBER JAVASCRIPT
  - Javascript hanya mendukung satau tipe data Number berupa bilangan bulat atau bilangan desimal
      - Bilangan bulat  ` 10 , 45 ,89` dll
      - Bilangan decimal `10.5 ,7.2 ,4.4 , 3.2` dll
  - untuk membuat Number di javacript langsung saja ditulis tampa tanda petik
  - contoh:
    - `10 , 10.5 , 100 `  <= adalah NUMBER
    - `"10","10.5","100"`  <= ini adalah STRING
  
NUMBER NOTATION 
  - javascript mendukung number notation, default nya adalah basis 10
  - javascript juga mendukung BINARY,HEXADECIMAL dan OCTAL
    - `HEXADESIMAL   : 0xFF`
    - `BINARY : 0b10101`
    - `OCTAL :0o10`



TIPE DATA BOOLEAN
- TIPE DATA `boolean` adalah tipe data yang berisikan nilai kebenaran
  artinya hanya ada dua nilai `BENAR` atau `SALAH` (`TRUE` atau `FALSE`)
- walau tipe data boolean murapakan tipa data yang sangat sederhana tapi tipe data ini sangat banya di gunakan di bebrapa fitur program

 TIPE DATA STRING
- tipe data string di tandai dengan tand petik `"PETIK DUA"` dan `'PETIK SATU'`
- nilai nya boleh kosong atau banyak karakter
- `MENAMBAH` atau menggabngkan `STRING` biasanya mengunkan tanda  ` + `(plus)


 ESCAPE SEQUENCE
- javascript mendukung escape sequence di string. escape sequence merupakan karakter 
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


CONTOH PENGUNAAN
- `document.writeln("reki \n desma haldi")`  <= ENTER
   - reki
   - desma haldi

- `document.writeln("reki\\desma haldi")`     <= sles
   - reki\desma haldi
- `document.writeln("reki\" desma haldi") `   <= kutip "
   - reki"desma haldi
- `document.writeln("reki\'desma haldi")`     <= kutip '
   - reki'desma haldi


VARIABEL

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
  kita cukup merubah isi dari var nya menjadi nilai baru yang kita inginkan
  sekarang kita ingin merubah nilai menjadi ("reki") kita cukup menulikan
- `var = " reki "`
-  maka nilai yang ada pada `document.writeln(reki) `
- akan berubah semua tampa kita menuliskannya satu per satu


VARIABEL DI ES5 
- cont & let
  - kenapa?
  - karna desain awal nya var bermasalah mangkanya di perbaiki 
  - `let`   => di gunakan pada ruang lingkup yang kecil dan nilai di dalam nya sering berubah
  - `const` => di gunakan pada ruang lingkup yang lebih besar dan nilai yang di masukan harus konstan dan tidak boleh berubah-ubah


OPERATOR MATEMATIKA
- javascript mendukung banya sekali operator matematika untuk tipe data number
- OPERATOR ARITMATIKA
- OPERATOR AUGMENTED ASSINGMENTS
- OPERATOR UNARY
- DLL

OPERATOR ARITMATIKA
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


OPERATOR AUGMENTED ASSIGNMENTS
- Digunakan untuk manipulasi Operasi Untuk diri nya sendri
atau jika suatu variabel ingin di `*`,`/`,`+`,`-` dan di tampung lagi(atau memasukan ulang nilai nya ke variabel itu maka ini lah jawaban nya)

```
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
```

OPERATOR UNARY
 - ini adalah  operator yang biasa nya cukup menerima satu data
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

OPERATOR PERBANDINGAN

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

OPERATOR LOGIKA
- operator logika adalah operatoe untuk dua buah data boolean
hasil dari operator logika adalah boolean lagi
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

Operator TIPE UNARY

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

CONSOLE 
- console adalah sebuah fitur javaScript untuk mendebug atau mencari masalah pada program
console adalah sebauh metod atau function yang sudah di buatakn oleh javascript
kita hanya cukup menuliskan console.metod(variabel);
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
SRING TEMPLATE
  - javaScript sekaran memiliki yang bernama srting templet ,
dimana kita bisa mensubtitusi data dari luar string kedalam string
Untuk pengunaan string template kita mengunakan `backtick`
```
var world="world";
contoh : document.innerHTML=`<p>hello${world}</p>`;

//hal diatas sama saja seperti di bawah ini

document.innerHTML="<p>hello"+world+"</p>"
```
STRING TEMPLATE JUGA SUPORT MULTILINE
  - string temlate biasanya di gunakan untuk substitusi 
```
const multiLine= ` Nama saya adalah reki.
saya sangant menyukai dunia programing,
dan saya juga sesing menontont video tutorial programing`;

document.writeln("<pre>");
document.writeln(multiLine);
document.writeln("<pre>");
```
KONVERSI STING DAN NUMBER
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

NaN

  - NaN adalah "Not a Number" , ini terjadi biasa nya ketika mengkonversi data yang tidak valid dan hasil nya menjadi NaN
  - Bagaimana ji,a ternyata data string yang kita konversi ke number bukanlah data yang valid?
  - jika data string yang kita ciba lakukan konversi bukan lah data valid, maka hasil dari konversi tersebut adalah NaN
  - Jika NaN di operasikan dengan data Number lain nya maka hasilnya akan menjadi NaN

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

isNaN()  Function
  - Kadang kita ingin mengecek apakah sebuah number itu NaN atau bukan
  - Untuk melakukan pengecekan tersebut, kita bisa menggunakan function isNaN(number)
  - Hasil nya adalah berupa data boolean

TIPE DATA ARRAY
  - array adalah tipe data, yang berisi sekumpulan data
  - array di javaScript memiliki sifat dinamis,artinya data bisa bertambah dengan sendirinya saat kita memasukan data ke dalam array
  - array diagram
```
____________________
| [] [] [] [] [] [] |
--------------------
```
- Unutuk membuat array `{cek code di bawah}` , di dalam array kita bisa memasukan data apa saja bisa `["string",1,true]`
setiap data di pisakan oleh tanda `koma` `,`

  - Code membuat array
```
let arrayKosong=[];

let arrayNama=["denki","nami","lala"]
```
- Cara kerja array
    - Setiap data di array akan di simpan dalam posisi berurutan, dimana urutan pertama di mulai dari 0
    - Setiap kita menambahkan data ke array , otomatis data akan di simpan di urutan terakhir 
    - Urutan di array kita sebut dengan Index
    




