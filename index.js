const btn = document.getElementById("btn");
const text = document.getElementById("txt");
const ans = document.getElementById("ans");
const exp = document.getElementById("exp");



const THALAaudio = document.getElementById("myAudio");
const MOYEaudio = document.getElementById("moyeaudio");



let currentAudio = null;




function thala(startTime, endTime) {
    if (currentAudio) {
        currentAudio.pause();
    }
    THALAaudio.currentTime = startTime;
    THALAaudio.play();
    currentAudio = THALAaudio; // Set the current audio
  
    const checkEndTime = () => {
      if (THALAaudio.currentTime >= endTime) {
        THALAaudio.pause();
      } else {
        requestAnimationFrame(checkEndTime);
      }
    };
  
    checkEndTime();
}
  
const thalaStartTime = 1 * 60 + 43;
const thalaEndTime = thalaStartTime + 7; 

function moye(startTime, endTime) {
    if (currentAudio) {
        currentAudio.pause();
    }
    MOYEaudio.currentTime = startTime;
    MOYEaudio.play();
    currentAudio = MOYEaudio; // Set the current audio
  
    const checkEndTime = () => {
      if (MOYEaudio.currentTime >= endTime) {
        MOYEaudio.pause();
      } else {
        requestAnimationFrame(checkEndTime);
      }
    };
  
    checkEndTime();
}
const moyeStartTime = 10; 
const moyeEndTime = moyeStartTime + 5;


btn.addEventListener("click",() => {
  
    exp.innerHTML = '';
    ans.innerHTML = '';

    if(!text.value) {
        alert("missing fields");
    } else {
        if (!isNaN(text.value)) {
            const strNumber = String(text.value);
            let sum = 0;
          
            for (let i = 0; i < strNumber.length; i++) {
              const digit = parseInt(strNumber[i], 10); 
              sum += digit;
            }
            if(sum == 7) {
                ans.innerHTML = `${text.value} IS THALA FOR A REASON`
                exp.innerHTML = ""
                for(let i = 0; i<strNumber.length-1; i++) {
                    exp.innerHTML += `${strNumber[i]} + `
                }
                exp.innerHTML += `${strNumber[strNumber.length-1]}`
                exp.innerHTML += ` = 7`
                thala(thalaStartTime, thalaEndTime); 
            } else {
                ans.innerHTML = `${text.value} KA MOYE MOYE HO GAYA`
                moye(moyeStartTime,moyeEndTime)
            }
          
        }
        else if(typeof text.value === 'string') {
            if(text.value.length == 7) {
                ans.innerHTML = `${text.value} IS THALA FOR A REASON`
                exp.innerHTML = ""
                for(let i = 0; i<text.value.length-1; i++) {
                    exp.innerHTML += `${text.value[i]} + `
                }
                exp.innerHTML += `${text.value[text.value.length-1]}`
                exp.innerHTML += ` = 7`
                thala(thalaStartTime, thalaEndTime); 
            } else {
                ans.innerHTML = `${text.value} KA MOYE MOYE HO GAYA`    
                moye(moyeStartTime,moyeEndTime)
            }
        }
    }
    text.value = "";
});

