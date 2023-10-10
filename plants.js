let page = 1;

let paginationEl = document.getElementById('pagination');

let paginationBtns = paginationEl.getElementsByTagName('button');

paginationBtns[0].addEventListener('click',goBack );

function goBack (){
    console.log('previous');
}

