const log = console.log.bind(console)

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/index2.html')
    request.onload = () => {
        log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/main2.js')
    request.onload = () => {
        log('rr', request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
        
    }
    request.onerror = () => {
        log('error')
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (200 <= request.status && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
                log('request.response', request.response)
                log('success')
            } else {
                log('加载css失败')
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/index3.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (200 <= request.status && request.status < 300) {
                log('request.response', request.response)
                log('success')
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                log(text)
            } else {
                log('加载xml失败')
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/index5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (200 <= request.status && request.status < 300) {
                log('request.response', request.response)
                const object = JSON.parse(request.response)
                log(object)
                jsonName.textContent = object.name
                log('success')
            } else {
                log('加载失败')
            }
        }
    }
    request.send()
}
let n = 1
getNextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (200 <= request.status && request.status < 300) {
                log('request.response', request.response)
                const array = JSON.parse(request.response)
                array.forEach(element => {
                    const li = document.createElement('li')
                    li.textContent = element.id
                    xxx.appendChild(li)
                });
                log('success')
                n += 1
            } else {
                log('加载失败')
            }
        }
    }
    request.send()
}