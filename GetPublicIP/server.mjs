import express from 'express';
import { publicIpv4 } from 'public-ip';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';

const app = express();
const PORT = 28175;
app.use(cors());


// Set EJS as the view engine
app.set('view engine', 'ejs');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', __dirname);

// IP 캐싱 설정
let cachedIp = null;

async function getIpWithCache() {

    try {
        cachedIp = await publicIpv4();
        lastFetchTime = now;
        return cachedIp;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return cachedIp || 'Unable to retrieve IP address';
    }
}

app.use(express.static('public'));

// 메인 페이지 라우트
app.get("/", async (req, res, next) => {
    try {
        const ip = await getIpWithCache();

        // Render the EJS template with the IP address
        res.render('index', { ip: ip });

    } catch (error) {
        console.error('Error:', error);
        res.render('index', { ip: 'Unable to retrieve IP address' });
    }
});

// IP 주소를 제공하는 API 엔드포인트
app.get("/api/ip", async (req, res) => {
    try {
        const ip = await getIpWithCache();
        res.json({ ip: ip });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Unable to retrieve IP address' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
