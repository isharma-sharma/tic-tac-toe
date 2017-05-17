curl "http://tic-tac-toe.wdibos.com/games/672" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiUwNjQ2Y2RhMTA5ZGM4OWZkMjBkNTVlZDMxMTg3YjE4NAY6BkVG--a702276c99763f454d5d8746a6fba07e30fa4d23" \
--data '{
  "games": {
    "id": "602",
    "cell": ["","","","","","","","",""],
    "over": false,
    "player_x":  {
     "id": "102" ,
     "email": "a@gmail"
   },
  "player_o": {
    "id": "134",
    "email":"b@gmail"
  }
  }
}'
