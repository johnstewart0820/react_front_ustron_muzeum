import AboutDescription from '../pages/About/Description';
import AboutExhibitions from '../pages/About/Exhibitions';
import AboutPhotoReports from '../pages/About/Photo_Reports';
import MuseumExhibitions from '../pages/Exhibition/Museum_Exhibitions';
import TemporaryExhibitions from '../pages/Exhibition/Temporary_Exhibitions';
import EventPage from '../pages/Event';
import NewsPage from '../pages/News';
import ChronicleUstron from '../pages/Chronicle/Chronicle_Ustron';
import ChronicleTemporaryExhibitions from '../pages/Chronicle/Chronicle_Temporary_Exhibitions';
import ChronicleMuseumEvents from '../pages/Chronicle/Chronicle_Museum_Events';
import EducationGlinoki from '../pages/Education/Education_Glinoki';
import EducationIndustriada from '../pages/Education/Education_Industriada';
import EducationCalendar from '../pages/Education/Education_Calendar';
import EducationUpcomingEvents from '../pages/Education/Education_Upcoming_Events';
import TourismPage from '../pages/Tourism';
import ArchivePage from '../pages/Archive';
import ContactPage from '../pages/Contact';
export default {
    'opis-muzeum': AboutDescription,
    'Fotorelacje': AboutExhibitions,
    'Wystawy': AboutPhotoReports,
    'museum_exhibitions': MuseumExhibitions,
    'muzeum-ustron-pl-wystawy': TemporaryExhibitions,
    museum_events: EventPage,
    'muzeum-ustron-pl-aktualnosci': NewsPage,
    museum_chronicle: ChronicleUstron,
    'KronikaWystawCzasowych': ChronicleTemporaryExhibitions,
    'KronikaWydarzeńMuzealnych': ChronicleMuseumEvents,
    'Glinioki': EducationGlinoki,
    museum_educational_movies: EducationIndustriada,
    'Kalendarz': EducationCalendar,
    'Najbliższewydarzenia': EducationUpcomingEvents,
    'Turystykaindustrialna': TourismPage,
    museum_digital_archive: ArchivePage,
    museum_contact: ContactPage
};