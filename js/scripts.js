function validate1()  {
  var zip = /^\d{5}$/;
  if ($("#zipcode").val().match(zip))
  {
    return true
  }
  else {
    alert("The zip code is not valid.")
    return false
  }
   }

}

function validate()  {
  var zip = /^\d{5}$/;
  if ($("#zipcode").val().match(zip))
  {
    return true
  }
  else {
    alert("The zip code is not valid.")
    return false
  }
  var phone = $("#phone").val();
  if (isNaN(phone) == true) {
     alert("Phone number is not valid or not in a valid format");
     return false;
   }

}
