export const ROUTES = [
	{ to: '/', label: 'HOME' },
	{ to: '/skills', label: 'SKILLS' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/resume', label: 'RESUME' },
	{ to: '/contact', label: 'CONTACT' },
];

export const PAGE_TITLES = {
	about: 'About | Hari Kotha',
	skills: 'Skills | Hari Kotha',
	projects: 'Projects | Hari Kotha',
	contact: 'Contact | Hari Kotha',
};

export const SKILLS = [
	{ label: 'HTML 5', icon: 'html.svg' },
	{ label: 'CSS', icon: 'css.svg' },
	{ label: 'JavaScript', icon: 'javascript.svg' },
	{ label: 'Bootstrap', icon: 'bootstrap.svg' },
	{ label: 'React.js', icon: 'reactjs.svg' },
	{ label: 'Redux', icon: 'redux.svg' },
	{ label: 'Node.js', icon: 'nodejs.svg' },
	{ label: 'Express', icon: 'express.svg' },
	{ label: 'MongoDb', icon: 'mongodb.svg' },
];

export const PROJECTS = [
	{
		title: 'Tic-Tac-Toe',
		stack: ['HTML5', 'CSS3', 'Javascript'],
		thumbnail: 'tictactoejs.png',
		github: 'https://github.com/harireddy7/TicTacToe',
		live: 'https://tictactoejs-dev.netlify.app/',
	},
	{
		title: 'key user solutions',
		stack: ['Javascript', 'React.js', 'Material UI'],
		thumbnail: 'keyusersolutions.jpg',
		github: 'https://github.com/harireddy7/KeyUserSolutions',
		live: 'https://keyusersolutions.netlify.app/',
	},
	{
		title: 'WeatherJs',
		stack: ['HTML5', 'CSS3', 'Bootstrap', 'Javascript'],
		thumbnail: 'weatherjs.png',
		github: 'https://github.com/harireddy7/WeatherJs',
		live: 'https://weatherjs-dev.netlify.app/',
	},
	{
		title: 'Chat App',
		stack: ['React.js', 'Node.js', 'Socket.io'],
		thumbnail: 'under-dev.svg',
		github: '#',
		live: '#',
	},
];
