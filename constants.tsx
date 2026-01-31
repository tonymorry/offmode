
import { ColorVariant, Product } from './types';

export const STORE_NAME = "OFFMode";

export const VIBEPOD_PRODUCT: Product = {
  id: 'vibepod-v1',
  name: 'VibePod™',
  price: 34.90,
  originalPrice: 59.00,
  description: 'Progettato per l\'essenziale. Un ritorno alla musica pura, senza il rumore del mondo digitale.',
  colors: [
    { name: ColorVariant.BLACK, hex: '#262626', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000' },
    { name: ColorVariant.WHITE, hex: '#f2f2f2', image: 'https://images.unsplash.com/photo-1572536147248-ac59a84f44c3?auto=format&fit=crop&q=80&w=1000' },
    { name: ColorVariant.PINK, hex: '#d4a373', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000' }, // Sand/Vintage Pink
    { name: ColorVariant.GREEN, hex: '#4a5d4e', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000' }
  ]
};

export const TESTIMONIALS = [
  { name: "Federico", role: "Runner", text: "La qualità costruttiva mi ha sorpreso. È solido, analogico nel feeling ma moderno nelle prestazioni." },
  { name: "Elena", role: "Studentessa", text: "Lo lascio sulla scrivania mentre studio. Niente notifiche, solo i miei album preferiti." }
];
