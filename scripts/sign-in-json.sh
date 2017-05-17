
curl "http://tic-tac-toe.wdibos.com/sign-in" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header
--data '{
  "credentials" : {
    "email" : "a@gmail",
    "password" : "12345"
  }
}'
