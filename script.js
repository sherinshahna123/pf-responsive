$("#contactForm").submit((e)=>{



    /*  form validation using javascript */

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        let valid = true;

        // Name Validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email Validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Message Validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (!valid) e.preventDefault();
    });
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxOMAjDDjI5D62Qxlfebp5hNtyr5Zc1QLQCv9nb0Q58HFq8pIY8hWmD0lOFOGatbk5JHQ/exec",
        data:$("#contactForm").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})