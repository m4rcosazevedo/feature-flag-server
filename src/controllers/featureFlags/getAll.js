const { getDocs, collection, query, where, orderBy } = require('firebase/firestore')
const { db } = require('../../setup/firebase')

const getAllFeatureFlags = async (req, res) => {
    try {
        const featureFlagsSnapshot = query(
            collection(db, 'featureFlags'),
            where('enabled', '==', true),
            orderBy('flag', 'asc')
        )
        const response = await getDocs(featureFlagsSnapshot)

        const featureFlags = response.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        res.json(featureFlags)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = getAllFeatureFlags