const buttonBool =
[
    {
        id: 0,
        bool: true
    },
    {
        id: 1,
        bool: false
    },
    {
        id: 2,
        bool: false
    },
    {
        id: 3,
        bool: false
    },
]
const arrowAction = (arrow, categories, categoriesButtons) => {
    let currentId = buttonBool.filter(el => el.bool)[0].id;
    if (arrow != null)
        {
            if (arrow.classList[0].includes('left'))
                {
                    buttonBool[currentId].bool = false
                    currentId--
                    if (currentId < 0) { currentId = 3 }
                    buttonBool[currentId].bool = true
                }
            else if (arrow.classList[0].includes('right'))
                {
                    buttonBool[currentId].bool = false
                    currentId++
                    if (currentId > 3) { currentId = 0 }
                    buttonBool[currentId].bool = true
                }
        }

        changeCategory(categories, categoriesButtons)
}

const changeCategory = (categories, categoriesButtons) => {
        
    buttonBool.filter(obj => obj.bool === false).forEach(element => {
        categoriesButtons[element.id].style.backgroundColor = '#ffffff'
        categories[element.id].style.display = 'none'
    })
    buttonBool.filter(obj => obj.bool === true).forEach(element => {
        categoriesButtons[element.id].style.backgroundColor = '#ffb703'
        categories[element.id].style.display = 'block'
    })
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('currentCategoryId') != null)
        {
            let currentId = buttonBool.filter(el => el.bool)[0].id;
            buttonBool[currentId].bool = false;
            buttonBool[localStorage.getItem('currentCategoryId')].bool = true
        }
    const leftArrowDefault = document.getElementsByClassName('leftArrowDefault')[0]
    const leftArrowHover = document.getElementsByClassName('leftArrowHover')[0]
    const rightArrowDefault = document.getElementsByClassName('rightArrowDefault')[0]
    const rightArrowHover = document.getElementsByClassName('rightArrowHover')[0]
    
    const categories = Array.from(document.getElementsByClassName('category'))
    const categoriesButtons = Array.from(document.getElementsByClassName('selection')[0].getElementsByTagName('button'))
    const planets = Array.from(document.getElementsByClassName('exoplanets')[0].getElementsByClassName('planetImg'))
    Array.from(document.getElementsByClassName('exoplanets')[1].getElementsByClassName('planet')).forEach(element => {
        planets.push(element)
    })
    Array.from(document.getElementsByClassName('exoplanets')[2].getElementsByClassName('planet')).forEach(element => {
        planets.push(element)
    })
    Array.from(document.getElementsByClassName('exoplanets')[3].getElementsByClassName('planet')).forEach(element => {
        planets.push(element)
    })
    const planetsInfo = Array.from(document.getElementsByClassName('exoplanetsInfo')[0].getElementsByClassName('planet'))
    Array.from(document.getElementsByClassName('exoplanetsInfo')[1].getElementsByClassName('planet')).forEach(element => {
        planetsInfo.push(element)
    })
    Array.from(document.getElementsByClassName('exoplanetsInfo')[2].getElementsByClassName('planet')).forEach(element => {
        planetsInfo.push(element)
    })
    Array.from(document.getElementsByClassName('exoplanetsInfo')[3].getElementsByClassName('planet')).forEach(element => {
        planetsInfo.push(element)
    })
    const close = Array.from(document.getElementsByClassName('close'))

    leftArrowDefault.addEventListener('mouseover', () => {
        leftArrowDefault.style.display = 'none'
        leftArrowHover.style.display = 'block'
    })
    leftArrowHover.addEventListener('mouseover', () => {
        leftArrowDefault.style.display = 'none'
        leftArrowHover.style.display = 'block'
    })

    rightArrowDefault.addEventListener('mouseover', () => {
        rightArrowDefault.style.display = 'none'
        rightArrowHover.style.display = 'block'
    })
    rightArrowHover.addEventListener('mouseover', () => {
        rightArrowDefault.style.display = 'none'
        rightArrowHover.style.display = 'block'
    })

    leftArrowDefault.addEventListener('mouseout', () => {
        leftArrowDefault.style.display = 'block'
        leftArrowHover.style.display = 'none'
    })
    leftArrowHover.addEventListener('mouseout', () => {
        leftArrowDefault.style.display = 'block'
        leftArrowHover.style.display = 'none'
    })

    rightArrowDefault.addEventListener('mouseout', () => {
        rightArrowDefault.style.display = 'block'
        rightArrowHover.style.display = 'none'
    })
    rightArrowHover.addEventListener('mouseout', () => {
        rightArrowDefault.style.display = 'block'
        rightArrowHover.style.display = 'none'
    })

    leftArrowHover.addEventListener('click', () => { arrowAction(leftArrowHover, categories, categoriesButtons) })
    rightArrowHover.addEventListener('click', () => { arrowAction(rightArrowHover, categories, categoriesButtons) })

    categoriesButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            let currentId = buttonBool.filter(el => el.bool)[0].id;
            buttonBool[currentId].bool = false
            currentId = index
            buttonBool[currentId].bool = true
            changeCategory(categories, categoriesButtons);
        })
    })
    planets.forEach((element, index) => {
        element.addEventListener('click', () => {
            planetsInfo[index].style.display = 'flex'
            document.body.style.pointerEvents = 'none'
            planetsInfo[index].style.pointerEvents = 'all'
        })
    })
    close.forEach(element => {
        element.addEventListener('click', () => {
            element.parentElement.style.display = 'none'
            document.body.style.pointerEvents = 'all'
        })
    })

    arrowAction(null, categories, categoriesButtons);
})
