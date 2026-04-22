import { getDict } from '../lib/i18n';
import LandingPage from '../components/LandingPage';

export default function HomePageEN() {
    const t = getDict('en');
    return <LandingPage t={t} locale="en" aboutHref="/people/wang_hao/en" publicationHref="/en/publication" />;
}
