// Name Validation (input event)
document.getElementById("name").addEventListener("input", function(){

    let name=this.value;

    if(/^[A-Za-z ]+$/.test(name) && name.trim()!=""){
        document.getElementById("nameError").innerHTML="";
    }else{
        document.getElementById("nameError").innerHTML="Enter a valid name.";
    }

});


// Eye Color Validation (change event)
document.getElementById("eyeColor").addEventListener("change", function(){

    if(this.value==""){
        document.getElementById("eyeError").innerHTML="Please select eye color.";
    }else{
        document.getElementById("eyeError").innerHTML="";
    }

});


// Athletic Ability Validation (input event)
document.getElementById("ability").addEventListener("input", function(){

    if(this.value.trim()!=""){
        document.getElementById("abilityError").innerHTML="";
    }else{
        document.getElementById("abilityError").innerHTML="Please describe your athletic ability.";
    }

});


// Form Submission (submit event)
document.getElementById("gymForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;
    let eyeColor=document.getElementById("eyeColor").value;
    let ability=document.getElementById("ability").value;

    let sex=document.querySelector('input[name="sex"]:checked');

    let valid=true;


    // Name check
    if(!/^[A-Za-z ]+$/.test(name) || name.trim()==""){
        document.getElementById("nameError").innerHTML="Enter a valid name.";
        valid=false;
    }


    // Sex check
    if(!sex){
        document.getElementById("sexError").innerHTML="Please select your sex.";
        valid=false;
    }else{
        document.getElementById("sexError").innerHTML="";
    }


    // Eye color check
    if(eyeColor==""){
        document.getElementById("eyeError").innerHTML="Please select eye color.";
        valid=false;
    }


    // Athletic ability check
    if(ability.trim()==""){
        document.getElementById("abilityError").innerHTML="Please describe your athletic ability.";
        valid=false;
    }


    if(valid){

        document.getElementById("result").innerHTML=
            "Information submitted successfully!";

    }else{

        document.getElementById("result").innerHTML="";

        alert("Please fill all required fields correctly.");

    }

});