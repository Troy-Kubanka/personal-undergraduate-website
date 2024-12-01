/* TROY */

// Section to have string on cover page to change itself
var typed = new Typed(".text", {
    strings: ["Learning", "Growing", "Developing"],
    typeSpeed: 50, 
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });




  // to have any contact message autosend to my email -- using emailJS
  function sendMail(){

          let params = {                                                          // params is sent to open source email server
          name: document.getElementById("sender").value,  //name Entered,
          email: document.getElementById("originAddress").value,  //email Entered,
          subject: document.getElementById("subject").value,  //subject Entered,
          message: document.getElementById("message").value,  //message Entered,
        }; 

        const lettersAfterAtSign = params.email.substring(params.email.indexOf("@")+1); // make sure email is not empty after @
        const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/; // make sure no special characters after @

        if(params.name && params.email && params.message            // make sure these values have inputs before proceeding
            && params.email.includes("@") && lettersAfterAtSign       // this makes sure email field has an @ && characters after @ is true
            && params.email.substring && !specialCharactersRegex.test(lettersAfterAtSign)   // tests if there is characters after @, and none of those characters after @ are special
            && params.email.charAt(params.email.indexOf("@")+1)!='.'    // confirms there is no . right after @ or .. after @
          ) { 
            /*
              emailjs.send("service_laceefp", "template_f5hlnzw", params).then(
                                                                          alert("Message successfully sent. Thank You " + 
                                                                          params.name)); 
                                                                                      // notify submission successful
  */
//
            emailjs.send("service_laceefp", "template_f5hlnzw", params)
  .then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: `Thank you, ${params.name}!`,
      confirmButtonText: 'OK'
    });
  })
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong. Please try again later.',
    });
    console.error("EmailJS error:", error);
  });




            //

            
               // to remove info and reload page
               document.getElementById("myForm").reset();    //clear contact Info    
               location.reload(true);           // reload page                                            
        }                                                                     
  }


  

