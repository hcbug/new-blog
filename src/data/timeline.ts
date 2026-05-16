import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "Studying Computer Science and Technology",
		description:
			"Currently studying Computer Science and Technology, focusing on web development and software engineering.",
		type: "education",
		startDate: "2023-09-01",
		location: "Suqian",
		organization: "self",
		skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL", "English"],
		achievements: [
			"Current GPA: 3.6/4.0",
			"Completed data structures and algorithms course project",
			"Participated in multiple course project developments",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "my first domain and CVM",
		title: "我的第一个域名和服务器",
		description:
			"我的第一个域名是“沭中.我爱你”。搭建的网站现已迁移至sz.hcbu.cn",
		type: "achievement",
		startDate: "2025-06-25",
		endDate: "2026-05-03",
		skills: ["Domain", "CVM"],
		achievements: [
			"域名购买、解析和备案",
			"服务器购买，安装宝塔面板",
			"上传源码、更新和维护",
		],
		icon: "material-symbols:work",
		color: "#a2c050",
		featured: true,
	},
	{
	id: "one second  cvm",
		title: "又一个域名和服务器",
		description:
			"我的第二个域名是“hcbu.cn”,有效期为十年",
		type: "achievement",
		startDate: "2026-04-25",
		skills: ["Domain"],
		achievements: [
			"域名购买、解析",
		],
		icon: "material-symbols:work",
		color: "#a2c050",
		featured: true,
	},
	{
		id: "szwain",
		title: "沭中我爱你",
		description:
			"A perfect way for Hong Chang to showcase tech and heart.",
		type: "project",
		startDate: "2025-06-01",
		endDate: "2025-08-31",
		skills: ["HTML", "CSS", "JavaScript", "AI"],
		achievements: [
			"纯静态HTML5页面",
			"开源于Github, 部署于Vercel",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/hcbug/git-of-szwain",
				type: "project",
			},
			{
				name: "Live Demo",
				url: "https://sz.hcbu.cn",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "hongchang-personal-homepage",
		title: "洪畅个人主页",
		description:
			"轻量化个人主页。",
		type: "project",
		startDate: "2026-04-31",
		endDate: "2026-05-01",
		skills: ["HTML", "Github", "Vercel", "NPM", "Git"],
		achievements: [
			"轻量化",
			"开源于Github, 部署于Vercel",
		],
		links: [
			{
				name: "Hong Chang 的个人主页",
				url: "https://hcbu.cn",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
	{
		id: "hongchang-blog",
		title: "洪畅的博客",
		description:
			"记录成长历程。",
		type: "project",
		startDate: "2026-05-02",
		endDate: "2024-05-04",
		skills: ["HTML", "CSS", "JavaScript", "Node.js", "Github", "Vercel"],
		achievements: [
			"第一次拥有真正意义上的个人博客",
			"Achieve Github Actions",
		],
		links: [
			{
				name: "洪畅的博客",
				url: "https://blog.hcbu.cn",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
];
