

const initialState = [
    {id:1, name:'カツカレー', text:'食べると勝負に勝てると言われる勝つカレー。ラクラクカレー定番の１品です', price:1490, subPrice:2570, img:'/img/1.jpg'},
    {id:2, name:'ポークポークカレー・ミート', text:'グリーンアスパラと相性の良いベーコンにいろどりのフレッシュトマトをトッピングし特製マヨソースでまとめた商品です',price:1490, subPrice:2570,img:'/img/2.jpg'},
    {id:3, name:'牛すじカレー', text:'トロトロの牛すじとネギの風味が格別な味わいシンプルなカレーです！', price:1490, subPrice:2570, img:'/img/3.jpg'},
    {id:4, name:'味噌カツカレー', text:'マイルドな味付けのカレーに大きくカットした味噌カツをのせた、バターとチーズの風味が食欲をそそるお子様でも楽しめる商品です', price:1900, subPrice:2980, img:'/img/4.jpg'},
    {id:5, name:'とんかつカレーラーメン', text:'カレーはライスだけではありません。ラクラクピザが開発したカレーラーメンは絶品の美味しさ！', price:1900, subPrice:2980, img:'/img/5.jpg'},
    {id:6, name:'ヒレカツカレー', text:'やわらかくあっさりとしたヒレ肉を上質な衣で包み込みました。4種類の濃厚な味わいが一つで楽しめるカレーです', price:2700, subPrice:4050, img:'/img/6.jpg'},
    {id:7, name:'濃厚Gorgeous4', text:'こだわりのソースで、旨みとコクを堪能！濃厚Gorgeous4とは、動物由来の原材料を使用していないカレーです。ベジタリアンの方にオススメです', price:2570, subPrice:3780, img:'/img/7.jpg'},
    {id:8, name:'カレーうどん', text:'ラクラクカレー自慢のカレーに魚介のダシ、ローストオニオンのコクが加わった絶妙なスープをお楽しみください', price:2160, subPrice:3380, img:'/img/8.jpg'},
    {id:9, name:'Charity4', text:'にんにくとトマトの旨みが効いたスパイスカレー。食べると思わず元気が出るラクラクカレーの自信作', price:2700, subPrice:4050, img:'/img/9.jpg'},
    {id:10, name:'ほうれん草のカレードリア', text:'カレードリアの王道！ホワイトソースとカレーのダブルソースとなす、ほうれん草、チーズのおいしい組み合わせ', price:2160, subPrice:3380, img:'/img/10.jpg'},
    {id:11, name:'Specialドリア4', text:'ホワイトソースとカレーのダブルソースにハンバーグを合わせました', price:2700, subPrice:4050, img:'/img/11.jpg'},
    {id:12, name:'季節の野菜カレー', text:'季節の野菜が一つになった4種の栄養満点カレー。ラクラクカレーオリジナル商品でベジタリアンの方にオススメです', price:2160, subPrice:3380, img:'/img/12.jpg'},
    {id:13, name:'バラエティー４', text:'あらびきスライス牛肉とイタリアンチーズを、トマトソースと特製マヨソースの2種類のソースで召し上がって頂く商品です', price:2160, subPrice:3380, img:'/img/13.jpg'},
    {id:14, name:'えびナスカレー', text:'デミグラスソースでじっくり煮込んだ旨味たっぷりのえびとナスのカレー', price:2980, subPrice:4460, img:'/img/14.jpg'},
    {id:15, name:'Family４', text:'ラクラクピザ自慢「特うまプルコギ」定番「デラックス」お子様に人気「ツナマイルド」女性に好評「チーズ＆チーズ」の４種のおいしさを贅沢に組み合わせました', price:2440, subPrice:3650, img:'/img/15.jpg'},
    {id:16, name:'シンプルイズベスト', text:'人気ナンバー１！魚介の旨みたっぷり！人気の海の幸と、野菜のリッチなおいしさ', price:2700, subPrice:4050, img:'/img/16.jpg'},
    {id:17, name:'学芸会カレー', text:'みんな大好き！学芸会で作るような味を再現！定番のおいしさを味わえます', price:2440, subPrice:3650, img:'/img/17.jpg'},
    {id:18, name:'黄金に輝くチキンカレー', text:'カレーが黄金に輝く、超高級鶏肉を使用したカレーです', price:2700, subPrice:4050, img:'/img/18.jpg'},
]

export default(state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}