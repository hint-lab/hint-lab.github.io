import { getDict } from './lib/i18n';
import LandingPage from './components/LandingPage';

export default function HomePage() {
    const t = getDict('zh');
    return <LandingPage t={t} locale="zh" aboutHref="/people/wang_hao" publicationHref="/publication" />;
}
