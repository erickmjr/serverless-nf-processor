import { APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";

export const handler = async(event: APIGatewayEvent): Promise<APIGatewayProxyResultV2> => {

    const name = event.queryStringParameters?.['name'];
    const body = event.body ? JSON.parse(event.body) : {};

    const { job } = body;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello, ${name}, you just made a post, nice to know you work as a ${job}`,
        })
    }
}