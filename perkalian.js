
  const submit =document.getElementById('submit');
  let operator = document.getElementById('operator')
  const card = document.getElementById("card")
  operanUse = ["*","/","+","-"]
  operanSelect = ["x",":","+","-"]
  arr = 90
  const reki = {
    'reki': "reki",
    'umur':25
  }

  // Function Untuk Ganti Jenis Calculasi
  operator.addEventListener('click',()=>{
    if (arr>operanSelect.length-1){arr=0}
    i =operator.innerText
    if(i==operanSelect[0]){operator.innerHTML=operanSelect[1],arr++
    }else{operator.innerHTML=operanSelect[arr],arr++}
    // return operanUse[arr]
  })


  // Function untuk operasi matetematika
  submit.addEventListener('click',function(){
    let from1 = parseInt(document.getElementById('from1').value);
    let from2 = parseInt(document.getElementById('from2').value);
    let result = document.getElementById('result');
    let nilai ;
    let hasil ;
    switch(nilai){
    case "x":
      hasil= from1*from2
        break;
    case ":":
      hasil= from1/from2
        break;
    case "+":
      hasil= from1+from2
      break;
    case "-":
      hasil= from1-from2
        break;
    }
    hasil=NaN?"masukan angka": true
    result.innerHTML=hasil 
  })


  // function untuk box move
card.addEventListener("click",()=>{

  id = setInterval(frames,50)
  kiri =0
  atas = 0
  counter = 0
  function frames(){
    if(kiri<=70 && atas !=140){
      if (counter ==0){
        kiri++
      }
      card.style.left=kiri+'px'
    }else if(kiri>=70 && atas !=140){
      atas++
      card.style.top=-atas+'px'
      counter=1
      }else if(kiri > 0){
        kiri--
        card.style.left=kiri+"px"
      }else if(counter<30){
      counter++
      atas--
      card.style.top=-atas+'px'
      console.log("else",kiri,counter,atas)
    }
    return
  }
})


let result = 1+2 ;// 3
document.writeln("<h1> 1+2 = "+result+"</h1>");
let originalResult= result;
result=result-1;
document.writeln(`${originalResult}-1=${result}`);

const orang= {
  name : "kek",
  alamat: " jln. mada",
  umur : 25,
  tinggi:''

}
console.log(orang.tinggi)

const orangg= ["kek"," jln. mada",25,'']
// orang[3]==null ? console.log('benar'): console.log('salah')

  let nilai = "A"

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

  // console.log(Boolean(0))

  const person = {
    firsName : "",
    lastName : "suryo"
  }

  const nam = person.firsName || person.lastName

  console.log(nam)
  


// fetch("http://128.199.200.155/data.php?user=credit", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



  const diri =["relo","koko","oo"]
;

for(const index of diri){
  console.log(` 
  get property ${index}
  get vale ${diri[index]}`)
}


let myStr = "Bob";
myStr[0] == "G";

console.log(myStr+myStr[0])
