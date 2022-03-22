
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
    let from1 = document.getElementById('from1').value;
    let from2 = document.getElementById('from2').value;
    let result = document.getElementById('result');
    i=operator.innerText
    a=operanSelect[arr-1]
    
    if(i!=a){ 
      hasil=from1*from2
      console.log("t")
    }if(i==a){
      console.log("sama")
    }
    !hasil ?  result.innerHTML="masukan angka":result.innerHTML=hasil
    console.log(from1,from2,i,a,arr)
  })


  // function untuk box move
card.addEventListener("click",()=>{
  id = setInterval(frames,50)
  i =0
  a=0
  function frames(){
    if(i>=220){return false}
    // if(id!=true){return false}
    if(i<=70){
      i++
      card.style.left=i+'px',console.log(i,"kanan")
    }else if(i>=70){
      if(i==400){
        clearInterval(id)
        console.log(a,i,id,"paling dalam")
        i=false,a=false
      } 
      }else if(a<400){
        // clearInterval(id)
        // a=129
        i--
        console.log(i,"kiri")
        card.style.right=-i+"px"
      }
      // i++
      a++
      card.style.top=-a+"px"
      console.log(i,"atas")
      // return false
    console.log(arr,id,i,"luar",a)
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

