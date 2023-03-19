(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{483:function(t,s,r){t.exports=r.p+"assets/img/m02.6792b6cc.gif"},484:function(t,s,r){t.exports=r.p+"assets/img/m04.441d4e3b.gif"},485:function(t,s,r){t.exports=r.p+"assets/img/m05.4f58979c.gif"},503:function(t,s,r){"use strict";r.r(s);var v=r(4),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"导论："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导论："}},[t._v("#")]),t._v(" 导论：")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("p",[v("font",{attrs:{color:"red"}},[t._v("索引")]),t._v("是帮助MySql高效获取数据的"),v("font",{attrs:{color:"red"}},[t._v("经过排序")]),t._v("的"),v("font",{attrs:{color:"red"}},[t._v("数据结构")])],1)]),t._v(" "),v("li",[v("p",[t._v("索引存储在文件里,本质就是一个文件")])]),t._v(" "),v("li",[v("p",[t._v("索引结构")]),t._v(" "),v("ul",[v("li",[t._v("二叉树")]),t._v(" "),v("li",[t._v("红黑树")]),t._v(" "),v("li",[t._v("Hash")]),t._v(" "),v("li",[v("font",{attrs:{color:"red"}},[t._v("BTREE")])],1)])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("磁盘存储原理")])]),t._v(" "),v("ul",[v("li",[t._v("寻道时间（速度慢，费时）\n"),v("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRWTK.jpg"}})]),t._v(" "),v("li",[t._v("旋转时间，用于定位数据扇区（速度较快）\n"),v("img",{attrs:{src:r(483),alt:"示意动图"}})])])])]),t._v(" "),v("p",[t._v("以下图表结构为例")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYR4YD.jpg"}}),t._v(" "),v("h3",{attrs:{id:"二叉树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("p",[t._v("对这种有序的列如(id),二叉树模拟结构如下图\n"),v("img",{staticStyle:{zoom:"33%"},attrs:{src:r(484)}})])]),t._v(" "),v("li",[v("p",[t._v("可以明显看到，二叉树对这种有序列的IO操作次数=树的深度（树的深度不宜过高，否则IO次数过多，影响查找速度），因此二叉树做索引是有一定的缺陷的。")])])]),t._v(" "),v("h3",{attrs:{id:"红黑树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("p",[t._v("对以上数据做同样操作，模拟图如下")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:r(485)}})]),t._v(" "),v("li",[v("p",[t._v("通过红黑树的自选平衡后，IO次数=树的深度+1，但是树的深度较二叉树要低。")])]),t._v(" "),v("li",[v("p",[v("font",{attrs:{color:"red"}},[t._v("对于二叉树和红黑树做索引都有一个致命的缺点：")]),t._v("当表的数据达到百万千万级别时，"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("树的高度会无止境加深！！")])]),t._v("当我们要检索叶子节点时效率是十分低下的。")],1)])]),t._v(" "),v("h3",{attrs:{id:"hash"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" HASH")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("HASH索引即把索引的值做hash运算后做文件的地址，很明显这种做法对于"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("等值查找比较快")])]),t._v("（只需要对值进行一次hash运算就可以定位到文件地址）。但是对于"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("范围查找效率比较低")])]),t._v("（数据在磁盘中比较分散）。")],1)]),t._v(" "),v("p",[t._v("因此有了一个折中的数据结构也就是"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("常用的B-TREE")])])],1),t._v(" "),v("h3",{attrs:{id:"b-tree"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b-tree"}},[t._v("#")]),t._v(" B-TREE")]),t._v(" "),v("hr"),t._v(" "),v("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRRw6.jpg"}}),t._v(" "),v("ul",[v("li",[v("p",[t._v("度（Degree)：每个节点可以存储的最大数据个数。我理解的是为了控制"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("二叉树，红黑树无法控制数的纵向高度。因此从横向的角度，让每个节点存储更多的数据，从而降低树的高度。")])])],1)]),t._v(" "),v("li",[v("p",[t._v("每个叶节点具有相同的深度")])]),t._v(" "),v("li",[v("p",[t._v("叶节点的指针为空")])]),t._v(" "),v("li",[v("p",[t._v("叶节点的数据key从左至右依次递增")]),t._v(" "),v("p",[v("font",{attrs:{color:"red"}},[v("strong",[t._v("那如果把度设成100，1000不应该更能减少树的高度吗？")])]),t._v("\n实际上这是没有意义的操作，我们的程序和数据的交互首先去内存查找，如果内存找不到再去磁盘找。而内存和磁盘的交互是有限制的，一般都是"),v("strong",[t._v("页")]),t._v("的整数倍，即便我们将说有数据放到一个节点，但是我们的"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("内存和磁盘的IO交互次数并不会减少。")])])],1)])]),t._v(" "),v("p",[v("font",{attrs:{color:"red"}},[v("strong",[t._v("因此Mysql使用了B-TREE的变种数据结构:B+TREE")])])],1),t._v(" "),v("h3",{attrs:{id:"b-tree-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-2"}},[t._v("#")]),t._v(" B+TREE")]),t._v(" "),v("hr"),t._v(" "),v("img",{staticStyle:{zoom:"45%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYR2ex.jpg"}}),t._v(" "),v("ul",[v("li",[t._v("非叶子节点不存储数据，只存储key（索引值）。节点的占用空间小了，那么度可以变大。总之思想就是尽可能的在一页的大小中存储更多的数据。从而降低树的高度又减少IO的次数。")]),t._v(" "),v("li",[t._v("叶子节点不存储指针")]),t._v(" "),v("li",[t._v("顺序访问指针，提高区间检索的性能")])]),t._v(" "),v("h3",{attrs:{id:"存储引擎-表级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎-表级别"}},[t._v("#")]),t._v(" 存储引擎(表级别)")]),t._v(" "),v("h4",{attrs:{id:"myisam-非聚集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#myisam-非聚集"}},[t._v("#")]),t._v(" MyISAM(非聚集)")]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("MyISAM的主键索引")])]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRcO1.jpg"}}),t._v(" "),v("p",[v("strong",[t._v("MyISAM的非主键索引")])]),t._v(" "),v("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRhFO.jpg"}}),t._v(" "),v("ul",[v("li",[v("p",[t._v("MyISAM的索引文件和数据是分离开的")])]),t._v(" "),v("li",[v("p",[t._v("MyISAM的叶子节点不存储数据，存储文件的指针。索引和数据非聚集")])])]),t._v(" "),v("h4",{attrs:{id:"innodb-聚集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb-聚集"}},[t._v("#")]),t._v(" InnoDB(聚集)")]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("InnoDB的主键索引")])]),t._v(" "),v("img",{staticStyle:{zoom:"30%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYR5fe.jpg"}}),t._v(" "),v("p",[t._v("InnoDB的主键索引叶子节点存储的是整行的数据")]),t._v(" "),v("p",[v("strong",[t._v("InnoDB的非主键索引")])]),t._v(" "),v("p",[t._v("InnoDB的非主键索引"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("叶节点存储的是索引行的主键")])])],1),t._v(" "),v("p",[t._v("设计思想：")]),t._v(" "),v("p",[t._v("​\t避免重复维护数据，为了数据一致性而带来不必要的麻烦：如果主键索引和普通的索引都维护整行数据，这样需要考虑数据一致性的问题，同时浪费存储空间。")]),t._v(" "),v("p",[t._v("​\t"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("InnoDB的表数据文件本身就是按照B+Tree组织的一个索引文件，这也是为什么InnoDB一定要有主键。")])]),t._v("因此一定需要主键去维护。如果没有主键会自动选择一个不重复的列作为主键，实在没有这样的列也会自动生成一个主键列。")],1),t._v(" "),v("p",[t._v("​\t"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("同时InnoDB也推荐使用自增列作为主键:")])]),t._v("如果使用UUID作为主键，作为查询操作来说，我们需要对字符串转ASCII码做比较，而int类型不需要这个步骤。作为插入来说，UUID的插入不是连续的，很可能导致索引重排（叶子节点的分裂，移动等等）效率比较低。")],1),t._v(" "),v("h3",{attrs:{id:"联合索引的数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联合索引的数据结构"}},[t._v("#")]),t._v(" 联合索引的数据结构")]),t._v(" "),v("hr"),t._v(" "),v("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRoSH.jpg"}}),t._v(" "),v("p",[t._v("​\t比较大小的顺序结合索引最左前缀，先比较第一个，如果能比较出大小直接跳过后续比较寻找下一个节点。如果相同则比较第二个索引，依次类推。")]),t._v(" "),v("h2",{attrs:{id:"explain-执行计划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#explain-执行计划"}},[t._v("#")]),t._v(" EXPLAIN 执行计划")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("在开发阶段对SQL的调优一般我采用的是Explain和慢日志的方式去查看Mysql是如何处理我的sql语句，再针对性的做查询优化。那对Explain查询出的列做一个简单的归纳。")])]),t._v(" "),v("h3",{attrs:{id:"id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" ID")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("代表SQL的优先级，优先级越高，ID值越大。值相同从上往下优先级依次递增。ID为NULL的sql最后执行。")])]),t._v(" "),v("h3",{attrs:{id:"select-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#select-type"}},[t._v("#")]),t._v(" select_type")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("strong",[t._v("SUBQUERY")]),t._v("很显然代表的是一个子查询，-- "),v("strong",[t._v("PRIMARY")]),t._v("代表的是复杂查询("),v("strong",[t._v("最外层的复杂查询")]),t._v(")。")]),t._v(" "),v("li",[v("strong",[t._v("复杂查询")]),t._v("：简单子查询，"),v("strong",[t._v("DERIVED")]),t._v("派生表（from关键字后的子查询）,union查询。")])]),t._v(" "),v("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRTld.jpg"}}),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("union")]),t._v(":代表的是union后的一个查询语句")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("union result")]),t._v("：代表将union前后查询的结果集进行组装，等价于从union临时表检索结果的select")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYR76A.jpg",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("p",[t._v("这一列表示访问类型，效率从高到低可表示为：\nSystem>const>eq_ref>ref>range>index>ALL")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("NULL")]),t._v("：mysql能在优化阶段分解语句，执行的时候不需要再去访问表或者索引，如：在索引列中选取最小值，这种时候可以查找索引，不需要在执行时访问表。")]),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRHOI.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("SYSTEM,CONST")]),t._v("：mysql能把查询的某部分优化成一个常量，用主键索引和唯一索引的所有列和常量进行比较时，表最多只能"),v("strong",[t._v("匹配一条数据")]),t._v("，只需要读取一次。而CONST表示表里只有一条数据，是SYSTEM的特例")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("eq_ref")]),t._v("：主键索引或者唯一索引联合查询的时候，最多只有一行匹配数据。")]),t._v(" "),v("ul",[v("li",[v("img",{attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRqmt.jpg",alt:""}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("ref")]),t._v("：不使用唯一索引，走普通索引的查询，可能会匹配多条数据行")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("range")]),t._v("：范围查询出现在in()、between、>、<、>=等操作中。使用一个索引来检索给定范围的行。扫描的行数会比较多")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("index")]),t._v("：会扫描"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("全表索引")])]),t._v("，从索引中去查找需要的数据。从磁盘中读取。")],1)]),t._v(" "),v("li",[v("p",[v("strong",[t._v("ALL")]),t._v("：会进行"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("全表扫描")])]),t._v("，这种效率是最低的。从硬盘中读取。")],1)])]),t._v(" "),v("h3",{attrs:{id:"possible-keys"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#possible-keys"}},[t._v("#")]),t._v(" possible_keys")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("翻译过来就是查询可能会用到的索引")])]),t._v(" "),v("h3",{attrs:{id:"keys"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[t._v("#")]),t._v(" keys")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("代表查询一定会用到的索引列")])]),t._v(" "),v("h3",{attrs:{id:"key-len"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#key-len"}},[t._v("#")]),t._v(" key_len")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("p",[t._v("代表索引的长度")]),t._v(" "),v("ul",[v("li",[t._v("计算规则如下")])])])]),t._v(" "),v("div",{staticClass:"language-text line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("字符串\n\tchar(n):n字节长度\n\tvarchar(n):2字节存储字符串长度，如果是utf-8则长度为3n+2\n数值类型\n\ttinyint: 1字节\n\tsmallint: 2字节\n\tint: 4字节\n\tbigint: 8字节\n时间类型：\n\tdate: 3字节\n\ttimestamp: 4字节\n\tdatetime: 8字节\n如果字段允许为NULL，还额外需要一个字节来记录NULL\t\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br")])]),v("h3",{attrs:{id:"ref"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("这列显示了key列记录的索引中，表查找所用到的值或者常量：const(常量)，库名.表明.字段名（airlin.actor.id）")])]),t._v(" "),v("h3",{attrs:{id:"rows"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" rows")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("mysql估计要读取并检测到的行数，不是结果集的行数，只是个估计值，不会太准确。")])]),t._v(" "),v("h3",{attrs:{id:"extra"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#extra"}},[t._v("#")]),t._v(" Extra")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("这一列展示的是额外信息")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Using index")]),t._v("：覆盖索引，查询的字段包含在了索引里面。并且"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("Where筛选的条件是索引的前导列")])]),t._v("（联合索引的最左列），是sql性能高的表现。")],1),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRL0P.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Using Where")]),t._v("：查询的列未被索引覆盖，where查询条件非索引前导列。需要去磁盘做IO操作")]),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYROTf.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Using where Using index")]),t._v("：查询列被索引覆盖，并且"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("where筛选条件是索引列之一，但不是前导列")])]),t._v("，无法通过索引直接查询出需要的数据")],1),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s1.ax1x.com/2023/03/19/ppYRjk8.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("NULL")]),t._v("：查询条件未被索引全部覆盖，并且where筛选条件是索引的前导列，需要进行"),v("strong",[t._v("回表查询")]),t._v("。")]),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tvax4.sinaimg.cn/large/a15363dfgy1gzemo80v2vj21gg06gmyg.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Using index condition")]),t._v("：与Using Where类似，查询列未被索引覆盖，但是where的筛选条件是索引前导列的范围查询")]),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva3.sinaimg.cn/large/a15363dfgy1gzemoc13rrj21gg06gmyg.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Using Temporary")]),t._v("：mysql需要创建一张临时表来处理查询，这种情况一般是要进行优化的。")]),t._v(" "),v("ul",[v("li",[t._v("mysql中"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("distinct,group by,union,order by这种查询都会生成临时表")])]),t._v("，因此我们一般都需要给对应的查询字段加上索引，这样可以避免产生临时表。")],1),t._v(" "),v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tvax1.sinaimg.cn/large/a15363dfgy1gzemogdvxkj21c20680tp.jpg"}})])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Using filesort")]),t._v("：mysql会对结果使用一个外部索引排序，actor的name字段没有索引，因此查询出来后会对结果集有一次文件排序的过程。但是film表的name字段建了索引，而索引是一个"),v("font",{attrs:{color:"red"}},[v("strong",[t._v("排好序的数据结构")])]),t._v("，因此不会再有文件排序的问题。")],1),t._v(" "),v("ul",[v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tvax2.sinaimg.cn/large/a15363dfgy1gzemojvaykj21as06gq3w.jpg"}})]),t._v(" "),v("li",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tvax2.sinaimg.cn/large/a15363dfgy1gzemoohq20j21am06k0tq.jpg"}})])])])]),t._v(" "),v("h2",{attrs:{id:"sql规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sql规范"}},[t._v("#")]),t._v(" sql规范")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("全值匹配")]),t._v("：用到联合索引，尽量把联合索引匹配条件用全。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("最佳左前缀法则")]),t._v("：联合索引树的排序是根据索引的顺序进行比较的，因此一定要按照顺序使用索引。中间也不要断。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("不在索引列上做任何操作")]),t._v("（计算、函数、（自动or手动）类型转换），会导致"),v("strong",[t._v("索引失效，全表扫描")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("联合索引的排序是根据索引的全量值排序的，我们对他进行截取等操作后跟全量值的排序是没什么关系的。")])])]),t._v(" "),v("li",[v("p",[t._v("存储引擎"),v("strong",[t._v("不能使用索引中范围条件右边的列")])]),t._v(" "),v("ul",[v("li",[t._v("同样结合联合索引底层数据结构，我们对第二列做范围查询后，那么查询就需要将满足第二列范围查询的数据全部捞出来再匹配第三个索引，但是第三个索引就没有走BTREE的结构，因此导致范围查询列后的索引列不会走索引查询。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("尽量使用覆盖索引")]),t._v("，减少Select * 的操作")]),t._v(" "),v("ul",[v("li",[t._v("select * 会导致索引覆盖不到，需要进行回表IO操作。")])])]),t._v(" "),v("li",[v("p",[t._v("使用 != 或 <>的时候会导致索引失效")]),t._v(" "),v("ul",[v("li",[t._v("Btree的比较肯定是需要指定精确条件的，而通过不等于这种操作，没办法走Btree的查询。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("IS NULL和IS NOT NULL")]),t._v("没法走索引")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("LIKE")]),t._v("的"),v("strong",[t._v("前置匹配会导致索引失效")]),t._v("（like '%abc'）")]),t._v(" "),v("ul",[v("li",[t._v("Btree的排序是从前到后排序的，如果前置匹配（一个字符，多个字符），是没法走BTREE结构的。")]),t._v(" "),v("li",[v("font",{attrs:{color:"red"}},[v("strong",[t._v("解决：")])]),t._v("使用覆盖索引，让他从索引字段去查")],1),t._v(" "),v("li",[v("font",{attrs:{color:"red"}},[v("strong",[t._v("注意：")])]),t._v("当覆盖索引指向字段是varchar(380)及以上时，覆盖索引会失效。")],1)])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("字符串不加单引号索引失效")]),t._v("：")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("少用or,会导致索引失效：")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);