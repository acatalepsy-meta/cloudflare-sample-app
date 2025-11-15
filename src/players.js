async function fetch_all_players() {
    const result = await env.SAM_BOT_BINDING.prepare(
        "SELECT discord_id, credits FROM [players]",
    ).run();
    return new Response(JSON.stringify(result));
}

async function add_new_player(discord_id) {
	const result = await env.SAM_BOT_BINDING.prepare(
		`INSERT INTO players (discord_id, credits) values (${discord_id}, 100)`,
	).run();
	return new Response(JSON.stringify(result));
}

export {
	fetch_all_players,
	add_new_player
}