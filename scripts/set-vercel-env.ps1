Param(
  [string]$AI_API_KEY
)

if (-not $AI_API_KEY) {
  Write-Error "Provide AI_API_KEY as argument or set environment variable."
  exit 1
}

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
  Write-Error "Install Vercel CLI: npm i -g vercel"
  exit 1
}

if (-not $env:VERCEL_TOKEN) {
  Write-Error "Set VERCEL_TOKEN environment variable (personal token) to authenticate with Vercel."
  exit 1
}

Write-Output "Adding AI_API_KEY to Vercel (production)..."
vercel env add AI_API_KEY production --token $env:VERCEL_TOKEN

Write-Output "Finished. Trigger a production deploy with: vercel --prod --token $env:VERCEL_TOKEN"
