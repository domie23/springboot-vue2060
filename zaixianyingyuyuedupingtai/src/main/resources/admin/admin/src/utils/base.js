const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianyingyuyuedupingtai/",
            name: "zaixianyingyuyuedupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianyingyuyuedupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线英语阅读分级平台"
        } 
    }
}
export default base
