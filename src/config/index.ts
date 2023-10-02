export const BG_ENDPOINTS = {
  ApiKey: `${process.env.REACT_APP_API_KEY}`, // NOTE: Replace with your API Gateway key value
  Endpoint: `${process.env.REACT_APP_ENDPOINT}/${process.env.REACT_APP_STAGE}`, // NOTE: Replace with the URL of your CloudFront distribution and API stage
  Resources: [
    "get_requests",
    "get_pending_requests",
    "get_processed_requests",
    "get_all_requests",
    "create_request",
    "delete_request",
    "approve_request",
    "reject_request",
    "federate_console",
    "federate_cli",
    "finance"
  ],
};
