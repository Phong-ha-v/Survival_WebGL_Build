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
