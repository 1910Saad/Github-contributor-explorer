const axios = require('axios');

// Fetch contributors from GitHub API
const getContributors = async (req, res) => {
  const { page = 1, per_page = 10 } = req.query;

  try {
    const response = await axios.get(`https://api.github.com/repos/supabase/supabase/contributors`, {
      params: { per_page, page },
      headers: { 
        'User-Agent': 'request' ,
        'Authorization': `token REPLACE_WITH_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`
    },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching contributors:', error);
    res.status(500).json({ message: 'Failed to fetch contributors' });
  }
};

module.exports = {
  getContributors,
};
