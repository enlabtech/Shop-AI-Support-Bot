import React, { useState } from 'react';
import BotIcon from './icons/BotIcon';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import ConnectIcon from './icons/ConnectIcon';
import UploadIcon from './icons/UploadIcon';
import RocketIcon from './icons/RocketIcon';
import FashionIcon from './icons/FashionIcon';
import ElectronicsIcon from './icons/ElectronicsIcon';
import HandmadeIcon from './icons/HandmadeIcon';
import FoodIcon from './icons/FoodIcon';
import StarIcon from './icons/StarIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';


interface LandingPageProps {
  onLogin: () => void;
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-5">
                <span className="font-semibold text-lg text-textPrimary">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><ChevronDownIcon /></span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-5 text-textSecondary">{answer}</p>
            </div>
        </div>
    )
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const features = [
    {
      icon: <ChatBubbleIcon />,
      title: 'AI Chat Engine',
      description: 'Understands Bangla, English, and mixed slang to provide instant, natural replies to customer queries 24/7.',
    },
    {
      icon: <ShoppingCartIcon />,
      title: 'Auto Order System',
      description: 'Detects purchase intent and automatically collects customer name, address, and phone number to streamline sales.',
    },
    {
      icon: <BookOpenIcon />,
      title: 'Smart FAQ Manager',
      description: 'The AI learns from your product info and FAQs to answer specific questions about delivery, price, and availability.',
    },
    {
      icon: <ChartBarIcon />,
      title: 'Analytics Dashboard',
      description: 'Track conversations, orders, and conversion rates to gain insights into your page\'s performance.',
    },
  ];
  
  const pricingTiers = [
      {
          name: 'Basic',
          price: 'Tk 999',
          period: '/month',
          features: ['1 Facebook Page', '1,000 Messages/mo', 'AI Chat Engine', 'Order Management'],
          cta: 'Start 7-Day Trial',
          primary: false,
      },
      {
          name: 'Business',
          price: 'Tk 2499',
          period: '/month',
          features: ['3 Facebook Pages', '5,000 Messages/mo', 'All Basic Features', 'Advanced Analytics', 'Priority Support'],
          cta: 'Start 7-Day Trial',
          primary: true,
      },
      {
          name: 'Agency',
          price: 'Tk 4999',
          period: '/month',
          features: ['Unlimited Pages', 'Unlimited Messages', 'All Business Features', 'White-label Options'],
          cta: 'Contact Sales',
          primary: false,
      },
  ];

  const testimonials = [
      {
          quote: "ShopAI has been a game-changer for my clothing page. It handles 90% of customer questions, so I can focus on sourcing new products. Sales have gone up by 30%!",
          name: "Sadia Afrin",
          business: "Sadia's Closet",
          avatar: "https://picsum.photos/seed/sadia-test/100/100"
      },
      {
          quote: "The auto-order feature is brilliant. No more manually writing down addresses and phone numbers. It has saved me hours of work every single day.",
          name: "Rahim Chowdhury",
          business: "Gadget Hub BD",
          avatar: "https://picsum.photos/seed/rahim-test/100/100"
      },
      {
          quote: "As a small home kitchen, replying to messages was overwhelming. Now, ShopAI answers questions about my menu and delivery, and I get confirmed orders directly. Highly recommended!",
          name: "Farida Begum",
          business: "Farida's Kitchen",
          avatar: "https://picsum.photos/seed/farida-test/100/100"
      }
  ];

  const faqs = [
      {
          question: "Is it difficult to set up?",
          answer: "Not at all! You can connect your Facebook Page in just a few clicks. Our intuitive dashboard makes it easy to add your product information and FAQs. You can be up and running in less than 15 minutes."
      },
      {
          question: "Can the bot understand complex Bangla or 'Banglish'?",
          answer: "Yes! Our AI is specifically trained on a massive dataset of Bangladeshi e-commerce conversations. It understands common slang, mixed English-Bangla sentences, and various customer intents to provide natural and accurate responses."
      },
      {
          question: "What happens after my 7-day free trial ends?",
          answer: "After your trial, you can choose one of our affordable monthly plans to continue using the service. If you don't subscribe, your bot will be deactivated, but you won't lose any of your data."
      },
      {
          question: "Can I take over a conversation from the bot?",
          answer: "Absolutely. You have a full-featured inbox where you can see all conversations. You can pause the bot and jump into any chat at any time to speak with your customer directly."
      }
  ];

  return (
    <div className="bg-background text-textPrimary font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/50 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-primary/20 text-primary"><BotIcon /></div>
            <h1 className="ml-3 text-2xl font-bold text-textPrimary">ShopAI</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-textSecondary hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-textSecondary hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-textSecondary hover:text-primary transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={onLogin} className="text-primary font-semibold hover:text-primary-light transition-colors">Sign In</button>
            <button onClick={onLogin} className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-transform duration-200 hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-textPrimary leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">Automate Your Facebook Page</span>
              <br /> with Conversational AI
            </h2>
            <p className="mt-6 text-lg text-textSecondary max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
              ShopAI is a Bangla-English AI chatbot that replies to messages, answers FAQs, and takes orders instantly. Save time, increase sales, and never miss a customer again.
            </p>
            <div className="mt-8 animate-fade-in-up [animation-delay:0.4s]">
              <button onClick={onLogin} className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-transform duration-200 hover:scale-105 shadow-lg shadow-primary/20">
                Start Your 7-Day Free Trial
              </button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Get Started in 3 Simple Steps</h3>
                  <p className="mt-4 text-textSecondary max-w-xl mx-auto">Go live in minutes and let the AI do the work.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="p-5 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20"><ConnectIcon/></div>
                        <h4 className="text-xl font-bold mb-2 text-textPrimary">1. Connect Page</h4>
                        <p className="text-textSecondary">Securely connect your Facebook page with a single click.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-5 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20"><UploadIcon/></div>
                        <h4 className="text-xl font-bold mb-2 text-textPrimary">2. Add Knowledge</h4>
                        <p className="text-textSecondary">Upload your FAQs and product details for the AI to learn.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-5 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20"><RocketIcon/></div>
                        <h4 className="text-xl font-bold mb-2 text-textPrimary">3. Go Live</h4>
                        <p className="text-textSecondary">Enable the bot and watch it start handling conversations instantly.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-surface/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Everything Your Page Needs to Succeed</h3>
              <p className="mt-4 text-textSecondary max-w-xl mx-auto">From instant replies to automated orders, we've got you covered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-surface p-8 rounded-lg border border-border group hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-primary mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-textPrimary">{feature.title}</h4>
                  <p className="text-textSecondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section id="who-we-serve" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Perfect for Any Facebook Business</h3>
                  <p className="mt-4 text-textSecondary max-w-xl mx-auto">Whether you sell clothes, gadgets, or homemade food, ShopAI is for you.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                    <div className="bg-surface p-6 rounded-lg border border-border transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/10">
                        <div className="text-secondary mx-auto mb-3 w-fit"><FashionIcon/></div>
                        <h4 className="font-bold text-textPrimary">Fashion Boutiques</h4>
                    </div>
                    <div className="bg-surface p-6 rounded-lg border border-border transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/10">
                        <div className="text-secondary mx-auto mb-3 w-fit"><ElectronicsIcon/></div>
                        <h4 className="font-bold text-textPrimary">Electronics Shops</h4>
                    </div>
                    <div className="bg-surface p-6 rounded-lg border border-border transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/10">
                        <div className="text-secondary mx-auto mb-3 w-fit"><HandmadeIcon/></div>
                        <h4 className="font-bold text-textPrimary">Handmade Crafts</h4>
                    </div>
                    <div className="bg-surface p-6 rounded-lg border border-border transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/10">
                        <div className="text-secondary mx-auto mb-3 w-fit"><FoodIcon/></div>
                        <h4 className="font-bold text-textPrimary">Home Kitchens</h4>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-surface/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Loved by Businesses Across Bangladesh</h3>
                  <p className="mt-4 text-textSecondary max-w-xl mx-auto">Don't just take our word for it. Here's what our clients have to say.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-surface p-8 rounded-lg border border-border flex flex-col">
                            <div className="flex text-yellow-400 mb-4">
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <p className="text-textSecondary flex-1 mb-6">"{t.quote}"</p>
                            <div className="flex items-center">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary"/>
                                <div className="ml-4">
                                    <h5 className="font-bold text-textPrimary">{t.name}</h5>
                                    <p className="text-textSecondary text-sm">{t.business}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Choose the Perfect Plan</h3>
              <p className="mt-4 text-textSecondary max-w-xl mx-auto">Start for free, then pick a plan that fits your business as it grows.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricingTiers.map((tier) => (
                    <div key={tier.name} className={`rounded-lg border flex flex-col p-8 transition-all duration-300 ${tier.primary ? 'bg-primary border-primary-dark shadow-2xl shadow-primary/20 scale-105' : 'bg-surface border-border'}`}>
                        <h4 className={`text-2xl font-bold ${tier.primary ? 'text-white' : 'text-textPrimary'}`}>{tier.name}</h4>
                        <div className="mt-4">
                            <span className={`text-4xl font-extrabold ${tier.primary ? 'text-white' : 'text-textPrimary'}`}>{tier.price}</span>
                            <span className={tier.primary ? 'text-blue-200' : 'text-textSecondary'}>{tier.period}</span>
                        </div>
                        <ul className={`mt-6 space-y-3 flex-1 ${tier.primary ? 'text-blue-100' : 'text-textSecondary'}`}>
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <svg className={`w-5 h-5 mr-2 ${tier.primary ? 'text-white' : 'text-secondary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={onLogin} className={`w-full mt-8 py-3 font-semibold rounded-lg transition-transform duration-200 hover:scale-105 ${tier.primary ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                            {tier.cta}
                        </button>
                    </div>
                ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-surface/50">
             <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Frequently Asked Questions</h3>
                  <p className="mt-4 text-textSecondary max-w-xl mx-auto">Have questions? We've got answers.</p>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
             </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="bg-surface py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-textSecondary">
          <p>&copy; {new Date().getFullYear()} ShopAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;