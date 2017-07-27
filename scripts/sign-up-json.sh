curl "http://tic-tac-toe.wdibos.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials" : {
    "email" : "raja@gmail",
    "password" : "12345",
    "password_confirmation" : "12345"
  }
}'
