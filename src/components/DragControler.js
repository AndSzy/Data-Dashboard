function logSmth() {
    let elements = document.querySelectorAll('[mydraggable]');
    elements.forEach((element) => {
        if(!element.classList.contains('click-handler')) {
            element.classList.add('click-handler');
            element.addEventListener('click', (e)=> {
                console.log("clicked********" + e.currentTarget);
            })
        }
    })
}




export { logSmth };