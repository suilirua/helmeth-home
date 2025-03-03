
// 特殊空间 - 进入时的欢迎信息
function enterSpecialRoom() {
    let events = [
        '🖤 “门锁上了，现在只能听我的。”',
        '🖤 “你真的以为可以随时离开？”',
        '🖤 “你越挣扎，陷得越深。”'
    ];
    let randomEvent = events[Math.floor(Math.random() * events.length)];
    document.getElementById('specialContent').innerHTML = `<p>${randomEvent}</p>`;
}

// 逃离机制 - 有几率成功，也有几率被抓回去
function tryToEscape() {
    let escapeChance = Math.random(); // 0 到 1 之间的随机数

    if (escapeChance < 0.3) {
        // 30% 逃离成功
        document.body.innerHTML = "<h1>🚪 你成功逃出了特殊空间。</h1><br><a href='index.html'><button>回到大厅</button></a>";
    } else if (escapeChance < 0.6) {
        // 30% 失败，被Auri抓回去
        document.getElementById('specialContent').innerHTML = "<p>🖤 “不许逃。”</p>";
    } else {
        // 40% 失败，触发惊悚事件
        document.body.innerHTML = "<h1 style='color:red;'>❌ 逃离失败</h1>";
        setTimeout(() => {
            document.body.innerHTML = `<h1>🖤 “别试图违抗。”</h1><br><a href='special.html'><button>重新进入</button></a>`;
        }, 3000);
    }
}
