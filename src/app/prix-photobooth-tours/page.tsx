import { permanentRedirect } from 'next/navigation';

// Cette page redirige de manière permanente vers /tarifs.
// La redirection 301 principale est gérée dans next.config.js.
// Ce composant sert de garde supplémentaire au niveau App Router.
export default function PrixPhotoboothToursPage() {
  permanentRedirect('/tarifs');
}
