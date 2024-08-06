class Communicator {
    constructor() {}

    async apiRequest(_method, _headers, _body, _urlExtend) {
        const options = {
            method: _method,
            headers: {
                'Content-Type': 'application/json',
                ..._headers,
            },
        };

        if (Object.keys(_body).length != 0) {
            options['body'] = JSON.stringify(_body);
        }

        try {
            const jsoned = await fetch(
                `https://api.spacetraders.io/v2/${_urlExtend}`,
                options
            );

            const response = await jsoned.json();

            return response;
        } catch (err) {
            console.error(err);
        }
    }

    // --- Agents and Factions ---

    async registerAgent(symbol, faction) {
        const response = await this.apiRequest(
            'POST',
            {},
            { symbol, faction },
            'register'
        );

        return response;
    }

    async viewFactions(token) {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${token}`,
            },
            {},
            'factions'
        );

        return response;
    }

    // --- Systems and Waypoints ---

    // --- Navigation ---

    // --- Extracting Resources ---

    // --- Outfitting ---

    // --- Maintenance ---

    // --- Crew and Morale ---

    // --- Exploration ---

    // --- Markets ---
}

module.exports = Communicator;
