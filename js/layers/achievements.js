addLayer('ach', {
    name: 'Achievements',
    symbol: '⭐',
    startData() {
        return {
            unlocked: true,
            short_mode: false,
        };
    },
    color: '#ffff00',
    row: 'side',
    resource: 'achievements',
    tabFormat: {
        'Achievements': {
            content: [
                ['display-text', () => `You have ${formatWhole(layers.ach.ownedAchievements())} / ${formatWhole(layers.ach.totalAchievements())} achievements`],
                ['row', [
                    ['display-text', 'Short tooltip mode'],
                    'blank',
                    ['toggle', ['ach', 'short_mode']]
                ]],
                'blank',
                ['achievements', () => layers.ach.getAchievementsRows()],
            ],
        },
        'Bonus': {
            content: [
                ['display-text', () => `You have ${formatWhole(layers.ach.ownedAchievements('bonus'))} / ${formatWhole(layers.ach.totalAchievements('bonus'))} bonus achievements`],
                'blank',
                ['achievements', () => layers.ach.getAchievementsRows('bonus')],
            ],
            unlocked() {
                return layers.ach.totalAchievements('bonus').gte(1);
            },
            buttonStyle: {
                'border-color': 'rgb(0,127,255)',
            },
            name: 'Bonus Achievements',
        },
        'Secrets': {
            content: [
                ['display-text', () => `You have ${formatWhole(layers.ach.ownedAchievements('secret'))} secret achievements`],
                'blank',
                ['achievements', () => layers.ach.getAchievementsRows('secret')],
            ],
            unlocked() {
                return layers.ach.ownedAchievements('secret').gte(1);
            },
            buttonStyle: {
                'border-color': 'rgb(127,0,255)',
            },
            name: 'Secret Achievements',
        },
    },
    achievements: {
        //#region Normal achievements
        11: {
            name: 'Murderer',
            done() { return player.xp.kills.gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.xp.color); },
            tooltip: 'Kill a poor innocent slime :(',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.xp.color;
                return s;
            },
        },
        12: {
            name: 'Unlocked an upgrade',
            done() { return player.xp.kills.gte(5); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.xp.color); },
            tooltip: 'Kill more to unlock more upgrades',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.xp.color;
                return s;
            },
        },
        13: {
            name: 'Harder monster',
            done() { return player.xp.level.gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.xp.color); },
            tooltip: 'Level up the enemy',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.xp.color;
                return s;
            },
        },
        14: {
            name: 'They just keep running into it',
            done() { return hasUpgrade('xp', 22); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.xp.color); },
            tooltip: 'Passively slay monsters',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.xp.color;
                return s;
            },
        },
        15: {
            name: 'Sliced slimes',
            done() { return player.xp.kills.gte(250); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.xp.color); },
            tooltip: 'Kill 250 slimes',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.xp.color;
                return s;
            },
        },
        21: {
            name: 'Sticky sword',
            done() { return getBuyableAmount('lo', 11).gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Buy a sword',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        22: {
            name: 'Better than a coin flip',
            done() { return Object.values(tmp.lo.items).some(v => typeof v == 'object' && 'chance' in v && v.chance.gte(.5) && v.unlocked); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Get an item\'s chance above 50%',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        23: {
            name: 'Many bags',
            done() { return buyableEffect('lo', 12).xp_keep.gte(9); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Keep all your XP upgrades',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        24: {
            name: 'All the time',
            done() { return Object.values(tmp.lo.items).some(v => typeof v == 'object' && 'chance' in v && v.chance.gte(1) && v.unlocked); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Get an item\'s chance above 100%',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        25: {
            name: 'Sword Trap duplicate',
            done() { return buyableEffect('lo', 13).gte(.25); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Get Slime spike\'s effect to at least 25%',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        31: {
            name: 'Level up',
            done() { return player.l.best.gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.l.color); },
            tooltip: 'Get a level',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.l.color;
                return s;
            },
            unlocked() { return player.l.unlocked; },
        },
        32: {
            name: 'Big damage',
            done() { return tmp.l.skills.attack.effect.gte(1.5); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.l.color); },
            tooltip: 'Deal at least 50% more damage through your attack skill',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.l.color;
                return s;
            },
            unlocked() { return player.l.unlocked; },
        },
        33: {
            name: 'Half price level',
            done() { return tmp.l.skills.learning.effect.l_div.gte(2); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.l.color); },
            tooltip: 'Get skilled enough to halve your level cost',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.l.color;
                return s;
            },
            unlocked() { return player.l.unlocked; },
        },
        34: {
            name: 'Faster skills',
            done() { return tmp.l.skills.running.effect.gte(5); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.l.color); },
            tooltip: 'Multiply skilling speed by at least 5',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.l.color;
                return s;
            },
            unlocked() { return player.l.unlocked; },
        },
        35: {
            name: 'More skill points',
            done() { return hasMilestone('l', 3); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.l.color); },
            tooltip: 'Get your levels to boost your skill point amount',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.l.color;
                return s;
            },
            unlocked() { return player.l.unlocked; },
        },
        41: {
            name: 'I wasn\'t done yet!',
            done() { return player.b.best.gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.b.color); },
            tooltip() {
                if (hasAchievement(this.layer, this.id)) return 'Get ambushed by the Slime King';
                return 'You cant shake the feeling that something is <i>seething</i>';
            },
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.b.color;
                return s;
            },
            unlocked() { return tmp.b.layerShown; },
        },
        42: {
            name: 'Patience pays',
            done() { return hasChallenge('b', 11); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.b.color); },
            tooltip() {
                if (hasAchievement(this.layer, this.id) || inChallenge('b', 11)) return 'Defeat the Slime King';
                return 'Defeat ???';
            },
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.b.color;
                return s;
            },
            unlocked() { return tmp.b.layerShown; },
        },
        43: {
            name: 'Debt free',
            done() { return hasChallenge('b', 12); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.b.color); },
            tooltip() {
                if (hasAchievement(this.layer, this.id) || inChallenge('b', 12)) return 'Defeat the Lich CEO';
                return 'Defeat ???';
            },
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.b.color;
                return s;
            },
            unlocked() { return player.b.unlocked; },
        },
        44: {
            name: 'Working for a better yesterday',
            done() { return false; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.b.color); },
            tooltip() {
                if (hasAchievement(this.layer, this.id) || inChallenge('b', 21)) return 'Defeat tomorrow\'s pirates';
                return 'Defeat ???';
            },
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.b.color;
                return s;
            },
            unlocked() { return player.b.unlocked; },
        },
        45: {
            name: 'Hungry for more',
            done() { return false; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.b.color); },
            tooltip: 'Defeat ???',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.b.color;
                return s;
            },
            unlocked() { return player.b.unlocked; },
        },
        51: {
            name: 'Now you can mine iron (no you can\'t)',
            done() { return hasUpgrade('o', 11); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.o.color); },
            tooltip: 'Get a stone pickaxe',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.o.color;
                return s;
            },
            unlocked() { return tmp.o.layerShown; },
        },
        52: {
            name: 'Synergy',
            done() { return hasUpgrade('o', 13); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.o.color); },
            tooltip: 'Get a stone pickaxe',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.o.color;
                return s;
            },
            unlocked() { return tmp.o.layerShown; },
        },
        53: {
            name: 'Automatic',
            done() { return hasUpgrade('o', 22); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.o.color); },
            tooltip: 'Get a copper drill',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.o.color;
                return s;
            },
            unlocked() { return tmp.o.layerShown; },
        },
        54: {
            name: 'That\'s useless',
            done() { return hasUpgrade('o', 31); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.o.color); },
            tooltip: 'Start carrying a massive chunk of stone',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.o.color;
                return s;
            },
            unlocked() { return tmp.o.layerShown; },
        },
        55: {
            name: 'More things to make',
            done() { return hasUpgrade('o', 33); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.o.color); },
            tooltip: 'Get a tin anvil',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.o.color;
                return s;
            },
            unlocked() { return tmp.o.layerShown; },
        },
        61: {
            name: 'Warm to the touch',
            done() { return getBuyableAmount('lo', 21).gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Buy a stone forge',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        62: {
            name: 'Voted out',
            done() { return getBuyableAmount('lo', 22).gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Buy a copper golem',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        63: {
            name: 'Iron- tin? Really?',
            done() { return getBuyableAmount('lo', 23).gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Buy a tin chest',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        64: {
            name: 'You know the drill',
            done() { return hasUpgrade('o', 22) && getBuyableAmount('lo', 23).gte(player.o.upgrades.indexOf(22)); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Keep your copper drill',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        65: {
            name: 'Full chest',
            done() { return getBuyableAmount('lo', 23).gte(9); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.lo.color); },
            tooltip: 'Keep all your ore upgrades',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.lo.color;
                return s;
            },
            unlocked() { return player.lo.shown; },
        },
        91: {
            name: 'Money',
            done() { return player.s.points.gte(1); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.s.color); },
            tooltip: 'Sell some of your crafted items',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.s.color;
                return s;
            },
            unlocked() { return tmp.s.layerShown; },
        },
        92: {
            name: 'Less debts',
            done() { return player.s.upgrades.some(id => id <= 51); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.s.color); },
            tooltip: 'Pay a debt off',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.s.color;
                return s;
            },
            unlocked() { return tmp.s.layerShown; },
        },
        93: {
            name: 'More items',
            done() { return hasUpgrade('s', 72) && hasUpgrade('lo', 11); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.s.color); },
            tooltip: 'Buy a second lootbag',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.s.color;
                return s;
            },
            unlocked() { return tmp.s.layerShown; },
        },
        94: {
            name: 'Bronze',
            done() { return player.s.points.gte(100); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.s.color); },
            tooltip: 'Get a bronze coin',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.s.color;
                return s;
            },
            unlocked() { return tmp.s.layerShown; },
        },
        95: {
            name: 'Another anvil',
            done() { return hasUpgrade('s', 83); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, layers.s.color); },
            tooltip: 'Buy a better anvil',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = layers.s.color;
                return s;
            },
            unlocked() { return tmp.s.layerShown; },
        },
        //#endregion
        //#region Bonus achievements
        101: {
            name: 'Overslime',
            done() { return hasChallenge('b', 21); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, '#BB0000'); },
            tooltip: 'Beat the Slime Queen',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = '#BB0000';
                return s;
            },
            unlocked() { return tmp.b.challenges[21].unlocked; },
        },
        102: {
            name: '???',
            done() { return false; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, '#BB0000'); },
            tooltip: '???',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = '#BB0000';
                return s;
            },
            unlocked() { return false; },
        },
        103: {
            name: '???',
            done() { return false; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, '#BB0000'); },
            tooltip: '???',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = '#BB0000';
                return s;
            },
            unlocked() { return false; },
        },
        104: {
            name: '???',
            done() { return false; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, '#BB0000'); },
            tooltip: '???',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = '#BB0000';
                return s;
            },
            unlocked() { return false; },
        },
        105: {
            name: '???',
            done() { return false; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Achievement Unlocked!", 3, '#BB0000'); },
            tooltip: '???',
            style() {
                let s = {};
                if (hasAchievement(this.layer, this.id)) s['background-color'] = '#BB0000';
                return s;
            },
            unlocked() { return false; },
        },
        //#endregion Bonus achievements
        //#region Secret achievements
        71: {
            name: 'Why did I even bother',
            done() {
                return canCompleteChallenge('b', 11) &&
                    [21, 22, 23].every(id => getBuyableAmount('lo', id).eq(0)) &&
                    ['stone', 'copper_ore', 'tin_ore'].every(item => player.lo.items[item].eq(0));
            },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Secret Achievement Unlocked!", 3, 'rgb(127,0,255)'); },
            tooltip: 'Beat the Slime King without using ores',
            style: { 'background-color': 'rgb(127,0,255)' },
            unlocked() { return hasAchievement(this.layer, this.id); },
        },
        81: {
            name: 'Even levels?!',
            done() { return inChallenge('b', 12) && player.l.points.gt(100) && player.l.points.lte(101); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Secret Achievement Unlocked!", 3, 'rgb(127,0,255)'); },
            tooltip: 'Lose a level to your debts',
            style: { 'background-color': 'rgb(127,0,255)' },
            unlocked() { return hasAchievement(this.layer, this.id); },
        },
        82: {
            name: 'Full negation',
            done() { return inChallenge('b', 12) && player.s.upgrades.filter(id => id < 51).length == 12; },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Secret Achievement Unlocked!", 3, 'rgb(127,0,255)'); },
            tooltip: 'Cancel all your debts',
            style: { 'background-color': 'rgb(127,0,255)' },
            unlocked() { return hasAchievement(this.layer, this.id); },
        },
        83: {
            name: 'Straight to the point',
            done() { return inChallenge('b', 12) && player.s.upgrades.filter(id => id < 51).length == 0 && hasUpgrade('s', 51); },
            onComplete() { doPopup("achievement", tmp[this.layer].achievements[this.id].name, "Secret Achievement Unlocked!", 3, 'rgb(127,0,255)'); },
            tooltip: 'Only pay your final debt',
            style: { 'background-color': 'rgb(127,0,255)' },
            unlocked() { return hasAchievement(this.layer, this.id); },
        },
        //#endregion
    },
    type: 'none',
    position: 1,
    tooltip() {
        if (player.ach.short_mode) {
            let pieces = [
                layerColor('ach', `${formatWhole(layers.ach.ownedAchievements())} / ${formatWhole(layers.ach.totalAchievements())}`),
            ];
            if (tmp.ach.tabFormat['Bonus'].unlocked) {
                const color = tmp.ach.tabFormat['Bonus'].buttonStyle['border-color'];
                pieces.push(`<span style="color:${color};text-shadow:${color} 0 0 10px";>${formatWhole(layers.ach.ownedAchievements('bonus'))} / ${formatWhole(layers.ach.totalAchievements('bonus'))}</span>`);
            }
            if (layers.ach.ownedAchievements('secret').gte(1)) {
                const color = tmp.ach.tabFormat['Secrets'].buttonStyle['border-color'];
                pieces.push(`<span style="color:${color};text-shadow:${color} 0 0 10px;">${formatWhole(layers.ach.ownedAchievements('secret'))}</span>`);
            }
            return pieces.join(' | ');
        } else {
            let lines = [
                `<span style="white-space: nowrap">${formatWhole(layers.ach.ownedAchievements())} / ${formatWhole(layers.ach.totalAchievements())} achievements</span>`
            ];

            if (tmp.ach.tabFormat['Bonus'].unlocked) {
                lines.push(`<span style="white-space: nowrap">${formatWhole(layers.ach.ownedAchievements('bonus'))} / ${formatWhole(layers.ach.totalAchievements('bonus'))} bonus achievements</span>`)
            }
            if (layers.ach.ownedAchievements('secret').gte(1)) {
                lines.push(`${formatWhole(layers.ach.ownedAchievements('secret'))} secrets`);
            }

            return lines.join('<br />');
        }
    },
    /** @param {AchievementTypes} [type] */
    getAchievementsRows(type = 'normal') {
        let rows = [];

        switch (type) {
            case 'normal':
            default:
                rows = [1, 5, 2, 6, 3, 4, 9];
                break;
            case 'bonus':
                rows = [10];
                break;
            case 'secret':
                rows = [7, 8];
                break;
        }

        return rows;
    },
    /** @param {AchievementTypes} [type] */
    getAchievements(type = 'normal') {
        let rows = layers.ach.getAchievementsRows(type);

        if (!rows.length) return [];

        let achievements = Object.keys(layers.ach.achievements).filter(id => {
            if (isNaN(id)) return false;

            if (!(tmp.ach.achievements[id].unlocked ?? true)) return false;

            return rows.some(r => RegExp(`^${r}\\d$`).test(id));
        });

        return achievements;
    },
    /** @param {AchievementTypes} [type] */
    totalAchievements(type = 'normal') {
        return D(this.getAchievements(type).length);
    },
    /** @param {AchievementTypes} [type] */
    ownedAchievements(type = 'normal') {
        return D(this.getAchievements(type).filter(id => hasAchievement('ach', id)).length);
    },
    achievementPopups: false,
});
