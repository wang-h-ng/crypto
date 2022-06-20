##安装istio
make install_istio
##生成证书密钥
make
##安装secret
make create_secret
##安装nginx应用
make install_nginx
##安装 Gateway 和 VirtualService
make install_GV
##查看 ingressgateway 映射到宿主机上的端口
kubectl get service -n istio-system
##通过 ingressgateway 访问 nginx 应用
curl --cacert ssl/root.crt -HHost:www.crypto.com --resolve "www.crypto.com:31167:192.168.0.168" https://www.crypto.com:31167/index.html

