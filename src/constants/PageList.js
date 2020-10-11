import HomePage from '../pages/Home';
import AboutDescription from '../pages/About/Description';
import VirtualWalk from '../pages/About/VirtualWalk';
import MuseumExhibitions from '../pages/Exhibition/Museum_Exhibitions';
import TemporaryExhibitions from '../pages/Exhibition/Temporary_Exhibitions';
import EventPage from '../pages/Event';
import NewsPage from '../pages/News';
import ChronicleUstron from '../pages/Chronicle/Chronicle_Ustron';
import EducationGlinoki from '../pages/Education/Education_Glinoki';
import EducationIndustriada from '../pages/Education/Education_Industriada';
import EducationCalendar from '../pages/Education/Education_Calendar';
import EducationUpcomingEvents from '../pages/Education/Education_Upcoming_Events';
import TourismPage from '../pages/Tourism';
import ArchivePage from '../pages/Archive';
import ContactPage from '../pages/Contact';
import NewsSingle from "../pages/News/NewsSingle";
import EventSingle from "../pages/Event/EventSingle";
import PostSingle from "../pages/PostSingle";
export default {
    events_single: EventSingle,
    news_single: NewsSingle,
    post_single: PostSingle,
    museum_homepage: HomePage,
    museum_about: AboutDescription,
    museum_virtualwalk: VirtualWalk,
    museum_exhibitions: MuseumExhibitions,
    'muzeum-ustron-pl-wystawy': TemporaryExhibitions,
    museum_events: EventPage,
    museum_news: NewsPage,
    museum_chronicle: ChronicleUstron,
    'Glinioki': EducationGlinoki,
    museum_educational_movies: EducationIndustriada,
    'Kalendarz': EducationCalendar,
    'Najbliższewydarzenia': EducationUpcomingEvents,
    'Turystykaindustrialna': TourismPage,
    museum_digital_archive: ArchivePage,
    museum_contact: ContactPage
};