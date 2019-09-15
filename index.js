'use strict'

/**
 * Retorna o número em sua forma ordinal por extenso
 * 
 * @param {Object} [opt] Parâmetro OPCIONAL que contem as opções de "maiuscula" e "genero"
 * @param {string} [opt.genero=o] Usado para difinir o gênero que será aplicado ao número
 * @param {boolean} [opt.maiuscula=false] Define se a string retornada tera CamelCase (true) ou será toda minúscula (false)
 * @returns {string}
 */
function toOrdinal(opt) {
    if(!Number.isInteger(this)) {
        throw new Error("Não implementado para números não inteiros.")
    }
    if(this > 999) {
        throw new Error("Não implementado para números maiores que 999.")
    }
    if(this < 1) {
        throw new Error("Não implementado para números negativos.")
    }
    let g = opt ? ("genero" in opt ? opt["genero"] : "o") : "o"
    let c = opt ? ("maiuscula" in opt ? opt["maiuscula"] : false) : false
    let txt = ""
    if (this < 1000 && this > 99) {
        let t = ["", "cent", "ducent", "trecent", "quadrigent", "quingent", "sexcent",
            "septigent", "octigent", "nongent"]
        let n100 = Math.floor(this/100)
        let l = this - (n100*100)
        txt = `${t[n100]}ésim${g} ${l.toOrdinal(opt)}`
    }
    if (this < 100 && this > 9) {
        let x = ["", "décimo", "vig", "trig", "quadrag", "quinquag", "sexag", "septuag",
            "octog", "nonag"]
        let n10 = Math.floor(this/10)
        let l = this - (n10*10)
        txt = `${x[n10] + (n10 > 1 ? `ésim${g}` : "")} ${l.toOrdinal(opt)}`
    }
    if(this < 10 && this > 0) {
        let u = ["", "primeir", "segund", "terceir", "quart", "quint", "sext", "sétim", "oitav", "non"]
        txt = u[this] + g
    }
    return c ? txt.replace(/((^|\s)\w)/g, (w)=>{return w.toUpperCase()}) : txt
}

Number.prototype.toOrdinal = toOrdinal

module.exports = Number