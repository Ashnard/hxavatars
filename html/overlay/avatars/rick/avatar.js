import Avatar from "../avatar.js";

const metadata = {
	animations: {
		idle: {
			left: [0],
			right: [3],
			frameRate: 1,
		},
		walking: {
			left: [1, 2],
			right: [4, 5],
			frameRate: 4,
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
