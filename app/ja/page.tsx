import { getDict } from '../lib/i18n';
import LandingPage from '../components/LandingPage';

export default function HomePageJA() {
    const t = getDict('ja');
    return <LandingPage t={t} locale="ja" aboutHref="/people/wang_hao/ja" publicationHref="/ja/publication" />;
}
