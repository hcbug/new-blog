// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "szwain",
		title: "沭中我爱你",
		description:
			"A perfect way for Hong Chang to showcase tech and heart.",
		image: "/assets/projects/szwain.webp",
		category: "web",
		techStack: ["HTML","Github","Vercel","CSS","JavaScript"],
		status: "completed",
		sourceCode: "https://github.com/hcbug/git-of-szwain",
		visitUrl: "https://sz.hcbu.cn",
		startDate: "2025-04-30",
		endDate: "2025-05-01",
		featured: true,
		tags: ["Web", "Open Source"],
	},
	{
		id: "hongchang-personal-homepage",
		title: "洪畅个人主页",
		description:
			"轻量化个人主页。",
		image: "",
		category: "web",
		techStack: ["HTML", "Github", "Vercel", "NPM", "Git"],
		status: "completed",
		sourceCode: "https://github.com/mete0rxsc/minimal-homepage",
		startDate: "2026-05-01",
		endDate: "2026-05-02",
		tags: ["Web", "Blog", "Open Source"],
	},
	{
		id: "hongchang-blog",
		title: "洪畅的博客",
		description:
			"记录成长历程。",
		image: "",
		category: "web",
		techStack: ["Astro", "Github Actions", "Vercel","Twikoo"],
		status: "in-progress",
		sourceCode: "https://github.com/LyraVoid/Mizuki",
		startDate: "2026-05-04",
		showImage: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
