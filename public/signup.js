const btn = document.querySelector("#btn");
const signBox = document.querySelector(".signbox");

btn.addEventListener("click", () =>{

    // Increasing the height and width of box
    signBox.style.height = "50vh";
    signBox.style.width = "60%";
    signBox.style.backgroundColor = "#222419";

    let form = `
        <form id="sign-in-form"> 
        <div>
            <label for="Name">Name:</label>
            <input type="text" name="name" id="name" placeholder="John" required></input> <br>
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="abc@gmail.com" required> </input><br>
            <label for="password">Password:</label>
            <input type="password" name="password" required> </input><br>
        </div>
            <div class="signInBtnBox">
               <button class="signBtn" type="submit">Sign In</button>
               <button type="reset" class="signBtn">Reset</button>
            </div>
        </form>
    `;

    signBox.innerHTML = form;
    let signform = document.querySelector("form");
    

    signform.addEventListener("submit", ()=>{
       let name = document.querySelector("name").value;
        console.log(name);
    })
})


