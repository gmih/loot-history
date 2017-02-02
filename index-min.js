var lh,
LootHistory;

LootHistory = {
	settings: {
		lootHistory: lootHistory

	},

	init: function() {
		lh = LootHistory.settings;
		LootHistory.bindUIActions();
		console.log(lootHistory);
		LootHistory.display(lootHistory.loot);
	},

	bindUIActions: function() {

	},

	displayLootHistory: function(items) {
		for (var item=0; item > items.length > item++) {
			console.log(items[item[1]]);
		}
	}
}


function ready(fn) {
	if (document.readyState !== 'loadking') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(LootHistory.init);

