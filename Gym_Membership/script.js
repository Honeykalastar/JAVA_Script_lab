// Name Validation (input event)

document.getElementById("name").addEventListener("input", function(){

    let name=this.value;

    if(/^[A-Za-z ]+$/.test(name)){

        document.getElementById("nameError").innerHTML="";

    }

    else{

        document.getElementById("nameError").innerHTML="Only letters allowed.";

    }

});


// Age Validation (blur event)

document.getElementById("age").addEventListener("blur", function(){

    let age=this.value;

    if(age>=16 && age<=60){

        document.getElementById("ageError").innerHTML="";

    }

    else{

        document.getElementById("ageError").innerHTML="Age must be between 16 and 60.";

    }

});


// Email Validation (input event)

document.getElementById("email").addEventListener("input", function(){

    let email=this.value;

    let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(pattern.test(email)){

        document.getElementById("emailError").innerHTML="";

    }

    else{

        document.getElementById("emailError").innerHTML="Invalid email.";

    }

});


// Mobile Validation (input event)

document.getElementById("mobile").addEventListener("input", function(){

    let mobile=this.value;


    if(/^\d{10}$/.test(mobile)){

        document.getElementById("mobileError").innerHTML="";

    }

    else{

        document.getElementById("mobileError").innerHTML="Enter 10-digit mobile number.";

    }

});


// Membership Validation (change event)

document.getElementById("plan").addEventListener("change", function(){

    if(this.value==""){

        document.getElementById("planError").innerHTML="Please select a plan.";

    }

    else{

        document.getElementById("planError").innerHTML="";

    }

});


// Form Submission (submit event)

document.getElementById("gymForm").addEventListener("submit", function(e){

    e.preventDefault();


    if(

        document.getElementById("nameError").innerHTML=="" &&

        document.getElementById("ageError").innerHTML=="" &&

        document.getElementById("emailError").innerHTML=="" &&

        document.getElementById("mobileError").innerHTML=="" &&

        document.getElementById("plan").value!=""

    ){


        // Get form values

        let name=document.getElementById("name").value;

        let age=document.getElementById("age").value;

        let email=document.getElementById("email").value;

        let mobile=document.getElementById("mobile").value;

        let plan=document.getElementById("plan").value;


        // Generate Member ID

        let memberId="FZ"+Math.floor(100000+Math.random()*900000);


        // Get Registration Date

        let date=new Date().toLocaleDateString();


        // Show success message

        document.getElementById("result").innerHTML=

            "Gym Admission Successful!";


        // Generate Receipt

        document.getElementById("receipt").innerHTML=`

            <div class="receipt-header">

                <h3>FITZONE GYM</h3>

                <p>MEMBERSHIP SUCCESSFULLY REGISTERED</p>

            </div>


            <div class="receipt-row">

                <span>Member ID</span>

                <strong>${memberId}</strong>

            </div>


            <div class="receipt-row">

                <span>Full Name</span>

                <strong>${name}</strong>

            </div>


            <div class="receipt-row">

                <span>Age</span>

                <strong>${age}</strong>

            </div>


            <div class="receipt-row">

                <span>Email</span>

                <strong>${email}</strong>

            </div>


            <div class="receipt-row">

                <span>Mobile Number</span>

                <strong>${mobile}</strong>

            </div>


            <div class="receipt-row">

                <span>Registration Date</span>

                <strong>${date}</strong>

            </div>


            <div class="receipt-plan">

                MEMBERSHIP PLAN: ${plan}

            </div>


            <button

                class="print-button"

                onclick="window.print()">

                PRINT RECEIPT

            </button>

        `;


        // Show receipt beside the Join the Gym section

        document.getElementById("receipt").style.display="block";


        // Reset form

        document.getElementById("gymForm").reset();


        // Clear validation messages

        document.getElementById("nameError").innerHTML="";

        document.getElementById("ageError").innerHTML="";

        document.getElementById("emailError").innerHTML="";

        document.getElementById("mobileError").innerHTML="";

        document.getElementById("planError").innerHTML="";


    }


    else{

        document.getElementById("result").innerHTML="";

        alert("Please correct the errors before submitting.");

    }

});