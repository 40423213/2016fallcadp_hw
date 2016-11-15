var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","title":"About","url":"./pages/about/","tags":"misc"},{"text":"已知截至第六週 2016fallcadpb 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員? 以下利用 Brython 讀取位於倉儲中的 w6_list.txt 與 w6_group.txt 資料檔案. 表示學校教務系統中, 修 2016fallcadpb 的學員名單為: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../w6_list.txt\").read() container <= data 而截至 w6, 納入分組名單中的學員有: from browser import document, html container2 = document['container2'] data = open(\"./../w6_group.txt\").read() container2 <= data 現在, 誰能夠幫我們找出至今尚未納入分組名單中的學員, 共有那些人？ from browser import document, html # 從 id=script1 程式區段取 data 變數 from script1 import data container3 = document['container3'] data3 = open(\"./../w6_group.txt\").read() group = data3.splitlines() # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = [] for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\") # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #container3 <= len(sline) #container3 <= html.BR() #container3 <= len(result_g) registered = data.splitlines()[:-1] # 設法找出至今尚未分組的學員學號 not_in_group = [c for c in registered if c not in result_g] #container3 <= len(registered) -len(result_g) n = 1 for i in not_in_group: container3 <= \"第\"+str(n)+\"位: \"+ str(i) n = n + 1 container3 <= html.BR() 另外, 在推送版本資料時, Github 發出以下錯誤: 發生錯誤的地方在此, 分組倉儲的分支又設為該倉儲的子模組: 處理方式, 先移除 g4, 等錯誤修正後, 再補上來. 移除 g4 步驟: 編輯 .gitmodules, 移除 g4 對應子模組設定 在版本資料納入 .gitmodules 所作的修改, git add .gitmodules 編輯 .git/config , 移除 g4 對應子模組設定 執行 git rm --cached g4 執行 rm -rf .git/modules/g4 執行 rm -rf g4 將近端的改版資料提交推送到遠端 之後, 又發現 g6 設定上也有問題, 因此也要先行移除. 錯誤產生於子模組設定過程, 沒能完整移除先前設定的子模組: 移除 g6 步驟: 編輯 .gitmodules, 移除 g6 對應子模組設定 在版本資料納入 .gitmodules 所作的修改, git add .gitmodules 編輯 .git/config , 移除 g6 對應子模組設定 執行 git rm --cached g6 執行 rm -rf .git/modules/g6 執行 rm -rf g6 將近端的改版資料提交推送到遠端 移除 g6 之後, 又發現 g10 中的組員 40423248 子模組設定錯誤, 倉儲內有不應該存在的 .gitmodules 檔案 因此 g10 也必須移除. 移除 g 10 步驟: 編輯 .gitmodules, 移除 g10 對應子模組設定 在版本資料納入 .gitmodules 所作的修改, git add .gitmodules 編輯 .git/config , 移除 g10 對應子模組設定 執行 git rm --cached g10 執行 rm -rf .git/modules/g10 執行 rm -rf g10 將近端的改版資料提交推送到遠端 此外 g9 組員 也犯相同錯誤, 因此 g9 也需移除. 移除 g 9 步驟: 編輯 .gitmodules, 移除 g9對應子模組設定 在版本資料納入 .gitmodules 所作的修改, git add .gitmodules 編輯 .git/config , 移除 g9 對應子模組設定 執行 git rm --cached g9 執行 rm -rf .git/modules/g9 執行 rm -rf g9 將近端的改版資料提交推送到遠端 因為無法從剩下的各組找到問題, 因此將全部子模組刪除. 加入 g1, 沒有問題. 加入 g2, 沒有問題. 加入 g3, 沒有問題. 已經確定 g7 有問題, 必須移除 移除 g 7 步驟: 編輯 .gitmodules, 移除 g7對應子模組設定 在版本資料納入 .gitmodules 所作的修改, git add .gitmodules 編輯 .git/config , 移除 g7 對應子模組設定 執行 git rm --cached g7 執行 rm -rf .git/modules/g7 執行 rm -rf g7 將近端的改版資料提交推送到遠端 加入 g8, 沒有問題. 加入 g11, 沒有問題. 最後加入 g5, 假如沒有問題, 截至 w6, 只有 g1, g2, g3, g5, g8, 11 等組正確完成設定.","title":"2016Fall 程式練習題","url":"./2016fall-cheng-shi-lian-xi-ti.html","tags":"Misc"},{"text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP B 分組網頁: 第1組 : 40123252 40223128 40223130 40223215 40223233 第2組 : 40223205 40223206 40423225 40423231 40423240 40423250 第3組 : 40423201 40423202 40423203 40423211 40439221 42423223 第4組 : 40423204 40423221 40423228 40423243 40423253 40423254 第5組 : 40423205 40423227 40423235 40423236 40423237 40423238 第6組 : 40423206 40423214 40423216 40423224 40423226 40423229 第7組 : 40423207 40423210 40423219 40423220 40423241 40423246 第8組 : 40423208 40423213 40423232 40423233 第9組 : 40423209 40423212 40423217 40423218 40423239 40423255 第10組 : 40423222 40423245 40423248 40423251 第11組 : 40423234 40423242 40423244 40423247 40423249 40423252 以下為分組資料處理程式: content = open(\"2016fall_cadp_b_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1","title":"2016Fall 機械設計主題教學","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","tags":"Misc"}]};