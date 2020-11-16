$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

function validate(){  
	let name=document.myform.email.value;  
	let password=document.myform.pwd.value;  

      let reg=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
	  
	if (name==null || name==""){  
	  alert("Name can't be blank");  
	  return false;  
	}
	else if(password.length<6){  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	  }  
	else if(!(reg.test(name))){
		alert("Invalid Email Format");
		return false;
	}

	  else return true;
	
	}