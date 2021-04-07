const features = {
    sb: {
        img: './images/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    ss: {
        img: './images/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    es: {
        img: './images/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
};

let featureImage = document.querySelector('#features img');
featureImage.src = features[Object.keys(features)[0]].img;

let featureTitle = document.querySelector('#features h3');
featureTitle.textContent = features[Object.keys(features)[0]].title;

let featureDescription = document.querySelector('#features .container p');
featureDescription.innerHTML = features[Object.keys(features)[0]].description;


const change = (e) => {

    document.querySelectorAll('#features button').forEach(element => {
        element.classList.remove('active');
    });

    let button = document.querySelector(`#features #${e}`);
    
    if(button.classList != 'active' ){
        button.classList.add('active');
    }

    featureImage.src = features[e].img;
    featureTitle.textContent = features[e].title;
    featureDescription.innerHTML = features[e].description;
}

document.querySelectorAll('#features .buttons button').forEach(e => {
    e.addEventListener('click', (e) => {
        change(e.target.id);
    });
});

//-----------------FEATURES-----------------//

//-----------------ASKED QUESTIONS-----------------//

let questions = document.querySelectorAll('#askedQuestions .questions button');



questions.forEach(button => {
    
    button.addEventListener('click', () => {

        let buttonId = button.id;
        let numberId = buttonId.charAt(buttonId.length - 1);
        let answers = document.querySelectorAll('.questions p');
        
        answers.forEach(element => {
            
            if (element.id == `answer${numberId}`) {
                element.classList.toggle('active');
            }
        });
    
        //let answer = document.querySelector(`#answer${numberId}`);

        //answer.classList.toggle('active');

        //console.log(answer);

    });
    

});
