/* POST共通 */
/* ===== クエリストリング取得・設定 ===== */
// クエリストリングから指定したkey項目の値を取得する
function getQueryParams(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

/* URLにクエリストリングを追加して返却する
    @url : "./example.html"
    @queryParams : {query1: "aaa",query2: "bbb"}
*/
function setQueryParams(url, queryParams) {
    // 相対パスを絶対パスに変換
    let path = document.createElement("a");
    path.href = url;

    // URLオブジェクトを作成する
    const urlObj = new URL(path.href);

    // URLSearchParamsオブジェクトを取得する
    const urlSearchParams = urlObj.searchParams;

    // クエリストリングのオブジェクトをループで処理する
    for (const [key, value] of Object.entries(queryParams)) {
        // クエリストリングのキーと値をURLSearchParamsオブジェクトに追加または更新する
        urlSearchParams.set(key, value);
    }

    // URLオブジェクトのsearchプロパティを元の相対パスに結合して返却する
    const returnPath = url + "?" + urlSearchParams.toString();

    // 相対パスを返す
    return returnPath;
}