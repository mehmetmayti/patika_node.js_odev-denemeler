const fs =require('fs');



//Dosya veri ekleme

fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}',"utf-8",(err)=>{

    if(err) console.log("Hata!!");
    console.log("Dosya oluşturuldu.");
})

//Dosya veri okuma

fs.readFile('employees.json',"utf-8",(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    if(!err)console.log("Dosya Okundu.");
})

//Veri Güncelleme

//?? Yapamadım

//Dosya Silme

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    if(!err) console.log('Dosya silindi.');
})