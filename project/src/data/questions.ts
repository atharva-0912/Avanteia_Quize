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
        question: "Which HTML tag creates a clickable link?",
        options: ["<link>", "<a>", "<url>", "<href>"],
        correctAnswer: 1,
        explanation: "The <a> tag is used to create hyperlinks in HTML."
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
        question: "Which CSS property changes text color?",
        options: ["color", "text-color", "font-color", "text-style"],
        correctAnswer: 0,
        explanation: "The 'color' property is used to set the color of text in CSS."
      },
      {
        id: 5,
        question: "Which tag creates a line break in HTML?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        correctAnswer: 1,
        explanation: "<br> is the correct HTML element for inserting a line break."
      },
      {
        id: 6,
        question: "What attribute gives an HTML element a unique identifier?",
        options: ["class", "id", "name", "unique"],
        correctAnswer: 1,
        explanation: "The 'id' attribute provides a unique identifier for an HTML element."
      },
      {
        id: 7,
        question: "Which JavaScript method displays an alert box?",
        options: ["alert()", "prompt()", "confirm()", "display()"],
        correctAnswer: 1,
        explanation: "The alert() method displays an alert dialog box in JavaScript."
      },
      {
        id: 8,
        question: "Which HTML attribute provides alternative text for images?",
        options: ["title", "alt", "src", "longdesc"],
        correctAnswer: 1,
        explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed."
      },
      {
        id: 9,
        question: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "JSON Script", "Java Style"],
        correctAnswer: 1,
        explanation: "JS stands for JavaScript, a programming language used for web development."
      },
      {
        id: 10,
        question: "How do you write a single-line comment in JavaScript?",
        options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
        correctAnswer: 1,
        explanation: "// is used for single-line comments in JavaScript."
      }
    ],
    'level-1': [
      {
        id: 11,
        question: "What does the CSS box model consist of?",
        options: ["Content, padding, border, margin", "Header, body, footer", "HTML, CSS, JavaScript", "Width, height, color"],
        correctAnswer: 1,
        explanation: "The CSS box model consists of content, padding, border, and margin areas."
      },
      {
        id: 12,
        question: "Which method adds an element to the end of a JavaScript array?",
        options: ["append()", "push()", "add()", "insert()"],
        correctAnswer: 1,
        explanation: "The push() method adds one or more elements to the end of an array."
      },
      {
        id: 13,
        question: "What is event delegation in JavaScript?",
        options: ["Assigning events to multiple elements", "Using a parent element to handle child events", "Removing event listeners", "Creating custom events"],
        correctAnswer: 1,
        explanation: "Event delegation uses a parent element to handle events for its child elements."
      },
      {
        id: 14,
        question: "Which CSS property creates a flexbox container?",
        options: ["flex-container", "display: flex", "flex-box", "container: flex"],
        correctAnswer: 1,
        explanation: "display: flex is used to create a flexbox container."
      },
      {
        id: 15,
        question: "What's the difference between '==' and '===' in JavaScript?",
        options: ["No difference", "=== checks type and value, == performs type coercion", "== is faster", "=== is deprecated"],
        correctAnswer: 1,
        explanation: "=== performs strict equality checking both type and value, while == performs type coercion."
      },
      {
        id: 16,
        question: "What does DOM stand for in web development?",
        options: ["Data Object Model", "Document Object Model", "Dynamic Object Model", "Display Object Model"],
        correctAnswer: 1,
        explanation: "DOM stands for Document Object Model, representing the structure of HTML documents."
      },
      {
        id: 17,
        question: "Which HTTP method retrieves data from a server?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 2,
        explanation: "GET method is used to retrieve data from a server."
      },
      {
        id: 18,
        question: "What is the main benefit of semantic HTML?",
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
        question: "What happens during event bubbling in JavaScript?",
        options: ["Events are cancelled", "Events propagate from child to parent elements", "Events create animations", "Events are stored in memory"],
        correctAnswer: 1,
        explanation: "Event bubbling is when an event propagates from child to parent elements in the DOM."
      }
    ],
    'level-2': [
      {
        id: 21,
        question: "How does the Virtual DOM improve React performance?",
        options: ["By caching database queries", "By minimizing direct DOM manipulations through diffing", "By compressing CSS files", "By reducing server requests"],
        correctAnswer: 1,
        explanation: "Virtual DOM improves performance by calculating the minimum changes needed and updating only those parts of the real DOM."
      },
      {
        id: 22,
        question: "What is the time complexity of accessing an element in a hash table?",
        options: ["O(n)", "O(log n)", "O(1) average case", "O(n²)"],
        correctAnswer: 2,
        explanation: "Hash tables provide O(1) average case time complexity for access operations due to direct indexing."
      },
      {
        id: 23,
        question: "What is the main purpose of webpack's tree shaking?",
        options: ["Organizing file structure", "Eliminating dead code from bundles", "Optimizing images", "Managing dependencies"],
        correctAnswer: 1,
        explanation: "Tree shaking removes unused code from the final bundle, reducing file size and improving performance."
      },
      {
        id: 24,
        question: "Which technique best optimizes Critical Rendering Path?",
        options: ["Increasing server memory", "Inlining critical CSS and deferring non-critical resources", "Using more images", "Adding more JavaScript"],
        correctAnswer: 1,
        explanation: "Optimizing Critical Rendering Path involves inlining critical CSS and deferring non-critical resources to speed up initial page render."
      },
      {
        id: 25,
        question: "What is the primary advantage of Server-Side Rendering (SSR) over Client-Side Rendering (CSR)?",
        options: ["Lower server costs", "Better SEO and faster initial page load", "Easier development", "Less JavaScript needed"],
        correctAnswer: 1,
        explanation: "SSR provides better SEO and faster initial page loads by sending pre-rendered HTML to the client."
      },
      {
        id: 26,
        question: "How does GraphQL solve the N+1 query problem?",
        options: ["By using caching", "Through query batching and DataLoader pattern", "By limiting queries", "By using indexes"],
        correctAnswer: 1,
        explanation: "GraphQL uses DataLoader pattern and query batching to efficiently resolve related data and avoid N+1 queries."
      },
      {
        id: 27,
        question: "What is the purpose of Shadow DOM in Web Components?",
        options: ["Faster rendering", "Style and markup encapsulation", "Better SEO", "Reduced memory usage"],
        correctAnswer: 1,
        explanation: "Shadow DOM provides encapsulation for styles and markup, preventing external styles from affecting the component."
      },
      {
        id: 28,
        question: "How do Service Workers enable offline functionality?",
        options: ["By storing data locally", "By intercepting network requests and serving cached responses", "By compressing files", "By reducing bandwidth"],
        correctAnswer: 1,
        explanation: "Service Workers act as a proxy between the app and network, intercepting requests and serving cached responses when offline."
      },
      {
        id: 29,
        question: "What is the difference between debouncing and throttling?",
        options: ["No difference", "Debouncing delays execution until after events stop, throttling limits execution frequency", "Throttling is faster", "Debouncing uses more memory"],
        correctAnswer: 1,
        explanation: "Debouncing waits for a pause in events before executing, while throttling limits how often a function can execute."
      },
      {
        id: 30,
        question: "What is the main benefit of using a Content Delivery Network (CDN)?",
        options: ["Better security", "Reduced latency by serving content from geographically closer servers", "Lower development costs", "Easier deployment"],
        correctAnswer: 1,
        explanation: "CDNs reduce latency by caching and serving content from servers geographically closer to users."
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
  'blockchain': {
    'beginner': [
      {
        id: 201,
        question: "What is blockchain?",
        options: ["A type of database", "A distributed ledger technology", "A programming language", "A web browser"],
        correctAnswer: 1,
        explanation: "Blockchain is a distributed ledger technology that maintains a continuously growing list of records."
      },
      {
        id: 202,
        question: "What is a block in blockchain?",
        options: ["A user account", "A collection of transactions", "A mining tool", "A wallet address"],
        correctAnswer: 1,
        explanation: "A block is a collection of transactions that are bundled together and added to the blockchain."
      },
      {
        id: 203,
        question: "What is Bitcoin?",
        options: ["A company", "A cryptocurrency", "A programming language", "A database"],
        correctAnswer: 1,
        explanation: "Bitcoin is the first and most well-known cryptocurrency built on blockchain technology."
      },
      {
        id: 204,
        question: "What does 'decentralized' mean in blockchain?",
        options: ["Controlled by one entity", "No central authority", "Very expensive", "Only for experts"],
        correctAnswer: 1,
        explanation: "Decentralized means there is no single central authority controlling the network."
      },
      {
        id: 205,
        question: "What is a cryptocurrency wallet?",
        options: ["A physical wallet", "Software to store crypto keys", "A mining device", "A trading platform"],
        correctAnswer: 1,
        explanation: "A cryptocurrency wallet is software that stores your private and public keys for cryptocurrency transactions."
      },
      {
        id: 206,
        question: "What is mining in blockchain?",
        options: ["Digging for gold", "Validating transactions", "Creating wallets", "Trading coins"],
        correctAnswer: 1,
        explanation: "Mining is the process of validating transactions and adding them to the blockchain."
      },
      {
        id: 207,
        question: "What is a hash in blockchain?",
        options: ["A password", "A unique digital fingerprint", "A user name", "A transaction fee"],
        correctAnswer: 1,
        explanation: "A hash is a unique digital fingerprint that represents data in a fixed-length string."
      },
      {
        id: 208,
        question: "What makes blockchain secure?",
        options: ["Passwords", "Cryptography and consensus", "Firewalls", "Antivirus software"],
        correctAnswer: 1,
        explanation: "Blockchain security comes from cryptographic hashing and consensus mechanisms."
      },
      {
        id: 209,
        question: "What is a public key?",
        options: ["A password", "An address to receive funds", "A mining tool", "A trading strategy"],
        correctAnswer: 1,
        explanation: "A public key is like an address that others can use to send you cryptocurrency."
      },
      {
        id: 210,
        question: "What is a transaction fee?",
        options: ["Government tax", "Cost to process transactions", "Mining reward", "Wallet cost"],
        correctAnswer: 1,
        explanation: "Transaction fees are paid to miners for processing and validating transactions on the blockchain."
      }
    ],
    'level-1': [
      {
        id: 211,
        question: "What is a smart contract?",
        options: ["A legal document", "Self-executing code on blockchain", "A trading bot", "A wallet type"],
        correctAnswer: 1,
        explanation: "Smart contracts are self-executing contracts with terms directly written into code."
      },
      {
        id: 212,
        question: "What is Ethereum?",
        options: ["A Bitcoin clone", "A blockchain platform for smart contracts", "A mining pool", "A wallet provider"],
        correctAnswer: 1,
        explanation: "Ethereum is a blockchain platform that enables smart contracts and decentralized applications."
      },
      {
        id: 213,
        question: "What is proof of work?",
        options: ["Employment verification", "Consensus mechanism requiring computational work", "Smart contract type", "Wallet security"],
        correctAnswer: 1,
        explanation: "Proof of Work is a consensus mechanism where miners compete to solve computational puzzles."
      },
      {
        id: 214,
        question: "What is a fork in blockchain?",
        options: ["Eating utensil", "Change in blockchain protocol", "Mining tool", "Wallet feature"],
        correctAnswer: 1,
        explanation: "A fork is a change in the blockchain protocol that can create new versions of the blockchain."
      },
      {
        id: 215,
        question: "What is DeFi?",
        options: ["Decentralized Finance", "Digital Fiat", "Data Finance", "Distributed Files"],
        correctAnswer: 0,
        explanation: "DeFi stands for Decentralized Finance, financial services built on blockchain without intermediaries."
      },
      {
        id: 216,
        question: "What is an NFT?",
        options: ["New File Type", "Non-Fungible Token", "Network File Transfer", "Next Finance Technology"],
        correctAnswer: 1,
        explanation: "NFT stands for Non-Fungible Token, representing unique digital assets on blockchain."
      },
      {
        id: 217,
        question: "What is gas in Ethereum?",
        options: ["Fuel for cars", "Fee for executing transactions", "Mining reward", "Wallet balance"],
        correctAnswer: 1,
        explanation: "Gas is the fee required to execute transactions and smart contracts on Ethereum."
      },
      {
        id: 218,
        question: "What is a DAO?",
        options: ["Data Access Object", "Decentralized Autonomous Organization", "Digital Asset Owner", "Distributed Application Operation"],
        correctAnswer: 1,
        explanation: "DAO is a Decentralized Autonomous Organization governed by smart contracts and token holders."
      },
      {
        id: 219,
        question: "What is staking?",
        options: ["Gambling", "Locking tokens to validate transactions", "Mining with stakes", "Trading strategy"],
        correctAnswer: 1,
        explanation: "Staking involves locking cryptocurrency tokens to participate in network validation and earn rewards."
      },
      {
        id: 220,
        question: "What is a consensus mechanism?",
        options: ["Agreement protocol", "Method for network participants to agree on blockchain state", "Voting system", "Smart contract type"],
        correctAnswer: 1,
        explanation: "Consensus mechanisms are protocols that ensure all network participants agree on the blockchain state."
      }
    ],
    'level-2': [
      {
        id: 221,
        question: "What is the Byzantine Generals Problem?",
        options: ["Military strategy", "Distributed consensus challenge in unreliable networks", "Blockchain scaling issue", "Smart contract bug"],
        correctAnswer: 1,
        explanation: "The Byzantine Generals Problem addresses how to achieve consensus in a distributed network with potentially malicious actors."
      },
      {
        id: 222,
        question: "What is sharding in blockchain?",
        options: ["Breaking blocks", "Partitioning blockchain to improve scalability", "Mining technique", "Wallet security"],
        correctAnswer: 1,
        explanation: "Sharding divides the blockchain into smaller, parallel chains to improve transaction throughput and scalability."
      },
      {
        id: 223,
        question: "What is a Merkle tree?",
        options: ["Plant species", "Binary tree structure for efficient data verification", "Mining algorithm", "Wallet type"],
        correctAnswer: 1,
        explanation: "A Merkle tree is a binary tree structure that allows efficient and secure verification of large data structures."
      },
      {
        id: 224,
        question: "What is the trilemma in blockchain?",
        options: ["Three mining pools", "Trade-off between scalability, security, and decentralization", "Three consensus mechanisms", "Three wallet types"],
        correctAnswer: 1,
        explanation: "The blockchain trilemma refers to the challenge of achieving scalability, security, and decentralization simultaneously."
      },
      {
        id: 225,
        question: "What is a zero-knowledge proof?",
        options: ["No documentation", "Cryptographic method to prove knowledge without revealing information", "Empty blockchain", "Deleted transaction"],
        correctAnswer: 1,
        explanation: "Zero-knowledge proofs allow one party to prove they know information without revealing the information itself."
      },
      {
        id: 226,
        question: "What is Layer 2 scaling?",
        options: ["Second blockchain", "Off-chain solutions to improve blockchain performance", "Mining level", "Wallet layer"],
        correctAnswer: 1,
        explanation: "Layer 2 scaling solutions operate on top of the main blockchain to increase transaction speed and reduce costs."
      },
      {
        id: 227,
        question: "What is cross-chain interoperability?",
        options: ["Chain crossing", "Ability for different blockchains to communicate", "Mining across chains", "Multi-wallet support"],
        correctAnswer: 1,
        explanation: "Cross-chain interoperability enables different blockchain networks to communicate and transfer value between each other."
      },
      {
        id: 228,
        question: "What is MEV in blockchain?",
        options: ["Maximum Extractable Value", "Minimum Execution Value", "Mining Efficiency Value", "Market Exchange Value"],
        correctAnswer: 0,
        explanation: "MEV (Maximum Extractable Value) refers to the profit miners/validators can extract by reordering transactions."
      },
      {
        id: 229,
        question: "What is a rollup in blockchain scaling?",
        options: ["Rolling back transactions", "Bundling transactions off-chain then submitting to mainchain", "Rolling mining rewards", "Wallet rollover"],
        correctAnswer: 1,
        explanation: "Rollups bundle multiple transactions off-chain and submit a single proof to the main blockchain for verification."
      },
      {
        id: 230,
        question: "What is formal verification in smart contracts?",
        options: ["Legal verification", "Mathematical proof of contract correctness", "Identity verification", "Transaction verification"],
        correctAnswer: 1,
        explanation: "Formal verification uses mathematical methods to prove that smart contracts behave correctly according to specifications."
      }
    ]
  },
  'cybersecurity': {
    'beginner': [
      {
        id: 301,
        question: "What is cybersecurity?",
        options: ["Internet speed", "Protection of digital systems from threats", "Computer repair", "Software development"],
        correctAnswer: 1,
        explanation: "Cybersecurity is the practice of protecting digital systems, networks, and data from cyber threats."
      },
      {
        id: 302,
        question: "What is malware?",
        options: ["Good software", "Malicious software designed to harm systems", "System update", "Antivirus program"],
        correctAnswer: 1,
        explanation: "Malware is malicious software designed to damage, disrupt, or gain unauthorized access to systems."
      },
      {
        id: 303,
        question: "What is a strong password?",
        options: ["Your name", "Long, complex, and unique combination", "123456", "password"],
        correctAnswer: 1,
        explanation: "A strong password is long, contains mixed characters, and is unique for each account."
      },
      {
        id: 304,
        question: "What is phishing?",
        options: ["Catching fish", "Fraudulent attempt to steal sensitive information", "Network monitoring", "Data backup"],
        correctAnswer: 1,
        explanation: "Phishing is a fraudulent attempt to obtain sensitive information by disguising as trustworthy entities."
      },
      {
        id: 305,
        question: "What is two-factor authentication?",
        options: ["Two passwords", "Additional security layer requiring second verification", "Double encryption", "Two antivirus programs"],
        correctAnswer: 1,
        explanation: "Two-factor authentication adds an extra security layer by requiring a second form of verification."
      },
      {
        id: 306,
        question: "What is a firewall?",
        options: ["Fire protection", "Network security barrier", "Heating system", "Backup power"],
        correctAnswer: 1,
        explanation: "A firewall is a network security system that monitors and controls incoming and outgoing traffic."
      },
      {
        id: 307,
        question: "What should you do with suspicious emails?",
        options: ["Open all attachments", "Delete without opening", "Forward to friends", "Reply immediately"],
        correctAnswer: 1,
        explanation: "Suspicious emails should be deleted without opening attachments or clicking links."
      },
      {
        id: 308,
        question: "What is antivirus software?",
        options: ["Virus creator", "Program that detects and removes malware", "System optimizer", "Game software"],
        correctAnswer: 1,
        explanation: "Antivirus software detects, prevents, and removes malicious software from systems."
      },
      {
        id: 309,
        question: "Why are software updates important?",
        options: ["They slow down systems", "They fix security vulnerabilities", "They cost money", "They delete files"],
        correctAnswer: 1,
        explanation: "Software updates often include security patches that fix vulnerabilities and protect against threats."
      },
      {
        id: 310,
        question: "What is social engineering?",
        options: ["Building bridges", "Manipulating people to reveal information", "Network engineering", "Software engineering"],
        correctAnswer: 1,
        explanation: "Social engineering manipulates people psychologically to divulge confidential information or perform actions."
      }
    ],
    'level-1': [
      {
        id: 311,
        question: "What is encryption?",
        options: ["Data compression", "Converting data into coded form", "Data deletion", "Data copying"],
        correctAnswer: 1,
        explanation: "Encryption converts readable data into coded form to protect it from unauthorized access."
      },
      {
        id: 312,
        question: "What is a VPN?",
        options: ["Very Private Network", "Virtual Private Network", "Verified Public Network", "Visual Programming Network"],
        correctAnswer: 1,
        explanation: "VPN (Virtual Private Network) creates a secure, encrypted connection over a public network."
      },
      {
        id: 313,
        question: "What is a DDoS attack?",
        options: ["Data theft", "Distributed Denial of Service attack", "Password cracking", "Virus infection"],
        correctAnswer: 1,
        explanation: "DDoS attacks overwhelm systems with traffic from multiple sources to make services unavailable."
      },
      {
        id: 314,
        question: "What is penetration testing?",
        options: ["Breaking systems", "Authorized testing of security defenses", "Installing software", "Network setup"],
        correctAnswer: 1,
        explanation: "Penetration testing is authorized testing to find vulnerabilities in systems and networks."
      },
      {
        id: 315,
        question: "What is a security incident?",
        options: ["System upgrade", "Breach or violation of security policies", "Software installation", "Network maintenance"],
        correctAnswer: 1,
        explanation: "A security incident is any event that compromises the confidentiality, integrity, or availability of systems."
      },
      {
        id: 316,
        question: "What is risk assessment?",
        options: ["Financial planning", "Identifying and evaluating security threats", "Performance testing", "System backup"],
        correctAnswer: 1,
        explanation: "Risk assessment identifies, analyzes, and evaluates potential security threats and vulnerabilities."
      },
      {
        id: 317,
        question: "What is access control?",
        options: ["Remote control", "Managing who can access resources", "Volume control", "Temperature control"],
        correctAnswer: 1,
        explanation: "Access control manages and restricts who can view or use resources in a computing environment."
      },
      {
        id: 318,
        question: "What is digital forensics?",
        options: ["Digital photography", "Investigation of digital evidence", "Digital art", "Digital marketing"],
        correctAnswer: 1,
        explanation: "Digital forensics involves recovering and investigating digital evidence from electronic devices."
      },
      {
        id: 319,
        question: "What is a security policy?",
        options: ["Insurance policy", "Document outlining security rules and procedures", "Software license", "Hardware warranty"],
        correctAnswer: 1,
        explanation: "A security policy is a document that outlines an organization's security rules, procedures, and guidelines."
      },
      {
        id: 320,
        question: "What is intrusion detection?",
        options: ["Home security", "Monitoring systems for unauthorized access", "Software debugging", "Network optimization"],
        correctAnswer: 1,
        explanation: "Intrusion detection systems monitor networks and systems for malicious activities or policy violations."
      }
    ],
    'level-2': [
      {
        id: 321,
        question: "What is advanced persistent threat (APT)?",
        options: ["Quick attack", "Long-term targeted cyber attack", "Software bug", "Network error"],
        correctAnswer: 1,
        explanation: "APT is a prolonged and targeted cyber attack where attackers gain access and remain undetected for extended periods."
      },
      {
        id: 322,
        question: "What is zero-day vulnerability?",
        options: ["Old vulnerability", "Unknown vulnerability with no available patch", "Fixed vulnerability", "Documented vulnerability"],
        correctAnswer: 1,
        explanation: "Zero-day vulnerabilities are unknown security flaws that haven't been patched and can be exploited by attackers."
      },
      {
        id: 323,
        question: "What is threat intelligence?",
        options: ["AI system", "Information about current and emerging security threats", "Threat removal", "Intelligence agency"],
        correctAnswer: 1,
        explanation: "Threat intelligence is evidence-based knowledge about existing and emerging security threats."
      },
      {
        id: 324,
        question: "What is behavioral analysis in cybersecurity?",
        options: ["User psychology", "Monitoring patterns to detect anomalies", "Behavior modification", "Social analysis"],
        correctAnswer: 1,
        explanation: "Behavioral analysis monitors user and system behavior patterns to detect suspicious activities and potential threats."
      },
      {
        id: 325,
        question: "What is a security orchestration platform?",
        options: ["Music platform", "Automated security response coordination", "Orchestra management", "Platform security"],
        correctAnswer: 1,
        explanation: "Security orchestration platforms automate and coordinate security tools and processes for efficient threat response."
      },
      {
        id: 326,
        question: "What is threat hunting?",
        options: ["Hunting animals", "Proactively searching for hidden threats", "Threat removal", "Threat creation"],
        correctAnswer: 1,
        explanation: "Threat hunting is the proactive process of searching through networks to detect advanced threats that evade security tools."
      },
      {
        id: 327,
        question: "What is attribution in cybersecurity?",
        options: ["Giving credit", "Identifying the source of cyber attacks", "Data attribution", "Code attribution"],
        correctAnswer: 1,
        explanation: "Attribution in cybersecurity involves identifying who is responsible for a cyber attack or security incident."
      },
      {
        id: 328,
        question: "What is cyber threat modeling?",
        options: ["3D modeling", "Systematic approach to identify and assess threats", "Fashion modeling", "Data modeling"],
        correctAnswer: 1,
        explanation: "Threat modeling is a systematic approach to identify, assess, and mitigate potential security threats to systems."
      },
      {
        id: 329,
        question: "What is security information and event management (SIEM)?",
        options: ["Event planning", "Centralized security monitoring and analysis", "Information management", "Event management"],
        correctAnswer: 1,
        explanation: "SIEM systems provide real-time analysis of security alerts and events from various sources across an organization."
      },
      {
        id: 330,
        question: "What is quantum cryptography?",
        options: ["Fast encryption", "Cryptography using quantum mechanics principles", "Quantum computing", "Quantum physics"],
        correctAnswer: 1,
        explanation: "Quantum cryptography uses quantum mechanics principles to create theoretically unbreakable encryption methods."
      }
    ]
  },
  'ai': {
    'beginner': [
      {
        id: 401,
        question: "What is Artificial Intelligence?",
        options: ["Human intelligence", "Machine intelligence that mimics human thinking", "Computer hardware", "Internet technology"],
        correctAnswer: 1,
        explanation: "AI is the simulation of human intelligence in machines that are programmed to think and learn."
      },
      {
        id: 402,
        question: "What is machine learning?",
        options: ["Teaching machines manually", "Algorithms that learn from data", "Machine repair", "Computer assembly"],
        correctAnswer: 1,
        explanation: "Machine learning is a subset of AI where algorithms learn and improve from data without explicit programming."
      },
      {
        id: 403,
        question: "What is a chatbot?",
        options: ["Chat room", "AI program that simulates conversation", "Messaging app", "Social media bot"],
        correctAnswer: 1,
        explanation: "A chatbot is an AI program designed to simulate conversation with human users through text or voice."
      },
      {
        id: 404,
        question: "What is computer vision?",
        options: ["Computer screen", "AI ability to interpret visual information", "Computer graphics", "Video editing"],
        correctAnswer: 1,
        explanation: "Computer vision enables machines to interpret and understand visual information from the world."
      },
      {
        id: 405,
        question: "What is natural language processing?",
        options: ["Speaking naturally", "AI understanding human language", "Language translation", "Speech therapy"],
        correctAnswer: 1,
        explanation: "NLP enables computers to understand, interpret, and generate human language in a meaningful way."
      },
      {
        id: 406,
        question: "What is a neural network?",
        options: ["Internet network", "AI model inspired by brain neurons", "Computer network", "Social network"],
        correctAnswer: 1,
        explanation: "Neural networks are AI models inspired by the structure and function of biological neural networks."
      },
      {
        id: 407,
        question: "What is training data?",
        options: ["Exercise data", "Data used to teach AI models", "Training schedule", "Fitness data"],
        correctAnswer: 1,
        explanation: "Training data is the dataset used to teach machine learning algorithms to make predictions or decisions."
      },
      {
        id: 408,
        question: "What is an algorithm?",
        options: ["Mathematical formula", "Step-by-step instructions for solving problems", "Computer program", "Data structure"],
        correctAnswer: 1,
        explanation: "An algorithm is a set of step-by-step instructions designed to solve a specific problem or perform a task."
      },
      {
        id: 409,
        question: "What is pattern recognition?",
        options: ["Fabric patterns", "AI ability to identify patterns in data", "Design patterns", "Music patterns"],
        correctAnswer: 1,
        explanation: "Pattern recognition is the ability of AI systems to identify regularities and patterns in data."
      },
      {
        id: 410,
        question: "What is automation?",
        options: ["Manual work", "Using technology to perform tasks without human intervention", "Car manufacturing", "Time management"],
        correctAnswer: 1,
        explanation: "Automation uses technology to perform tasks with minimal human intervention, often powered by AI."
      }
    ],
    'level-1': [
      {
        id: 411,
        question: "What is supervised learning?",
        options: ["Learning with a teacher", "Learning from labeled training data", "Supervised study", "Classroom learning"],
        correctAnswer: 1,
        explanation: "Supervised learning uses labeled training data to learn the mapping between inputs and desired outputs."
      },
      {
        id: 412,
        question: "What is unsupervised learning?",
        options: ["Learning alone", "Finding patterns in data without labels", "Unsupervised children", "Independent study"],
        correctAnswer: 1,
        explanation: "Unsupervised learning finds hidden patterns in data without using labeled examples."
      },
      {
        id: 413,
        question: "What is deep learning?",
        options: ["Learning deeply", "Neural networks with multiple layers", "Ocean learning", "Intensive study"],
        correctAnswer: 1,
        explanation: "Deep learning uses neural networks with multiple layers to learn complex patterns in data."
      },
      {
        id: 414,
        question: "What is reinforcement learning?",
        options: ["Strengthening learning", "Learning through rewards and penalties", "Reinforced materials", "Strong learning"],
        correctAnswer: 1,
        explanation: "Reinforcement learning trains agents to make decisions by learning from rewards and penalties."
      },
      {
        id: 415,
        question: "What is overfitting in machine learning?",
        options: ["Perfect fit", "Model memorizes training data but fails on new data", "Tight clothing", "Over-exercising"],
        correctAnswer: 1,
        explanation: "Overfitting occurs when a model learns training data too well but performs poorly on new, unseen data."
      },
      {
        id: 416,
        question: "What is feature engineering?",
        options: ["Engineering features", "Selecting and transforming input variables", "Product features", "Software features"],
        correctAnswer: 1,
        explanation: "Feature engineering involves selecting, modifying, or creating input variables to improve model performance."
      },
      {
        id: 417,
        question: "What is cross-validation?",
        options: ["Double-checking", "Technique to assess model performance", "Cross-examination", "Validation crossing"],
        correctAnswer: 1,
        explanation: "Cross-validation is a technique to evaluate how well a model will generalize to new data."
      },
      {
        id: 418,
        question: "What is a decision tree?",
        options: ["Tree for decisions", "Model that makes decisions using tree-like structure", "Family tree", "Christmas tree"],
        correctAnswer: 1,
        explanation: "A decision tree is a model that makes predictions by following a tree-like structure of decisions."
      },
      {
        id: 419,
        question: "What is clustering?",
        options: ["Grouping together", "Grouping similar data points", "Computer clustering", "Social clustering"],
        correctAnswer: 1,
        explanation: "Clustering is an unsupervised learning technique that groups similar data points together."
      },
      {
        id: 420,
        question: "What is bias in AI?",
        options: ["Personal opinion", "Systematic errors in AI predictions", "Biased people", "Unfair treatment"],
        correctAnswer: 1,
        explanation: "Bias in AI refers to systematic errors or unfairness in AI model predictions or decisions."
      }
    ],
    'level-2': [
      {
        id: 421,
        question: "What is a Generative Adversarial Network (GAN)?",
        options: ["Gaming network", "Two neural networks competing to generate realistic data", "Adversarial gaming", "Network security"],
        correctAnswer: 1,
        explanation: "GANs consist of two neural networks competing: a generator creates fake data and a discriminator tries to detect it."
      },
      {
        id: 422,
        question: "What is transfer learning?",
        options: ["Transferring files", "Using pre-trained models for new tasks", "Learning transfer", "Data transfer"],
        correctAnswer: 1,
        explanation: "Transfer learning applies knowledge gained from one task to improve learning on a related task."
      },
      {
        id: 423,
        question: "What is attention mechanism in neural networks?",
        options: ["Paying attention", "Focusing on relevant parts of input data", "Attention disorder", "Concentration technique"],
        correctAnswer: 1,
        explanation: "Attention mechanisms allow models to focus on relevant parts of input when making predictions."
      },
      {
        id: 424,
        question: "What is explainable AI (XAI)?",
        options: ["Easy AI", "AI systems that provide understandable explanations", "Explaining AI", "AI explanation"],
        correctAnswer: 1,
        explanation: "Explainable AI creates models that can provide clear, understandable explanations for their decisions."
      },
      {
        id: 425,
        question: "What is federated learning?",
        options: ["Federal learning", "Training models across decentralized data", "Federation training", "Government learning"],
        correctAnswer: 1,
        explanation: "Federated learning trains machine learning models across decentralized data without centralizing the data."
      },
      {
        id: 426,
        question: "What is adversarial training?",
        options: ["Competitive training", "Training models to resist adversarial attacks", "Adversarial behavior", "Combat training"],
        correctAnswer: 1,
        explanation: "Adversarial training improves model robustness by training on adversarially perturbed examples."
      },
      {
        id: 427,
        question: "What is meta-learning?",
        options: ["Learning about learning", "Learning to learn new tasks quickly", "Metadata learning", "Meta information"],
        correctAnswer: 1,
        explanation: "Meta-learning enables models to quickly adapt to new tasks with minimal training data."
      },
      {
        id: 428,
        question: "What is neural architecture search?",
        options: ["Searching networks", "Automatically designing neural network architectures", "Architecture search", "Network search"],
        correctAnswer: 1,
        explanation: "Neural architecture search automatically discovers optimal neural network architectures for specific tasks."
      },
      {
        id: 429,
        question: "What is continual learning?",
        options: ["Continuous learning", "Learning new tasks without forgetting old ones", "Lifelong learning", "Ongoing education"],
        correctAnswer: 1,
        explanation: "Continual learning enables AI systems to learn new tasks sequentially without forgetting previously learned tasks."
      },
      {
        id: 430,
        question: "What is few-shot learning?",
        options: ["Quick learning", "Learning from very few examples", "Short learning", "Limited learning"],
        correctAnswer: 1,
        explanation: "Few-shot learning enables models to learn new concepts from just a few training examples."
      }
    ]
  },
  'iot': {
    'beginner': [
      {
        id: 501,
        question: "What does IoT stand for?",
        options: ["Internet of Things", "Internet of Technology", "Internal of Things", "International of Technology"],
        correctAnswer: 0,
        explanation: "IoT stands for Internet of Things, referring to interconnected devices that can communicate over the internet."
      },
      {
        id: 502,
        question: "What is a smart home?",
        options: ["Intelligent house", "Home with connected devices", "Expensive house", "Modern house"],
        correctAnswer: 1,
        explanation: "A smart home uses IoT devices to automate and remotely control home systems like lighting, heating, and security."
      },
      {
        id: 503,
        question: "What is a sensor in IoT?",
        options: ["Censorship device", "Device that detects and measures physical properties", "Security device", "Communication device"],
        correctAnswer: 1,
        explanation: "Sensors in IoT detect and measure physical properties like temperature, humidity, or motion."
      },
      {
        id: 504,
        question: "What is connectivity in IoT?",
        options: ["Connection speed", "Ability of devices to communicate", "Internet connection", "Device connection"],
        correctAnswer: 1,
        explanation: "Connectivity in IoT refers to the ability of devices to communicate with each other and the internet."
      },
      {
        id: 505,
        question: "What is a wearable device?",
        options: ["Clothing", "Technology worn on the body", "Portable device", "Mobile device"],
        correctAnswer: 1,
        explanation: "Wearable devices are IoT technologies designed to be worn on the body, like smartwatches or fitness trackers."
      },
      {
        id: 506,
        question: "What is automation in IoT?",
        options: ["Manual control", "Automatic operation without human intervention", "Car automation", "Factory automation"],
        correctAnswer: 1,
        explanation: "IoT automation enables devices to operate automatically based on predefined conditions or sensor data."
      },
      {
        id: 507,
        question: "What is remote monitoring?",
        options: ["TV remote", "Observing systems from a distance", "Remote work", "Distance learning"],
        correctAnswer: 1,
        explanation: "Remote monitoring allows users to observe and track IoT devices and systems from anywhere via internet connection."
      },
      {
        id: 508,
        question: "What is data collection in IoT?",
        options: ["Collecting coins", "Gathering information from connected devices", "Data storage", "Data analysis"],
        correctAnswer: 1,
        explanation: "IoT data collection involves gathering information from sensors and devices for analysis and decision-making."
      },
      {
        id: 509,
        question: "What is a smart city?",
        options: ["Intelligent people", "City using IoT for efficient services", "Modern city", "Digital city"],
        correctAnswer: 1,
        explanation: "A smart city uses IoT technology to improve urban services like traffic management, energy efficiency, and public safety."
      },
      {
        id: 510,
        question: "What is device management in IoT?",
        options: ["Managing employees", "Controlling and maintaining IoT devices", "Device repair", "Device sales"],
        correctAnswer: 1,
        explanation: "IoT device management involves monitoring, controlling, and maintaining connected devices remotely."
      }
    ],
    'level-1': [
      {
        id: 511,
        question: "What are IoT protocols?",
        options: ["Rules for behavior", "Communication standards for IoT devices", "Security protocols", "Network protocols"],
        correctAnswer: 1,
        explanation: "IoT protocols are communication standards that define how IoT devices connect and exchange data."
      },
      {
        id: 512,
        question: "What is MQTT?",
        options: ["Message Query Transfer Technology", "Message Queuing Telemetry Transport", "Multiple Query Transfer Tool", "Message Quality Transfer Type"],
        correctAnswer: 1,
        explanation: "MQTT is a lightweight messaging protocol designed for IoT devices with limited bandwidth and power."
      },
      {
        id: 513,
        question: "What is edge computing in IoT?",
        options: ["Computing at the edge", "Processing data near the source", "Edge detection", "Boundary computing"],
        correctAnswer: 1,
        explanation: "Edge computing processes data closer to IoT devices rather than sending everything to the cloud."
      },
      {
        id: 514,
        question: "What is IoT security?",
        options: ["Physical security", "Protecting IoT devices and data from threats", "Security guards", "Building security"],
        correctAnswer: 1,
        explanation: "IoT security involves protecting connected devices, networks, and data from cyber threats and unauthorized access."
      },
      {
        id: 515,
        question: "What is device provisioning?",
        options: ["Providing devices", "Setting up and configuring new IoT devices", "Device supply", "Device distribution"],
        correctAnswer: 1,
        explanation: "Device provisioning is the process of setting up and configuring new IoT devices for network connectivity."
      },
      {
        id: 516,
        question: "What is IoT analytics?",
        options: ["Device analysis", "Analyzing data from IoT devices for insights", "Network analysis", "Performance analysis"],
        correctAnswer: 1,
        explanation: "IoT analytics involves processing and analyzing data collected from IoT devices to gain actionable insights."
      },
      {
        id: 517,
        question: "What is interoperability in IoT?",
        options: ["Device cooperation", "Ability of different IoT systems to work together", "System integration", "Device compatibility"],
        correctAnswer: 1,
        explanation: "Interoperability ensures different IoT devices and systems can communicate and work together effectively."
      },
      {
        id: 518,
        question: "What is scalability in IoT?",
        options: ["Device size", "Ability to handle growing numbers of devices", "Scale measurement", "System growth"],
        correctAnswer: 1,
        explanation: "IoT scalability refers to the system's ability to handle an increasing number of connected devices efficiently."
      },
      {
        id: 519,
        question: "What is latency in IoT?",
        options: ["Device delay", "Time delay in data transmission", "System lag", "Network delay"],
        correctAnswer: 1,
        explanation: "Latency in IoT is the time delay between when data is sent from a device and when it's received."
      },
      {
        id: 520,
        question: "What is firmware in IoT devices?",
        options: ["Hardware component", "Software that controls device hardware", "Firm software", "Device software"],
        correctAnswer: 1,
        explanation: "Firmware is low-level software that directly controls IoT device hardware and provides basic functionality."
      }
    ],
    'level-2': [
      {
        id: 521,
        question: "What is digital twin technology?",
        options: ["Duplicate device", "Virtual replica of physical IoT systems", "Twin devices", "Digital copy"],
        correctAnswer: 1,
        explanation: "Digital twins are virtual replicas of physical IoT systems used for simulation, monitoring, and optimization."
      },
      {
        id: 522,
        question: "What is fog computing?",
        options: ["Cloudy computing", "Distributed computing between cloud and edge", "Weather computing", "Misty computing"],
        correctAnswer: 1,
        explanation: "Fog computing extends cloud computing to the edge of networks, closer to IoT devices for reduced latency."
      },
      {
        id: 523,
        question: "What is IoT orchestration?",
        options: ["Music coordination", "Coordinating multiple IoT services and workflows", "Device coordination", "System coordination"],
        correctAnswer: 1,
        explanation: "IoT orchestration coordinates and manages complex workflows across multiple IoT devices and services."
      },
      {
        id: 524,
        question: "What is time-series data in IoT?",
        options: ["Time tracking", "Data points indexed by time", "Series of times", "Temporal data"],
        correctAnswer: 1,
        explanation: "Time-series data consists of data points collected over time, common in IoT sensor measurements."
      },
      {
        id: 525,
        question: "What is IoT device lifecycle management?",
        options: ["Device lifespan", "Managing devices from deployment to retirement", "Life cycle", "Device management"],
        correctAnswer: 1,
        explanation: "IoT device lifecycle management covers the entire lifespan of devices from deployment to decommissioning."
      },
      {
        id: 526,
        question: "What is mesh networking in IoT?",
        options: ["Net-like network", "Network where devices connect to multiple others", "Mesh fabric", "Network mesh"],
        correctAnswer: 1,
        explanation: "Mesh networking allows IoT devices to connect to multiple other devices, creating redundant communication paths."
      },
      {
        id: 527,
        question: "What is predictive maintenance in IoT?",
        options: ["Predicting maintenance", "Using data to predict when maintenance is needed", "Maintenance prediction", "Preventive maintenance"],
        correctAnswer: 1,
        explanation: "Predictive maintenance uses IoT sensor data and analytics to predict when equipment will need maintenance."
      },
      {
        id: 528,
        question: "What is IoT data governance?",
        options: ["Data government", "Policies and procedures for managing IoT data", "Data control", "Information governance"],
        correctAnswer: 1,
        explanation: "IoT data governance establishes policies and procedures for managing, securing, and using IoT-generated data."
      },
      {
        id: 529,
        question: "What is context-aware computing in IoT?",
        options: ["Aware computing", "Systems that adapt based on environmental context", "Context computing", "Situational computing"],
        correctAnswer: 1,
        explanation: "Context-aware computing enables IoT systems to adapt their behavior based on environmental and situational context."
      },
      {
        id: 530,
        question: "What is IoT semantic interoperability?",
        options: ["Semantic meaning", "Devices understanding meaning of exchanged data", "Language interoperability", "Semantic networks"],
        correctAnswer: 1,
        explanation: "Semantic interoperability ensures IoT devices can understand the meaning and context of exchanged data."
      }
    ]
  },
  'cloud-computing': {
    'beginner': [
      {
        id: 601,
        question: "What is cloud computing?",
        options: ["Weather computing", "Delivering computing services over the internet", "Sky computing", "Aerial computing"],
        correctAnswer: 1,
        explanation: "Cloud computing delivers computing services like storage, processing, and software over the internet."
      },
      {
        id: 602,
        question: "What is the main benefit of cloud computing?",
        options: ["Expensive hardware", "Access to resources without owning physical infrastructure", "Complex setup", "Limited access"],
        correctAnswer: 1,
        explanation: "Cloud computing allows access to computing resources without the need to own and maintain physical infrastructure."
      },
      {
        id: 603,
        question: "What is SaaS?",
        options: ["Software as a Service", "System as a Service", "Storage as a Service", "Security as a Service"],
        correctAnswer: 0,
        explanation: "SaaS (Software as a Service) delivers software applications over the internet on a subscription basis."
      },
      {
        id: 604,
        question: "What is cloud storage?",
        options: ["Physical storage", "Storing data on remote servers accessed via internet", "Local storage", "Hard drive storage"],
        correctAnswer: 1,
        explanation: "Cloud storage saves data on remote servers that can be accessed from anywhere via the internet."
      },
      {
        id: 605,
        question: "What is a public cloud?",
        options: ["Open to everyone", "Cloud services available to general public", "Government cloud", "Free cloud"],
        correctAnswer: 1,
        explanation: "Public cloud services are available to the general public and shared among multiple customers."
      },
      {
        id: 606,
        question: "What is a private cloud?",
        options: ["Personal cloud", "Cloud infrastructure dedicated to single organization", "Secret cloud", "Expensive cloud"],
        correctAnswer: 1,
        explanation: "Private cloud is dedicated cloud infrastructure used exclusively by a single organization."
      },
      {
        id: 607,
        question: "What is scalability in cloud computing?",
        options: ["Cloud size", "Ability to increase or decrease resources as needed", "Scale measurement", "Cloud weight"],
        correctAnswer: 1,
        explanation: "Cloud scalability allows you to easily increase or decrease computing resources based on demand."
      },
      {
        id: 608,
        question: "What is cloud backup?",
        options: ["Backing up clouds", "Storing copies of data in the cloud", "Cloud support", "Reverse cloud"],
        correctAnswer: 1,
        explanation: "Cloud backup involves storing copies of data on remote cloud servers for protection and recovery."
      },
      {
        id: 609,
        question: "What is virtualization?",
        options: ["Virtual reality", "Creating virtual versions of physical resources", "Visualization", "Virtual gaming"],
        correctAnswer: 1,
        explanation: "Virtualization creates virtual versions of physical computing resources like servers, storage, and networks."
      },
      {
        id: 610,
        question: "What is cloud migration?",
        options: ["Cloud movement", "Moving data and applications to the cloud", "Cloud travel", "Cloud relocation"],
        correctAnswer: 1,
        explanation: "Cloud migration is the process of moving data, applications, and workloads from on-premises to cloud environments."
      }
    ],
    'level-1': [
      {
        id: 611,
        question: "What is IaaS?",
        options: ["Internet as a Service", "Infrastructure as a Service", "Information as a Service", "Integration as a Service"],
        correctAnswer: 1,
        explanation: "IaaS (Infrastructure as a Service) provides virtualized computing infrastructure over the internet."
      },
      {
        id: 612,
        question: "What is PaaS?",
        options: ["Platform as a Service", "Program as a Service", "Process as a Service", "Product as a Service"],
        correctAnswer: 0,
        explanation: "PaaS (Platform as a Service) provides a platform for developing, running, and managing applications."
      },
      {
        id: 613,
        question: "What is a hybrid cloud?",
        options: ["Mixed cloud", "Combination of public and private clouds", "Half cloud", "Dual cloud"],
        correctAnswer: 1,
        explanation: "Hybrid cloud combines public and private cloud environments, allowing data and applications to move between them."
      },
      {
        id: 614,
        question: "What is cloud elasticity?",
        options: ["Flexible cloud", "Automatic scaling of resources based on demand", "Stretchy cloud", "Elastic materials"],
        correctAnswer: 1,
        explanation: "Cloud elasticity automatically scales resources up or down based on current demand and usage patterns."
      },
      {
        id: 615,
        question: "What is a cloud service provider?",
        options: ["Cloud supplier", "Company that offers cloud computing services", "Cloud installer", "Cloud consultant"],
        correctAnswer: 1,
        explanation: "Cloud service providers are companies that offer cloud computing platforms, infrastructure, and services."
      },
      {
        id: 616,
        question: "What is cloud security?",
        options: ["Cloud protection", "Protecting cloud-based systems and data", "Security cloud", "Cloud safety"],
        correctAnswer: 1,
        explanation: "Cloud security involves protecting cloud-based systems, data, and infrastructure from threats and vulnerabilities."
      },
      {
        id: 617,
        question: "What is load balancing in cloud?",
        options: ["Weight distribution", "Distributing workloads across multiple resources", "Balance checking", "Load measurement"],
        correctAnswer: 1,
        explanation: "Load balancing distributes incoming network traffic and workloads across multiple cloud resources."
      },
      {
        id: 618,
        question: "What is cloud monitoring?",
        options: ["Watching clouds", "Tracking cloud resource performance and usage", "Cloud observation", "Sky monitoring"],
        correctAnswer: 1,
        explanation: "Cloud monitoring tracks the performance, availability, and usage of cloud resources and applications."
      },
      {
        id: 619,
        question: "What is auto-scaling?",
        options: ["Automatic measurement", "Automatically adjusting resources based on demand", "Self-scaling", "Scale automation"],
        correctAnswer: 1,
        explanation: "Auto-scaling automatically adjusts cloud resources up or down based on application demand and predefined rules."
      },
      {
        id: 620,
        question: "What is cloud orchestration?",
        options: ["Music in cloud", "Coordinating and managing cloud services", "Cloud coordination", "Service orchestration"],
        correctAnswer: 1,
        explanation: "Cloud orchestration coordinates and manages multiple cloud services and resources to work together efficiently."
      }
    ],
    'level-2': [
      {
        id: 621,
        question: "What is serverless computing?",
        options: ["No servers", "Cloud execution model where provider manages servers", "Server-free computing", "Serverless architecture"],
        correctAnswer: 1,
        explanation: "Serverless computing is a cloud execution model where the cloud provider manages server infrastructure automatically."
      },
      {
        id: 622,
        question: "What is multi-tenancy in cloud?",
        options: ["Multiple tenants", "Single instance serving multiple customers", "Tenant management", "Multiple users"],
        correctAnswer: 1,
        explanation: "Multi-tenancy allows a single instance of software to serve multiple customers while keeping their data isolated."
      },
      {
        id: 623,
        question: "What is cloud-native architecture?",
        options: ["Native cloud", "Applications designed specifically for cloud environments", "Cloud origin", "Natural cloud"],
        correctAnswer: 1,
        explanation: "Cloud-native architecture designs applications specifically to leverage cloud computing capabilities and benefits."
      },
      {
        id: 624,
        question: "What is container orchestration?",
        options: ["Container music", "Managing and coordinating containerized applications", "Container coordination", "Box management"],
        correctAnswer: 1,
        explanation: "Container orchestration automates the deployment, management, and scaling of containerized applications."
      },
      {
        id: 625,
        question: "What is edge computing in relation to cloud?",
        options: ["Edge of cloud", "Processing data closer to source rather than cloud", "Cloud edges", "Boundary computing"],
        correctAnswer: 1,
        explanation: "Edge computing processes data closer to its source rather than sending everything to centralized cloud servers."
      },
      {
        id: 626,
        question: "What is cloud federation?",
        options: ["Cloud government", "Interconnecting multiple cloud providers", "Cloud alliance", "Federal cloud"],
        correctAnswer: 1,
        explanation: "Cloud federation interconnects multiple cloud providers to create a unified, interoperable cloud environment."
      },
      {
        id: 627,
        question: "What is disaster recovery as a service (DRaaS)?",
        options: ["Disaster service", "Cloud-based disaster recovery solution", "Recovery service", "Disaster management"],
        correctAnswer: 1,
        explanation: "DRaaS provides cloud-based disaster recovery capabilities to protect and restore business operations."
      },
      {
        id: 628,
        question: "What is cloud bursting?",
        options: ["Cloud explosion", "Scaling to public cloud when private cloud capacity is exceeded", "Cloud breaking", "Burst cloud"],
        correctAnswer: 1,
        explanation: "Cloud bursting automatically scales applications to public cloud when private cloud capacity is exceeded."
      },
      {
        id: 629,
        question: "What is infrastructure as code (IaC)?",
        options: ["Code infrastructure", "Managing infrastructure through code and automation", "Infrastructure coding", "Code-based infrastructure"],
        correctAnswer: 1,
        explanation: "Infrastructure as Code manages and provisions cloud infrastructure through machine-readable code rather than manual processes."
      },
      {
        id: 630,
        question: "What is cloud cost optimization?",
        options: ["Cheap cloud", "Strategies to minimize cloud spending while maximizing value", "Cost reduction", "Budget cloud"],
        correctAnswer: 1,
        explanation: "Cloud cost optimization involves strategies and practices to minimize cloud spending while maximizing business value."
      }
    ]
  },
  'machine-learning': {
    'beginner': [
      {
        id: 701,
        question: "What is machine learning?",
        options: ["Teaching machines manually", "Algorithms that learn from data", "Machine repair", "Computer programming"],
        correctAnswer: 1,
        explanation: "Machine learning is a subset of AI where algorithms learn patterns from data to make predictions or decisions."
      },
      {
        id: 702,
        question: "What is training data?",
        options: ["Exercise data", "Data used to teach algorithms", "Training schedule", "Fitness information"],
        correctAnswer: 1,
        explanation: "Training data is the dataset used to teach machine learning algorithms to recognize patterns and make predictions."
      },
      {
        id: 703,
        question: "What is a prediction in machine learning?",
        options: ["Future telling", "Output generated by a trained model", "Weather forecast", "Guess work"],
        correctAnswer: 1,
        explanation: "A prediction is the output or result generated by a machine learning model based on input data."
      },
      {
        id: 704,
        question: "What is a feature in machine learning?",
        options: ["Software feature", "Individual measurable property of observed phenomena", "Product feature", "Special characteristic"],
        correctAnswer: 1,
        explanation: "A feature is an individual measurable property or characteristic of something being observed and analyzed."
      },
      {
        id: 705,
        question: "What is a model in machine learning?",
        options: ["Fashion model", "Mathematical representation learned from data", "3D model", "Role model"],
        correctAnswer: 1,
        explanation: "A machine learning model is a mathematical representation of a process learned from training data."
      },
      {
        id: 706,
        question: "What is classification?",
        options: ["Organizing files", "Predicting categories or classes", "Data classification", "Information sorting"],
        correctAnswer: 1,
        explanation: "Classification is a machine learning task that predicts which category or class an input belongs to."
      },
      {
        id: 707,
        question: "What is regression?",
        options: ["Going backward", "Predicting continuous numerical values", "Statistical regression", "Data regression"],
        correctAnswer: 1,
        explanation: "Regression is a machine learning task that predicts continuous numerical values rather than categories."
      },
      {
        id: 708,
        question: "What is accuracy in machine learning?",
        options: ["Precision measurement", "Percentage of correct predictions", "Exact measurement", "Perfect results"],
        correctAnswer: 1,
        explanation: "Accuracy measures the percentage of predictions that a machine learning model gets correct."
      },
      {
        id: 709,
        question: "What is overfitting?",
        options: ["Perfect fit", "Model memorizes training data but fails on new data", "Over-exercising", "Tight fitting"],
        correctAnswer: 1,
        explanation: "Overfitting occurs when a model learns the training data too well but performs poorly on new, unseen data."
      },
      {
        id: 710,
        question: "What is the purpose of testing data?",
        options: ["Testing software", "Evaluating model performance on unseen data", "Data testing", "Quality testing"],
        correctAnswer: 1,
        explanation: "Testing data is used to evaluate how well a trained machine learning model performs on new, unseen data."
      }
    ],
    'level-1': [
      {
        id: 711,
        question: "What is supervised learning?",
        options: ["Learning with supervision", "Learning from labeled examples", "Supervised study", "Guided learning"],
        correctAnswer: 1,
        explanation: "Supervised learning uses labeled training data to learn the relationship between inputs and desired outputs."
      },
      {
        id: 712,
        question: "What is unsupervised learning?",
        options: ["Learning alone", "Finding patterns in data without labels", "Unsupervised behavior", "Independent learning"],
        correctAnswer: 1,
        explanation: "Unsupervised learning finds hidden patterns and structures in data without using labeled examples."
      },
      {
        id: 713,
        question: "What is cross-validation?",
        options: ["Double validation", "Technique to assess model performance", "Cross-checking", "Validation crossing"],
        correctAnswer: 1,
        explanation: "Cross-validation is a technique to evaluate how well a model will generalize to independent datasets."
      },
      {
        id: 714,
        question: "What is feature selection?",
        options: ["Selecting features", "Choosing most relevant input variables", "Feature picking", "Variable selection"],
        correctAnswer: 1,
        explanation: "Feature selection involves choosing the most relevant input variables to improve model performance and reduce complexity."
      },
      {
        id: 715,
        question: "What is a decision tree?",
        options: ["Tree for decisions", "Model that makes decisions using tree structure", "Decision making", "Tree diagram"],
        correctAnswer: 1,
        explanation: "A decision tree is a model that makes predictions by following a tree-like structure of decision rules."
      },
      {
        id: 716,
        question: "What is clustering?",
        options: ["Grouping together", "Grouping similar data points", "Data clustering", "Point grouping"],
        correctAnswer: 1,
        explanation: "Clustering is an unsupervised learning technique that groups similar data points together."
      },
      {
        id: 717,
        question: "What is gradient descent?",
        options: ["Downhill movement", "Optimization algorithm to minimize error", "Gradient calculation", "Descent algorithm"],
        correctAnswer: 1,
        explanation: "Gradient descent is an optimization algorithm used to minimize the error or cost function in machine learning models."
      },
      {
        id: 718,
        question: "What is regularization?",
        options: ["Making regular", "Technique to prevent overfitting", "Rule making", "Regulation technique"],
        correctAnswer: 1,
        explanation: "Regularization is a technique used to prevent overfitting by adding a penalty term to the model's cost function."
      },
      {
        id: 719,
        question: "What is ensemble learning?",
        options: ["Group learning", "Combining multiple models for better performance", "Ensemble music", "Team learning"],
        correctAnswer: 1,
        explanation: "Ensemble learning combines multiple machine learning models to achieve better performance than individual models."
      },
      {
        id: 720,
        question: "What is bias in machine learning?",
        options: ["Personal opinion", "Systematic error in model predictions", "Biased data", "Unfair treatment"],
        correctAnswer: 1,
        explanation: "Bias in machine learning refers to systematic errors that cause the model to consistently over or under-predict."
      }
    ],
    'level-2': [
      {
        id: 721,
        question: "What is the bias-variance tradeoff?",
        options: ["Trading bias for variance", "Balance between model complexity and generalization", "Bias versus variance", "Tradeoff analysis"],
        correctAnswer: 1,
        explanation: "The bias-variance tradeoff describes the balance between a model's ability to minimize bias and variance to achieve good generalization."
      },
      {
        id: 722,
        question: "What is dimensionality reduction?",
        options: ["Reducing dimensions", "Reducing number of input variables", "Size reduction", "Dimension cutting"],
        correctAnswer: 1,
        explanation: "Dimensionality reduction techniques reduce the number of input variables while preserving important information."
      },
      {
        id: 723,
        question: "What is principal component analysis (PCA)?",
        options: ["Principal analysis", "Technique to reduce dimensionality by finding principal components", "Component analysis", "Primary analysis"],
        correctAnswer: 1,
        explanation: "PCA is a dimensionality reduction technique that finds the principal components that explain the most variance in data."
      },
      {
        id: 724,
        question: "What is hyperparameter tuning?",
        options: ["Parameter adjustment", "Optimizing model configuration parameters", "Hyper adjustment", "Parameter optimization"],
        correctAnswer: 1,
        explanation: "Hyperparameter tuning involves optimizing the configuration parameters that control the learning process."
      },
      {
        id: 725,
        question: "What is transfer learning?",
        options: ["Learning transfer", "Using pre-trained models for new tasks", "Knowledge transfer", "Model transfer"],
        correctAnswer: 1,
        explanation: "Transfer learning applies knowledge gained from one task to improve learning performance on a related task."
      },
      {
        id: 726,
        question: "What is reinforcement learning?",
        options: ["Strengthening learning", "Learning through rewards and penalties", "Reinforced learning", "Strong learning"],
        correctAnswer: 1,
        explanation: "Reinforcement learning trains agents to make decisions by learning from rewards and penalties in an environment."
      },
      {
        id: 727,
        question: "What is feature engineering?",
        options: ["Engineering features", "Creating and selecting relevant input variables", "Feature construction", "Variable engineering"],
        correctAnswer: 1,
        explanation: "Feature engineering involves creating, selecting, and transforming input variables to improve model performance."
      },
      {
        id: 728,
        question: "What is model interpretability?",
        options: ["Model explanation", "Understanding how models make decisions", "Model clarity", "Decision explanation"],
        correctAnswer: 1,
        explanation: "Model interpretability refers to the degree to which humans can understand and explain model decisions."
      },
      {
        id: 729,
        question: "What is online learning?",
        options: ["Internet learning", "Learning from data streams in real-time", "Web-based learning", "Online education"],
        correctAnswer: 1,
        explanation: "Online learning enables models to learn continuously from new data streams without retraining from scratch."
      },
      {
        id: 730,
        question: "What is active learning?",
        options: ["Active participation", "Selecting most informative examples for labeling", "Energetic learning", "Interactive learning"],
        correctAnswer: 1,
        explanation: "Active learning strategically selects the most informative examples for human labeling to improve model performance efficiently."
      }
    ]
  },
  'data-science': {
    'beginner': [
      {
        id: 801,
        question: "What is data science?",
        options: ["Science about data", "Field that extracts insights from data", "Data storage", "Scientific data"],
        correctAnswer: 1,
        explanation: "Data science is an interdisciplinary field that uses scientific methods to extract knowledge and insights from data."
      },
      {
        id: 802,
        question: "What is data analysis?",
        options: ["Data breakdown", "Process of examining data to draw conclusions", "Data storage", "Data collection"],
        correctAnswer: 1,
        explanation: "Data analysis is the process of examining, cleaning, and modeling data to discover useful information and draw conclusions."
      },
      {
        id: 803,
        question: "What is a dataset?",
        options: ["Data collection", "Organized collection of data", "Data storage", "Data group"],
        correctAnswer: 1,
        explanation: "A dataset is a structured collection of data, typically organized in rows and columns for analysis."
      },
      {
        id: 804,
        question: "What is data visualization?",
        options: ["Seeing data", "Graphical representation of data", "Data display", "Visual data"],
        correctAnswer: 1,
        explanation: "Data visualization is the graphical representation of data to help people understand patterns and insights."
      },
      {
        id: 805,
        question: "What is a variable in data science?",
        options: ["Changing value", "Attribute or characteristic being measured", "Variable data", "Data point"],
        correctAnswer: 1,
        explanation: "A variable is an attribute or characteristic of data that can be measured, observed, or manipulated."
      },
      {
        id: 806,
        question: "What is the mean?",
        options: ["Cruel value", "Average of all values", "Middle value", "Most common value"],
        correctAnswer: 1,
        explanation: "The mean is the average value calculated by adding all values and dividing by the number of values."
      },
      {
        id: 807,
        question: "What is the median?",
        options: ["Average value", "Middle value when data is sorted", "Most frequent value", "Extreme value"],
        correctAnswer: 1,
        explanation: "The median is the middle value in a dataset when all values are arranged in ascending or descending order."
      },
      {
        id: 808,
        question: "What is data cleaning?",
        options: ["Washing data", "Removing errors and inconsistencies from data", "Data organization", "Data storage"],
        correctAnswer: 1,
        explanation: "Data cleaning involves identifying and correcting errors, inconsistencies, and inaccuracies in datasets."
      },
      {
        id: 809,
        question: "What is a histogram?",
        options: ["History chart", "Chart showing frequency distribution", "Historical data", "Time chart"],
        correctAnswer: 1,
        explanation: "A histogram is a chart that shows the frequency distribution of numerical data using bars."
      },
      {
        id: 810,
        question: "What is correlation?",
        options: ["Data connection", "Relationship between two variables", "Data similarity", "Variable matching"],
        correctAnswer: 1,
        explanation: "Correlation measures the strength and direction of the relationship between two variables."
      }
    ],
    'level-1': [
      {
        id: 811,
        question: "What is exploratory data analysis (EDA)?",
        options: ["Data exploration", "Initial investigation to understand data patterns", "Data discovery", "Exploratory research"],
        correctAnswer: 1,
        explanation: "EDA is the initial investigation of data to understand its main characteristics, patterns, and anomalies."
      },
      {
        id: 812,
        question: "What is statistical significance?",
        options: ["Important statistics", "Likelihood that results are not due to chance", "Significant numbers", "Statistical importance"],
        correctAnswer: 1,
        explanation: "Statistical significance indicates that the observed results are unlikely to have occurred by chance alone."
      },
      {
        id: 813,
        question: "What is a p-value?",
        options: ["Price value", "Probability of observing results if null hypothesis is true", "Performance value", "Percentage value"],
        correctAnswer: 1,
        explanation: "A p-value is the probability of observing the results (or more extreme) if the null hypothesis were true."
      },
      {
        id: 814,
        question: "What is hypothesis testing?",
        options: ["Testing theories", "Statistical method to test assumptions about data", "Hypothesis creation", "Theory testing"],
        correctAnswer: 1,
        explanation: "Hypothesis testing is a statistical method used to test assumptions or claims about population parameters."
      },
      {
        id: 815,
        question: "What is regression analysis?",
        options: ["Going backward", "Statistical method to model relationships between variables", "Data regression", "Analysis regression"],
        correctAnswer: 1,
        explanation: "Regression analysis is a statistical method used to model and analyze relationships between variables."
      },
      {
        id: 816,
        question: "What is sampling in data science?",
        options: ["Taking samples", "Selecting subset of data from larger population", "Data sampling", "Sample collection"],
        correctAnswer: 1,
        explanation: "Sampling involves selecting a representative subset of data from a larger population for analysis."
      },
      {
        id: 817,
        question: "What is data preprocessing?",
        options: ["Pre-processing", "Preparing raw data for analysis", "Data preparation", "Initial processing"],
        correctAnswer: 1,
        explanation: "Data preprocessing involves cleaning, transforming, and preparing raw data for analysis and modeling."
      },
      {
        id: 818,
        question: "What is feature scaling?",
        options: ["Scaling features", "Normalizing variables to similar ranges", "Feature measurement", "Scale adjustment"],
        correctAnswer: 1,
        explanation: "Feature scaling normalizes variables to similar ranges to prevent some features from dominating others."
      },
      {
        id: 819,
        question: "What is outlier detection?",
        options: ["Finding outsiders", "Identifying data points that deviate significantly", "Outlier search", "Anomaly detection"],
        correctAnswer: 1,
        explanation: "Outlier detection identifies data points that deviate significantly from the normal pattern in the dataset."
      },
      {
        id: 820,
        question: "What is A/B testing?",
        options: ["Testing A and B", "Comparing two versions to determine which performs better", "Alphabetical testing", "Binary testing"],
        correctAnswer: 1,
        explanation: "A/B testing compares two versions of something to determine which one performs better based on statistical analysis."
      }
    ],
    'level-2': [
      {
        id: 821,
        question: "What is time series analysis?",
        options: ["Time analysis", "Analyzing data points collected over time", "Series analysis", "Temporal analysis"],
        correctAnswer: 1,
        explanation: "Time series analysis involves analyzing data points collected or recorded at specific time intervals."
      },
      {
        id: 822,
        question: "What is multicollinearity?",
        options: ["Multiple colors", "High correlation between independent variables", "Multiple columns", "Variable correlation"],
        correctAnswer: 1,
        explanation: "Multicollinearity occurs when independent variables in a regression model are highly correlated with each other."
      },
      {
        id: 823,
        question: "What is dimensionality curse?",
        options: ["Dimension problem", "Problems arising from high-dimensional data", "Dimensional curse", "Space curse"],
        correctAnswer: 1,
        explanation: "The curse of dimensionality refers to problems that arise when analyzing data in high-dimensional spaces."
      },
      {
        id: 824,
        question: "What is Bayesian inference?",
        options: ["Bayes method", "Statistical inference using Bayes' theorem", "Bayesian statistics", "Inference method"],
        correctAnswer: 1,
        explanation: "Bayesian inference is a statistical method that uses Bayes' theorem to update probability estimates as new evidence becomes available."
      },
      {
        id: 825,
        question: "What is causal inference?",
        options: ["Cause inference", "Determining cause-and-effect relationships", "Causal analysis", "Effect inference"],
        correctAnswer: 1,
        explanation: "Causal inference involves determining cause-and-effect relationships from data, beyond just correlation."
      },
      {
        id: 826,
        question: "What is survival analysis?",
        options: ["Survival study", "Analyzing time until event occurrence", "Life analysis", "Duration analysis"],
        correctAnswer: 1,
        explanation: "Survival analysis studies the time until an event of interest occurs, such as failure, death, or customer churn."
      },
      {
        id: 827,
        question: "What is Monte Carlo simulation?",
        options: ["Casino simulation", "Using random sampling to solve computational problems", "Monte Carlo method", "Random simulation"],
        correctAnswer: 1,
        explanation: "Monte Carlo simulation uses random sampling and statistical modeling to solve complex computational problems."
      },
      {
        id: 828,
        question: "What is bootstrapping in statistics?",
        options: ["Boot method", "Resampling technique to estimate sampling distribution", "Bootstrap sampling", "Self-sampling"],
        correctAnswer: 1,
        explanation: "Bootstrapping is a resampling technique used to estimate the sampling distribution of a statistic."
      },
      {
        id: 829,
        question: "What is principal component analysis (PCA)?",
        options: ["Principal analysis", "Dimensionality reduction technique", "Component analysis", "Primary analysis"],
        correctAnswer: 1,
        explanation: "PCA is a dimensionality reduction technique that transforms data to lower dimensions while preserving variance."
      },
      {
        id: 830,
        question: "What is cross-validation in model evaluation?",
        options: ["Cross checking", "Technique to assess model generalization", "Validation crossing", "Model validation"],
        correctAnswer: 1,
        explanation: "Cross-validation is a technique to evaluate how well a model will generalize to independent datasets."
      }
    ]
  },
  'big-data': {
    'beginner': [
      {
        id: 901,
        question: "What is Big Data?",
        options: ["Large files", "Extremely large datasets that require special tools", "Big storage", "Large databases"],
        correctAnswer: 1,
        explanation: "Big Data refers to extremely large datasets that are too complex for traditional data processing tools to handle effectively."
      },
      {
        id: 902,
        question: "What are the 3 Vs of Big Data?",
        options: ["Volume, Velocity, Variety", "Value, Volume, Velocity", "Variety, Value, Version", "Volume, Version, Velocity"],
        correctAnswer: 0,
        explanation: "The 3 Vs of Big Data are Volume (amount), Velocity (speed), and Variety (different types of data)."
      },
      {
        id: 903,
        question: "What is data volume in Big Data?",
        options: ["Sound volume", "Amount or size of data", "Data loudness", "Storage volume"],
        correctAnswer: 1,
        explanation: "Data volume refers to the massive amount or size of data that organizations collect and need to process."
      },
      {
        id: 904,
        question: "What is data velocity?",
        options: ["Data speed", "Rate at which data is generated and processed", "Data movement", "Fast data"],
        correctAnswer: 1,
        explanation: "Data velocity refers to the speed at which data is generated, collected, and processed in real-time or near real-time."
      },
      {
        id: 905,
        question: "What is data variety?",
        options: ["Data types", "Different formats and types of data", "Data diversity", "Mixed data"],
        correctAnswer: 1,
        explanation: "Data variety refers to the different formats, types, and sources of data including structured, unstructured, and semi-structured data."
      },
      {
        id: 906,
        question: "What is structured data?",
        options: ["Organized data", "Data organized in predefined format", "Building data", "Structured information"],
        correctAnswer: 1,
        explanation: "Structured data is organized in a predefined format, typically in rows and columns like databases and spreadsheets."
      },
      {
        id: 907,
        question: "What is unstructured data?",
        options: ["Messy data", "Data without predefined format", "Broken data", "Random data"],
        correctAnswer: 1,
        explanation: "Unstructured data lacks a predefined format and includes text, images, videos, and social media posts."
      },
      {
        id: 908,
        question: "What is data storage in Big Data?",
        options: ["Data keeping", "Systems for storing large amounts of data", "Data warehousing", "Information storage"],
        correctAnswer: 1,
        explanation: "Big Data storage involves systems and technologies designed to store and manage extremely large volumes of data."
      },
      {
        id: 909,
        question: "What is data processing?",
        options: ["Data handling", "Converting raw data into meaningful information", "Data manipulation", "Information processing"],
        correctAnswer: 1,
        explanation: "Data processing involves converting raw data into meaningful, useful information through various computational methods."
      },
      {
        id: 910,
        question: "What is a data warehouse?",
        options: ["Data storage building", "Central repository for integrated data", "Data factory", "Information warehouse"],
        correctAnswer: 1,
        explanation: "A data warehouse is a central repository that stores integrated data from multiple sources for analysis and reporting."
      }
    ],
    'level-1': [
      {
        id: 911,
        question: "What is Hadoop?",
        options: ["Big data framework", "Open-source framework for distributed storage and processing", "Data tool", "Analytics platform"],
        correctAnswer: 1,
        explanation: "Hadoop is an open-source framework that allows distributed storage and processing of large datasets across clusters of computers."
      },
      {
        id: 912,
        question: "What is MapReduce?",
        options: ["Map creation", "Programming model for processing large datasets", "Data mapping", "Reduction technique"],
        correctAnswer: 1,
        explanation: "MapReduce is a programming model for processing and generating large datasets in a distributed computing environment."
      },
      {
        id: 913,
        question: "What is HDFS?",
        options: ["Hadoop Distributed File System", "High Definition File System", "Hybrid Data File System", "Hadoop Data File Storage"],
        correctAnswer: 0,
        explanation: "HDFS (Hadoop Distributed File System) is a distributed file system designed to store large files across multiple machines."
      },
      {
        id: 914,
        question: "What is data mining?",
        options: ["Mining for data", "Discovering patterns in large datasets", "Data extraction", "Information mining"],
        correctAnswer: 1,
        explanation: "Data mining is the process of discovering patterns, correlations, and insights from large datasets using various analytical techniques."
      },
      {
        id: 915,
        question: "What is ETL in Big Data?",
        options: ["Extract, Transform, Load", "Evaluate, Test, Launch", "Export, Transfer, Link", "Extract, Transfer, List"],
        correctAnswer: 0,
        explanation: "ETL (Extract, Transform, Load) is the process of extracting data from sources, transforming it, and loading it into a target system."
      },
      {
        id: 916,
        question: "What is NoSQL?",
        options: ["No SQL allowed", "Non-relational database systems", "Not SQL", "New SQL"],
        correctAnswer: 1,
        explanation: "NoSQL databases are non-relational database systems designed to handle large volumes of unstructured and semi-structured data."
      },
      {
        id: 917,
        question: "What is real-time analytics?",
        options: ["Live analysis", "Analyzing data as it's generated", "Real-time data", "Instant analytics"],
        correctAnswer: 1,
        explanation: "Real-time analytics involves analyzing data immediately as it's generated to provide instant insights and enable quick decision-making."
      },
      {
        id: 918,
        question: "What is data lake?",
        options: ["Water data", "Repository storing raw data in native format", "Data pool", "Information lake"],
        correctAnswer: 1,
        explanation: "A data lake is a storage repository that holds vast amounts of raw data in its native format until it's needed for analysis."
      },
      {
        id: 919,
        question: "What is distributed computing?",
        options: ["Spread computing", "Computing across multiple connected computers", "Distributed systems", "Network computing"],
        correctAnswer: 1,
        explanation: "Distributed computing involves using multiple connected computers to work together on computational tasks and data processing."
      },
      {
        id: 920,
        question: "What is batch processing?",
        options: ["Group processing", "Processing data in large chunks at scheduled times", "Batch jobs", "Bulk processing"],
        correctAnswer: 1,
        explanation: "Batch processing involves processing large volumes of data in chunks or batches at scheduled intervals rather than in real-time."
      }
    ],
    'level-2': [
      {
        id: 921,
        question: "What is Apache Spark?",
        options: ["Spark plug", "Unified analytics engine for large-scale data processing", "Fire spark", "Data spark"],
        correctAnswer: 1,
        explanation: "Apache Spark is a unified analytics engine for large-scale data processing with built-in modules for streaming, SQL, and machine learning."
      },
      {
        id: 922,
        question: "What is data partitioning?",
        options: ["Data division", "Dividing large datasets across multiple storage locations", "Data separation", "Partition creation"],
        correctAnswer: 1,
        explanation: "Data partitioning involves dividing large datasets into smaller, manageable pieces distributed across multiple storage locations."
      },
      {
        id: 923,
        question: "What is Apache Kafka?",
        options: ["Coffee platform", "Distributed streaming platform", "Data kafka", "Stream processor"],
        correctAnswer: 1,
        explanation: "Apache Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications."
      },
      {
        id: 924,
        question: "What is data lineage?",
        options: ["Data family tree", "Tracking data flow from source to destination", "Data ancestry", "Information lineage"],
        correctAnswer: 1,
        explanation: "Data lineage tracks the flow of data from its origin through various transformations to its final destination."
      },
      {
        id: 925,
        question: "What is stream processing?",
        options: ["Water processing", "Processing continuous data streams in real-time", "Stream handling", "Flow processing"],
        correctAnswer: 1,
        explanation: "Stream processing involves analyzing and processing continuous streams of data in real-time as it flows through the system."
      },
      {
        id: 926,
        question: "What is data governance in Big Data?",
        options: ["Data government", "Framework for managing data quality and compliance", "Data control", "Information governance"],
        correctAnswer: 1,
        explanation: "Data governance establishes policies, procedures, and standards for managing data quality, security, and compliance in Big Data environments."
      },
      {
        id: 927,
        question: "What is columnar storage?",
        options: ["Column storage", "Storing data by columns rather than rows", "Vertical storage", "Column-based storage"],
        correctAnswer: 1,
        explanation: "Columnar storage organizes data by columns rather than rows, optimizing for analytical queries and compression."
      },
      {
        id: 928,
        question: "What is data sharding?",
        options: ["Data breaking", "Horizontal partitioning of data across multiple databases", "Data splitting", "Shard creation"],
        correctAnswer: 1,
        explanation: "Data sharding is a horizontal partitioning technique that distributes data across multiple databases or servers."
      },
      {
        id: 929,
        question: "What is lambda architecture?",
        options: ["Greek architecture", "Architecture combining batch and real-time processing", "Lambda design", "Hybrid architecture"],
        correctAnswer: 1,
        explanation: "Lambda architecture is a data processing architecture that combines batch processing and real-time stream processing."
      },
      {
        id: 930,
        question: "What is data catalog?",
        options: ["Data list", "Metadata management system for discovering data assets", "Data directory", "Information catalog"],
        correctAnswer: 1,
        explanation: "A data catalog is a metadata management system that helps users discover, understand, and access data assets across the organization."
      }
    ]
  }
};