import Avatar from "../avatar.js";

const metadata = {
	animations: {
		idle: {
			left: [4],
			right: [2],
			frameRate: 1,
		},
		walking: {
			left: [9],
			right: [6],
			frameRate: 1,
		},
	},
	frameHeight: 29,
	frameWidth: 32,
	scale: 2,
};

class ExtendedAvatar extends Avatar {
	//
}

export { metadata, ExtendedAvatar };
