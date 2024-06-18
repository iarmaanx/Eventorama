const btn = document.querySelector("#btn");
const signBox = document.querySelector(".signbox");

btn.addEventListener("click", () =>{

    // Increasing the height and width of box
    signBox.style.height = "68vh";
    signBox.style.width = "80%";

    let form = `
        <form id="sign-in-form" style="text-align: center;"> 
            <label for="Name">Name:</label>
            <input type="text" name="name" placeholder="John Keller" required></input>
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="abc@gmail.com" required> </input>
        </form>
    `;

    signBox.innerHTML = form;
})