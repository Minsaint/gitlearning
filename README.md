## 常用git命令
-- git init 初始化一个空的git仓库

-- git add filename   添加一个文件到暂存区  filename为要添加的文件名称

-- git add -a   添加所有修改的文件到暂存区

-- git commit -m commitInfo   commitInfo为此次提价的说明   该命令将暂存区的文件提交至本地仓库  

-- git log 查看提交历史

-- git status 当前仓库状态

-- git reset --hard HEAD^(或者commit_id)   HEAD^  一个^表示回退一个版本, 两个^^表示回退两个版本  多个版本可表示为HEAD~100

-- git reset HEAD <filename> 可以把暂存区的修改撤销掉

-- git reflog 可以查看命令历史

-- git checkout 可以将工作区的修改文件回退到最近的一次git add 或者git commit


## 撤销修改

小结
又到了小结时间。

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- filename。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <filename>，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。

## 新分支
this is a new branch
