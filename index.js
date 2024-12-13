require('./src/setup/dotenv')
require('./src/setup/firebase')
const app = require('./src/setup/express')

const getAllFeatureFlags = require('./src/controllers/featureFlags/getAll')

app.get('/', getAllFeatureFlags)

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})