//-----------------HEADER-----------------//

let menuButton = document.querySelector('#menuButton');
let activeMenu = document.querySelector('header');

menuButton.addEventListener('click', () => {
    activeMenu.classList.toggle('active-menu');
})

//-----------------HEADER-----------------//


//-----------------FEATURES-----------------//

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
            answers.forEach(p => p.id == `answer${numberId}` ? p.classList.toggle('active') : false);

        let images = document.querySelectorAll('.questions button img');
            images.forEach(img => {
                
                let srcImage = img.attributes.src.value;
                            
                if(img.id == `arrow${numberId}`) {
                
                    img.classList.toggle('active');
                    
                    if (srcImage == './images/icon-arrow.svg') {
                        img.src = './images/icon-arrow-red.svg';
                    } else {
                        img.src = './images/icon-arrow.svg';
                    }
                }
            });
    });
});

//-----------------ASKED QUESTIONS-----------------//


//-----------------CONTATO-----------------//

const field = document.querySelector('[required]');

//console.log(field);

function customValidation(event) {
    
    event.preventDefault();
    
    let field = event.target;

    //VERIFICANDO SE EXISTEM ERROS
    function verifyErrors() {

        let foundError = false;

        for(let error in field.validity) {

            if (field.validity[error] && !field.validity.valid) {
                foundError = error;
            }
        }

        return foundError;
    }
    
    const error = verifyErrors();
    
    const inputError = field.parentNode.querySelector('input');
    const imageError = field.parentNode.querySelector('img');
    const spanError = field.parentNode.querySelector('span');

    if (error) {
        
        inputError.classList.add('error');
        imageError.classList.add('error');
        
        spanError.classList.add('active');
        spanError.innerHTML = "Whoops, make sure it's an email";
    
    }else{
        
        inputError.classList.remove('error');
        imageError.classList.remove('error');
        
        spanError.classList.remove('active');
        spanError.innerHTML = "";
    }
    
}

field.addEventListener('invalid', customValidation);
field.addEventListener('blur', customValidation);

//DESATIVANDO O ENVIO
document.querySelector('form')
.addEventListener('submit', event => {
    
    console.log('Enviado');
    
    event.preventDefault();
    
})

//-----------------CONTATO-----------------//