/*----const---*/

/*----Variables---*/
let rollingCount;
/*----cached---*/
let num = document.getElementById('num')
let count = document.getElementById('rollingCount');

/*----events---*/
document.querySelector('.add').addEventListener('click',handleAddClick)
document.querySelector('.sub').addEventListener('click',handleSubClick)
/*----functions---*/

init();

function init() {
    rollingCount = 0;
    render()
}
function render() {
    if(rollingCount < 0){
        count.style.color = 'red';
    } else {
        count.style.color = 'black'
    }
    count.textContent = rollingCount;
}
function handleAddClick(){
    if(num.value == '') return
    let value = parseInt(num.value,10);
    rollingCount += value
    render()
}
function handleSubClick(){
    if(num.value == '') return
    let value = parseInt(num.value,10);
    rollingCount = rollingCount - value
    render()
}