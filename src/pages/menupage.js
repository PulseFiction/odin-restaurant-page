import Margherita from './margherita.jpeg';
import Pepperoni from './pepperoni.jpeg';
import Meat from './meat.jpeg';
import Veggie from './veggie.jpeg';



export function menuPage() {
    const menuContainer = document.querySelector('#menu')
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    heading.style.color = 'black';
    const legend = document.createElement('p');
    legend.textContent = 'V - suitable for vegetarians -- Speak to a member of staff if you have allergies'

    // Margherita
    
    const margDiv = document.createElement('div');
    const margHeader = document.createElement('h2')
    margHeader.textContent = 'Margherita'
    const margImage = document.createElement('img');
    margImage.src = Margherita;
    const margParagraph = document.createElement('p');
    margParagraph.textContent = `The classic pizza, with Tomato, Mozarella and Basil.`

    margDiv.classList.add('margherita')
    margDiv.appendChild(margHeader)
    margDiv.appendChild(margImage)
    margDiv.appendChild(margParagraph)
    
    // Pepperoni 

    const pepperDiv = document.createElement('div');
    const pepperHeader = document.createElement('h2')
    pepperHeader.textContent = 'Pepperoni'
    const pepperImage = document.createElement('img');
    pepperImage.src = Pepperoni;
    const pepperParagraph = document.createElement('p')
    pepperParagraph.textContent = `Our most popular with our signature dried and cured pepperoni.`

    pepperDiv.classList.add('pepperoni')
    pepperDiv.appendChild(pepperHeader)
    pepperDiv.appendChild(pepperImage)
    pepperDiv.appendChild(pepperParagraph)
    
    // Meat

    const meatDiv = document.createElement('div');
    const meatHeader = document.createElement('h2')
    meatHeader.textContent = 'Meat Feast'
    const meatImage = document.createElement('img');
    meatImage.src = Meat;
    const meatParagraph = document.createElement('p')
    meatParagraph.textContent = `For those meat lovers, with slices of beef, red onions and red peppers.`
    
    meatDiv.classList.add('meat')
    meatDiv.appendChild(meatHeader)
    meatDiv.appendChild(meatImage)
    meatDiv.appendChild(meatParagraph)
    
    // Veggie

    const vegDiv = document.createElement('div')
    const vegHeader = document.createElement('h2')
    vegHeader.textContent = 'Veggie Garden (v)'
    const vegImage = document.createElement('img');
    vegImage.src = Veggie;
    const vegParagraph = document.createElement('p')
    vegParagraph.textContent = `Our beautiful veggie pizza, comes with black olives, cherry tomatoes, red peppers and red onions`

    vegDiv.classList.add('veggie')
    vegDiv.appendChild(vegHeader)
    vegDiv.appendChild(vegImage)
    vegDiv.appendChild(vegParagraph)

    // Append all

    menuContainer.classList.add('menu-container')
    menuContainer.appendChild(heading)
    menuContainer.appendChild(margDiv)
    menuContainer.appendChild(pepperDiv)
    menuContainer.appendChild(meatDiv)
    menuContainer.appendChild(vegDiv)
    menuContainer.appendChild(legend)


}