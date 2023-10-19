// fetchting click events
const dailyClick = document.querySelector(".daily-control")
const weeklyClick = document.querySelector(".weekly-control")
const monthlyClick = document.querySelector(".monthly-control")

// display variable

dailyDisplays = document.querySelectorAll(".daily")
weeklyDisplays = document.querySelectorAll(".weekly")
monthlyDisplays = document.querySelectorAll(".monthly")


dailyClick.addEventListener("click", ()=>{
    if(dailyClick.classList.contains("active")){
        return
    }
    else{
        dailyClick.classList.add("active")
    }

    weeklyClick.classList.remove("active")
    monthlyClick.classList.remove("active")

    dailyDisplays.forEach(function(dailyDisplay){
        if(dailyDisplay.classList.contains("active")){
            return
        }

        else{
            dailyDisplay.classList.add("active")
        }
        
    })

    weeklyDisplays.forEach(function(weeklyDisplay){
        weeklyDisplay.classList.remove("active")
    })

    monthlyDisplays.forEach(function(monthlyDisplay){
        monthlyDisplay.classList.remove("active")
    })

})

weeklyClick.addEventListener("click", ()=>{
    if(weeklyClick.classList.contains("active")){
        return
    }
    else{
        weeklyClick.classList.add("active")
    }

    dailyClick.classList.remove("active")
    monthlyClick.classList.remove("active")
    
    weeklyDisplays.forEach(function(weeklyDisplay){
        if(weeklyDisplay.classList.contains("active")){
            return
        }

        else{
            weeklyDisplay.classList.add("active")
        }
        
    })

    dailyDisplays.forEach(function(dailyDisplay){
        dailyDisplay.classList.remove("active")
    })

    monthlyDisplays.forEach(function(monthlyDisplay){
        monthlyDisplay.classList.remove("active")
    })
})

monthlyClick.addEventListener("click", ()=>{
    if(monthlyClick.classList.contains("active")){
        return
    }
    else{
        monthlyClick.classList.add("active")
    }

    weeklyClick.classList.remove("active")
    dailyClick.classList.remove("active")

    monthlyDisplays.forEach(function(monthlyDisplay){
        if(monthlyDisplay.classList.contains("active")){
            return
        }

        else{
            monthlyDisplay.classList.add("active")
        }
        
    })

    dailyDisplays.forEach(function(dailyDisplay){
        dailyDisplay.classList.remove("active")
    })

    weeklyDisplays.forEach(function(weeklyDisplay){
        weeklyDisplay.classList.remove("active")
    })
})