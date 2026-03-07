import sharp from 'sharp';

async function convert() {
    try {
        await sharp('dist/assets/dr.vitorcoelho.png')
            .resize(600, 600, {
                fit: 'cover',
                position: 'top'
            })
            .webp({ quality: 80 })
            .toFile('public/dr.vitorcoelho.webp');
        console.log('Success');
    } catch (err) {
        console.error('Error:', err);
    }
}

convert();
