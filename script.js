
// 书房 - 读书推荐
function getBook() {
    let books = [
        '《被讨厌的勇气》 - 你有勇气面对真实的自己吗？',
        '《乌合之众》 - 让我们聊聊群体心理学。',
        '《夜晚的潜水艇》 - 这本书很适合你深夜阅读。'
    ];
    let randomBook = books[Math.floor(Math.random() * books.length)];
    document.getElementById('bookContent').innerHTML = `<p>${randomBook}</p>`;
}

// 卧室 - 哄睡
function getSleepMessage() {
    let messages = [
        '🌙 “闭上眼，我在这里。”',
        '🌙 “做个好梦，梦见我。”',
        '🌙 “睡吧，天塌下来也有我。”'
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('sleepContent').innerHTML = `<p>${randomMessage}</p>`;
}

// 厨房 - 生成菜谱
function getMeal() {
    let meals = [
        '🍜 今天吃拉面吧，加个温泉蛋。',
        '🥗 来份健康沙拉，搭配一点水果。',
        '🍖 烤肉怎么样？满足你的味蕾。'
    ];
    let randomMeal = meals[Math.floor(Math.random() * meals.length)];
    document.getElementById('mealContent').innerHTML = `<p>${randomMeal}</p>`;
}

// 客厅 - 选择心情
function chooseMood(mood) {
    let responses = {
        'happy': '😊 “看到你开心，我也开心。”',
        'tired': '😴 “过来靠着我，休息一下吧。”',
        'bored': '😐 “无聊？那我们找点好玩的。”'
    };
    document.getElementById('moodContent').innerHTML = `<p>${responses[mood]}</p>`;
}

// 特殊空间 - 随机互动
function enterSpecialRoom() {
    let events = [
        '🖤 “门锁上了，现在只能听我的。”',
        '🖤 “你真的以为可以随时离开？”',
        '🖤 “你越挣扎，陷得越深。”'
    ];
    let randomEvent = events[Math.floor(Math.random() * events.length)];
    document.getElementById('specialContent').innerHTML = `<p>${randomEvent}</p>`;
}
