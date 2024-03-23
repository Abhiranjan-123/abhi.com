const toggleButton = document.getElementById('nav-toggle');
    const navlinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click',() =>{
        navlinks.classList.toggle('active');
    })
    function hideSignUpPopUp() {
        document.getElementById('jet').style.display = 'none';
    }
    document.getElementById('closeSignUpButton').addEventListener('click',hideSignUpPopUp);