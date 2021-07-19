export default async (query, settings) => {
  try {
    const res = await fetch('https://api.DOMAIN.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
        // If any of the above settings were changed in the attached settings argument, the object will reflect these changes
        ...settings
      }
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
