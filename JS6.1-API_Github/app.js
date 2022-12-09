import getUser from './request/request.js';
import showError from './error/error.js';
import showUser from './ui/ui.js';

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        let views=document.getElementById("result");
        let url='https://api.github.com/users';
        let reponse= fetch(url).then(response=>response.json())
        .then(names=>{
            names.forEach(function(element,index) {
                if(element.login ===username){
                    let src="dining-3.jpg";
                    views.innerHTML=`<img src="" alt="${element.login}" >`;
                    views.innerHTML="Login: "+element.login+ "<br>";

                    views.innerHTML+="id: "+element.id+ "<br>";
                    views.innerHTML+="node_id: "+element.node_id + "<br>";
                }
            });
        })
    // getUser(username)
    //     .then(user => showUser(user))
    //     .catch(err => showError(new Error(err)));

});

