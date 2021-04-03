const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded ({ extended: true}));
app.use(export.json());
