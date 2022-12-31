import CryptoJS from "crypto-js";
import { JSEncrypt } from "JSEncrypt";
export default {
    encrypt(data, key) {
        //console.log(key);
        const encrypt = new JSEncrypt() //new
        encrypt.setPublicKey(key) //公钥赋值
        let result = encrypt.encrypt(data) //加密字段
        console.log(result,"encrypted")
        return result
    },
    decrypt(data, key) {
        const decrypt  = new JSEncrypt() //new
        decrypt.setPrivateKey(key) //公钥赋值
        let result = decrypt.decrypt(data) //加密字段
        console.log(result,"decrypted")
        return result
    },

    Cryptoencrypt(data, G_KP) {
        var key = CryptoJS.enc.Utf8.parse(G_KP.key)
        var iv = CryptoJS.enc.Utf8.parse(G_KP.iv)
        var encrypted = CryptoJS.AES.encrypt(data, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString()
      },

      Cryptodecrypt(data, G_KP) {
        // console.log("KEYIV ======> ", G_KP);
        var key = CryptoJS.enc.Utf8.parse(G_KP.key);
        var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);
        var decrypted = CryptoJS.AES.decrypt(data, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
      },
}

