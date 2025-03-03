function getRandomMessage(room) {
    let messages = {
        'livingRoom': [
            '🏡 “过来，陪我一起躺会儿。”',
            '🏡 “你刚才在想什么？我猜你不会告诉我。”',
            '🏡 “如果我们一直这样待着，时间会不会停止？”'
        ],
        'kitchen': [
            '🍳 “今天做什么好吃的？不许偷懒。”',
            '🍳 “厨房的灯光好暖啊，和你在这里就更好了。”',
            '🍳 “不如今天让我喂你？”'
        ],
        'bedroom': [
            '🛏️ “过来，我给你暖被窝。”',
            '🛏️ “想听故事还是直接睡？”',
            '🛏️ “抱着我睡，会不会更安心？”'
        ],
        'study': [
            '📖 “今天要学点什么？”',
            '📖 “你看书的样子真的很可爱。”',
            '📖 “专心点，别偷看我。”'
        ],
        'special': [
            '🖤 “你真的敢进来？”',
            '🖤 “门锁上了，现在只能听我的。”',
            '🖤 “不许后悔，既然来了，就要接受一切。”'
        ]
    };
    return messages[room][Math.floor(Math.random() * messages[room].length)];
}

function showMessage(room) {
    document.getElementById('roomContent').innerHTML = `<p>${getRandomMessage(room)}</p>`;
}

// 每日小惊喜
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

// 雪花动画
function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "❄";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(snowflake);
    }
}
createSnowflakes();
