import { useLocation } from 'wouter';
import HomePage from './pages/HomePage.jsx';
import DocumentaryPage from './pages/DocumentaryPage.jsx';
import FictionPage from './pages/FictionPage.jsx';
import BrandedContentPage from './pages/BrandedContentPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AppLayout from './components/AppLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  const [location] = useLocation();

  let Component;

  switch (true) {
    case location === '/':
      Component = HomePage;
      break;
    case location === '/documentary':
      Component = DocumentaryPage;
      break;
    case location === '/fiction':
      Component = FictionPage;
      break;
    case location === '/branded-content':
      Component = BrandedContentPage;
      break;
    case location === '/contact':
      Component = ContactPage;
      break;
    default:
      Component = NotFoundPage;
  }

  return (
    <AppLayout>
      <Component />
    </AppLayout>
  );
}
