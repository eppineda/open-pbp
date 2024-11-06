import characters from '../characters.js'

const initialize = async ctx => {
	const username = ctx.req.path.split('/').pop()
	console.debug(`configuring chat tabs for ${ username }`)
	let idx = 0; console.debug(idx)
	let content = `
		<input id="tab-${ idx }" type="radio" name="tabgroupB" checked 
			@click="who = ME">
		<label class="pseudo button toggle" for="tab-${ idx++ }" x-text="ME"></label>
	`

	characters.forEach(c => {
		content += `
		<input id="tab-${ idx }" type="radio" name="tabgroupB"
			@click="who = ${ c.name }.name">
		<label class="pseudo button toggle" for="tab-${ idx++ }">${ c.name }</label>
		`
	})
	ctx.render({ text: content })
}

export { initialize }
