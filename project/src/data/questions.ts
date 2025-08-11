import { Question } from '../types/quiz';

export const questionBank: Record<string, Record<string, Question[]>> = {
  'web-development': {
    'beginner': [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
      },
      {
        id: 2,
        question: "Which HTML tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<heading>", "<header>"],
        correctAnswer: 1,
        explanation: "<h1> is used for the largest heading, with <h6> being the smallest."
      },
      {
        id: 3,
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 2,
        explanation: "CSS stands for Cascading Style Sheets, used for styling HTML documents."
      },
      {
        id: 4,
        question: "Which CSS property is used to change the text color?",
        options: ["color", "text-color", "font-color", "text-style"],
        correctAnswer: 0,
        explanation: "The 'color' property is used to set the color of text in CSS."
      },
      {
        id: 5,
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        correctAnswer: 1,
        explanation: "<br> is the correct HTML element for inserting a line break."
      },
      {
        id: 6,
        question: "Which attribute is used to provide a unique identifier for an HTML element?",
        options: ["class", "id", "name", "unique"],
        correctAnswer: 1,
        explanation: "The 'id' attribute provides a unique identifier for an HTML element."
      },
      {
        id: 7,
        question: "What is the default display value of a <div> element?",
        options: ["inline", "block", "inline-block", "flex"],
        correctAnswer: 1,
        explanation: "The default display value of a <div> element is 'block'."
      },
      {
        id: 8,
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "alt", "src", "longdesc"],
        correctAnswer: 1,
        explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed."
      },
      {
        id: 9,
        question: "What does JS stand for in web development?",
        options: ["Java Source", "JavaScript", "JSON Script", "Java Style"],
        correctAnswer: 1,
        explanation: "JS stands for JavaScript, a programming language used for web development."
      },
      {
        id: 10,
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["/*", "//", "#", "<!--"],
        correctAnswer: 1,
        explanation: "// is used for single-line comments in JavaScript."
      }
    ],
    'level-1': [
      {
        id: 11,
        question: "What is the purpose of the CSS box model?",
        options: ["To create animations", "To define layout and spacing", "To handle events", "To store data"],
        correctAnswer: 1,
        explanation: "The CSS box model defines how elements are laid out and spaced on a webpage."
      },
      {
        id: 12,
        question: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["append()", "push()", "add()", "insert()"],
        correctAnswer: 1,
        explanation: "The push() method adds one or more elements to the end of an array."
      },
      {
        id: 13,
        question: "What is a closure in JavaScript?",
        options: ["A loop structure", "A function with access to outer variables", "A data type", "An error handling mechanism"],
        correctAnswer: 1,
        explanation: "A closure is a function that has access to variables in its outer lexical scope."
      },
      {
        id: 14,
        question: "Which CSS property is used to create a flexbox container?",
        options: ["flex-container", "display: flex", "flex-box", "container: flex"],
        correctAnswer: 1,
        explanation: "display: flex is used to create a flexbox container."
      },
      {
        id: 15,
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: ["No difference", "=== checks type and value, == only value", "== is faster", "=== is deprecated"],
        correctAnswer: 1,
        explanation: "=== performs strict equality checking both type and value, while == performs type coercion."
      },
      {
        id: 16,
        question: "What is the DOM in web development?",
        options: ["Data Object Model", "Document Object Model", "Dynamic Object Model", "Display Object Model"],
        correctAnswer: 1,
        explanation: "DOM stands for Document Object Model, representing the structure of HTML documents."
      },
      {
        id: 17,
        question: "Which HTTP method is typically used to retrieve data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 2,
        explanation: "GET method is used to retrieve data from a server."
      },
      {
        id: 18,
        question: "What is the purpose of semantic HTML?",
        options: ["Faster loading", "Better SEO and accessibility", "Smaller file size", "Cross-browser compatibility"],
        correctAnswer: 1,
        explanation: "Semantic HTML improves SEO, accessibility, and code readability."
      },
      {
        id: 19,
        question: "Which CSS unit is relative to the viewport width?",
        options: ["px", "em", "vw", "rem"],
        correctAnswer: 2,
        explanation: "vw (viewport width) is relative to 1% of the viewport width."
      },
      {
        id: 20,
        question: "What is event bubbling in JavaScript?",
        options: ["Error propagation", "Event moving up the DOM tree", "Animation effect", "Memory management"],
        correctAnswer: 1,
        explanation: "Event bubbling is when an event propagates from child to parent elements in the DOM."
      }
    ],
    'level-2': [
      {
        id: 21,
        question: "What is the Virtual DOM in React?",
        options: ["A database", "A lightweight copy of the real DOM", "A server component", "A CSS framework"],
        correctAnswer: 1,
        explanation: "Virtual DOM is a lightweight JavaScript representation of the real DOM used for efficient updates."
      },
      {
        id: 22,
        question: "Which design pattern is commonly used in modern JavaScript frameworks?",
        options: ["Singleton", "Observer", "Component-based architecture", "Factory"],
        correctAnswer: 2,
        explanation: "Component-based architecture is fundamental to modern JavaScript frameworks."
      },
      {
        id: 23,
        question: "What is the purpose of webpack in modern web development?",
        options: ["Database management", "Module bundling", "Server hosting", "Code execution"],
        correctAnswer: 1,
        explanation: "Webpack is a module bundler that packages JavaScript modules and assets."
      },
      {
        id: 24,
        question: "What is Progressive Web App (PWA)?",
        options: ["A mobile app", "Web app with native app features", "A server technology", "A database system"],
        correctAnswer: 1,
        explanation: "PWA is a web application that uses modern web capabilities to provide native app-like experience."
      },
      {
        id: 25,
        question: "What is the difference between Server Side Rendering and Client Side Rendering?",
        options: ["No difference", "SSR renders on server, CSR renders on client", "SSR is faster", "CSR is more secure"],
        correctAnswer: 1,
        explanation: "SSR renders pages on the server before sending to client, CSR renders in the browser."
      },
      {
        id: 26,
        question: "What is GraphQL?",
        options: ["A database", "A query language for APIs", "A CSS framework", "A JavaScript library"],
        correctAnswer: 1,
        explanation: "GraphQL is a query language and runtime for APIs that provides efficient data fetching."
      },
      {
        id: 27,
        question: "What are Web Components?",
        options: ["React components", "Reusable custom HTML elements", "CSS modules", "JavaScript functions"],
        correctAnswer: 1,
        explanation: "Web Components are reusable custom HTML elements with encapsulated functionality."
      },
      {
        id: 28,
        question: "What is the purpose of Service Workers?",
        options: ["Database queries", "Background scripts for PWAs", "CSS processing", "DOM manipulation"],
        correctAnswer: 1,
        explanation: "Service Workers are background scripts that enable features like offline functionality and push notifications."
      },
      {
        id: 29,
        question: "What is Tree Shaking in JavaScript bundling?",
        options: ["Error handling", "Removing unused code", "Code minification", "Performance testing"],
        correctAnswer: 1,
        explanation: "Tree shaking is the process of eliminating unused code from the final bundle."
      },
      {
        id: 30,
        question: "What is the difference between REST and GraphQL APIs?",
        options: ["No difference", "REST uses multiple endpoints, GraphQL uses single endpoint", "GraphQL is older", "REST is more secure"],
        correctAnswer: 1,
        explanation: "REST typically uses multiple endpoints for different resources, while GraphQL uses a single endpoint with flexible queries."
      }
    ]
  },
  'digital-marketing': {
    'beginner': [
      {
        id: 101,
        question: "What does SEO stand for?",
        options: ["Search Engine Optimization", "Social Engine Optimization", "Search Engine Operation", "Social Engine Operation"],
        correctAnswer: 0,
        explanation: "SEO stands for Search Engine Optimization, the practice of optimizing websites for search engines."
      },
      {
        id: 102,
        question: "Which platform is primarily used for professional networking?",
        options: ["Facebook", "Instagram", "LinkedIn", "TikTok"],
        correctAnswer: 2,
        explanation: "LinkedIn is the primary platform for professional networking and business connections."
      },
      {
        id: 103,
        question: "What is a conversion in digital marketing?",
        options: ["Website visitors", "Desired action taken by user", "Social media followers", "Email subscribers"],
        correctAnswer: 1,
        explanation: "A conversion is when a user completes a desired action, such as making a purchase or signing up."
      },
      {
        id: 104,
        question: "What does CTR stand for?",
        options: ["Cost To Revenue", "Click Through Rate", "Customer Target Rate", "Content Transfer Rate"],
        correctAnswer: 1,
        explanation: "CTR stands for Click Through Rate, measuring the percentage of people who click on a link."
      },
      {
        id: 105,
        question: "Which type of content is most engaging on social media?",
        options: ["Text only", "Images", "Videos", "Links"],
        correctAnswer: 2,
        explanation: "Videos typically generate the highest engagement rates on social media platforms."
      },
      {
        id: 106,
        question: "What is the primary goal of content marketing?",
        options: ["Direct sales", "Brand awareness and engagement", "Website traffic only", "Social media followers"],
        correctAnswer: 1,
        explanation: "Content marketing primarily aims to build brand awareness, engage audiences, and establish trust."
      },
      {
        id: 107,
        question: "What does PPC stand for in digital advertising?",
        options: ["Pay Per Click", "Price Per Customer", "Pay Per Customer", "Price Per Click"],
        correctAnswer: 0,
        explanation: "PPC stands for Pay Per Click, an advertising model where advertisers pay for each click."
      },
      {
        id: 108,
        question: "Which metric measures the cost to acquire a new customer?",
        options: ["CPM", "CPC", "CAC", "ROI"],
        correctAnswer: 2,
        explanation: "CAC (Customer Acquisition Cost) measures the cost to acquire a new customer."
      },
      {
        id: 109,
        question: "What is email marketing primarily used for?",
        options: ["One-time promotions only", "Building relationships and nurturing leads", "Spam distribution", "Technical support"],
        correctAnswer: 1,
        explanation: "Email marketing is primarily used for building relationships, nurturing leads, and maintaining customer engagement."
      },
      {
        id: 110,
        question: "Which social media platform is best for visual content?",
        options: ["Twitter", "LinkedIn", "Instagram", "Reddit"],
        correctAnswer: 2,
        explanation: "Instagram is specifically designed for visual content sharing and performs best with high-quality images and videos."
      }
    ],
    'level-1': [
      {
        id: 111,
        question: "What is a marketing funnel?",
        options: ["Website design tool", "Customer journey from awareness to purchase", "Social media strategy", "Email template"],
        correctAnswer: 1,
        explanation: "A marketing funnel represents the customer journey from initial awareness to final purchase and beyond."
      },
      {
        id: 112,
        question: "What is remarketing in digital advertising?",
        options: ["Creating new markets", "Targeting previous website visitors", "Market research", "Competitive analysis"],
        correctAnswer: 1,
        explanation: "Remarketing involves targeting ads to people who have previously visited your website or interacted with your brand."
      },
      {
        id: 113,
        question: "What is A/B testing in digital marketing?",
        options: ["Testing two different versions", "Alphabetical testing", "Advanced testing", "Automated testing"],
        correctAnswer: 0,
        explanation: "A/B testing compares two versions of a marketing element to determine which performs better."
      },
      {
        id: 114,
        question: "What does ROAS stand for?",
        options: ["Return on Advertising Spend", "Rate of Advertising Success", "Revenue on Advertising Sales", "Return on Annual Sales"],
        correctAnswer: 0,
        explanation: "ROAS stands for Return on Advertising Spend, measuring revenue generated per dollar spent on advertising."
      },
      {
        id: 115,
        question: "What is the difference between organic and paid social media?",
        options: ["No difference", "Organic is free content, paid is advertising", "Organic is better", "Paid is cheaper"],
        correctAnswer: 1,
        explanation: "Organic social media refers to free content posted naturally, while paid involves advertising spend."
      },
      {
        id: 116,
        question: "What is influencer marketing?",
        options: ["Celebrity endorsements only", "Partnering with social media influencers", "Email marketing", "Content creation"],
        correctAnswer: 1,
        explanation: "Influencer marketing involves partnering with social media influencers to promote products or services."
      },
      {
        id: 117,
        question: "What is programmatic advertising?",
        options: ["Manual ad buying", "Automated ad buying using algorithms", "Social media advertising", "Email advertising"],
        correctAnswer: 1,
        explanation: "Programmatic advertising uses automated technology and algorithms to buy and place ads in real-time."
      },
      {
        id: 118,
        question: "What is customer lifetime value (CLV)?",
        options: ["One-time purchase value", "Total value customer brings over relationship", "Monthly revenue", "Daily active users"],
        correctAnswer: 1,
        explanation: "CLV represents the total revenue a customer is expected to generate throughout their relationship with the business."
      },
      {
        id: 119,
        question: "What is marketing automation?",
        options: ["Automated customer service", "Software that automates marketing tasks", "Social media bots", "Automatic payments"],
        correctAnswer: 1,
        explanation: "Marketing automation uses software to automate repetitive marketing tasks like email campaigns and social media posting."
      },
      {
        id: 120,
        question: "What is the purpose of landing pages?",
        options: ["Website homepage", "Specific conversion-focused pages", "Contact pages", "Blog posts"],
        correctAnswer: 1,
        explanation: "Landing pages are designed specifically to convert visitors by focusing on a single call-to-action."
      }
    ],
    'level-2': [
      {
        id: 121,
        question: "What is attribution modeling in digital marketing?",
        options: ["Content attribution", "Crediting touchpoints in customer journey", "Attribution errors", "Content creation"],
        correctAnswer: 1,
        explanation: "Attribution modeling determines which touchpoints in the customer journey receive credit for conversions."
      },
      {
        id: 122,
        question: "What is omnichannel marketing?",
        options: ["Single channel focus", "Integrated experience across all channels", "Online-only marketing", "Offline marketing only"],
        correctAnswer: 1,
        explanation: "Omnichannel marketing provides a seamless, integrated customer experience across all marketing channels."
      },
      {
        id: 123,
        question: "What is dynamic pricing in e-commerce?",
        options: ["Fixed pricing", "Prices that change based on demand/competition", "Discount pricing", "Premium pricing"],
        correctAnswer: 1,
        explanation: "Dynamic pricing adjusts prices in real-time based on factors like demand, competition, and customer behavior."
      },
      {
        id: 124,
        question: "What is predictive analytics in marketing?",
        options: ["Historical reporting", "Using data to predict future outcomes", "Social media analytics", "Website analytics"],
        correctAnswer: 1,
        explanation: "Predictive analytics uses historical data and machine learning to forecast future marketing outcomes."
      },
      {
        id: 125,
        question: "What is customer segmentation?",
        options: ["Dividing customers into groups", "Customer service divisions", "Product categories", "Market research"],
        correctAnswer: 0,
        explanation: "Customer segmentation divides customers into distinct groups based on shared characteristics for targeted marketing."
      },
      {
        id: 126,
        question: "What is marketing mix modeling (MMM)?",
        options: ["Social media mixing", "Statistical analysis of marketing impact", "Content mixing", "Channel mixing"],
        correctAnswer: 1,
        explanation: "MMM uses statistical analysis to measure the impact of various marketing channels on business outcomes."
      },
      {
        id: 127,
        question: "What is real-time personalization?",
        options: ["Static personalization", "Dynamic content based on user behavior", "Email personalization", "Name personalization"],
        correctAnswer: 1,
        explanation: "Real-time personalization dynamically customizes content and experiences based on current user behavior and context."
      },
      {
        id: 128,
        question: "What is programmatic SEO?",
        options: ["Manual SEO", "Automated SEO at scale", "Social media SEO", "Local SEO"],
        correctAnswer: 1,
        explanation: "Programmatic SEO uses automation and data to create and optimize large numbers of web pages for search engines."
      },
      {
        id: 129,
        question: "What is cohort analysis in marketing?",
        options: ["Individual analysis", "Group behavior analysis over time", "Competitor analysis", "Market analysis"],
        correctAnswer: 1,
        explanation: "Cohort analysis tracks the behavior of specific groups of customers over time to identify patterns and trends."
      },
      {
        id: 130,
        question: "What is marketing attribution decay?",
        options: ["Attribution increases over time", "Attribution decreases over time", "Constant attribution", "No attribution"],
        correctAnswer: 1,
        explanation: "Attribution decay gives less credit to touchpoints that occurred further back in the customer journey."
      }
    ]
  },
  // Add simplified question sets for other courses
  'blockchain': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 200 + i + 1,
      question: `Blockchain beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for blockchain beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 210 + i + 1,
      question: `Blockchain level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for blockchain level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 220 + i + 1,
      question: `Blockchain level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for blockchain level-2 question ${i + 1}.`
    }))
  },
  'cybersecurity': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 300 + i + 1,
      question: `Cybersecurity beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for cybersecurity beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 310 + i + 1,
      question: `Cybersecurity level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for cybersecurity level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 320 + i + 1,
      question: `Cybersecurity level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for cybersecurity level-2 question ${i + 1}.`
    }))
  },
  'ai': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 400 + i + 1,
      question: `AI beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for AI beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 410 + i + 1,
      question: `AI level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for AI level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 420 + i + 1,
      question: `AI level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for AI level-2 question ${i + 1}.`
    }))
  },
  'iot': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 500 + i + 1,
      question: `IoT beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for IoT beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 510 + i + 1,
      question: `IoT level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for IoT level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 520 + i + 1,
      question: `IoT level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for IoT level-2 question ${i + 1}.`
    }))
  },
  'cloud-computing': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 600 + i + 1,
      question: `Cloud Computing beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Cloud Computing beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 610 + i + 1,
      question: `Cloud Computing level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Cloud Computing level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 620 + i + 1,
      question: `Cloud Computing level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Cloud Computing level-2 question ${i + 1}.`
    }))
  },
  'machine-learning': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 700 + i + 1,
      question: `Machine Learning beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Machine Learning beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 710 + i + 1,
      question: `Machine Learning level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Machine Learning level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 720 + i + 1,
      question: `Machine Learning level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Machine Learning level-2 question ${i + 1}.`
    }))
  },
  'data-science': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 800 + i + 1,
      question: `Data Science beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Data Science beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 810 + i + 1,
      question: `Data Science level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Data Science level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 820 + i + 1,
      question: `Data Science level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Data Science level-2 question ${i + 1}.`
    }))
  },
  'big-data': {
    'beginner': Array.from({length: 10}, (_, i) => ({
      id: 900 + i + 1,
      question: `Big Data Analytics beginner question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Big Data Analytics beginner question ${i + 1}.`
    })),
    'level-1': Array.from({length: 10}, (_, i) => ({
      id: 910 + i + 1,
      question: `Big Data Analytics level-1 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Big Data Analytics level-1 question ${i + 1}.`
    })),
    'level-2': Array.from({length: 10}, (_, i) => ({
      id: 920 + i + 1,
      question: `Big Data Analytics level-2 question ${i + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Big Data Analytics level-2 question ${i + 1}.`
    }))
  }
};