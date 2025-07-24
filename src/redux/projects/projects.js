import bookStore from '../../assets/images/projects/book-store.png';
import chatbotApp from '../../assets/images/projects/chatbot.png';
import Memes from '../../assets/images/projects/memes.png';
// initial-state
const initialState = [
  {
    id: 0,
    title: 'ChatBot App',
    image: chatbotApp,
    details:
      'This ChatBot app allows users to choose between AI-powered replies or manual review. It offers a real-time chat experience that feels like talking to a smart assistant. Users begin by selecting their gender, then choose their preferred chat mode, making the interaction more personalized. The app is live and designed to be simple, interactive, and user-friendly while combining AI with everyday usability.',
    live: 'https://chat-bot-app-flax.vercel.app/',
    github: 'https://github.com/Iqra1Aslam/chatBotApp',
    tech: ['JavaScript', 'React', 'AIModel', 'Tailwind'],
  },
  {
    id: 9,
    title: 'MemeHome',
    image: Memes,
    details:
      'This platform allows users to create, trade, and explore meme tokens on a decentralized blockchain (e.g., Solana) — with wallet login, on-chain interactions, and backend services for analytics, listing, and leaderboard-like features.',
    live: 'https://memehome-io-ten.vercel.app/',
    github: 'https://github.com/Iqra1Aslam/memehome.io',
    tech: ['Rust', 'Anchor', 'Web3.js', 'Express', 'React'],
  },
  {
    id: 10,
    title: 'Book Store',
    image: bookStore,
    details:
      'Book Store is a React-based web application that allows users to manage a personalized list of favorite books. Users can add and remove books from their collection with ease. Built using JavaScript and React libraries, the application provides a responsive and user-friendly interface for organizing book preferences efficiently.',
    live: 'https://book-store.thecodechaser.com',
    github: 'https://github.com/thecodechaser/book-store',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
];

// reducer
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
