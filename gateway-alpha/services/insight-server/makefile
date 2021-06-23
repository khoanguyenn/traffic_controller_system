.PHONY: doc doc-rt

doc-rt:
	swagger-ui-watcher doc/index.yml

doc:
	swagger-ui-watcher doc/index.yml --bundle=public/main.json
	redoc-cli bundle public/main.json -o public/index.html --title 'Nano Web Server APIs'

