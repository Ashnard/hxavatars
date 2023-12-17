import Avatar from "../avatar.js";

const metadata = {
	animations: {
		idle: {
			left: [3, 4, 5],
			right: [0, 1, 2],
			frameRate: 3,
		},
		walking: {
			left: [9, 10, 11],
			right: [6, 7, 8],
			frameRate: 6,
		},
	},
	extruded: true,
	frameHeight: 29,
	frameWidth: 32,
	scale: 3,
};

class ExtendedAvatar extends Avatar {
	//
}

export { metadata, ExtendedAvatar };
