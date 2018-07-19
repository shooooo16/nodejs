既存プロセスを調べるコマンド
ps aux | grep node


npmでejsをインストール時のエラー解消
	Error: CERT_UNTRUSTED
	$ npm config set strict-ssl false
	$ npm install
	$ npm config set strict-ssl true