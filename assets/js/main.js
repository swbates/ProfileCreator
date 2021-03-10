$(document).ready(function(){

      $("#btn-submit").click(function(){

        event.preventDefault();

        var name = $("#fname").val() + ' ' + $("#lname").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var phone = $("#phone").val();
        var state = $("#state").val();
        var zip = $("#zip").val();
        var gender = $("#gender").val();

        var consentString = "";
        if ($('input[name="consent"]').is(':checked')){
          consentString = "Yes";
        } else {
          consentString = "No";
        }

        // Note: Locally I don't have a way of processing the uploaded photo, so all I can do is display the uploaded file name
        // If no image is uploaded, it is not displayed on the confirmation form
        var profilePhoto = $("#photo").val().split('\\').pop();;
        var profileStr = '';
        if(!profilePhoto){
          profileStr = '';
        } else {
          var profileStr = "<p><strong>Profile Photo: </strong>" + profilePhoto + "</p>";
        }
        


        console.log("File: " + profilePhoto);

        // Build the Updated Profile String
        var str = "<p><strong>Name</strong>: " + name + "</p>"
        + "<p><strong>Email Address</strong>: " + email + "</p>"
        + "<p><strong>Phone: </strong>" + phone + "</p>"
        + "<p><strong>Address: </strong><span><br />" + address + "<br />"
        + city + "<br />"
        + state + " " + zip + "</span></p>"
        + "<p><strong>Gender: </strong>" + gender + "</p>"
        + "<p><strong>Receive Marketing Emails: </strong>" + consentString + "</p>"
        + profileStr;
        $(".modal-body").html(str);

      
      });
    });