import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(
    helmet({
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                "script-src": ["'self'", "trusted-cdn.com"],
                "img-src": ["'self'", "data:", "trusted-images.com"]
            }
        },
        referrerPolicy: { policy: "no-referrer" },
        crossOriginEmbedderPolicy: { policy: "require-corp" },
        crossOriginOpenerPolicy: { policy: "same-origin" },
        crossOriginResourcePolicy: { policy: "same-origin" },
        expectCt: {
            maxAge: 86400,
            enforce: true,
            reportUri: "https://your-report-uri.com/report"
        }
    })
);

app.get('/', (req, res) => {
    res.send('Helmet is protecting this API');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Helmet is actively protecting this API!' });
});

app.listen(3000, () => {
    console.log('Backend running on http://localhost:3000');
});
