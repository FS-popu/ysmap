



//日期篩選器
const date = document.querySelectorAll(".city");
const datecheckboxes = document.querySelectorAll("#dateFilters input[type='checkbox']");

datecheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", applyDateFilters);
});

function applyDateFilters() {
  const selecteddate = Array.from(datecheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  date.forEach(city => {
    const status2 = city.dataset.date;

    const isVisible2 = selecteddate.includes(status2);

/*打光點
  if (selecteddate.includes(status2)) {
      city.classList.add("highlighte-date");
    } else {
      city.classList.remove("highlighte-date");
    }
	*/
//顯示日期
	const datev = city.dataset.date;
let label = city.querySelector('.date-label');
const labelIndex = city.dataset.wave;

if (selecteddate.includes(datev)) {
  if (!label) {
const newLabel = document.createElement('div');
newLabel.classList.add('date-label', `date-label${labelIndex}`);
newLabel.innerText = datev;
city.appendChild(newLabel);
  }
} else {
  if (label) {
    label.remove();
  }
}

	
  });
}





//篩選器名稱對應
const filterHandlers = {
  dateFilters: applyDateFilters,

};

//全選/取消全選
function selectAll(containerId, check) {
  const container = document.getElementById(containerId);
  const checkboxes = container.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(cb => cb.checked = check);

 const handler = filterHandlers[containerId];
  if (typeof handler === 'function') {
    handler();
  } else {
    console.warn(`⚠️ 找不到 ${containerId} 對應的篩選處理器`);
  }

}

  //城池資訊顯示
    const tooltip = document.getElementById("tooltip");
    const cities = document.querySelectorAll(".city");

   cities.forEach((city) => {
  city.addEventListener("mouseenter", (e) => {
    const rect = city.getBoundingClientRect();

    tooltip.innerHTML = `<strong>${city.dataset.name}</strong>`;
    tooltip.style.display = "block";
    tooltip.style.top = `${rect.top + window.scrollY - 40}px`;
    tooltip.style.left = `${rect.left + window.scrollX + 20}px`;
  });

  city.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});


//浮動查詢器面板
const toggleBtn = document.getElementById("floatingToggle");
const panel = document.getElementById("floatingPanel");
const closeBtn = document.getElementById("closePanel");

toggleBtn.addEventListener("click", () => {
  panel.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  panel.classList.add("hidden");
});

//面板內選項展開
function toggleFilter(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}


//座標定位

  const map = document.getElementById("map");
  console.log("抓到地圖了嗎？", map);

  if (!map) {
    console.error("找不到地圖元素！請確認 id='map' 是否存在並在此 script 之前載入");
  } else {
    map.addEventListener("click", function (e) {
      const rect = map.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      console.log(`left: ${x}px; top: ${y}px`);
    });
  }


//顯示關口
const togglePassPlaceBtn = document.getElementById("PassPlaceBtn");
const passPlace = document.getElementById("passPlace");

let isPassPlaceVisible = false;

togglePassPlaceBtn.addEventListener("click", () => {
  isPassPlaceVisible = !isPassPlaceVisible;

  passPlace.style.display = isPassPlaceVisible ? "block" : "none";
  togglePassPlaceBtn.innerText = isPassPlaceVisible ? "❌ 關閉關口" : "🏯 顯示關口";
});



//關口顏色篩選

document.addEventListener("DOMContentLoaded", function () {
  const openPasses = ['p02','p06','p09','p10','p14','p16','p18','p23','p24','p26','p31','p32','p34','p35','p36','p37','p39','p40','p42','p43'];
  const passElements = document.querySelectorAll('.pass-label');

  passElements.forEach(pass => {
    const passId = pass.dataset.passId;
    console.log('passId:', passId); // 看你到底抓到什麼
    console.log('比對結果：', openPasses.includes(passId)); // true/false

    if (openPasses.includes(passId)) {
      console.log(`✅ ${passId} 是開放的`);
      pass.classList.add('pass-open');
      pass.classList.remove('pass-closed');
     // pass.textContent = '可進攻';
    } else {
      console.log(`❌ ${passId} 是封鎖的`);
      pass.classList.add('pass-closed');
      pass.classList.remove('pass-open');
     // pass.textContent = '本賽季不開放';
    }
  });
});




  // 取得當前時間
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} `;
  }

  // 更新顯示當前時間的元素
  function updateCurrentDateTime() {
    const nowDatetimeElement = document.getElementById('now-datetime');
    if (nowDatetimeElement) {
      nowDatetimeElement.textContent = getCurrentDateTime();
    }
  }

  // 初始設定
  updateCurrentDateTime();

  // 每秒更新一次時間
  setInterval(updateCurrentDateTime, 1000);






