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

    async viewAgent(token) {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${token}`,
            },
            {},
            'my/agent'
        );

        return response;
    }

    async viewFactions(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${token}`,
            },
            {},
            `factions?page=${page}&limit=${limit}`
        );

        return response;
    }

    async viewContracts(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${token}`,
            },
            {},
            `my/contracts?page=${page}&limit=${limit}`
        );

        return response;
    }

    // --- Systems and Waypoints ---

    async viewSystems(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${token}`,
            },
            {},
            `systems?page=${page}&limit=${limit}`
        );

        return response;
    }

    async viewWaypoints(token, systemSymbol, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${token}`,
            },
            {},
            `systems/${systemSymbol}/waypoints?page=${page}&limit=${limit}`
        );

        return response;
    }

    // --- Navigation ---

    // --- Extracting Resources ---

    // --- Outfitting ---

    // --- Maintenance ---

    // --- Crew and Morale ---

    // --- Exploration ---

    // --- Markets ---
}

module.exports = Communicator;
