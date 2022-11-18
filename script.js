const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItems = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let current = item      
        let tabId = current.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! current.classList.contains('active'))

        tabsBtn.forEach(function(item){
            item.classList.remove('active')
            
        })

        tabsItems.forEach(function(item){
            item.classList.remove('active')
            
        })


        current.classList.add('active');
        currentTab.classList.add('active')
    })
})

document.querySelector('tabs__nav-btn').click()
