import i18next from 'i18next';
import Backend from 'i18next-http-backend'

let language

if (localStorage.getItem('favoriteLanguage')) {
    language = localStorage.getItem('favoriteLanguage')
} else{
    language = 'en'
}

// recorre el json
i18next.use(Backend).init({
    lng: language,
    debug: false,
    backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
    },
    ns: ['translation'],
    defaultNS: 'translation',
}).then(() => updateContent())

// recorre las traducciones
function updateContent() {
    const htmlElements = document.querySelectorAll('[data-i18n]')

    htmlElements.forEach(element => {
        const value = element.getAttribute('data-i18n')
        element.innerHTML = i18next.t(value)
    });
}

// llamamos a la funcion que cambia las traduciones
window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng).then(() => {
        updateContent()
    })
    localStorage.setItem('favoriteLanguage', lng)
}

