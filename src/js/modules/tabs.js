const tabs =  (parentSelector, tabSelector, contentSelector,  activeClass, display = "block") => {

const parent = document.querySelector(parentSelector);
const tab = document.querySelectorAll(tabSelector);
const content = document.querySelectorAll(contentSelector);


function hideTabContent () {
    content.forEach(tabContent => {
        tabContent.style.display = 'none';
        
        
    })

    tab.forEach(currTab => {
        currTab.classList.remove(activeClass);
    })
}

function showTabContent (i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
    
}

hideTabContent();
showTabContent();

parent.addEventListener('click', (e) => {
const target = e.target;

if(target && target.classList.contains(tabSelector.slice(1)) || target.parentNode.classList.contains(tabSelector.slice(1) )) {
    tab.forEach((currTab, i) => {
        if(currTab === target || currTab === target.parentNode) {

            hideTabContent();
            showTabContent(i);
        }

    })
}
})
}

export default tabs;