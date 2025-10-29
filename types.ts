
export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface Conversation {
  id: string;
  customerName: string;
  lastMessage: string;
  timestamp: string;
  avatarUrl: string;
  messages: Message[];
  unreadCount: number;
}

export interface Order {
  id: string;
  customerName: string;
  address: string;
  phone: string;
  product: string;
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered';
  date: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface BotSettings {
    tone: 'Casual' | 'Formal' | 'Humorous';
    language: 'Bangla' | 'English' | 'Mixed';
    autoReplyEnabled: boolean;
}
