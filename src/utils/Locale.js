import LocalStorage from '../constants/LocalStorage';
const Locale = {};
Locale.getLocale = () => {
    let locale = localStorage.getItem(LocalStorage.Locale);
    if (locale === null || locale === '' || locale === undefined) {
        localStorage.setItem('locale', 'pl');
        locale = 'pl';
    }
    return locale;
}
    
Locale.setLocale = (locale) => {
    localStorage.setItem('locale', locale);
}

export default Locale;