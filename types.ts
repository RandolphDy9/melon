
export interface ServicePackage {
  id: number;
  name: string;
  price: string;
  duration?: string;
  features: string[];
  savings?: string;
  fullDescription: string;
  icon: string;
  images: string[];
}

export interface IndividualService {
  name: string;
  price: string;
  note?: string;
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}
