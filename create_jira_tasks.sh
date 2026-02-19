#!/bin/bash

# Script to create JIRA tasks for BYC website
# Run these commands one by one in your terminal

# Set your credentials
EMAIL="indika@byc.lk"
TOKEN="YOUR_JIRA_API_TOKEN_HERE"
BASE64_AUTH=$(echo -n "$EMAIL:$TOKEN" | base64)

echo "Creating JIRA tasks for BYC website..."
echo "======================================"

# Task 2: Finalize Playbook search bar and mobile menu
echo ""
echo "Creating Task 2..."
curl -s -H "Authorization: Basic $BASE64_AUTH" -H "Content-Type: application/json" -X POST -d '{
  "fields": {
    "project": {
      "key": "SCRUM"
    },
    "parent": {
      "key": "SCRUM-3"
    },
    "summary": "Finalize \"The Playbook\" search bar styling and mobile \"Auto-Close\" menu logic",
    "issuetype": {
      "name": "Task"
    },
    "description": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Task 2: Finalize search bar styling and implement auto-close logic for mobile menu in The Playbook section."
            }
          ]
        }
      ]
    }
  }
}' "https://wimalasuriyaib.atlassian.net/rest/api/3/issue"

echo ""
echo "======================================"

# Task 3: Connect Playbook modal buttons to Pricing
echo ""
echo "Creating Task 3..."
curl -s -H "Authorization: Basic $BASE64_AUTH" -H "Content-Type: application/json" -X POST -d '{
  "fields": {
    "project": {
      "key": "SCRUM"
    },
    "parent": {
      "key": "SCRUM-3"
    },
    "summary": "Connect \"Master this in a Mock Session\" buttons (Playbook Modals) to Pricing Section",
    "issuetype": {
      "name": "Task"
    },
    "description": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Task 3: Connect the \"Master this in a Mock Session\" buttons inside Playbook modals to navigate to the Pricing section."
            }
          ]
        }
      ]
    }
  }
}' "https://wimalasuriyaib.atlassian.net/rest/api/3/issue"

echo ""
echo "======================================"

# Task 4: Implement Floating WhatsApp button
echo ""
echo "Creating Task 4..."
curl -s -H "Authorization: Basic $BASE64_AUTH" -H "Content-Type: application/json" -X POST -d '{
  "fields": {
    "project": {
      "key": "SCRUM"
    },
    "parent": {
      "key": "SCRUM-3"
    },
    "summary": "Implement a \"Floating WhatsApp\" button for immediate visitor support",
    "issuetype": {
      "name": "Task"
    },
    "description": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Task 4: Implement a floating WhatsApp button that follows visitors for immediate support and inquiries."
            }
          ]
        }
      ]
    }
  }
}' "https://wimalasuriyaib.atlassian.net/rest/api/3/issue"

echo ""
echo "======================================"

# Task 5: Setup BMC Success Page redirect
echo ""
echo "Creating Task 5..."
curl -s -H "Authorization: Basic $BASE64_AUTH" -H "Content-Type: application/json" -X POST -d '{
  "fields": {
    "project": {
      "key": "SCRUM"
    },
    "parent": {
      "key": "SCRUM-3"
    },
    "summary": "Setup the \"Success Page\" redirect from BMC to the Google Discovery Form",
    "issuetype": {
      "name": "Task"
    },
    "description": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Task 5: Configure the Buy Me a Coffee success page to redirect users to the Google Discovery Form for session booking."
            }
          ]
        }
      ]
    }
  }
}' "https://wimalasuriyaib.atlassian.net/rest/api/3/issue"

echo ""
echo "======================================"
echo "Done! Check your JIRA board for the new tasks."