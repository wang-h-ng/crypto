install_k6:
	yum install -y https://dl.k6.io/rpm/repo.rpm
	yum install -y --nogpgcheck k6
k6_test:
	@if [ $((SERVER_HOST) ];then\
		SERVER_HOST=$(SERVER_HOST) k6 run --vus 50 --duration 30s config.js;\
	else\
		echo "The IP address of the server is not specified";\
	fi

