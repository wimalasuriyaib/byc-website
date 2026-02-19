#!/bin/bash

# Test JIRA authentication with new scoped token
EMAIL="wimalasuriyaib@gmail.com"
TOKEN="YOUR_JIRA_API_TOKEN_HERE"
BASE_URL="https://wimalasuriyaib.atlassian.net"

echo "Testing JIRA API access..."
echo "=========================="

# Test 1: Server info
echo -e "\n1. Testing server info:"
curl -s -u "$EMAIL:$TOKEN" "$BASE_URL/rest/api/3/serverInfo" | jq -r '.baseUrl, .version, .deploymentType'

# Test 2: Check if we can search for ourselves
echo -e "\n2. Testing user search:"
curl -s -u "$EMAIL:$TOKEN" "$BASE_URL/rest/api/3/user/search?query=$EMAIL" | jq 'length'

# Test 3: Try to get issue createmeta with expanded info
echo -e "\n3. Testing issue createmeta:"
curl -s -u "$EMAIL:$TOKEN" "$BASE_URL/rest/api/3/issue/createmeta?expand=projects.issuetypes.fields" | jq '.projects | length'

# Test 4: Try to list all users (admin endpoint)
echo -e "\n4. Testing all users endpoint:"
curl -s -u "$EMAIL:$TOKEN" "$BASE_URL/rest/api/3/users/search?maxResults=5" | jq 'length'

# Test 5: Try to get application properties
echo -e "\n5. Testing application properties:"
curl -s -u "$EMAIL:$TOKEN" "$BASE_URL/rest/api/3/application-properties" | jq 'length'