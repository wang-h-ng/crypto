nginx_directory=$(shell pwd)/nginx
install_nginx:
	kubectl create configmap nginx --from-file=nginx.conf=$(nginx_directory)/config.conf
	kubectl apply -f $(nginx_directory)/nginx.yaml	
	kubectl apply -f $(nginx_directory)/nginx-gateway.yaml
uninstall_nginx:
	kubectl delete configmap nginx
	kubectl delete -f $(nginx_directory)/nginx.yaml
	kubectl delete -f $(nginx_directory)/nginx-gateway.yaml	
install_GV:
	kubectl apply -f $(nginx_directory)/nginx-gateway.yaml
	
