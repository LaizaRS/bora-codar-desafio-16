const filterElement= document.querySelector('header form input')

const contacts = document.querySelectorAll('.list-wrarpper')

const icons = document.querySelectorAll('.letter')

filterElement.addEventListener('input', filterContacts)

function filterContacts(){

    if(filterElement.value != ''){

        for(let icon of icons){
        icon.style.display = 'none';
        }

        for(let contact of contacts){
            let title = contact.querySelector('h3')
            
            title = title.textContent.toLocaleLowerCase()
            
            let filterText = filterElement.value.toLocaleLowerCase()
            
            if(!title.includes(filterText)){
                contact.style.display = 'none'
            } else{
                contact.style.display = 'block'
            }
        }
    } else{
        for (let contact of contacts){
            contact.style.display = 'flex'
          for(let icon of icons){
            icon.style.display = 'flex';
        }
           
        }   
    }
}