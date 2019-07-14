export const padNum = (num) => {
	return num.toString().length > 1 ? num + '' : '0' + num;
}

export const getSeconds = (time) => {
	return time % 60;
};

export const getMinutes = (time) => {
	return Math.floor(time / 60);
};