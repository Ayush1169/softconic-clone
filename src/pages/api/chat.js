// pages/api/chat.js
export default function handler(req, res) {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ answer: "Invalid message format." });
  }

  const normalized = message.trim().toLowerCase();

  const faq = {
    "hello": "Hello! 👋 How can I assist you regarding Softconic?",
    "hi": "Hi there! Ask me anything about Softconic.",
    "hey": "Hey! Feel free to ask any question about our company.",

    "what is softconic": "Softconic is a technology company offering web development, mobile app development, AI/ML services, SaaS platforms, and digital transformation solutions.",
    "who are you": "I'm Softconic's virtual assistant 🤖. Ask me about our services, pricing, or anything related to our company!",
    "tell me about softconic": "Softconic is a digital agency based in Raipur. We provide modern, scalable solutions for businesses — from web and mobile apps to enterprise-grade platforms.",
    
    "what services do you offer": "We offer Web Development, Mobile App Development, ERP/CRM Solutions, Digital Marketing, UI/UX Design, SaaS Development, and AI/ML services.",
    "where are you located": "Our office is located in Raipur, India.",
    "how to contact": "You can use the 'Get A Quote' button on our site or visit the Contact page to connect with us.",
    "how to get a quote": "Click the 'Get A Quote' button at the top right or fill in your details on the Contact page.",
    "what technologies do you use": "We use React, Node.js, Python, Next.js, MongoDB, MySQL, AWS, Azure, and more depending on project needs.",
    "do you provide support": "Yes! Our team offers complete project support, bug fixes, maintenance, and guidance after delivery.",
    "how long does a project take": "Typically between 4 to 12 weeks depending on the complexity and features of the project."
  };

  // Find match or default
  const answer = faq[normalized] || 
    "Sorry, I didn’t get that. Try asking things like 'what is Softconic', 'services you offer', or 'how to contact you'.";

  return res.status(200).json({ answer });
}
