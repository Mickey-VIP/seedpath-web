#!/usr/bin/env bash
set -euo pipefail

if [ -z "${AI_API_KEY:-}" ]; then
  echo "Set the environment variable AI_API_KEY before running this script."
  exit 1
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "Install Vercel CLI first: npm i -g vercel"
  exit 1
fi

if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo "Set VERCEL_TOKEN (personal token) in the environment to authenticate to Vercel CLI."
  exit 1
fi

echo "Adding AI_API_KEY to Vercel (production)..."
vercel env add AI_API_KEY production --token "$VERCEL_TOKEN" || {
  echo "Interactive add failed; please add the variable manually in the Vercel dashboard."
  exit 1
}

echo "Done. Trigger a production deploy or run: vercel --prod --token $VERCEL_TOKEN"
