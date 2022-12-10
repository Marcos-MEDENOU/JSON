import getUser from './request/request.js';
import showError from './error/error.js';
import showUser from './ui/ui.js';

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
           let views = document.getElementsByClassName("result");
        let url='https://api.github.com/users/' +username;
        let reponse= fetch(url).then(response=>response.json())
            .then(names => {   
                let img=document.getElementById("img");  
                img.setAttribute('src', names.avatar_url)
                let h2 = document.getElementById("h2");
                h2.innerHTML = names.login + `(${names.name})`;
                let h3 = document.getElementById("repository");
                h3.innerHTML = "Public Repository: " + names.public_repos
                let link = document.createElement('a');
                link.setAttribute("href", names.html_url);
                let btn = document.getElementsByClassName("button");
                btn.appendChild(link)
       
            });
        })
    // getUser(username)
    //     .then(user => showUser(user))
    //     .catch(err => showError(new Error(err)));

