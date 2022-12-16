// Add modulo function to Number prototype using remainder operator (%).
Number.prototype.mod = function (n) {
	return ((this % n) + n) % n;
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/**
 * @description This function clears the entire canvas by erasing a rectangle of its size.
 */
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * @description This function draws image asynchronously.
 * @param {string} src Relative or absolute path to file
 * @param {number} x Horizontal distance of drawn image from the left border of the canvas.
 * @param {number} y Vertical distance of drawn image from the top border of the canvas.
 * @param {number} scale Parameter used for scaling of drawn image (1 results in original size).
 * @returns {Promise} Promise that is fulfilled when the image is loaded and drawn.
 */
function drawImage(src, x, y, scale) {
	const image = new Image();
	image.src = src;
    return new Promise((resolve) => {
        image.onload = async () => {
            ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
            resolve();
        };
    });
}
