(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{232:function(a,t,r){"use strict";r.r(t);var e=r(4),s=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"hdfs的复制和实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hdfs的复制和实现原理","aria-hidden":"true"}},[a._v("#")]),a._v(" HDFS的复制和实现原理")]),a._v(" "),r("h2",{attrs:{id:"数据复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据复制","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据复制")]),a._v(" "),r("p",[a._v("HDFS被设计成能够在一个大集群中跨机器可靠地存储超大文件。它将每个文件存储成一系列的数据块，除了最后一个，所有的数据块都是同样大小的（Hadoop 1.x 默认每块数据块大小64M，Hadoop 2.x 和 Hadoop3.x 默认每块数据块的大小为128M）。为了容错，文件的所有数据块都会有副本。每个文件的数据块大小和副本系数都是可配置的。应用程序可以指定某个文件的副本数目。副本系数可以在文件创建的时候指定，也可以在之后改变。HDFS中的文件都是一次性写入的，并且严格要求在任何时候只能有一个写入者。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.willlu.cn/image/bigdata/hdfsdatanodes.gif",alt:"hdfsdatanodes"}})]),a._v(" "),r("p",[a._v("由于 Hadoop 被设计运行在廉价的机器上，这意味着硬件是不可靠的，为了保证容错性，HDFS 提供了数据复制机制。HDFS 将每一个文件存储为一系列"),r("strong",[a._v("块")]),a._v("，每个块由多个副本来保证容错，块的大小和复制因子可以自行配置（默认情况下，Hadoop 1.x 块大小是 64M, Hadoop 2.x|3.x 块大小是 128M，默认复制因子是 3）。")]),a._v(" "),r("h2",{attrs:{id:"数据复制的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据复制的实现原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据复制的实现原理")]),a._v(" "),r("p",[a._v("大型的 HDFS 实例在通常分布在多个机架的多台服务器上，不同机架上的两台服务器之间通过交换机进行通讯。在大多数情况下，同一机架中的服务器间的网络带宽大于不同机架中的服务器之间的带宽。因此 HDFS 采用机架感知副本放置策略，对于常见情况，当复制因子为 3 时，HDFS 的放置策略是：")]),a._v(" "),r("p",[a._v("也就是说将一个副本存放在本地机架的节点上，一个副本存放在同一个机架的另外一个节点上，最后一个副本存放在不同机架的节点上，这种策略可以减少机架之间的数据传输，从而提高了写的操作效率。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.willlu.cn/image/bigdata/hdfs-%E6%9C%BA%E6%9E%B6.png",alt:"hdfs-机架"}})]),a._v(" "),r("p",[a._v("如果复制因子大于 3，则随机确定第 4 个和之后副本的放置位置，同时保持每个机架的副本数量低于上限，上限值通常为 "),r("code",[a._v("（复制系数 - 1）/机架数量 + 2")]),a._v("，需要注意的是不允许同一个 "),r("code",[a._v("dataNode")]),a._v(" 上具有同一个块的多个副本。")]),a._v(" "),r("h2",{attrs:{id:"数据副本的选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据副本的选择","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据副本的选择")]),a._v(" "),r("p",[a._v("为了最大限度地减少带宽消耗和读取延迟，HDFS 在执行读取请求时，优先读取距离读取器最近的副本。如果在与读取器节点相同的机架上存在副本，则优先选择该副本。如果 HDFS 群集跨越多个数据中心，则优先选择本地数据中心上的副本。")]),a._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://hadoop.apache.org/docs/r2.10.0/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache Hadoop 2.10.0 > HDFS Architecture"),r("OutboundLink")],1)])])},[],!1,null,null,null);t.default=s.exports}}]);