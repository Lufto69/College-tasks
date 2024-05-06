export function calcForm(obj) {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        width = document.querySelectorAll('#width'),
        height = document.querySelectorAll('#height'),
        viewType = document.querySelectorAll('#view_type'),
        prifileType = document.querySelectorAll('.checkbox');


    function rightValue(elem, event, prop) {
        elem.forEach((e, i) => {
            e.addEventListener(event, () => {
                switch(e.nodeName) {
                    case 'SPAN' :
                        obj[prop] = i
                        break
                    case 'INPUT' :
                        if(e.getAttribute('type') === 'checkbox') {
                            if(i === 0) {
                                obj[prop] = 'Холожное'
                            } else {
                                obj[prop] = 'Тёплое'
                            }
                        } else {
                            obj[prop] = e.value
                        }
                        break
                    case 'SELECT' :
                        obj[prop] = e.value
                        break
                }
                console.log(obj)
            })
        })
    }

    rightValue(windowForm, 'click', 'form')
    rightValue(width, 'input', 'width')
    rightValue(height, 'input', 'height')
    rightValue(viewType, 'input', 'viewType')
    rightValue(prifileType, 'input', 'prifileType')
}