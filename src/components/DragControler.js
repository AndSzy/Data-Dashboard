function logSmth() {
    let la = document.querySelectorAll('[mydraggable]');
    la.forEach((element) => {
        element.addEventListener('click', () => console.log("szyszka"));
    })
}

export { logSmth };