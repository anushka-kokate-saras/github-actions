export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda! Deployed from merged script'),
    };
    return response;
  };
  