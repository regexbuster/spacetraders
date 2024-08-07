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

    async getStatus() {
        const response = await this.apiRequest('GET', {}, {}, '');

        return response;
    }

    async registerAgent(symbol, faction, email = null) {
        let options = { symbol, faction };

        if (email != null) {
            options = { ...options, email };
        }

        const response = await this.apiRequest('POST', {}, options, 'register');

        return response;
    }

    // --- Agents ---

    async getAgent(token) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            'my/agent'
        );

        return response;
    }

    async listAgents(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `agents?page=${page}&limit=${limit}`
        );

        return response;
    }

    async getPublicAgent(token, agentSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `agents/${agentSymbol}`
        );

        return response;
    }

    // --- Contracts ---

    async listContracts(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `my/contracts?page=${page}&limit=${limit}`
        );

        return response;
    }

    async getContract(token, contractId) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `my/contracts/${contractId}`
        );

        return response;
    }

    async acceptContract(token, contractId) {
        const response = await this.apiRequest(
            'POST',
            { Authorization: `Bearer ${token}` },
            {},
            `my/contracts/${contractId}/accept`
        );

        return response;
    }

    async deliverCargo(token, contractId, shipSymbol, tradeSymbol, units) {
        const response = await this.apiRequest(
            'POST',
            { Authorization: `Bearer ${token}` },
            { shipSymbol, tradeSymbol, units },
            `my/contracts/${contractId}/deliver`
        );

        return response;
    }

    async fulfillContract(token, contractId) {
        const response = await this.apiRequest(
            'POST',
            { Authorization: `Bearer ${token}` },
            {},
            `my/contracts/${contractId}/fulfill`
        );

        return response;
    }

    // --- Factions ---

    async listFactions(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `factions?page=${page}&limit=${limit}`
        );

        return response;
    }

    async getFactions(token, factionSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `factions/${factionSymbol}`
        );

        return response;
    }

    // --- Fleet ---

    // --- Systems ---

    async listSystems(token, page = 1, limit = 10) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems?page=${page}&limit=${limit}`
        );

        return response;
    }

    async getSystems(token, systemSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems/${systemSymbol}`
        );

        return response;
    }

    async listWaypointsInSystem(
        token,
        systemSymbol,
        page = 1,
        limit = 10,
        traits = null,
        type = null
    ) {
        let url = `systems/${systemSymbol}/waypoints?page=${page}&limit=${limit}`;

        if (traits != null) {
            url += `&traits=${traits}`;
        }

        if (type != null) {
            url += `&type=${type}`;
        }

        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            url
        );

        return response;
    }

    async getWaypoint(token, systemSymbol, waypointSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems/${systemSymbol}/waypoints/${waypointSymbol}`
        );

        return response;
    }

    async getMarket(token, systemSymbol, waypointSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems/${systemSymbol}/waypoints/${waypointSymbol}/market`
        );

        return response;
    }

    async getShipyard(token, systemSymbol, waypointSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems/${systemSymbol}/waypoints/${waypointSymbol}/shipyard`
        );

        return response;
    }

    async getJumpGate(token, systemSymbol, waypointSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems/${systemSymbol}/waypoints/${waypointSymbol}/jump-gate`
        );

        return response;
    }

    async getConstructionSite(token, systemSymbol, waypointSymbol) {
        const response = await this.apiRequest(
            'GET',
            { Authorization: `Bearer ${token}` },
            {},
            `systems/${systemSymbol}/waypoints/${waypointSymbol}/construction`
        );

        return response;
    }

    async supplyConstructionSite(
        token,
        systemSymbol,
        waypointSymbol,
        shipSymbol,
        tradeSymbol,
        units
    ) {
        const response = await this.apiRequest(
            'POST',
            { Authorization: `Bearer ${token}` },
            { shipSymbol, tradeSymbol, units },
            `systems/${systemSymbol}/waypoints/${waypointSymbol}/construction/supply`
        );

        return response;
    }
}

module.exports = Communicator;
