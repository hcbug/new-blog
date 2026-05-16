// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 13T",
			image: "/images/device/oneplus13t.webp",
			specs: "Gray / 16G + 1TB",
			description:
				"Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
			link: "https://www.oneplus.com/cn/13t",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.webp",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
	Security: [
		{
			name: "Flipper Zero",
			image: "/images/device/flipper-zero.webp",
			specs: "Multi-tool / Sub-GHz / NFC / RFID",
			description:
				"Portable multi-tool for pentesters and geeks. Interact with digital systems around you.",
			link: "https://flipperzero.one/",
		},
	],
	Drone: [
		{
			name: "DJI Mini 3",
			image: "/images/device/dji-mini3.webp",
			specs: "249g / 4K HDR / 38min flight time",
			description:
				"Lightweight drone with powerful camera capabilities and intelligent shooting modes.",
			link: "https://www.dji.com/cn/mini-3",
		},
	],
	Camera: [
		{
			name: "Insta360 GO 3",
			image: "/images/device/insta360-go3.webp",
			specs: "Thumb-sized / 2.7K / Action Pod",
			description:
				"Ultra-compact action camera with hands-free POV shooting capabilities.",
			link: "https://www.insta360.com/cn/product/insta360-go3",
		},
	],
	Wearable: [
		{
			name: "Apple Watch Ultra 2",
			image: "/images/device/apple-watch-ultra2.webp",
			specs: "49mm / GPS + Cellular / Titanium",
			description:
				"Rugged smartwatch designed for endurance athletes and outdoor adventurers.",
			link: "https://www.apple.com.cn/apple-watch-ultra-2/",
		},
	],
	Storage: [
		{
			name: "Synology DS923+",
			image: "/images/device/synology-ds923.webp",
			specs: "4-bay NAS / AMD Ryzen / 2.5GbE",
			description:
				"Powerful network attached storage for data backup and media streaming.",
			link: "https://www.synology.com/zh-cn",
		},
	],
};
