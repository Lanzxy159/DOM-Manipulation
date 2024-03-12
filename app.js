var inputTitle = document.querySelector("#Title");
var inputInformation = document.querySelector("#Information");

const enter = document.querySelector("#Enter");
const Card = document.querySelector(".Newcards");

var tasks_completed = document.querySelector("#No_tasks")
var no_tasks = 0;
const reset = document.querySelector("#Reset");

const image_cat = document.querySelector('.placeholderimage');



reset.addEventListener("click", (event) =>{
    reset.textContent = 0;
});


enter.addEventListener("click", (event) => {
    event.preventDefault();

    var title = inputTitle.value;
    var information = inputInformation.value;

    const col = document.createElement('div');
    col.classList.add('col-6');

    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', '#addpadding');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;
    
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = information;
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Done';
    deleteButton.addEventListener('click', () => {
        card.remove();
        no_tasks +=1;
        tasks_completed.textContent = no_tasks;

        var cat_image = document.createElement('img');
        cat_image.src = "catgoodjob.jpg";
        cat_image.height = 100;
        cat_image.width = 100;
        image_cat.appendChild(cat_image);
        function removeImage() {
            cat_image.remove();
        }
        
        setTimeout(removeImage, 5000);

    });
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(deleteButton);
    
    card.appendChild(cardBody); 
    Card.appendChild(col);
    Card.appendChild(card);
    inputTitle.value = '';
    inputInformation.value = '';
});

