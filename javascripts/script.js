
//validation de civilite

$(document).ready(function() {  
		  $("#btn").click(function() {  
			  var x = $("input[type = 'radio']:checked");  
			  if(x.length>0)  
			  {  
				 $("#civilite_error_message").text("  *");                 
				 return false; 
					
			  }  
			  else {  
					 $("#civilite_error_message").html(" Selectionne ton civilité");  
					 return false;  
			  }  
		  });  
		});

//validation de langue

		$(document).ready(function() {  
			$("#btn").click(function() {  
				var x = $("input[type = 'checkbox']:checked");  
				if(x.length>0)  
				{  
				   $("#langue_error_message").text("  *");                 
				   return false; 
					  
				}  
				else {  
					   $("#langue_error_message").html(" Selectionne la langue");  
					   return false;  
				}  
			});  
		  });   
		
		//validation de nom

$(function() {

	
	
	$("#btn").click(function() {

		if($("#form_nom").val()=="") {
			$("#username_error_message").html(" Selectionne votre nom");
			$("#username_error_message").show();
		} else {
			$("#username_error_message").text("*");  
		}
	
		
	});
	
	//validation de prenom

	$("#btn").click(function() {

		if($("#form_prenom").val()==""){
			$("#prenom_error_message").html(" Selectionne votre prenom");
			$("#prenom_error_message").show();
		} else {
			$("#prenom_error_message").text("*");  
		}
		
	});
	
	//validation de date

	$("#btn").click(function() {

		// if($("#form_date").val()==""){
		// 	$("#date_error_message").html(" Selectionne votre date de naissance");
		// 	$("#date_error_message").show();
		// 	error_date = true;
		// } else {
		// 	$("#date_error_message").hide();
		// }

		var pattern = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/([0-9]{2}|[0-9]{4})$/);
	
		if(pattern.test($("#form_date").val())) {
			$("#date_error_message").text("*");
		} else {
			$("#date_error_message").html("Invalid date ");
			$("#date_error_message").show();
		}
	
	});
	
	//validation de adresse
	
	$("#btn").click(function() {

		if($("#form_adresse").val()==""){
			$("#adresse_error_message").html(" Selectionne votre adresse");
			$("#adresse_error_message").show();
		} else {
			$("#adresse_error_message").text("*");
		}
	});
	$("#btn").click(function() {

		if($("#form_ville").val()=="") {
			$("#ville_error_message").html(" Selectionne votre Ville");
			$("#ville_error_message").show();
		} else {
			$("#ville_error_message").text("*");
		}
	
	});
	
	//validation de numero de telephone
	
	$("#btn").click(function() {

		// if($("#form_phone").val()=="") {
		// 	$("#phone_error_message").html(" Selectionne votre Numero de Telephone");
		// 	$("#phone_error_message").show();
		// 	error_phone = true;
		// } else {
		// 	$("#phone_error_message").hide();
		// }
	
		var pattern = new RegExp(/^0+[0-9]{9}$/);
	
		if(pattern.test($("#form_phone").val())) {
			$("#phone_error_message").text("*");
		} else {
			$("#phone_error_message").html("Invalid Phone Number ");
			$("#phone_error_message").show();
		}
	});
	
	
	  //validation de email
	  
	  
	$("#btn").click(function() {

		// if($("#form_email").val()=="") {
		// 	$("#email_error_message").html(" Selectionne votre Email");
		// 	$("#email_error_message").show();
		// 	error_email = true;
		// } else {
		// 	$("#email_error_message").hide();
		// }
		var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error_message").text("*");
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
		}
		
	});
	
	//validation de annee
	
	$("#btn").click(function() {

		if($("#form_annee").val()=="") {
			$("#annee_error_message").html("  Selectionne votre annee");
			$("#annee_error_message").show();
		} else {
			$("#annee_error_message").text("*");
		}

		
	});
	
	//validation de bac
	
	$("#btn").click(function() {

		if($("#form_baccalaureat").val()=="") {
			$("#baccalaureat_error_message").html(" Selectionne votre Baccalaureat");
			$("#baccalaureat_error_message").show();
		} else {
			$("#baccalaureat_error_message").text("*");
		}
	
		
	});
	
	//validation de serie
	
	$("#btn").click(function() {

		if($("#form_serie").val()=="") {
			$("#serie_error_message").html(" Selectionne votre serie");
			$("#serie_error_message").show();
		} else {
			$("#serie_error_message").text("*");   
		}
	
		
	});
	
	//validation de etablissement
	
	
	$("#btn").click(function() {

		if($("#form_etablisement").val()=="") {
			$("#etablisement_error_message").html(" Selectionne votre etablisement");
			$("#etablisement_error_message").show();
		} else {
			$("#etablisement_error_message").text("*");   
		}
	
		
	});
	
	//validation de exeperience

	$("#btn").click(function() {

		if($("#form_exp").val()=="") {
			$("#exp_error_message").html("Valider Votre Expériences  ");
			$("#exp_error_message").show();
		} else {
			$("#exp_error_message").text("*");   
		}
	
		
	});
	
});