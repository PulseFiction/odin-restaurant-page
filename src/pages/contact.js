export function contactPage() {

    const contactContainer = document.querySelector('#contact')
    contactContainer.classList.add('contact-container');
    const heading = document.createElement('h1');
    heading.textContent = 'Contact us'
    
    // Sal's contact
    
    const salDiv = document.createElement('div');
    const salHeader = document.createElement('h2');
    const salParagraph = document.createElement('p');
    salHeader.textContent = 'Sal Mozzaroni Jr.';
    salParagraph.textContent = `Number: 555-012-555`

    salDiv.appendChild(salHeader)
    salDiv.appendChild(salParagraph)

    salDiv.classList.add('contact-box')

    // Tony's contact

    const tonyDiv = document.createElement('div');
    const tonyHeader = document.createElement('h2');
    const tonyParagraph = document.createElement('p');
    tonyHeader.textContent = 'Tony Mozzaroni';
    tonyParagraph.textContent = `Number: 555-015-515`

    tonyDiv.appendChild(tonyHeader)
    tonyDiv.appendChild(tonyParagraph)

    tonyDiv.classList.add('contact-box')

    // Giovanni's Contact

    const gioDiv = document.createElement('div');
    const gioHeader = document.createElement('h2');
    const gioParagraph = document.createElement('p');
    gioHeader.textContent = 'Giovanni Salaburatta';
    gioParagraph.textContent = `Number: 555-101-535`

    gioDiv.appendChild(gioHeader)
    gioDiv.appendChild(gioParagraph)
    
    gioDiv.classList.add('contact-box')

    // append all



    contactContainer.appendChild(heading)
    contactContainer.appendChild(salDiv)
    contactContainer.appendChild(tonyDiv)
    contactContainer.appendChild(gioDiv)

}