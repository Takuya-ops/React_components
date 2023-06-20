from flask import Flask, request, jsonify
import sys

sys.path.append("/Users/horaguchitakuya/Desktop/dev")

app = Flask(__name__)


@app.route("/submit", methods=["POST"])
def submit_form():
    data = request.get_json()

    # フォームデータの処理やデータベースへの保存などを行う
    # ...

    # レスポンスを返す（任意のデータを含めることができる）
    response = {"message": "フォームが正常に送信されました"}
    return jsonify(response)


if __name__ == "__main__":
    app.run()
