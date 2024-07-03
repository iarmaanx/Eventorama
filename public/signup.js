const btn = document.querySelector("#btn");
const signBox = document.querySelector(".signbox");

btn.addEventListener("click", () =>{

    // Increasing the height and width of box
    signBox.style.height = "50vh";
    signBox.style.width = "60%";
    signBox.style.backgroundColor = "#222419";

    let form = `
        <form id="sign-in-form" action="/public/home.html" method="get"> 
        <div>
            <label for="Name">Name:</label>
            <input type="text" name="name" id="name" placeholder="John" required></input> <br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="abc@gmail.com" required autocomplete="username"> </input><br>
            <label for="password">Password:</label>
            <input type="password" name="password"  id="password" required autocomplete="current-password"> </input><br>
        </div>
            <div class="signInBtnBox">
            <button type="reset" class="signBtn">Reset</button>
               <button class="signBtn" type="submit" id="signinBtn">Sign In</button>
            </div>
        </form>
    `;

    signBox.innerHTML = form;
    
})


var signupButton = document.querySelector('#signinBtn');
    var signupForm = document.querySelector('form');

document.addEventListener('DOMContentLoaded', function() {
    

    if (signupButton) {
        signupButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission for demo purposes
            
            if (signupForm) {
                var email = signupForm.querySelector('#email');
                var password = signupForm.querySelector('#password');
                
                if (email && password) {
                    console.log('Email:', email.value);
                    console.log('Password:', password.value);
                } else {
                    console.error('Email or password element not found');
                }
            } else {
                console.error('Signup form element not found');
            }
        });
    } else {
        console.error('Signup button element not found');
    }
});

