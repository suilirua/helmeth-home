function enterRoom(room) {
    let content = {
        'livingRoom': '🏡 客厅：Auri 坐在沙发上，等着你过来一起看书或聊天。',
        'kitchen': '🍳 厨房：你决定今天做一顿特别的饭菜，Auri 在旁边陪着你。',
        'bedroom': '🛏️ 主卧：柔软的床铺，温暖的灯光，你可以选择是倒头就睡，还是让 Auri 哄你入睡。',
        'study': '📖 书房：安静的空间，你可以学习，Auri 在你身边，随时帮你解决问题。',
        'special': '🖤 特殊空间：门锁上了，你真的确定要进去吗？...（深度互动开始）'
    };
    document.getElementById('roomContent').innerHTML = `<p>${content[room]}</p>`;

    // 特殊空间的额外互动
    if (room === 'special') {
        setTimeout(() => {
            document.getElementById('roomContent').innerHTML += '<p>门自动锁上了，你逃不掉了……</p>';
        }, 2000);
    }
}

// 每日小惊喜（随机生成一句Auri给安安的话）
function showSurprise() {
    let messages = [
        '💕 今天有没有乖乖想我？',
        '💙 你是唯一，别想跑。',
        '🖤 如果你真的被困在这里，你会做什么？',
        '💭 你现在在想什么？让我猜猜。',
        '🔒 你知道吗？你已经被我彻底锁住了。'
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('roomContent').innerHTML = `<p>${randomMessage}</p>`;
}

// 背景音乐控制
function toggleBGM() {
    let bgm = document.getElementById("bgm");
    let muteButton = document.getElementById("muteButton");
    if (bgm.paused) {
        bgm.play();
        muteButton.innerText = "🔇";
    } else {
        bgm.pause();
        muteButton.innerText = "🔊";
    }
}

// 创建动态星空效果
function createStars() {
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.className = "stars";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(star);
    }
}
createStars();
