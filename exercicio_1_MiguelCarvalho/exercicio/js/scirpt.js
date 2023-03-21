function selectCategory(elementHtml){
    let category = elementHtml.innerHTML;
    category = category.substring(0,category.length -1);

    Array.from(document.getElementsByClassName("nav-button")).forEach((btn)=>btn.style.background = "#367915");
    elementHtml.style.background = 'red';

    let items = Array.from(document.getElementById('items').children);

    items.filter((element)=>{
        const itemCategory = element.querySelector('.categories').innerHTML;

        if(itemCategory !== category){
            element.style.display = 'none';
        }else{
            element.style.display = 'flex';
        }
    })
}