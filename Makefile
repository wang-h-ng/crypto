include ssl/Makefile
include nginx/Makefile
include k6/Makefile
crypto_directory=$(shell pwd)
install_istio:
	curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.14.1 TARGET_ARCH=x86_64 sh –
	cp $(crypto_directory)/istio-1.14.1/bin/istioctl /usr/bin
	istioctl install --set profile=demo
