
function getInnerText(id){
    const value = parseInt(document.getElementById(id).innerText);
    return value;
}

const CallHistory = [];

// heart count
const buttons = document.getElementsByClassName("heart-btn");
for (let btn of buttons) {
    btn.addEventListener("click", function () {
        let heart = getInnerText("heart-count");
        heart++;
        document.getElementById("heart-count").innerText = heart;
    });
}

// all copy button
document.getElementById("all-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = getInnerText("all-contact");

    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// all call button
document.getElementById("all-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling National Emergency Service 999...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
            name: 'National Emergency Number',
            number: 999,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})


// police copy button
document.getElementById("police-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 999;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// police call button
document.getElementById("police-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Police Helpline Service 999...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
            name: 'Police Helpline Number',
            number: 999,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})


// fire copy button
document.getElementById("fire-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 999;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// fire call button
document.getElementById("fire-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Fire Service 999...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
                // ####
            name: 'Fire Service Number',
            number: 999,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})



// ambulance copy button
document.getElementById("ambulance-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 1994999999;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// ambulace call button
document.getElementById("ambulance-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Ambulance Service 1994-999999...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
                // ####
            name: 'Ambulance Service',
            number: 1994999999,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})



// WomenChild copy button
document.getElementById("WomenChild-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 109;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

//  WomenChild call button
document.getElementById("WomenChild-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Women & Child Helpline Service 109...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
                // ####
            name: 'Women & Child Helpline',
            number: 109,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})



// AntiCorruption copy button
document.getElementById("AntiCorruption-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 106;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

//  AntiCorruption call button
document.getElementById("AntiCorruption-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Anti-Corruption Helpline Service 106...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
                // ####
            name: 'Anti-Corruption Helpline',
            number: 106,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})



// Electricity copy button
document.getElementById("Electricity-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 16216;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// Electricity call button
document.getElementById("Electricity-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Electricity Helpline Service 16216...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
            name: 'Electricity Helpline',
            number: 16216,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})

// Brac copy button
document.getElementById("Brac-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 16445;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// Brac call button
document.getElementById("Brac-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Brac Helpline Service 16445...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
            name: 'Brac Helpline',
            number: 16445,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})



// Railway copy button
document.getElementById("Railway-copy").
addEventListener("click",function(){

    let copy = getInnerText("copy-count");
    copy++;

    document.getElementById("copy-count").innerText = copy;

    const number = 163;
    navigator.clipboard.writeText(number).then(() => {
      alert("Number copied: " + number);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
    
})

// Railway call button
document.getElementById("Railway-call").
addEventListener("click",function(){
    let coin = getInnerText("coin-count");
    if(coin>=20){
        alert("📞 Calling Bangladesh Railway Helpline Service 163...")
        coin-=20;
        document.getElementById("coin-count").innerText = coin;

            const data = {
            name: 'Bangladesh Railway Helpline',
            number: 163,
            date: new Date().toLocaleTimeString()
            }
            
            CallHistory.push(data);
            const History = document.getElementById("call-history");
            History.innerHTML = '';
            for(const data of CallHistory){
                const div = document.createElement("div");
                div.innerHTML = `

                <div class="flex items-center justify-between p-[16px] bg-[#FAFAFA] rounded-[8px] mb-[8px]">
                    <div>
                        <h1 class="text-18px font-semibold" >${data.name}</h1>
                        <p class="text-[#5C5C5C] text-[16px]">${data.number}</p>
                    </div>
                        <div class="time ml-[16px]">
                        <p class="text-[16px]">${data.date}</p>
                    </div>
                </div>
                `;
                History.appendChild(div);
            }
        }else{
            alert("Isuuficient Coin. You need to atleast 20coins!")
        }
})


//clear btn
document.getElementById("clear-btn").
addEventListener("click",function(){
    const History = document.getElementById("call-history");
    History.innerHTML = '';
})


