import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    console.log("google sign in");

    // Close the login modal
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';

    // Show welcome message
    showMessage("Welcome " + credentials.user.displayName);

    // Redirect to another page
    window.location.href = '/DashHome'; // Cambia '/dashboard' por la URL de la página a la que deseas redirigir
  } catch (error) {
    console.log(error);
  }
});