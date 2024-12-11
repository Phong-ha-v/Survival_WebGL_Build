// telegram.js
function getQueryParams() {
    const params = new URLSearchParams(window.location.hash.substring(1));
    return params.get("tgWebAppData");
};
function getRefCode() {
    const urlHash = window.location.hash;
    const textSearch = window.location.search;

      if (urlHash) {
        const encodedData = urlHash.slice(1);
        console.log("GetRefCode_EncodedData",encodedData);
        const data = encodedData.split("&");
        console.log("GetRefCode_Data",data);
        const tgWebAppData = decodeURIComponent(
          data[0].split("tgWebAppData=")[1]
        );

        const refCode = textSearch
          ? textSearch.split("?tgWebAppStartParam=")[1]
          : undefined;
        return refCode;
      }
}
function testTeleUserInfo(){
  const encodedString = "#tgWebAppData=query_id%3DAAE4ZkNlAgAAADhmQ2WaVKhx%26user%3D%257B%2522id%2522%253A5993883192%252C%2522first_name%2522%253A%2522An%2522%252C%2522last_name%2522%253A%2522Alex%2522%252C%2522username%2522%253A%2522AnAlex15%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522is_premium%2522%253Atrue%252C%2522allows_write_to_pm%2522%253Atrue%252C%2522photo_url%2522%253A%2522https%253A%255C%252F%255C%252Ft.me%255C%252Fi%255C%252Fuserpic%255C%252F320%255C%252Fgg5YyZaZ0yakmtLbRpWUuOGS69ItOodMan7Q1ZKB2wZ2BYGqTxW5SfW3ofljHL2i.svg%2522%257D%26auth_date%3D1733718582%26signature%3DP_u9IGMbiWtoCv9MwI_zh91LmMY2V-v1ArlOp7ByFW08Dosoj9HM4vYAFFz0G2fJ-ZbuW317Y-WqPNUBMmqOBg%26hash%3Df3612d0075aa664445516a53f1a2aa32f32af9d08ccc99dbbccbcf391e1624f2&tgWebAppVersion=7.10&tgWebAppPlatform=web&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23ffffff%22%2C%22button_color%22%3A%22%233390ec%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%23707579%22%2C%22link_color%22%3A%22%2300488f%22%2C%22secondary_bg_color%22%3A%22%23f4f4f5%22%2C%22text_color%22%3A%22%23000000%22%2C%22header_bg_color%22%3A%22%23ffffff%22%2C%22accent_text_color%22%3A%22%233390ec%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22section_header_text_color%22%3A%22%233390ec%22%2C%22subtitle_text_color%22%3A%22%23707579%22%2C%22destructive_text_color%22%3A%22%23df3f40%22%7D";
try {
    const decodedString = decodeURIComponent(encodedString);
    console.log("Chuỗi sau khi decode:", decodedString);
    
    // Parse dữ liệu thành object để dễ đọc
    const parsedData = {};
    decodedString.slice(1).split('&').forEach(item => {
        const [key, value] = item.split('=');
        parsedData[key] = value;
    });
    
    console.log("Dữ liệu được parse:", parsedData);
    
    // Nếu muốn parse phần user thành object
    if(parsedData.user) {
        parsedData.user = JSON.parse(decodeURIComponent(parsedData.user));
    }
    
    console.log("Dữ liệu cuối cùng:", parsedData);
    return parsedData;
} catch(error) {
    console.error("Lỗi khi decode:", error);
    return "";
}
}
