import React from 'react';
import BotIcon from './icons/BotIcon';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import ChartBarIcon from './icons/ChartBarIcon';

interface LandingPageProps {
  onLogin: () => void;
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

        {/* Features Section */}
        <section id="features" className="py-20">
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

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-surface/50">
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