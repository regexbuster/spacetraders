const communicator = {
    apiRequest: async function (_method, _headers, _body, _urlExtend) {
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
    },
    apiRegisterAgent: async function (symbol, faction) {
        const response = await this.apiRequest(
            'POST',
            {},
            { symbol, faction },
            'register'
        );

        return response;
    },
    viewFactions: async function () {
        const response = await this.apiRequest(
            'GET',
            {
                Authorization: `Bearer ${process.env.REGEX_TOKEN}`,
            },
            {},
            'factions'
        );

        return response;
    },
};

module.exports = communicator;
