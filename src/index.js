// const wppconnect = require('@wppconnect-team/wppconnect');
import { create, Whatsapp } from '@wppconnect-team/wppconnect';

const createWpp = async() => {
    try{
        // let wpp = await Whatsapp.create();
        let wpp = await create();
        start(wpp)

    }catch(err){
        console.error("Problem while creating an instance of wpp:",err)
    }
};

console.log("OLHA EU AQUI SAMUCA!!!!")

function start(wpp){
    wpp.on("message",(message) => {
        wpp.sendMessage("+12996656818", "Olá Jonatas!")
    })
};

createWpp();