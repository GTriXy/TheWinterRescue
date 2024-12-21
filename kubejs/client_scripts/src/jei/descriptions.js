JEIEvents.information((event) => {
	let recipes = [
		{
			items: [
				"frostedheart:energy_core"
			],
			description: [Component.translate("info.jei.the_winter_rescue.energy_core")]
		},
		{
			items: [],
			description: [Component.translate("info.jei.the_winter_rescue.power_glitch")]
		},
		{
			items: [
				"create:mechanical_drill",
				"create:mechanical_bearing"
			],
			description: [Component.translate("info.jei.the_winter_rescue.later_tech")]
		}
	];
	recipes.forEach((recipe) => {
		recipe.items.forEach((item) => {
			event.add(item, recipe.description);
		})
	})

	serverItemsToHide.forEach((item) => {
		event.add(item, Component.translate("info.jei.the_winter_rescue.disabled"))
	})
})