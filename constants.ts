
import type { Conversation, Order, FAQ } from './types';

export const initialConversations: Conversation[] = [
  {
    id: 'conv1',
    customerName: 'Afrin Sultana',
    lastMessage: 'Okay vaiya, confirm korlam.',
    timestamp: '10:45 AM',
    avatarUrl: 'https://picsum.photos/seed/afrin/100/100',
    unreadCount: 1,
    messages: [
      { id: 1, text: 'Vai, ei dress ta available ase?', sender: 'user', timestamp: '10:40 AM' },
      { id: 2, text: 'Ji Apu, available! Price 1500 taka. Nite chaile bolen.', sender: 'bot', timestamp: '10:42 AM' },
      { id: 3, text: 'Okay vaiya, confirm korlam.', sender: 'user', timestamp: '10:45 AM' },
    ],
  },
  {
    id: 'conv2',
    customerName: 'Rahim Ahmed',
    lastMessage: 'Thanks for the info!',
    timestamp: 'Yesterday',
    avatarUrl: 'https://picsum.photos/seed/rahim/100/100',
    unreadCount: 0,
    messages: [
      { id: 1, text: 'How much is delivery to Chittagong?', sender: 'user', timestamp: 'Yesterday' },
      { id: 2, text: 'Sir, Chittagong e delivery charge 120 taka. 3-4 diner moddhe peye jaben.', sender: 'bot', timestamp: 'Yesterday' },
      { id: 3, text: 'Thanks for the info!', sender: 'user', timestamp: 'Yesterday' },
    ],
  },
   {
    id: 'conv3',
    customerName: 'Sadia Islam',
    lastMessage: 'Amar order ta pathano hoise?',
    timestamp: 'Yesterday',
    avatarUrl: 'https://picsum.photos/seed/sadia/100/100',
    unreadCount: 2,
    messages: [
       { id: 1, text: 'Amar order ta pathano hoise?', sender: 'user', timestamp: 'Yesterday' },
    ],
  },
];

export const initialOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Afrin Sultana',
    address: 'House 12, Road 5, Dhanmondi, Dhaka',
    phone: '01712345678',
    product: 'Blue Georgette Saree',
    status: 'Confirmed',
    date: '2024-07-28',
  },
  {
    id: 'ORD-002',
    customerName: 'Kamal Hossain',
    address: '123/B, CDA Avenue, Chittagong',
    phone: '01812345679',
    product: 'Leather Wallet',
    status: 'Shipped',
    date: '2024-07-27',
  },
  {
    id: 'ORD-003',
    customerName: 'Fatima Begum',
    address: 'Sylhet Sadar, Sylhet',
    phone: '01912345680',
    product: 'Handcrafted Jute Bag',
    status: 'Delivered',
    date: '2024-07-25',
  },
];

export const initialFAQs: FAQ[] = [
  { id: 1, question: 'Delivery charge koto?', answer: 'Dhakar moddhe delivery charge 60 taka, Dhakar baire 120 taka.' },
  { id: 2, question: 'How long does delivery take?', answer: 'Inside Dhaka it takes 2-3 days. Outside Dhaka it takes 4-5 days.' },
  { id: 3, question: 'Cash on delivery available?', answer: 'Yes, cash on delivery is available all over Bangladesh.' },
  { id: 4, question: 'Return policy ki?', answer: 'Apni 7 diner moddhe product return korte parben jodi kono defect thake.' },
];
