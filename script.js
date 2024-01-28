function emailSend(){
   var params = {
     email_id : document.getElementById('email').value,
     password : document.getElementById('password').value,
   }
   emailjs.send("service_dy504qg", "template_kolrkh8", params).then(function(res){
    alert("success" + res.status);
   })
}