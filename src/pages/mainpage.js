import Pizza from './pizza.jpeg'


export function mainPage() {
    const heading = document.createElement('h1'); 
    const headTwo = document.createElement('h3')
    const paragraph = document.createElement('p');
    const container = document.querySelector('#home')
    const image = document.createElement('img');
    image.src = Pizza;
    container.classList.add('home-container')
    image.classList.add('pizza-image');
    paragraph.classList.add('welcome')

    heading.textContent = `Sal's Pizzeria`;
    headTwo.textContent = `Est. 1946`
    paragraph.textContent = `Named after Salvatore Mozzaroni - the founder who opened his restaurant in 
    1946 after serving in the allied forces in World War 2, Sal's Pizzeria has had the long standing tradition continued by the Mozzaroni familia of providing
    excellent, freshly made pizza to the city of New York.`
    
    container.appendChild(heading)
    container.appendChild(headTwo)
    container.appendChild(image)
    container.appendChild(paragraph)

}