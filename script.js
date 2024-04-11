const nav_items = document.querySelectorAll('#items a');

nav_items.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        item.style.color = 'black';
    });

    item.addEventListener('mouseout',() =>{
        item.style.color = 'whitesmoke';
    });
});

