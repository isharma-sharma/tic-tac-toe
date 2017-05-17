curl "http://tic-tac-toe.wdibos.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiU4NmEzNDk4YzJjOTA2YzQ5YmFkMmQxN2QzN2ZkY2RkYgY6BkVG--ebf8616ef9184c2532c8d1dcbc1e22af7405e378" \
--data '{
  "games": {
    "id": "502",
    "cell": ["","","","","","","","",""],
    "player_x":  {
     "id": 102 ,
     "email": a@gmail
   },
  "player_o": null
  }
}'
