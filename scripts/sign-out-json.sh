
# data output from curl doesn't have a trailing newline

curl "http://tic-tac-toe.wdibos.com/sign-out/102" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=BAhJIiUzOTM1OWM5M2FhODQ2ZWJjMTE3MTVjODAxODUxYjk4ZQY6BkVG--30408fa79c74c563e9c1d669d55b92fad333f64a" \

echo
