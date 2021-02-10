const path = require('path');
const execa = require('execa');
const tempy = require('tempy');
const pathExists = require('path-exists');

describe('input parameter errors', () => {
	test('error no input file', async () => {
		expect.assertions(1);
		try {
			await execa('./cli.js')
		} catch (e) {
			expect(e.message).toMatch('Please provide an input file.');
		}
	});

	test('error no platform selected', async () => {
		expect.assertions(1);
		try {
			await execa('./cli.js', ['fixtures/icon.png']);
		} catch (e) {
			expect(e.message).toMatch('Please provide at least one platform.');
		}
	});
});

describe('android platform', () => {
	test('android - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'mipmap-hdpi/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('android - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'android', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'mipmap-hdpi/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('blackberry10 platform', () => {
	test('blackberry10 - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'blackberry10', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-90.png')),
			pathExists(path.join(tempFile, 'icon-96.png')),
			pathExists(path.join(tempFile, 'icon-110.png')),
			pathExists(path.join(tempFile, 'icon-144.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('blackberry10 - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'blackberry10', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-90.png')),
			pathExists(path.join(tempFile, 'icon-96.png')),
			pathExists(path.join(tempFile, 'icon-110.png')),
			pathExists(path.join(tempFile, 'icon-144.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('chrome platform', () => {
	test('chrome - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'chrome', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-48.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('chrome - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'chrome', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-48.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('firefox platform', () => {
	test('firefox - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'firefox', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-48.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('firefox - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'firefox', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-48.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('ios platform', () => {
	test('ios - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'ios', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('ios - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'ios', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('pwa platform', () => {
	test('pwa - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'pwa', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-128x128.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('pwa - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'pwa', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-128x128.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('multi platform', () => {
	test('(android, ios) - png file', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-p', 'ios', '-o', tempFile]);
		
		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'android/mipmap-hdpi/icon.png')),
			pathExists(path.join(tempFile, 'ios/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	}, 5000);

	test('(android, ios) - svg file', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'android', '-p', 'ios', '-o', tempFile]);
		
		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'android/mipmap-hdpi/icon.png')),
			pathExists(path.join(tempFile, 'ios/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	}, 5000);
});
