var areas=new Array();areas[0]=[{'pid':0,'id':95,'name':'北京'},{'pid':0,'id':96,'name':'上海'},{'pid':0,'id':97,'name':'天津'},{'pid':0,'id':98,'name':'重庆'},{'pid':0,'id':99,'name':'安徽'},{'pid':0,'id':100,'name':'福建'},{'pid':0,'id':101,'name':'甘肃'},{'pid':0,'id':102,'name':'广东'},{'pid':0,'id':103,'name':'广西'},{'pid':0,'id':104,'name':'贵州'},{'pid':0,'id':105,'name':'海南'},{'pid':0,'id':106,'name':'河北'},{'pid':0,'id':107,'name':'黑龙江'},{'pid':0,'id':108,'name':'河南'},{'pid':0,'id':109,'name':'湖北'},{'pid':0,'id':110,'name':'湖南'},{'pid':0,'id':111,'name':'江苏'},{'pid':0,'id':112,'name':'江西'},{'pid':0,'id':113,'name':'吉林'},{'pid':0,'id':114,'name':'辽宁'},{'pid':0,'id':115,'name':'宁夏'},{'pid':0,'id':116,'name':'青海'},{'pid':0,'id':117,'name':'山东'},{'pid':0,'id':118,'name':'山西'},{'pid':0,'id':119,'name':'陕西'},{'pid':0,'id':120,'name':'四川'},{'pid':0,'id':121,'name':'云南'},{'pid':0,'id':122,'name':'浙江'},{'pid':0,'id':123,'name':'新疆'},{'pid':0,'id':124,'name':'内蒙古'},{'pid':0,'id':125,'name':'西藏'},{'pid':0,'id':126,'name':'香港'},{'pid':0,'id':127,'name':'澳门'},{'pid':0,'id':128,'name':'台湾'},{'pid':0,'id':129,'name':'国外'}];areas[1]=[{'pid':95,'id':441,'name':'北京'},{'pid':96,'id':459,'name':'上海'},{'pid':97,'id':478,'name':'天津'},{'pid':98,'id':497,'name':'重庆'},{'pid':99,'id':537,'name':'合肥'},{'pid':99,'id':538,'name':'安庆'},{'pid':99,'id':539,'name':'蚌埠'},{'pid':99,'id':540,'name':'亳州'},{'pid':99,'id':541,'name':'巢湖'},{'pid':99,'id':542,'name':'滁州'},{'pid':99,'id':543,'name':'阜阳'},{'pid':99,'id':544,'name':'贵池'},{'pid':99,'id':545,'name':'淮化'},{'pid':99,'id':546,'name':'淮南'},{'pid':99,'id':547,'name':'黄山'},{'pid':99,'id':548,'name':'九华山'},{'pid':99,'id':549,'name':'六安'},{'pid':99,'id':550,'name':'马鞍山'},{'pid':99,'id':551,'name':'宿州'},{'pid':99,'id':552,'name':'铜陵'},{'pid':99,'id':553,'name':'屯溪'},{'pid':99,'id':554,'name':'芜湖'},{'pid':99,'id':555,'name':'宣城'},{'pid':100,'id':556,'name':'福州'},{'pid':100,'id':557,'name':'福安'},{'pid':100,'id':558,'name':'龙岩'},{'pid':100,'id':559,'name':'南平'},{'pid':100,'id':560,'name':'宁德'},{'pid':100,'id':561,'name':'莆田'},{'pid':100,'id':562,'name':'泉州'},{'pid':100,'id':563,'name':'三明'},{'pid':100,'id':564,'name':'邵武'},{'pid':100,'id':565,'name':'石狮'},{'pid':100,'id':566,'name':'永安'},{'pid':100,'id':567,'name':'武夷山'},{'pid':100,'id':568,'name':'厦门'},{'pid':100,'id':569,'name':'漳州'},{'pid':101,'id':570,'name':'兰州'},{'pid':101,'id':571,'name':'白银'},{'pid':101,'id':572,'name':'定西'},{'pid':101,'id':573,'name':'敦煌'},{'pid':101,'id':574,'name':'甘南'},{'pid':101,'id':575,'name':'金昌'},{'pid':101,'id':576,'name':'酒泉'},{'pid':101,'id':577,'name':'临夏'},{'pid':101,'id':578,'name':'平凉'},{'pid':101,'id':579,'name':'天水'},{'pid':101,'id':580,'name':'武都'},{'pid':101,'id':581,'name':'武威'},{'pid':101,'id':582,'name':'西峰'},{'pid':101,'id':583,'name':'张掖'},{'pid':102,'id':584,'name':'广州'},{'pid':102,'id':585,'name':'潮阳'},{'pid':102,'id':586,'name':'潮州'},{'pid':102,'id':587,'name':'澄海'},{'pid':102,'id':588,'name':'东莞'},{'pid':102,'id':589,'name':'佛山'},{'pid':102,'id':590,'name':'河源'},{'pid':102,'id':591,'name':'惠州'},{'pid':102,'id':592,'name':'江门'},{'pid':102,'id':593,'name':'揭阳'},{'pid':102,'id':594,'name':'开平'},{'pid':102,'id':595,'name':'茂名'},{'pid':102,'id':596,'name':'梅州'},{'pid':102,'id':597,'name':'清远'},{'pid':102,'id':598,'name':'汕头'},{'pid':102,'id':599,'name':'汕尾'},{'pid':102,'id':600,'name':'韶关'},{'pid':102,'id':601,'name':'深圳'},{'pid':102,'id':602,'name':'顺德'},{'pid':102,'id':603,'name':'阳江'},{'pid':102,'id':604,'name':'英德'},{'pid':102,'id':605,'name':'云浮'},{'pid':102,'id':606,'name':'增城'},{'pid':102,'id':607,'name':'湛江'},{'pid':102,'id':608,'name':'肇庆'},{'pid':102,'id':609,'name':'中山'},{'pid':102,'id':610,'name':'珠海'},{'pid':103,'id':611,'name':'南宁'},{'pid':103,'id':612,'name':'百色'},{'pid':103,'id':613,'name':'北海'},{'pid':103,'id':614,'name':'桂林'},{'pid':103,'id':615,'name':'防城港'},{'pid':103,'id':616,'name':'河池'},{'pid':103,'id':617,'name':'贺州'},{'pid':103,'id':618,'name':'柳州'},{'pid':103,'id':619,'name':'钦州'},{'pid':103,'id':620,'name':'梧州'},{'pid':103,'id':621,'name':'玉林'},{'pid':104,'id':622,'name':'贵阳'},{'pid':104,'id':623,'name':'安顺'},{'pid':104,'id':624,'name':'毕节'},{'pid':104,'id':625,'name':'都匀'},{'pid':104,'id':626,'name':'凯里'},{'pid':104,'id':627,'name':'六盘水'},{'pid':104,'id':628,'name':'铜仁'},{'pid':104,'id':629,'name':'兴义'},{'pid':104,'id':630,'name':'玉屏'},{'pid':104,'id':631,'name':'遵义'},{'pid':105,'id':632,'name':'海口'},{'pid':105,'id':633,'name':'儋县'},{'pid':105,'id':634,'name':'陵水'},{'pid':105,'id':635,'name':'琼海'},{'pid':105,'id':636,'name':'三亚'},{'pid':105,'id':637,'name':'通什'},{'pid':105,'id':638,'name':'万宁'},{'pid':106,'id':639,'name':'石家庄'},{'pid':106,'id':640,'name':'保定'},{'pid':106,'id':641,'name':'北戴河'},{'pid':106,'id':642,'name':'沧州'},{'pid':106,'id':643,'name':'承德'},{'pid':106,'id':644,'name':'丰润'},{'pid':106,'id':645,'name':'邯郸'},{'pid':106,'id':646,'name':'衡水'},{'pid':106,'id':647,'name':'廊坊'},{'pid':106,'id':648,'name':'南戴河'},{'pid':106,'id':649,'name':'秦皇岛'},{'pid':106,'id':650,'name':'唐山'},{'pid':106,'id':651,'name':'新城'},{'pid':106,'id':652,'name':'邢台'},{'pid':106,'id':653,'name':'张家口'},{'pid':107,'id':654,'name':'哈尔滨'},{'pid':107,'id':655,'name':'北安'},{'pid':107,'id':656,'name':'大庆'},{'pid':107,'id':657,'name':'大兴安岭'},{'pid':107,'id':658,'name':'鹤岗'},{'pid':107,'id':659,'name':'黑河'},{'pid':107,'id':660,'name':'佳木斯'},{'pid':107,'id':661,'name':'鸡西'},{'pid':107,'id':662,'name':'牡丹江'},{'pid':107,'id':663,'name':'齐齐哈尔'},{'pid':107,'id':664,'name':'七台河'},{'pid':107,'id':665,'name':'双鸭山'},{'pid':107,'id':666,'name':'绥化'},{'pid':107,'id':667,'name':'伊春'},{'pid':108,'id':668,'name':'郑州'},{'pid':108,'id':669,'name':'安阳'},{'pid':108,'id':670,'name':'鹤壁'},{'pid':108,'id':671,'name':'潢川'},{'pid':108,'id':672,'name':'焦作'},{'pid':108,'id':673,'name':'济源'},{'pid':108,'id':674,'name':'开封'},{'pid':108,'id':675,'name':'漯河'},{'pid':108,'id':676,'name':'洛阳'},{'pid':108,'id':677,'name':'南阳'},{'pid':108,'id':678,'name':'平顶山'},{'pid':108,'id':679,'name':'濮阳'},{'pid':108,'id':680,'name':'三门峡'},{'pid':108,'id':681,'name':'商丘'},{'pid':108,'id':682,'name':'新乡'},{'pid':108,'id':683,'name':'信阳'},{'pid':108,'id':684,'name':'许昌'},{'pid':108,'id':685,'name':'周口'},{'pid':108,'id':686,'name':'驻马店'},{'pid':109,'id':687,'name':'武汉'},{'pid':109,'id':688,'name':'恩施'},{'pid':109,'id':689,'name':'鄂州'},{'pid':109,'id':690,'name':'黄冈'},{'pid':109,'id':691,'name':'黄石'},{'pid':109,'id':692,'name':'荆门'},{'pid':109,'id':693,'name':'荆州'},{'pid':109,'id':694,'name':'潜江'},{'pid':109,'id':695,'name':'十堰'},{'pid':109,'id':696,'name':'随州'},{'pid':109,'id':697,'name':'武穴'},{'pid':109,'id':698,'name':'仙桃'},{'pid':109,'id':699,'name':'咸宁'},{'pid':109,'id':700,'name':'襄阳'},{'pid':109,'id':701,'name':'襄樊'},{'pid':109,'id':702,'name':'孝感'},{'pid':109,'id':703,'name':'宜昌'},{'pid':110,'id':704,'name':'长沙'},{'pid':110,'id':705,'name':'常德'},{'pid':110,'id':706,'name':'郴州'},{'pid':110,'id':707,'name':'衡阳'},{'pid':110,'id':708,'name':'怀化'},{'pid':110,'id':709,'name':'吉首'},{'pid':110,'id':710,'name':'娄底'},{'pid':110,'id':711,'name':'邵阳'},{'pid':110,'id':712,'name':'湘潭'},{'pid':110,'id':713,'name':'益阳'},{'pid':110,'id':714,'name':'岳阳'},{'pid':110,'id':715,'name':'永州'},{'pid':110,'id':716,'name':'张家界'},{'pid':110,'id':717,'name':'株洲'},{'pid':111,'id':718,'name':'南京'},{'pid':111,'id':719,'name':'常熟'},{'pid':111,'id':720,'name':'常州'},{'pid':111,'id':721,'name':'海门'},{'pid':111,'id':722,'name':'淮安'},{'pid':111,'id':723,'name':'江都'},{'pid':111,'id':724,'name':'江阴'},{'pid':111,'id':725,'name':'昆山'},{'pid':111,'id':726,'name':'连云港'},{'pid':111,'id':727,'name':'南通'},{'pid':111,'id':728,'name':'启东'},{'pid':111,'id':729,'name':'沭阳'},{'pid':111,'id':730,'name':'宿迁'},{'pid':111,'id':731,'name':'苏州'},{'pid':111,'id':732,'name':'太仓'},{'pid':111,'id':733,'name':'泰州'},{'pid':111,'id':734,'name':'同里'},{'pid':111,'id':735,'name':'无锡'},{'pid':111,'id':736,'name':'徐州'},{'pid':111,'id':737,'name':'盐城'},{'pid':111,'id':738,'name':'扬州'},{'pid':111,'id':739,'name':'宜兴'},{'pid':111,'id':740,'name':'仪征'},{'pid':111,'id':741,'name':'张家港'},{'pid':111,'id':742,'name':'镇江'},{'pid':111,'id':743,'name':'周庄'},{'pid':112,'id':744,'name':'南昌'},{'pid':112,'id':745,'name':'抚州'},{'pid':112,'id':746,'name':'赣州'},{'pid':112,'id':747,'name':'吉安'},{'pid':112,'id':748,'name':'景德镇'},{'pid':112,'id':749,'name':'井冈山'},{'pid':112,'id':750,'name':'九江'},{'pid':112,'id':751,'name':'庐山'},{'pid':112,'id':752,'name':'萍乡'},{'pid':112,'id':753,'name':'上饶'},{'pid':112,'id':754,'name':'新余'},{'pid':112,'id':755,'name':'宜春'},{'pid':112,'id':756,'name':'鹰潭'},{'pid':113,'id':757,'name':'长春'},{'pid':113,'id':758,'name':'白城'},{'pid':113,'id':759,'name':'白山'},{'pid':113,'id':760,'name':'珲春'},{'pid':113,'id':761,'name':'辽源'},{'pid':113,'id':762,'name':'梅河'},{'pid':113,'id':763,'name':'吉林'},{'pid':113,'id':764,'name':'四平'},{'pid':113,'id':765,'name':'松原'},{'pid':113,'id':766,'name':'通化'},{'pid':113,'id':767,'name':'延吉'},{'pid':114,'id':768,'name':'沈阳'},{'pid':114,'id':769,'name':'鞍山'},{'pid':114,'id':770,'name':'本溪'},{'pid':114,'id':771,'name':'朝阳'},{'pid':114,'id':772,'name':'大连'},{'pid':114,'id':773,'name':'丹东'},{'pid':114,'id':774,'name':'抚顺'},{'pid':114,'id':775,'name':'阜新'},{'pid':114,'id':776,'name':'葫芦岛'},{'pid':114,'id':777,'name':'锦州'},{'pid':114,'id':778,'name':'辽阳'},{'pid':114,'id':779,'name':'盘锦'},{'pid':114,'id':780,'name':'铁岭'},{'pid':114,'id':781,'name':'营口'},{'pid':115,'id':782,'name':'银川'},{'pid':115,'id':783,'name':'固源'},{'pid':115,'id':784,'name':'石嘴山'},{'pid':115,'id':785,'name':'吴忠'},{'pid':116,'id':786,'name':'西宁'},{'pid':116,'id':787,'name':'德令哈'},{'pid':116,'id':788,'name':'格尔木'},{'pid':116,'id':789,'name':'共和'},{'pid':116,'id':790,'name':'海东'},{'pid':116,'id':791,'name':'海晏'},{'pid':116,'id':792,'name':'玛沁'},{'pid':116,'id':793,'name':'同仁'},{'pid':116,'id':794,'name':'玉树'},{'pid':117,'id':795,'name':'济南'},{'pid':117,'id':796,'name':'滨州'},{'pid':117,'id':797,'name':'兖州'},{'pid':117,'id':798,'name':'德州'},{'pid':117,'id':799,'name':'东营'},{'pid':117,'id':800,'name':'菏泽'},{'pid':117,'id':801,'name':'济宁'},{'pid':117,'id':802,'name':'莱芜'},{'pid':117,'id':803,'name':'聊城'},{'pid':117,'id':804,'name':'临沂'},{'pid':117,'id':805,'name':'蓬莱'},{'pid':117,'id':806,'name':'青岛'},{'pid':117,'id':807,'name':'曲阜'},{'pid':117,'id':808,'name':'日照'},{'pid':117,'id':809,'name':'泰安'},{'pid':117,'id':810,'name':'潍坊'},{'pid':117,'id':811,'name':'威海'},{'pid':117,'id':812,'name':'烟台'},{'pid':117,'id':813,'name':'枣庄'},{'pid':117,'id':814,'name':'淄博'},{'pid':118,'id':815,'name':'太原'},{'pid':118,'id':816,'name':'长治'},{'pid':118,'id':817,'name':'大同'},{'pid':118,'id':818,'name':'候马'},{'pid':118,'id':819,'name':'晋城'},{'pid':118,'id':820,'name':'离石'},{'pid':118,'id':821,'name':'临汾'},{'pid':118,'id':822,'name':'宁武'},{'pid':118,'id':823,'name':'朔州'},{'pid':118,'id':824,'name':'忻州'},{'pid':118,'id':825,'name':'阳泉'},{'pid':118,'id':826,'name':'榆次'},{'pid':118,'id':827,'name':'运城'},{'pid':119,'id':828,'name':'西安'},{'pid':119,'id':829,'name':'安康'},{'pid':119,'id':830,'name':'宝鸡'},{'pid':119,'id':831,'name':'汉中'},{'pid':119,'id':832,'name':'渭南'},{'pid':119,'id':833,'name':'商州'},{'pid':119,'id':834,'name':'绥德'},{'pid':119,'id':835,'name':'铜川'},{'pid':119,'id':836,'name':'咸阳'},{'pid':119,'id':837,'name':'延安'},{'pid':119,'id':838,'name':'榆林'},{'pid':120,'id':839,'name':'成都'},{'pid':120,'id':840,'name':'巴中'},{'pid':120,'id':841,'name':'达川'},{'pid':120,'id':842,'name':'德阳'},{'pid':120,'id':843,'name':'都江堰'},{'pid':120,'id':844,'name':'峨眉山'},{'pid':120,'id':845,'name':'涪陵'},{'pid':120,'id':846,'name':'广安'},{'pid':120,'id':847,'name':'广元'},{'pid':120,'id':848,'name':'九寨沟'},{'pid':120,'id':849,'name':'康定'},{'pid':120,'id':850,'name':'乐山'},{'pid':120,'id':851,'name':'泸州'},{'pid':120,'id':852,'name':'马尔康'},{'pid':120,'id':853,'name':'绵阳'},{'pid':120,'id':854,'name':'眉山'},{'pid':120,'id':855,'name':'南充'},{'pid':120,'id':856,'name':'内江'},{'pid':120,'id':857,'name':'攀枝花'},{'pid':120,'id':858,'name':'遂宁'},{'pid':120,'id':859,'name':'汶川'},{'pid':120,'id':860,'name':'西昌'},{'pid':120,'id':861,'name':'雅安'},{'pid':120,'id':862,'name':'宜宾'},{'pid':120,'id':863,'name':'自贡'},{'pid':120,'id':864,'name':'资阳'},{'pid':121,'id':865,'name':'昆明'},{'pid':121,'id':866,'name':'大理'},{'pid':121,'id':867,'name':'保山'},{'pid':121,'id':868,'name':'楚雄'},{'pid':121,'id':869,'name':'大理'},{'pid':121,'id':870,'name':'东川'},{'pid':121,'id':871,'name':'个旧'},{'pid':121,'id':872,'name':'景洪'},{'pid':121,'id':873,'name':'开远'},{'pid':121,'id':874,'name':'临沧'},{'pid':121,'id':875,'name':'丽江'},{'pid':121,'id':876,'name':'六库'},{'pid':121,'id':877,'name':'潞西'},{'pid':121,'id':878,'name':'曲靖'},{'pid':121,'id':879,'name':'思茅'},{'pid':121,'id':880,'name':'文山'},{'pid':121,'id':881,'name':'西双版纳'},{'pid':121,'id':882,'name':'玉溪'},{'pid':121,'id':883,'name':'中甸'},{'pid':121,'id':884,'name':'昭通'},{'pid':122,'id':885,'name':'杭州'},{'pid':122,'id':886,'name':'安吉'},{'pid':122,'id':887,'name':'慈溪'},{'pid':122,'id':888,'name':'定海'},{'pid':122,'id':889,'name':'奉化'},{'pid':122,'id':890,'name':'海盐'},{'pid':122,'id':891,'name':'黄岩'},{'pid':122,'id':892,'name':'湖州'},{'pid':122,'id':893,'name':'嘉兴'},{'pid':122,'id':894,'name':'金华'},{'pid':122,'id':895,'name':'临安'},{'pid':122,'id':896,'name':'临海'},{'pid':122,'id':897,'name':'丽水'},{'pid':122,'id':898,'name':'宁波'},{'pid':122,'id':899,'name':'瓯海'},{'pid':122,'id':900,'name':'平湖'},{'pid':122,'id':901,'name':'千岛湖'},{'pid':122,'id':902,'name':'衢州'},{'pid':122,'id':903,'name':'江山'},{'pid':122,'id':904,'name':'瑞安'},{'pid':122,'id':905,'name':'绍兴'},{'pid':122,'id':906,'name':'嵊州'},{'pid':122,'id':907,'name':'台州'},{'pid':122,'id':908,'name':'温岭'},{'pid':122,'id':909,'name':'温州'},{'pid':122,'id':910,'name':'余姚'},{'pid':122,'id':911,'name':'舟山'},{'pid':123,'id':912,'name':'乌鲁木齐'},{'pid':123,'id':913,'name':'阿克苏'},{'pid':123,'id':914,'name':'阿勒泰'},{'pid':123,'id':915,'name':'阿图什'},{'pid':123,'id':916,'name':'博乐'},{'pid':123,'id':917,'name':'昌吉'},{'pid':123,'id':918,'name':'东山'},{'pid':123,'id':919,'name':'哈密'},{'pid':123,'id':920,'name':'和田'},{'pid':123,'id':921,'name':'喀什'},{'pid':123,'id':922,'name':'克拉玛依'},{'pid':123,'id':923,'name':'库车'},{'pid':123,'id':924,'name':'库尔勒'},{'pid':123,'id':925,'name':'奎屯'},{'pid':123,'id':926,'name':'石河子'},{'pid':123,'id':927,'name':'塔城'},{'pid':123,'id':928,'name':'吐鲁番'},{'pid':123,'id':929,'name':'伊宁'},{'pid':124,'id':930,'name':'呼和浩特'},{'pid':124,'id':931,'name':'阿拉善盟'},{'pid':124,'id':932,'name':'包头'},{'pid':124,'id':933,'name':'赤峰'},{'pid':124,'id':934,'name':'东胜'},{'pid':124,'id':935,'name':'海拉尔'},{'pid':124,'id':936,'name':'集宁'},{'pid':124,'id':937,'name':'临河'},{'pid':124,'id':938,'name':'通辽'},{'pid':124,'id':939,'name':'乌海'},{'pid':124,'id':940,'name':'乌兰浩特'},{'pid':124,'id':941,'name':'锡林浩特'},{'pid':125,'id':942,'name':'拉萨'},{'pid':125,'id':943,'name':'阿里'},{'pid':125,'id':944,'name':'昌都'},{'pid':125,'id':945,'name':'林芝'},{'pid':125,'id':946,'name':'那曲'},{'pid':125,'id':947,'name':'日喀则'},{'pid':125,'id':948,'name':'山南'},{'pid':126,'id':949,'name':'香港'},{'pid':126,'id':950,'name':'九龙'},{'pid':126,'id':951,'name':'新界'},{'pid':127,'id':952,'name':'澳门'},{'pid':128,'id':953,'name':'台北'},{'pid':128,'id':954,'name':'基隆'},{'pid':128,'id':955,'name':'台南'},{'pid':128,'id':956,'name':'台中'},{'pid':128,'id':957,'name':'高雄'},{'pid':128,'id':958,'name':'屏东'},{'pid':128,'id':959,'name':'南投'},{'pid':128,'id':960,'name':'云林'},{'pid':128,'id':961,'name':'新竹'},{'pid':128,'id':962,'name':'彰化'},{'pid':128,'id':963,'name':'苗栗'},{'pid':128,'id':964,'name':'嘉义'},{'pid':128,'id':965,'name':'花莲'},{'pid':128,'id':966,'name':'桃园'},{'pid':128,'id':967,'name':'宜兰'},{'pid':128,'id':968,'name':'台东'},{'pid':128,'id':969,'name':'金门'},{'pid':128,'id':970,'name':'马祖'},{'pid':128,'id':971,'name':'澎湖'},{'pid':129,'id':972,'name':'欧洲'},{'pid':129,'id':973,'name':'北美'},{'pid':129,'id':974,'name':'南美'},{'pid':129,'id':975,'name':'亚洲'},{'pid':129,'id':976,'name':'非洲'},{'pid':129,'id':977,'name':'大洋洲'}];