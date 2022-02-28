

export function openPage() {
    
    const homePage = document.querySelector('#home');
    const menuPage = document.querySelector('#menu');
    const contactPage = document.querySelector('#contact');
    menuPage.style.display = 'none'
    contactPage.style.display = 'none'

    const navbar = document.createElement('nav');
    const list = document.createElement('ul');
    const home = document.createElement('li')
    const menu = document.createElement('li')
    const contact = document.createElement('li')
    
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    navbar.classList.add('nav')
    home.classList.add('home')
    menu.classList.add('menu');
    contact.classList.add('contact')

    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(contact);

    navbar.appendChild(list);

    document.body.appendChild(navbar)


    home.addEventListener('click', () => {
        document.body.style.backgroundColor = 'var(--clr-green)'
        homePage.style.display = 'flex'
        menuPage.style.display = 'none'
        contactPage.style.display = 'none'
    })

    menu.addEventListener('click', () => {
        document.body.style.backgroundColor = 'var(--clr-white)'
        menuPage.style.display = 'flex'
        homePage.style.display = 'none'
        contactPage.style.display = 'none'
    })

    contact.addEventListener('click', () => {
        document.body.style.backgroundColor = 'var(--clr-red)'
        contactPage.style.display = 'flex'
        homePage.style.display = 'none'
        menuPage.style.display = 'none'

    })
    
}