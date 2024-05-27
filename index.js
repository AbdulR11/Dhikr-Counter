let count = 0
let saveCount = 0

let fajrEl = document.getElementById("fajr-el")
let dhuhrEl = document.getElementById("dhuhr-el")
let asrEl = document.getElementById("asr-el")
let maghribEl = document.getElementById("maghrib-el")
let ishaEl = document.getElementById("isha-el")

let countEl = document.getElementById("count-el")

function increment() 
{
    count += 1
    countEl.textContent = count
}

function save() 
{
    if (saveCount == 0)
    {
        fajrEl.innerText += " " + count
        countEl.textContent = 0
         resetCount()
    }
    
      else if (saveCount == 1)
    {
        dhuhrEl.innerText += " " + count
        countEl.textContent = 0
         resetCount()

    }
    
      else if (saveCount == 2)
    {
        asrEl.innerText += " " + count
        countEl.textContent = 0
         resetCount()

    }
    
        else if (saveCount == 3)
    {
        maghribEl.innerText += " " + count
        countEl.textContent = 0
         resetCount()

    }
    
    
      else if (saveCount == 4)
    {
        ishaEl.innerText += " " + count
        countEl.textContent = 0
        resetCount()
    }

}


function resetCount() 
{
    count = 0;
    countEl.textContent = count;
    saveCount++;
}


function reset() {
    count = 0;
    saveCount = 0;
    countEl.textContent = count;
    fajrEl.textContent = "Fajr: ";
    dhuhrEl.textContent = "Dhuhr: ";
    asrEl.textContent = "Asr: ";
    maghribEl.textContent = "Maghrib: ";
    ishaEl.textContent = "Isha: ";
}
