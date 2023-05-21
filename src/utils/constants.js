export const MOBILE_DEVICES = ['base', 'sm'];

export const ROUTES = [
	{ to: '/', label: 'HOME' },
	{ to: '/skills', label: 'SKILLS' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/contact', label: 'CONTACT' },
];

export const PAGE_TITLES = {
	about: 'About | Hugues Ebert',
	skills: 'Skills | Hugues Ebert',
	projects: 'Projects | Hugues Ebert',
	contact: 'Contact | Hugues Ebert',
};

export const SKILLS = [
	{ label: 'HTML 5', icon: 'html.svg' },
	{ label: 'CSS', icon: 'css.svg' },
	{ label: 'JavaScript', icon: 'javascript.svg' },
	{ label: 'Bootstrap', icon: 'bootstrap.svg' },
	{ label: 'React.js', icon: 'reactjs.svg' },
	{ label: 'PHP', icon: 'php.svg' },
	{ label: 'Laravel', icon: 'laravel.svg' },
	{ label: 'WordPress', icon: 'wordpress.svg' },
	{ label: 'Node.js', icon: 'nodejs.svg' },
	{ label: 'MongoDb', icon: 'mongodb.svg' },
	{ label: 'MySQL', icon: 'mysql.svg' },
	{ label: 'Redis', icon: 'redis.svg' },
];

export const PROJECTS = [
	{
		title: 'Email Marketing',
		stack: ['React.js', 'Chakra UI', 'Javascript'],
		thumbnail: 'email-m.png',
		github: '#',
		live: '#',
		underdev: true,
	},
	{
		title: 'Web Hosting Service',
		stack: ['HTML5', 'CSS3', 'Javascript', "PHP", "Stripe API"],
		thumbnail: 'vighor.png',
		github: '#',
		live: 'https://vighor.com',
	},
	{
		title: 'School Management System',
		stack: ['React.js', 'Laravel', "Bootstrap", "MS Graph API", "WebRTC"],
		thumbnail: 'school-manag.png',
		github: '#',
		live: '#',
        underdev: true,
	},
	{
		title: 'Crime report system',
		stack: ['Laravel', 'React.js', 'HTML', "CSS", "MySQL"],
		thumbnail: 'crime-report.png',
		github: '#',
		live: 'https://sovem.vighor.com/',
	},
	{
		title: 'Marketplace platform',
		stack: ['PHP', 'JS', 'Stripe', "GCP", "K8s", "Redis", 'MongoDB', "MySQL"],
		thumbnail: 'abreje-store.png',
		github: '#',
		live: '#',
		underdev: true,
	},
];

export const SOCIAL_LINKS = [
	{
		username: '/huguebert17',
		link: 'https://www.linkedin.com/in/huguebert17/',
		icon: 'linkedin.svg',
	},
	{
		username: '/huguesbert17',
		link: 'https://twitter.com/huguesbert17',
		icon: 'twitter.svg',
	},
	{
		username: '/huguesbert17',
		link: 'https://github.com/huguesbert17',
		icon: 'github.svg',
	},
	// {
	// 	username: '/harireddy7',
	// 	link: 'https://dev.to/harireddy7',
	// 	icon: 'devto.png',
	// },
];

export const PAGE_LINKS = ['/about', '/skills', '/projects', '/contact'];
