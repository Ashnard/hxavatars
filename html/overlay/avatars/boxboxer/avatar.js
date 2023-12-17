import Avatar from "../avatar.js";

const metadata = {
	animations: {
		idle: {
			left: [5, 6],
			right: [0, 1],
			frameRate: 20,
		},
		walking: {
			left: [7, 8, 9],
			right: [2, 3, 4],
			frameRate: 20,
		},
	},
	frameHeight: 32,
	frameWidth: 32,
	scale: 3,
};

class ExtendedAvatar extends Avatar {
	//
}

export { metadata, ExtendedAvatar };
