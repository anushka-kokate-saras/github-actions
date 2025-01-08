export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda! Deployed using Github Actions, Modified config details'),
    };
    return response;
  };
  