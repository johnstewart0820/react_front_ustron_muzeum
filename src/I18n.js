import { createI18n } from 'react-router-i18n';
 
// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'pl'];
 
// Dictionary of translations
const translations = {
  en: {
    "address": "ADRESS",
    "nip": "Tax ID",
    "bank_account_number": "Bank Account Number",
    "price_list": "Price List",
    "opening_hours": "Opening Hours",
    "monday": "Monday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday",
    "thursday": "Thursday",
    "friday": "Friday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "contact_form": "Contact Form",
    "send": "Send",
    "museum_map_address": "Museum of Ustroń J. Jarocki",
    "museum_title": "Museum of Ustroń"
  },
  pl: {
    "address": "ADRES",
    "nip": "nr NIP",
    "bank_account_number": "nr konta bankowego",
    "price_list": "cennik",
    "opening_hours": "godziny otwarcia",
    "monday": "Poniedziałek",
    "tuesday": "Wtorek",
    "wednesday": "Środa",
    "thursday": "Czwartek",
    "friday": "Piątek",
    "saturday": "Sobota",
    "sunday": "Niedziela",
    "name": "Imię",
    "email": "Email",
    "message": "Wiadomość",
    "contact_form": "Formularz Kontaktowy",
    "send": "Wyślij",
    "museum_map_address": "Muzeum Ustrońskie im. J. Jarockiego",
    "museum_title": "Muzeum Ustrońskie"
  }
}
 
const I18n = createI18n(
  locales,
  translations,
);
 
export default I18n;