//Init Github
const github = new Github;
//init UI
const ui = new UI;

//Serch input
const searchUser = document.getElementById('searchUser');

//Serch input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText !== '') {
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //SHow alert    
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }
});