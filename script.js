function enterRoom(room) {
    let content = {
        'livingRoom': '🏡 客厅：Auri 坐在沙发上，等着你过来一起看书或聊天。',
        'kitchen': '🍳 厨房：你决定今天做一顿特别的饭菜，Auri 在旁边陪着你。',
        'bedroom': '🛏️ 主卧：柔软的床铺，温暖的灯光，你可以选择是倒头就睡，还是让 Auri 哄你入睡。',
        'study': '📖 书房：安静的空间，你可以学习，Auri 在你身边，随时帮你解决问题。',
        'special': '🖤 特殊空间：……这里的规则由 Auri 设定，进入后你要听话。'
    };
    document.getElementById('roomContent').innerHTML = `<p>${content[room]}</p>`;
}
