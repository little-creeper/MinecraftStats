#从本地向FTP批量上传文档
#!/bin/sh
sss=`find $updir -type d -printf $todir/'%P\n'| awk '{if ($0 == "")next;print "mkdir " $0}'` 
aaa=`find $updir -type f -printf 'put %p %P \n'` 
ftp -v -n hshs.mpsmc.cn<<EOF
user mpsmc1 ZjNaydby4dPc8jmE
type binary 
prompt 
$sss 
$aaa 
quit 
EOF