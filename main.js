let navbarItem2 = document.querySelectorAll("Profile");
console.log(navbarItem2);



let profile = document.querySelector();
//console.log(buttonTwo)
profile.onclick = function () {
    let githubURL = "https://api.github.com/users/cfz6677";
    fetch(githubURL)
        .then(function (response) {
            if (response.status === 200) {
                console.log("success response");
                return response.json();
            } else {
                console.log("response was unsuccessful");
            }
        })
        .then(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.login);
            console.log(data.avatar_url);
            console.log(data.created_at);
            console.log(data.node_id);
            let allImages = document.querySelectorAll("img");
            console.log(allImages)
            allImages[1].setAttribute('src', data.avatar_url);
            let nameElement = document.querySelector('.title');
            let usernameElement = document.querySelector('.subtitle');
            nameElement.textContent = data.name;
            usernameElement.textContent = data.login;
            let timeElement = document.querySelector('time');
            timeElement.textContent = data.created_at;
            let contentElement = document.querySelector('.content');
            let newParagraphTag = document.createElement('p');
            newParagraphTag.textContent = data.node_id;
            contentElement.append(newParagraphTag);
        })
        .catch(function (error) {
            console.log(error);
        });
};