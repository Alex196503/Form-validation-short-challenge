document.addEventListener(('DOMContentLoaded'),()=>{
    let form=document.querySelector('form');
    let firstName=document.querySelector('#firstname');
    let lastName=document.querySelector('#lastName');
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');
    let firstInput=document.querySelector('form>.input-group:first-child');   
    let secondInput=document.querySelector('#second');
    let thirdInput=document.querySelector('#third');
    let fourthInput=document.querySelector('#fourth');
    let images=document.querySelectorAll('.input-group img');    
    let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let paragrafe=document.querySelectorAll('.errorMessage');
    let passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/;
    let allInputs=document.querySelectorAll('input');
    form.addEventListener(('submit'),(e)=>{
        e.preventDefault();
        images.forEach((image)=>{
            image.style.display='none';
        })
        paragrafe.forEach((paragraf)=>{
            paragraf.innerHTML='';
        })
        allInputs.forEach((input)=>{
            input.style.border='1px solid hsl(246, 25%, 77%)';
        })
        let isValid=true;
        if(firstName.value.trim()=='')
        {
            showError(firstInput, 'First name cannot be null!');
            isValid=false;
        }
        else{
            clearError(firstInput);
        }
        if(lastName.value.trim()=='')
        {
            showError(secondInput, 'Last name cannot be null!');
            isValid=false;
        }
        else{
            clearError(secondInput);
        }
        if(email.value.trim()=='')
        {
            showError(thirdInput, 'Email cannot be null!');
            isValid=false;
        }
        else if(emailRegex.test(email.value)==false || (email.value.includes('example')))
        {
            showError(thirdInput, 'Sorry! Your email is invalid! Email should be like email@example.com');

            isValid=false;
        }
        else{
            clearError(thirdInput);
        }
        if(password.value.trim()=='')
        {
            showError(fourthInput, 'Password cannot be null!');
            isValid=false;
        }
        else if(passwordRegex.test(password.value)==false || (password.value.includes('password')))
        {
            showError(fourthInput, 'Password must contain lowercases, uppercases, digits and symbols!');
            isValid=false;
        }
        else{
            clearError(fourthInput);
        }
        if(isValid)
        {
            window.alert('Form submitted succesfully!Everything good');
           form.reset();
        }
        
        function showError(selector, message)
        {
           let input= selector.querySelector('input');
           let image=selector.querySelector('img');
           let paragraf=selector.querySelector('p');
           input.style.border='2px solid red';
           image.style.display='inline-block';
           paragraf.textContent=message;   
        }
        function clearError(selector)
        {
            let input=selector.querySelector('input');
            let img=selector.querySelector('img');
            let paragraf=selector.querySelector('p');
            input.style.border='1px solid  hsl(246, 25%, 77%)';
            img.style.display='none';
            paragraf.textContent='';
        }
    
    })
})