

function myfun(){
   var name= document.getElementById("uname");
   var age= document.getElementById("uage");
   var quali= document.getElementById("uqualification");
  
   if(name.value=="" || age.value=="" || quali.value=="")
   {
       alert("No blank values allowed");
        return false;
   }
   else{
       true;
   }

   var cv=document.getElementById("cv");
   if(cv.value=="")
   {
    alert("CV is not selected");
    return false;
}
else{
   true;  
   }




    var a = document.forms.genders;
    for(i=0; i<a.length;i++){
        if(a[i].checked==true)
        return true;

    }
    document.getElementById("messages").innerHTML="**Please Select anyone**"
    return false;
}


// API

let mybtn = document.getElementById("mybtn");

let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url= "http://run.mocky.io/v3/16375822-6d22-4d61-b131-6672e9e13884";
//     fetch(url).then((response) =>{
//         console.log("Inside first then")
//         return response.img();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
//     })
// }


function getData(){
    console.log("Started getData")
    url = "index.html";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


function postData(){
    url = "http://run.mocky.io/v3/16375822-6d22-4d61-b131-6672e9e13884";
    data = '{"uname":"Zeeshan","uage":"23",}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}


postData()
