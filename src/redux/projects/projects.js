

import taskMaster from '../../assets/images/projects/task-master.png';

import chatbotApp from '../../assets/images/projects/chatbot.png';

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
    id: 2,
    title: 'Task Master',
    image: taskMaster,
    details:
      'TaskMaster is a React-based task management application designed for efficient task organization. It offers full CRUD operations for creating, updating, and managing tasks. Users can track progress using a Kanban board with drag-and-drop functionality, making task management seamless and intuitive.',
    live: 'https://task-master.thecodechaser.com',
    github: 'https://github.com/thecodechaser/task-master',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
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
