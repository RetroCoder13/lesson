var niceList = ""
var naughtyList = ""
var form = document.querySelector("form")
var urlDataString = location.href.split("?")[1]
var urlData = {}

function parseURLData(urlDataString){
    let urlSplit = urlDataString.replaceAll("+"," ").replaceAll("%2C",",").replaceAll("%7B%2Fn%7D","{/n}").split("&")
    for(let i=0;i<urlSplit.length;i++){
        let urlKey = urlSplit[i].split("=")[0]
        let urlValue = urlSplit[i].split("=")[1]
        urlData[urlKey] = urlValue
    }
    niceList = urlData["nice"]
    naughtyList = urlData["naughty"]
    if(urlData["score"] >= 0){
        niceList += `${urlData["name"]},${urlData["address"]},${urlData["postcode"]}{/n}`
    } else {
        naughtyList += `${urlData["name"]},${urlData["address"]},${urlData["postcode"]}{/n}`
    }
}

form.onsubmit = function(e){
    form.children["nice"].value = niceList
    form.children["naughty"].value = naughtyList
}

document.querySelector("#exportNice").onclick = function(){
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(niceList.replaceAll("{/n}","\n")))
    element.setAttribute('download', 'Nice List.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}

document.querySelector("#exportNaughty").onclick = function(){
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(naughtyList.replaceAll("{/n}","\n")))
    element.setAttribute('download', 'Naughty List.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}

var fetched
function loadFile(object, nice){
    filereader = new FileReader()
    filereader.onload = async function(){
        if(nice){
            niceList = filereader.result.replaceAll("\n","{/n}")
        } else {
            naughtyList = filereader.result.replaceAll("\n","{/n}")
        }
    }
    filereader.readAsText(object.files[0])
}

if(urlDataString != undefined){
    parseURLData(urlDataString)
}