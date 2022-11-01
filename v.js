// middleware
app.use(cors());
app.use(express.json());

// user: user2
// pass: 7Z7BXr7Jylze7KH8

const uri = "mongodb+srv://user2:7Z7BXr7Jylze7KH8@cluster0.nfyjflh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });