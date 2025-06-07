const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmg48yd/",
            name: "ssmg48yd",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmg48yd/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的新生自助报到系统"
        } 
    }
}
export default base
