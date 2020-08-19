const crypto = require("crypto");

module.exports = {
  isEmail: (email) => {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email) ? true : false;
  },
  
  encrypt: (text) => {
		try {
			const cipher = crypto.createCipher("aes-256-ctr", "d6F3Efeq");
			return cipher.update(text, "utf8", "hex") + cipher.final("hex");
		} catch (e) {
			console.log(":: Erro na geração do token: ", e);
			return null;
		}
	},
	decrypt: (text) => {
		try {
			const decipher = crypto.createDecipher("aes-256-ctr", "d6F3Efeq");
			return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
		} catch (e) {
			console.log(":: Erro na leitura do token: ", e);
			return null;
		}
	},
}
