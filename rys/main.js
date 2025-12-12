

//公會篩選
const guildid = document.querySelectorAll(".city");
const checkboxes = document.querySelectorAll("#guildFilters input[type='checkbox']");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", applyGuildFilters);
});

const guildNameMap = {
  "A": "暮色晨光",
  "B": "暮影浮光",
  "C": "天涯海閣",
  "D": "彼岸花開",
  "E": "哭泣天使",
  "F": "一言不合",
  "G": "北葵向暖",
  "H": "PUIPUI",
  "I": "天天睡不飽ャ",
  "J": "甘噛み亭",
  "K": "ラーメン",
  "L": "兎BAN",
  "M": "Endzero",
  "N": "Absolve",
  "O": "뎔루나",
  "P": "수호",
  "Q": "냥냥",
  "R": "군단",
  "S": "화음",
  "T": "Vitamin",
  "U": "ConneQt",
  "V": "揍D|CK家族",
  "W": "猩球崛起",
  "X": "輕鬆小品",
  "Y": "無",
  "Z": "未有",
  "AA": "破ちぃかわㇱ",
  "AB": "酒処むちむち魂",
  "AC": "月の雫",
  "AD": "こだまのばるす",
  "AE": "水曜日のアリス",
  "AF": "OSUSHI",
  "AG": "月夜ノ黒猫",
  "AH": "lonely理論",
  "AI": "慕慕的後宮",
  "AJ": "薯條要不要加大",
  "AK": "深情狗叫",
  "AL": "坐看雲起時",
  "AM": "汐若初見",
  "AN": "智媛粉絲團",

};


function applyGuildFilters() {
  const selectedStatuses = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  guildid.forEach(city => {
    const status = city.dataset.guildId;

    const isVisible = selectedStatuses.includes(status);
/*
//打光點
  if (selectedStatuses.includes(status)) {
      city.classList.add("highlight-guild");
	  
	  
    } else {
      city.classList.remove("highlight-guild");
    }
*/
	
	let label = city.querySelector('.guild-label');

    if (isVisible) {
      // 沒有 label 才新增，避免重複加
      if (!label) {
        const newLabel = document.createElement('div');
         newLabel.classList.add('guild-label',`guild-${status}`);
        newLabel.innerText = guildNameMap[status] || status;
        city.appendChild(newLabel);
		console.log(`label class = guild-${status}`);
      }
    } 
	else {
      // 如果已經有 label 且不該顯示，就移除
      if (label) {
        label.remove();
		}
	  }
	  
  });
  
}


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

if (selecteddate.includes(datev)) {
  if (!label) {
    const newLabel = document.createElement('div');
    newLabel.classList.add('date-label');
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


//波次篩選器
const wave = document.querySelectorAll(".city");
const wavecheckboxes = document.querySelectorAll("#waveFilters input[type='checkbox']");

wavecheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", applyWaveFilters);
});


function applyWaveFilters() {
  const selectedwave = Array.from(wavecheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  wave.forEach(city => {
    const status3 = city.dataset.wave;
    const isVisible3 = selectedwave.includes(status3);
	

/*顯示箭頭
  if (selectedwave.includes(status3)) {
	const arrow = document.createElement('div');
	arrow.classList.add('arrow-down'); // 👈 箭頭的 class 加在箭頭身上
	city.appendChild(arrow);           // 👈 箭頭加進城市點裡面

    } else {
     const existingArrow = city.querySelector('.arrow-down');
if (existingArrow) {
  existingArrow.remove(); // 👈 一刀切掉箭頭，不留後患
}
    }
	*/
	//顯示波次
	const wavev= city.dataset.wave;
	let label = city.querySelector('.wave-label');

if (selectedwave.includes(wavev)) {
  if (!label) {
    const newLabel = document.createElement('div');
    newLabel.classList.add('wave-label');
    newLabel.innerText = wavev;
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
  guildFilters: applyGuildFilters,
  dateFilters: applyDateFilters,
  waveFilters: applyWaveFilters,
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

    tooltip.innerHTML = `<strong>${city.dataset.name}</strong><br>Status: ${city.dataset.status}<br>佔領公會: ${city.dataset.guild}<br>開放時間：${city.dataset.date}`;
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

//面板tab
/*
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));

    btn.classList.add("active");
    const tabId = btn.dataset.tab;
    document.getElementById(`tab-${tabId}`).classList.remove("hidden");
  });
});
*/
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;

    // 清除所有 tab 狀態
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    // 加入新的 active
    btn.classList.add("active");
    const tabId = btn.dataset.tab;
    document.getElementById(`tab-${tabId}`).classList.add("active");
  });
});



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

//模擬功能


//開關
let isSimulationMode = false;

document.getElementById("toggleSimulation").addEventListener("click", () => {
  isSimulationMode = !isSimulationMode;

  const btn = document.getElementById("toggleSimulation");
  btn.innerText = isSimulationMode ? "🔚 結束模擬模式" : "▶️ 開啟模擬模式";
  
   // 顯示/隱藏重設按鈕
  resetSimulation.style.display = isSimulationMode ? "inline-block" : "none";
  undoStep.style.display = isSimulationMode ? "inline-block" : "none";
  relocateModeBtn.style.display = isSimulationMode ? "inline-block" : "none";

  // 自動 reset 模擬狀態
  if (!isSimulationMode) {
    selectedCities.length = 0;

    const svgr = document.getElementById("pathLayer");
svgr.querySelectorAll("svg.arrow-path").forEach(el => el.remove());
svgr.querySelectorAll("svg.arrow-path, line").forEach(el => el.remove());

    const statusBar = document.getElementById("simulationStatus");
    if (statusBar) statusBar.innerText = "目前進攻路線：";
	
	  // ✅ 一定要加這行
  isRelocateMode = false;
  document.querySelectorAll(".relocate-icon").forEach(icon => icon.remove());
relocateModeBtn.innerText = "🏠 搬家模式";

  
  
  }
});



//確認被點擊的城市有被收進陣列
const selectedCities = [];

const cities2 = document.querySelectorAll(".city");

cities2.forEach(city => {
  city.addEventListener("click", () => {
    if (!isSimulationMode) return;

    // 🏠 搬家模式
    if (isRelocateMode) {
      if (!city.querySelector(".relocate-icon")) {
        const icon = document.createElement("div");
        icon.classList.add("relocate-icon");
        icon.innerText = "🏠";
        city.appendChild(icon);
      }

      selectedCities.push({
        element: city,
        isRelocate: true
      });

      isRelocateMode = false;
      relocateModeBtn.innerText = "🏠 設定搬家點"; // 自動切回文字

       const len = selectedCities.length;
    if (len >= 2) {
      console.log("📦 搬家模式畫箭頭", selectedCities[len - 2], selectedCities[len - 1]);
      drawArrowBetween(selectedCities[len - 2], selectedCities[len - 1]);
    }

    updateSimulationStatus();
    return; // ⬅️ 一定要 return，不然會繼續往下跑進攻邏輯
  }

    // ⚔️ 一般進攻模式
    selectedCities.push({
      element: city,
      isRelocate: isRelocateMode
    });

const len = selectedCities.length;
if (len >= 2) {
  console.log("🧪 drawArrowBetween 被呼叫：", selectedCities[len - 2], selectedCities[len - 1]);
  drawArrowBetween(selectedCities[len - 2], selectedCities[len - 1]);
}
    updateSimulationStatus();
  });
});




//畫箭頭
function drawArrowBetween(from, to) {
  if (!from || !to) return;
  const fromEl = from.element;
  const toEl = to.element;

  const fromRect = from.element.getBoundingClientRect();
  const toRect = to.element.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect();

  // 算出中心點座標（相對於地圖）
  const startX = fromRect.left + fromRect.width / 2 - mapRect.left;
  const startY = fromRect.top + fromRect.height / 2 - mapRect.top;
  const endX = toRect.left + toRect.width / 2 - mapRect.left;
  const endY = toRect.top + toRect.height / 2 - mapRect.top;

  // 創建 SVG line
  const svg = document.getElementById("pathLayer");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", startX);
  line.setAttribute("y1", startY);
  line.setAttribute("x2", endX);
  line.setAttribute("y2", endY);
  line.setAttribute("stroke", "red");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("marker-end", isRelocateMode ? "url(#move-arrowhead)" : "url(#arrowhead)");

  svg.appendChild(line);
}

//回退一步
const undoBtn = document.getElementById("undoStep");
undoBtn.addEventListener("click", () => {
  if (selectedCities.length > 0) {
    const removed = selectedCities.pop(); // ⬅️ 拿掉最後一個

    // 👉 如果是搬家點，就把小房子圖示移除
    if (removed.isRelocate) {
      const icon = removed.element.querySelector(".relocate-icon");
      if (icon) icon.remove();
    }

    // 🔥 清除所有箭頭 (保留 <defs>)
    const svg1 = document.getElementById("pathLayer");
    svg1.querySelectorAll("svg").forEach(el => el.remove());

    // 🔁 重畫剩下的路線
    for (let i = 1; i < selectedCities.length; i++) {
      drawArrowBetween(selectedCities[i - 1], selectedCities[i]);
    }

    updateSimulationStatus();
  }
});



//清除全部箭頭
document.getElementById("resetSimulation").addEventListener("click", () => {
  // 1. 清除已選城市
  selectedCities.length = 0;

  // 2. 清除所有箭頭
  const svg2 = document.getElementById("pathLayer");
   svg2.querySelectorAll("line").forEach(line => line.remove());
   
  // 🔄 清除所有搬家圖示
document.querySelectorAll(".relocate-icon").forEach(icon => icon.remove());



  // 3. 清空狀態欄（如果有）
  const statusBar = document.getElementById("simulationStatus");
  if (statusBar) statusBar.innerText = "目前進攻路線：";
});


//搬家模式

let isRelocateMode = false;

const relocateModeBtn = document.getElementById("relocateModeBtn");

relocateModeBtn.addEventListener("click", () => {
  isRelocateMode = !isRelocateMode;

  relocateModeBtn.innerText = isRelocateMode
    ? "🚧 結束搬家模式"
    : "🏠 設定搬家點";
});


// 畫箭頭 (用 SVG)

function drawArrowBetween(from, to) {
  const pathLayer = document.getElementById("pathLayer");
  const map = document.getElementById("map");
  
  const fromEl = from.element;
  const toEl = to.element;

  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect(); // 基準座標

  // 取得 from/to 相對於 map-container 的中心位置
  const x1 = fromRect.left - mapRect.left + fromRect.width / 2;
  const y1 = fromRect.top - mapRect.top + fromRect.height / 2;
  const x2 = toRect.left - mapRect.left + toRect.width / 2;
  const y2 = toRect.top - mapRect.top + toRect.height / 2;

  const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  /*
  svg3.setAttribute("class", "arrow-path");
  svg3.style.position = "absolute";
  svg3.style.top = "0";
  svg3.style.left = "0";
  svg3.setAttribute("width", "100%");
  svg3.setAttribute("height", "100%");
  svg3.style.overflow = "visible";
  svg3.style.zIndex = "10";
  svg3.style.pointerEvents = "none";
  */
  

  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
  arrow.setAttribute("x1", x1);
  arrow.setAttribute("y1", y1);
  arrow.setAttribute("x2", x2);
  arrow.setAttribute("y2", y2);
  
  arrow.setAttribute("stroke", "red");
  arrow.setAttribute("stroke-width", "2");
  //依據需求換線條

if (to.isRelocate) {
  arrow.setAttribute("stroke", "blue");
  arrow.setAttribute("stroke-dasharray", "5,5"); // 虛線
  arrow.setAttribute("stroke-width", "3");
    console.log("🏠 畫搬家箭頭");
} else {
  arrow.setAttribute("stroke", "red");
  arrow.setAttribute("stroke-width", "2");
  console.log("⚔️ 畫進攻箭頭");
}

 // arrow.setAttribute("marker-end", isRelocateMode ? "url(#move-arrowhead)" : "url(#arrowhead)");
   //arrow.setAttribute("marker-end", "url(#arrowhead)");
    arrow.setAttribute("marker-end", to.isRelocate ? "url(#move-arrowhead)" : "url(#arrowhead)");
   console.log("✅ arrowhead 被設定進去了");


  svg3.appendChild(arrow);
  pathLayer.appendChild(svg3);
   //pathLayer.appendChild(arrow);
}


// 顯示路線狀態
function updateSimulationStatus() {
  const statusBar = document.getElementById("simulationStatus");
  if (!statusBar) return;

  const labels = selectedCities.map(item =>
    item.isRelocate
      ? `(搬家) ${item.element.dataset.name}`
      : item.element.dataset.name
  );

  statusBar.innerText = `目前進攻路線：${labels.join(" ➝ ")}`;
}

//顯示出生地
const toggleBirthPlaceBtn = document.getElementById("toggleBirthPlaceBtn");
const birthPlace = document.getElementById("birthPlace");

let isBirthPlaceVisible = false;

toggleBirthPlaceBtn.addEventListener("click", () => {
  isBirthPlaceVisible = !isBirthPlaceVisible;

  birthPlace.style.display = isBirthPlaceVisible ? "block" : "none";
  toggleBirthPlaceBtn.innerText = isBirthPlaceVisible ? "❌ 關閉出生地" : "🎌 顯示出生地";
});

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



// 主查詢功能
const searchInput = document.getElementById("reportSearch");
const tbody = document.querySelector("#reportTable tbody");
const reportBox = document.getElementById("battleReportBox");

// 🔍 強化查詢功能：支援多欄位模糊比對
searchInput.addEventListener("input", function () {
  const keyword = this.value.trim().toLowerCase();
  tbody.innerHTML = "";
  reportBox.innerHTML = "";

  if (keyword === "") return;

  for (const [name, report] of Object.entries(battleReports)) {
    const nameMatch = name.toLowerCase().includes(keyword);
    const levelMatch = report.level.toLowerCase().includes(keyword);
    const ownerMatch = report.owner.toLowerCase().includes(keyword);

    if (!(nameMatch || levelMatch || ownerMatch)) continue;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${report.level}</td>
      <td>${name}</td>
      <td class="show-report" data-name="${name}" style="color:blue; cursor:pointer; text-decoration:underline;">
        ${report.owner}
      </td>
    `;
    tbody.appendChild(tr);
  }
});


// 📖 顯示戰報細節
document.querySelector("#reportTable").addEventListener("click", function (e) {
  if (e.target.classList.contains("show-report")) {
    const name = e.target.dataset.name;
    const report = battleReports[name];

    reportBox.innerHTML = `
      <h4>${name}</h4>
      <p>開放日：${report.date}</p>
      <p>佔領公會：${report.owner}</p>
     
      <button id="closeReport">❌ 關閉資訊</button>
    `;
  }
});

// ❌ 關閉戰報
reportBox.addEventListener("click", function (e) {
  if (e.target.id === "closeReport") {
    reportBox.innerHTML = "";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // 清除所有 tab 的狀態
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

  // 預設啟用 tab-filter
  const defaultTabBtn = document.querySelector(".tab-btn[data-tab='filter']");
  const defaultTabContent = document.getElementById("tab-filter");

  if (defaultTabBtn && defaultTabContent) {
    defaultTabBtn.classList.add("active");
    defaultTabContent.classList.add("active");
  }
});

