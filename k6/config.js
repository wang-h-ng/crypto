import http from "k6/http";

export let options = {
        insecureSkipTLSVerify: true,
        noConnectionReuse: true,
        noVUConnectionReuse: true,
        tlsCipherSuites: [
                'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256',
        ],
        hosts: {
                'www.crypto.com': `${__ENV.SERVER_HOST}`,
        },
};

export default function() {
        http.get(`https://www.crypto.com:31167/productpage`);
}
