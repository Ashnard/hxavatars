import Avatar from "../avatar.js";

const metadata = {
	animations: {
		idle: {
			left: [3, 4, 5],
			right: [0, 1, 2],
			frameRate: 20,
		},
		walking: {
			left: [14, 13, 12, 11],
			right: [6, 7, 8, 9],
			frameRate: 15,
		},
	},
	frameHeight: 29,
	frameWidth: 32,
	scale: 3,
};

class ExtendedAvatar extends Avatar {
	//
}

export { metadata, ExtendedAvatar };
