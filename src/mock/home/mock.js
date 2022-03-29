let Mock = require("mockjs")
let data = [
    { id: "中国npm镜像源升级广告", name: "fengmk2", text: "43467", huifu: "8" },
    { id: "[望周知,求扩散]淘宝NPM镜像站", name: "atian25", text: "77331", huifu: "13" },
    { id: " Node.js2021年开发者报告解读", name: "i5ting", text: "168026", huifu: "10" },
    { id: "[2021/11/26]请大家遵纪守法", name: "thonatos", text: "176512", huifu: "226" },
    { id: "中国npm镜像源升级广告", name: "fengmk2", text: "43467", huifu: "8" },
    { id: "[望周知,求扩散]淘宝NPM镜像站", name: "atian25", text: "77331", huifu: "13" },
    { id: " Node.js2021年开发者报告解读", name: "i5ting", text: "168026", huifu: "10" },
    { id: "[2021/11/26]请大家遵纪守法", name: "thonatos", text: "176512", huifu: "226" },
    { id: "[2021/11/26]请大家遵纪守法", name: "thonatos", text: "176512", huifu: "226" },
    { id: "中国npm镜像源升级广告", name: "fengmk2", text: "43467", huifu: "8" },
    



]
Mock.mock("/api/homeindex", "get", function (config) {
    console.log(config)
    return data
})

Mock.mock(/\/api\/homeindex\/\d/, "delete", function (config) {
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data=data.map(function(item,id){
        return {
            
            id:item.id,
            name:item.name,
            text:item.text,
            huifu:item.huifu

        }
    })

  
    return data
})



