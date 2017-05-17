curl "http://tic-tac-toe.wdibos.com/change-password/102" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiU1OWVhOGVkNzA5OWRkMDVmNzA1ZjdhNmUzZmEyNzM2ZAY6BkVG--b9b8cf7d8f27a35ab3b7f1a43c91fc311fb8d012" \
  --data '{
    "passwords": {
      "old": "shan",
      "new": "12345"
    }
  }'

echo
