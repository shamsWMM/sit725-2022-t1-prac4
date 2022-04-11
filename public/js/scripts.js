//const {response}  = require('express');

/*
//step2
const cardList = [
    {
        title: "Kuala 2",
        image: "images/kuala2.jpeg",
        link: "About kuala 2",
        desciption: "Demo desciption about kuala 2"
    },
    {
        title: "Kuala 3",
        image: "images/kuala3.jpeg",
        link: "About Kuala 3",
        desciption: "Demo desciption about kuala 3"
    }
]*/
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
}
/*const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}
//step4
const getProjects = () => {
    $.get('/api/projects',(response) =>{
        if(response.statusCode==200){
            console.log(response);
            addCards(response.data);
        }
        else{
            console.log(response)
        }
    }

    )
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

*/

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
    /*
    $('#formSubmit').click(()=>{
        submitForm();
    })
    //step6
    getProjects();
    //step5
    //addCards(cardList);
    $('.modal').modal();
    */
  });
  