var tipuesearch = {"pages":[{"url":"./pages/about/","text":"2016Fall 修課成員網誌","title":"About","tags":"misc"},{"url":"./w10-brython-hui-tu-fan-li.html","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 以下為程式碼: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 inc = 5 for i in range(100): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","title":"W10 Brython 繪圖範例","tags":"Course"},{"url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html","text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","title":"2016Fall 簡報與網誌系統","tags":"Misc"}]};