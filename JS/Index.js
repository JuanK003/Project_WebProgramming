function onClickSearchButton(event) {
    const formSearch = document.getElementById('form-search')
    formSearch.classList.toggle('form-search--active')
}


document.body.addEventListener('click', (event) => {
    if(event.target.id === 'nav-item__search-button' || event.target.id === 'form-search__button-close') {
        onClickSearchButton(event);
    }
})