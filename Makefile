install:
	npm install

brain-games:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

.PHONY: test