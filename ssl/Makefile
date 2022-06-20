ssl_directory=$(shell pwd)/ssl
all:   
	openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -subj '/O=myexample Inc./CN=www.root.cn' -keyout $(ssl_directory)/root.key -out $(ssl_directory)/root.crt
	openssl req -out $(ssl_directory)/client.csr -newkey rsa:2048 -nodes -keyout $(ssl_directory)/client.key -subj "/CN=www.crypto.com/O=myexample organization"
	openssl x509 -req -days 365 -CA $(ssl_directory)/root.crt -CAkey $(ssl_directory)/root.key -set_serial 0 -in $(ssl_directory)/client.csr -out $(ssl_directory)/client.crt

test:
	@echo $(ssl_directory)/root.key
delete_secret:
	rm -rf $(ssl_directory)/*.key $(ssl_directory)/*.crt $(ssl_directory)/*.csr
create_secret:
	kubectl create -n istio-system secret tls istio-ingressgateway-certs --key ssl/client.key --cert ssl/client.crt
