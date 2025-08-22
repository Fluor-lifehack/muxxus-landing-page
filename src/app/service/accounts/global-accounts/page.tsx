import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import MuxxusSectionTitle from "@/components/muxxus/MuxxusSectionTitle";
import AboutTestimonialCard from "@/components/about/AboutTestimonialCard";
import { FaGlobe, FaShieldAlt, FaClock, FaCreditCard, FaUsers, FaChartLine, FaBuilding, FaExchangeAlt, FaHandshake, FaRocket, FaCheck, FaArrowRight, FaPlay, FaDownload, FaFileAlt, FaHeadset, FaStar, FaAward, FaUsers as FaTeam, FaGlobe as FaWorld, FaShieldAlt as FaSecurity, FaRocket as FaGrowth, FaCode, FaDatabase, FaServer, FaBuilding as FaBank, FaMoneyBillWave, FaCreditCard as FaCard, FaGlobe as FaWorldMap } from "react-icons/fa";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const GlobalAccountsPage = () => {
  const heroFeatures = [
    {
      icon: FaCheck,
      text: "No setup fees"
    },
    {
      icon: FaCheck,
      text: "24/7 support"
    },
    {
      icon: FaCheck,
      text: "Global compliance"
    }
  ];

  const benefitCards = [
    {
      icon: FaBank,
      title: "Save on unnecessary bank charges",
      description: "There are no account opening fees, monthly maintenance charges, or minimum transaction requirements."
    },
    {
      icon: FaChartLine,
      title: "Streamline your global cash management",
      description: "Convert held balances to different currencies in just a few clicks and review your global transactions in a single view."
    },
    {
      icon: FaShieldAlt,
      title: "Know your funds are safe and secure",
      description: "Relax knowing that your money is secure and protected with end-to-end encryption and bank-level security."
    },
    {
      icon: FaMoneyBillWave,
      title: "Avoid costly conversion fees",
      description: "Eliminate unnecessary conversion fees by receiving payments in the same currencies that your customers pay in."
    }
  ];

  const supportedCountries = [
    "Australia", "Canada", "Denmark", "Hong Kong SAR", "Indonesia", 
    "Israel", "Mexico", "New Zealand", "Poland", "Singapore", 
    "United Arab Emirates", "United Kingdom", "United States"
  ];

  const accountExample = {
    title: "AUD Global Account",
    description: "This is an example of an AUD currency account we provide in Australia.",
    capabilities: [
      "Create accounts instantly",
      "Create accounts in the name of your business",
      "Payout via Direct Debit",
      "No transaction limits"
    ],
    depositMethods: [
      {
        method: "Domestic Bank Transfers",
        timeframe: "0-1 day",
        country: "Australia"
      }
    ]
  };

  const testimonials = [
    {
      quote: "We use Muxxus for opening accounts in new markets quickly and we now have bank accounts in each of the countries we operate in. It allows us to very easily move funds from our account in the US into our other local currency accounts in various markets within seconds, and pay our partners and salaries easily.",
      author: "Charlie Bullock",
      designation: "CEO and Co-Founder, Scan.com"
    },
    {
      quote: "Muxxus provides us with flexibility and cost savings in dealing internationally. We used Muxxus to receive our recent global fundraising round and pay international suppliers and are saving at least 5% per dollar transferred versus the big banks.",
      author: "George van Dyck",
      designation: "Finance Manager, Zoomo"
    },
    {
      quote: "Muxxus saves us $40,000 annually in collections costs from our sales on Amazon, which is the majority of our sales in the U.S. market. It also allows us to 'repurpose' our international currencies. For example, if we sell in Europe we can pay European suppliers in Euros as well. There's no need to 'double convert.",
      author: "Edward Agaba",
      designation: "Controller, Dalstrong"
    },
    {
      quote: "We have contractors based in China, the US, and Europe, and our Muxxus Global Account enables us to make global payments from one simple portal. Having Muxxus as our global trusted partner means we can spend less time on the phone to the bank, and more time instead focusing on growing our business both domestically and internationally.",
      author: "Richard Li",
      designation: "Co-founder & CEO, July"
    }
  ];

  const faqs = [
    {
      question: "What are local currency accounts used for?",
      answer: "Local currency accounts make it easy for you to conduct your business operations in multiple currencies. They come with account numbers and banking details that allow you to easily receive funds in specific currencies. This is particularly useful if you're a global business – you'll be able to collect funds in your international customers' preferred currency and then use those proceeds to pay local expenses in that same currency. By comparison, a regular transaction account may forcibly convert funds in and out of your home currency with every transaction, incurring costly FX fees in both directions."
    },
    {
      question: "How can local currency accounts help me save on transaction fees?",
      answer: "Local currency accounts can be used to avoid unnecessary conversion fees and to save on everyday expenses. You can collect payments from your international customers in their preferred currency and then spend those proceeds later in the same currency (for example, to pay global suppliers and employees), thereby eliminating unnecessary conversion fees. You can also benefit from holding funds in a foreign currency until FX rates are favourable enough to convert these funds to your home currency."
    },
    {
      question: "Can I make Direct Debit payments from my Global Account?",
      answer: "Direct Debit payouts are now supported for USD, AUD, GBP, CAD Global Accounts located respectively in the United States, Australia, United Kingdom, and Canada. You can provide your Global Account details to pay both one-time and recurring bills such as taxes or utilities."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Utilise le composant existant */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte de gauche */}
            <div className="text-left">
              <BreadcrumbNav 
                items={[
                  { label: "Home", href: "/" },
                  { label: "Business Accounts", href: "/business-accounts" },
                  { label: "Global Accounts", href: "/service/accounts/global-accounts", isActive: true }
                ]} 
              />
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-12 mb-8 leading-tight tracking-tight">
                Open a global multi-currency account for international business payments in minutes
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Receive payments from customers in their preferred currency and say goodbye to costly conversion and transaction fees.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <CircleFillButton 
                  text="Get started" 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-base"
                />
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500 mb-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-sm text-gray-500">
                <p>I consent to receiving marketing communications from Muxxus. I can unsubscribe any time.</p>
              </div>
            </div>

            {/* Image de droite */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-lg font-medium">Hero Banner Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hassle-free Global Accounts - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <MuxxusSectionTitle 
            title="Hassle-free Global Accounts with local bank details"
            subtitle="GLOBAL ACCOUNTS"
            description="Skip the queues and tedious paperwork usually involved in setting up local currency accounts around the world. Open a multi-currency business account online and collect international payments from global customers in their preferred currency. Spend proceeds later in the same currency, eliminating unnecessary conversion fees."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefitCards.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-200">
                  <benefit.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get started with Global Accounts - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <MuxxusSectionTitle 
            title="Get started with Global Accounts"
            subtitle="SETUP PROCESS"
            description="Global Accounts function as local currency accounts in your name that come with local bank and branch codes and dedicated account numbers. You can set up Global Accounts in the majority of countries below regardless of where your business is located. They make it easy for you to receive funds domestically and internationally into your Muxxus account in multiple currencies. Get everything you need to manage money globally, without the hassle of a traditional bank."
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
            {supportedCountries.map((country, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-gray-200">
                <span className="text-gray-900 font-medium text-sm">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example AUD Global Account - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
            <MuxxusSectionTitle 
              title={accountExample.title}
              subtitle="ACCOUNT EXAMPLE"
              description={accountExample.description}
              align="left"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Account Capabilities</h4>
                <ul className="space-y-4">
                  {accountExample.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="w-5 h-5 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Deposit Methods</h4>
                {accountExample.depositMethods.map((method, index) => (
                  <div key={index} className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-lg">{method.method}</h5>
                    <p className="text-gray-600 text-base">{method.timeframe}</p>
                    <p className="text-gray-500 text-sm">{method.country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Utilise AboutTestimonialCard existant */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <MuxxusSectionTitle 
            title="Trusted by global businesses"
            subtitle="CUSTOMER SUCCESS"
            description="See how companies are scaling internationally with Muxxus"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <AboutTestimonialCard 
                  testimonial={testimonial}
                  icons={{
                    dark: "/assets/imgs/icon/quote-icon.png",
                    light: "/assets/imgs/icon/quote-icon.png"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Solutions - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <MuxxusSectionTitle 
            title="Manage Global Accounts at scale with our Platform API"
            subtitle="DEVELOPER TOOLS"
            description="Businesses rely on our API to handle their most complex requirements. Programmatically create Global Accounts, authorize Direct Debit deductions for one-time or recurring purchases, generate account statements, and more."
            align="center"
          />
          
          <div className="text-center mt-16">
            <CircleFillButton 
              text="See the docs" 
              href="/developers/docs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-base"
            />
          </div>
        </div>
      </section>

      {/* FX & Transfers - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <MuxxusSectionTitle 
            title="End-to-end global money management"
            subtitle="FX & TRANSFERS"
            description="When a payment gets sent to one of your Global Accounts, those funds are instantly visible to you in your Muxxus Wallet. Easily convert currencies at interbank rates and use Muxxus FX & Transfers to make fast, cost-effective domestic and international transfers."
            align="center"
          />
          
          <div className="text-center mt-16">
            <CircleFillButton 
              text="Learn more" 
              href="/service/accounts/fx-transfers"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-base"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <MuxxusSectionTitle 
            title="Frequently asked questions"
            subtitle="FAQ"
            align="center"
          />
          
          <div className="space-y-12 mt-16">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 leading-tight">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="/faq" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
              See more FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Utilise MuxxusSectionTitle */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MuxxusSectionTitle 
            title="Create a Muxxus account today"
            subtitle="GET STARTED"
            description="Join thousands of businesses using Muxxus to manage their global finances."
            align="center"
            className="text-white"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <CircleFillButton 
              text="Get started" 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-base"
            />
          </div>
          <p className="text-blue-100 text-sm">
            I consent to receiving marketing communications from Muxxus. I can unsubscribe any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default GlobalAccountsPage;
