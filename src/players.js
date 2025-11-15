type PlayerRow = {
    discord_id: string;
    credits: number;
};

export fetch_all_players {
  async fetch(request, env) {
    const result = await env.MY_DB.prepare(
        "SELECT discord_id, credits FROM [players]",
    ).run<PlayerRow>();
    return new Response(JSON.stringify(result));
  }
}

export add_new_player(discord_id) {
  async fetch(request, env) {
    const result = await env.MY_DB.prepare(
        `INSERT INTO players (discord_id, credits) values (${discord_id}, 100)`,
    ).run();
    return new Response(JSON.stringify(result));
  }
}