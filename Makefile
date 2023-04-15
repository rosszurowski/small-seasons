dev: pnpm-lock.yaml ## Run a local dev server
	@./node_modules/.bin/next dev
.PHONY: dev

start: .next ## Run production server
	@./node_modules/.bin/next start

build: .next ## Build site for production
	@./node_modules/.bin/next build

.next: pnpm-lock.yaml next.config.js $(shell fd -g '**/*.{js,jsx,ts,tsx,css}') public
	@./node_modules/.bin/next build

pnpm-lock.yaml: node_modules package.json
	@pnpm install
	@touch -mr $(shell ls -Atd $? | head -1) $@

node_modules:
	@mkdir -p $@

help: ## Show this help
	@echo "\nSpecify a command. The choices are:\n"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[0;36m%-12s\033[m %s\n", $$1, $$2}'
	@echo ""
.PHONY: help

.DEFAULT_GOAL := help
