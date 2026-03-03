#!/bin/bash
# 每日自动更新 AI 导航站 trending 数据并推送到 GitHub
set -e

cd /Users/admin/.copaw/projects/ai-nav

echo "=== $(date) 开始更新 ==="

# 更新 lib/tools.ts（单一数据源）
node scripts/update-tools.js

# 提交并推送
git add lib/tools.ts
git diff --cached --quiet && echo "无变化，跳过推送" && exit 0

TODAY=$(date +%Y-%m-%d)
git commit -m "chore: update trending data ${TODAY}"
git push

echo "=== 推送完成 ==="
