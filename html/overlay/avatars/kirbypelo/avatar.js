import Avatar from "../avatar.js";

const metadata = {
	animations: {
		idle: {
			left: [4, 3, 5],
			right: [2, 1, 0],
			frameRate: 10,
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
