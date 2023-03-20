alert('conectado');

import fs from "fs";
import qrcode from "qrcode";

const urlCV = 'https://drive.google.com/file/d/1JfVRXpRBamLXJWXEZYM1JuSFPmqY6CG3/view?usp=share_link';

const run = async() => {
    const QR = await qrcode.toDataURL(urlCV);
    const contentHTML = `
    <div style="display: flex; text-align: center; align-items: center;">
        <h2>CV Jose Hernandez</h2>
        <img src="${QR}" alt="cv_jose_hernandez">
    </div>
    `

    fs.writeFileSync('index.html', `${contentHTML}`);
}

run();