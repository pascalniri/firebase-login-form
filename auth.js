const onSignup = () => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log({
        fname, lname, email, password
    });

    function catchErrors() {
        if (fname === '' || lname === '' || email === '' || password === '') {
            alert('Fill out all the required fields');
        } else {
            // Proceed with user registration
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    db.collection('users').doc().set({
                        fname, lname, email, date: new Date()
                    })
                        .then((userProfile) => {
                            alert('User registered');
                            console.log(userProfile);
                        })
                        .catch((error) => {
                            alert('User profile not registered');
                            console.error(error);
                        });
                })
                .catch((error) => {
                    alert('Error occurred during user registration');
                    console.error(error);
                });
        }
    }

    catchErrors();
};