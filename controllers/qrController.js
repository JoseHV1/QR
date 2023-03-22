import fs from "fs";
import qrcode from "qrcode";

let image_qr;

export function renderViewGenerate(req, res) {
    req.flash('messagesErrors', 'URL invalidate');
    res.render('index', {
        image_qr: req.flash("image"), errorUrlEmpty: req.flash("errorUrlEmpty"), errorUrlInvalidate: req.flash("errorUrlInvalidate"
    )});
}

export async function generateQR(req, res) {
    const { url_text } = req.body;
    const expRegURL = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;

    if(!url_text){
        req.flash('errorUrlEmpty', 'error');
        return res.redirect('back');
    }

    if(!url_text.match(expRegURL)){
        req.flash('errorUrlInvalidate', 'error');
        return res.redirect('back');
    }

    await qrcode.toDataURL(url_text, (err, src) => {
        req.flash('image', src);
        res.redirect('/');
    });
}

export function renderViewRead(req, res) {
    res.render('reader');
}